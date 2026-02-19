import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VersionCheck = () => {
    const [updateAvailable, setUpdateAvailable] = useState(false);
    const [lastInteraction, setLastInteraction] = useState(Date.now());
    const [isNotificationVisible, setIsNotificationVisible] = useState(true);

    // Track user activity
    useEffect(() => {
        const handleInteraction = () => setLastInteraction(Date.now());

        window.addEventListener('mousemove', handleInteraction);
        window.addEventListener('keydown', handleInteraction);
        window.addEventListener('scroll', handleInteraction);
        window.addEventListener('click', handleInteraction);

        return () => {
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('click', handleInteraction);
        };
    }, []);

    const checkVersion = useCallback(async () => {
        try {
            // Add cache-busting param to ensure we get the latest version.json
            const response = await fetch(`/version.json?t=${Date.now()}`);
            const data = await response.json();

            // __APP_VERSION__ is injected by Vite config
            const serverVersion = data.timestamp;
            const localVersion = __APP_VERSION__;

            if (serverVersion && localVersion && serverVersion !== localVersion) {
                const inactiveTime = Date.now() - lastInteraction;

                // If user has been inactive for more than 30 seconds, auto-refresh
                // This handles users who just opened the browser or have it in a background tab
                if (inactiveTime > 30000) {
                    console.log('Update detected with inactivity, auto-refreshing...');
                    window.location.reload();
                } else {
                    // Otherwise show the professional notification
                    setUpdateAvailable(true);
                }
            }
        } catch (error) {
            console.error('Failed to check for updates:', error);
        }
    }, [lastInteraction]);

    useEffect(() => {
        // Initial check
        checkVersion();

        // Check every 5 minutes
        const interval = setInterval(checkVersion, 300000);
        return () => clearInterval(interval);
    }, [checkVersion]);

    const handleUpdate = () => {
        setIsNotificationVisible(false);
        setUpdateAvailable(false);
        window.location.reload(true); // true is deprecated but some browsers still respect it for hard reload
    };

    return (
        <AnimatePresence>
            {updateAvailable && isNotificationVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="update-notification"
                >
                    <div className="update-content">
                        <div className="update-icon">
                            <RefreshCw size={18} className="spin-slow" />
                        </div>
                        <p>Updates have been applied to the Eximp & Cloves platform.</p>
                        <button onClick={handleUpdate} className="update-btn">
                            Click to Upgrade
                        </button>
                        <button
                            className="update-close"
                            onClick={() => setIsNotificationVisible(false)}
                            aria-label="Dismiss"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default VersionCheck;
