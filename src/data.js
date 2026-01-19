import { Code2, Server, Database, Brain, Globe, Shield, Terminal, MessageSquare } from 'lucide-react';

export const personalInfo = {
    name: "Mukul Anand",
    role: "MERN Stack Developer",
    image: "/profile.jpg",
    description: "Entry-level MERN stack web developer with hands-on experience building full-stack applications, responsive UIs, and integrating APIs. Passionate about creating clean, efficient code and collaborating with teams.",
    email: "kumarmukul70946@gmail.com",
    phone: "+91-9102774718",
    github: "https://github.com/kumarmukul70946-cmyk",
    linkedin: "https://www.linkedin.com/in/mukul-anand-7912a6248",
    stats: [
        { label: "Placement Ready", value: "2026" },
        { label: "Code Quality", value: "A+" },
        { label: "Tech Stack", value: "MERN" },
        { label: "Availability", value: "Internship" }
    ],
    tagline: "Building digital experiences that combine backend logic with pixel-perfect design.",
    education: [
        {
            institution: "Parul University, Vadodara",
            degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
            duration: "2022 – 2026"
        },
        {
            institution: "Uchh Vidyalaya Dumrakart Sitamarhi",
            degree: "12th Grade (BBOSE)",
            duration: "2022"
        }
    ]
};

export const skills = [
    {
        category: "Frontend",
        items: [
            { name: "HTML", iconId: "html" },
            { name: "CSS", iconId: "css" },
            { name: "JavaScript", iconId: "js" },
            { name: "React.js", iconId: "react" }
        ],
        icon: Globe
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", iconId: "nodejs" },
            { name: "REST APIs", iconId: "postman" }
        ],
        icon: Server
    },
    {
        category: "Database & Tools",
        items: [
            { name: "MongoDB", iconId: "mongodb" },
            { name: "SQL", iconId: "mysql" },
            { name: "Git/GitHub", iconId: "git" }
        ],
        icon: Database
    }
];

export const projects = [
    {
        title: "SmartHub – Interior Design Platform",
        tags: ["React", "Node.js", "MongoDB", "Git"],
        description: "Developed responsive user interfaces using HTML, CSS, and React.js. Integrated frontend components with Node.js backend logic. Applied cybersecurity practices for secure data handling. Collaborated in a 4-member team using GitHub.",
        icon: Code2,
        link: "https://arad2007.github.io/smartdecor/",
        image: "/projects/smarthub.png"
    },
    {
        title: "MedicalHub – AI Chatbot",
        tags: ["Next.js", "React", "Node.js", "MongoDB", "Python"],
        description: "Built a full-stack medical service web application using Next.js. Designed and implemented an AI-powered chatbot for patient queries. Developed backend API endpoints (/api/chat). Created a clean and responsive chat interface using React.js.",
        icon: Brain,
        link: "https://medicalhub-kappa.vercel.app/",
        image: "/projects/medicalhub.png"
    }
];

export const certifications = [
    {
        title: "AWS CloudVerse (2025)",
        link: "https://drive.google.com/file/d/10uLbNcUzQqhm4lXrKbxGx3M_CPXQ12XP/view"
    },
    {
        title: "Introduction to Internet of Things",
        link: "https://drive.google.com/file/d/10EimDXpTGF7Pb3yzBTL7_L8GnLKefc_J/view"
    }
];

export const achievements = [
    {
        title: "PU Hackathon 2.0",
        link: "https://drive.google.com/file/d/1HZiCXVYvEMUxWRphlmEaT2Fh8AazXMQj/view"
    }
];


