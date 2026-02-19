export const propertiesData = {
    "coinfield": {
        id: 1,
        slug: "coinfield",
        title: "Coinfield Estate",
        location: "Epe, Lagos",
        state: "Lagos",
        price: "From ₦5,500,000",
        status: "Price Alert",
        tags: ["Tiled Road", "Dry Land", "Gated Estate", "300/500 SQM"],
        image: "/assets/coinfield_flyer_main.png",
        videoUrl: "/assets/coinfield tour.mp4",
        droneVideoUrl: "/assets/drone_coinfield.mp4",
        description: "Coinfield Estate offers a unique opportunity to own a piece of Epe's rapidly developing landscape. Strategically located near major landmarks, it's perfect for both residential and investment purposes.",
        developer: "Eximp & Cloves Infrastructure Limited",
        landmarks: [
            "Epe Resort and Spa",
            "St. Augustine University",
            "Alaro City",
            "Epe Logistics Hub",
            "Epe Marina Project",
            "Epe Recreation Centre"
        ],
        faq: [
            { question: "What is the title of the property?", answer: "It is C of O in view" },
            { question: "Who are the developers of Coinfield estate?", answer: "Developed by Eximp & Cloves Infrastructure Limited" },
            { question: "Where is Coinfield located?", answer: "Epe, Lagos state" },
            { question: "How can I schedule a visit to Coinfield estate?", answer: "You can schedule a visit through our website at https://eximpclove.com or by contacting our sales team directly." },
            { question: "How can I stay updated on the progress of Coinfield estate?", answer: "By following us on social media (Eximp & Cloves) across all our social media platforms, signing up for our newsletters, attending our webinars, and joining our community." },
            { question: "Are there any encumbrances on the land?", answer: "The land is free from government acquisition, adverse claim, or any other type of encumbrance." },
            { question: "Is there any time to commence work on my land after allocation?", answer: "No, there is no time limit to commence work on your plot." },
            { question: "What document would I get after making an initial deposit?", answer: "Payment receipt, acknowledgment letter, and contract of sale of land." },
            { question: "Which account should payment be made into?", answer: "Bank: Providus Bank | Account number: 1308184591 | Account name: Eximp & Cloves Infrastructure Limited" }
        ]
    },
    "prime-circle": {
        id: 2,
        slug: "prime-circle",
        title: "Prime Circle Estate",
        location: "Kaida Layout, Gwagwalada Abuja",
        state: "Abuja",
        price: "Sold Out",
        status: "Sold Out",
        tags: ["200/300/500 SQM", "Dry Land", "Min Deposit: ₦750K"],
        image: "/assets/prime_circle_flyer_main.png",
        description: "A prestigious development in the heart of Gwagwalada, Abuja. Prime Circle Estate offered an ideal balance of city access and peaceful living, now successfully sold out to early investors.",
        landmarks: ["Kaida Layout", "University of Abuja", "Gwagwalada Central"],
        faq: []
    },
    "conrad-residence": {
        id: 3,
        slug: "conrad-residence",
        title: "Conrad Residence",
        location: "Zuba, Abuja",
        state: "Abuja",
        price: "₦6,000,000",
        status: "Premium",
        tags: ["400 SQM", "Instant Allocation", "Min Deposit: ₦2M"],
        image: "/assets/conrad_residence_flyer_main.png",
        description: "Conrad Residence offers premium living in Zuba, Abuja. With instant allocation and strategic positioning, it's a perfect choice for those ready to start building their dream home immediately.",
        landmarks: ["Zuba Interchange", "International Market", "Lokoja-Abuja Expressway"],
        faq: []
    },
    "baclay-estate": {
        id: 4,
        slug: "baclay-estate",
        title: "Baclay Estate",
        location: "Agbowa-Ikorodu, Ogun State",
        state: "Ogun",
        price: "₦3,500,000",
        status: "New Launch",
        tags: ["Dry Land", "500 SQM", "Min Deposit: ₦500K"],
        image: "/assets/baclay_flyer_main.png",
        description: "Baclay Estate, located in the Agbowa-Ikorodu corridor, is a promising new launch. It offers affordable dry land with excellent appreciation potential as the city expands outward.",
        landmarks: [
            "Caleb University (10 mins)",
            "Agbowa-Ikorodu Road",
            "Lagos-Ogun Buffer Zone"
        ],
        paymentPlans: [
            { name: "3 Months (3% Interest)", total: "₦3,675,000", deposit: "₦1,000,000", monthly: "₦891,667" },
            { name: "6 Months (5% Interest)", total: "₦4,025,000", deposit: "₦500,000", monthly: "₦587,500" },
            { name: "12 Months (10% Interest)", total: "₦4,200,000", deposit: "₦250,000", monthly: "₦329,167" }
        ],
        faq: []
    }
};

console.log('Properties data initialized:', Object.keys(propertiesData));
export const propertiesArray = Object.values(propertiesData);
