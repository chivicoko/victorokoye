
// export const leads = [
//     { id: 1, name: "Winfor Asher", topic: 'Cafe A100 for commercial use', statusReason: 'New', createdOn: '2/01/2024 1:00 PM' },
//     { id: 2, name: "Josia Love", topic: 'Upgrading service plan', statusReason: 'New', createdOn: '4/02/2024 12:00 PM' },
//     { id: 3, name: "Harrison Curtis", topic: 'Issue with throughput on EspressoMaster', statusReason: 'New', createdOn: '22/02/2024 11:00 PM' },
//     { id: 4, name: "Jermaine Berrett", topic: 'New roaster in distribution facility', statusReason: 'New', createdOn: '4/03/2024 12:00 PM' },
//     { id: 5, name: "Gerald Stephens", topic: 'Concerns on current machines', statusReason: 'New', createdOn: '4/04/2024 12:40 PM' },
//     { id: 6, name: "Halle Griffiths", topic: 'Expanding business', statusReason: 'New', createdOn: '14/05/2024 10:25 PM' },
//     { id: 7, name: "Rachel Michael", topic: 'Addressing service concerns', statusReason: 'New', createdOn: '21/03/2024 12:00 AM' },
//     { id: 8, name: "Alex Baker", topic: 'Premium coffee beans', statusReason: 'New', createdOn: '24/01/2024 2:15 AM' },
//     { id: 9, name: "Lily Pyles", topic: 'Cafe A100 bulk rate', statusReason: 'New', createdOn: '6/06/2024 9:00 AM' },
//     { id: 10, name: "Jane Reyes", topic: 'Improving cost per cup', statusReason: 'New', createdOn: '4/07/2024 12:00 PM' },
//     { id: 11, name: "Mike Pears", topic: 'Improving cost per spoon', statusReason: 'New', createdOn: '5/07/2024 1:00 PM' },
// ]

export const skills = [
    {
        id: 1,
        name: "Frontend",
        stack: [
            { id: 1, name: "html", img: '/images/skills/htmlIcon.jpeg', },
            { id: 2, name: "css", img: '/images/skills/cssIcon.png', },
            { id: 3, name: "js", img: '/images/skills/jsIcon.png', },
            { id: 4, name: "ts", img: '/images/skills/tsIcon.png', },
            { id: 5, name: "react.js", img: '/images/skills/reactjsIcon.png', },
            { id: 6, name: "vue.js", img: '/images/skills/vuejsIcon.png', },
            { id: 7, name: "tailwindcss", img: '/images/skills/tailwindIcon.png', },
            { id: 8, name: "sass", img: '/images/skills/sassIcon.jpeg', },
            { id: 9, name: "bootstrap", img: '/images/skills/bootstrapIcon.jpeg', },
        ],
    },
    {
        id: 2,
        name: "Backend",
        stack: [
            { id: 1, name: "js", img: '/images/skills/jsIcon.png', },
            { id: 2, name: "ts", img: '/images/skills/tsIcon.png', },
            { id: 3, name: "next.js", img: '/images/skills/nextjsIcon.png', },
            { id: 4, name: "python", img: '/images/skills/pythonIcon.png', },
            { id: 5, name: "django", img: '/images/skills/djangoIcon.png', },
        ],
    },
    {
        id: 3,
        name: "Version Control",
        stack: [
            { id: 1, name: "github", img: '/images/skills/githubIcon.jpeg', },
            { id: 1, name: "docker", img: '/images/skills/dockerIcon.png', },
        ],
    },
]

export const projects = [
    { 
        id: 1,
        name: 'GreenBasket',
        description: 'This is a grocery store application that makes life easy for all its users. Fully responsive and interactive.',
        img: "/images/greenbasket/greenbasket-1.png",
        githubLink: 'https://github.com/chivicoko/greenbasket',
        liveDemoLink: 'javascript:void(0);',
        techStack: 'NextJs, Typescript, TailwindCSS, MUI, MongoDB',
        otherImages: [
            { id: 1, img: "/images/greenbasket/greenbasket-1.png" },
            { id: 2, img: "/images/greenbasket/greenbasket-2.png" },
            { id: 3, img: "/images/greenbasket/greenbasket-3.png" },
            { id: 4, img: "/images/greenbasket/greenbasket-4.png" },
            { id: 5, img: "/images/greenbasket/greenbasket-5.png" },
            { id: 6, img: "/images/greenbasket/greenbasket-6.png" },
            { id: 7, img: "/images/greenbasket/greenbasket-7.png" },
            { id: 8, img: "/images/greenbasket/greenbasket-8.png" },
            { id: 9, img: "/images/greenbasket/greenbasket-9.png" },
        ]
    },
    { 
        id: 2,
        name: 'Maneja',
        description: "This is a project management app that makes life easy for users. It's built using python/django/django rest framework for the backend, and ReactJs/Vite/Tailwindcss for the frontend. Its Kanban drag-and-drop feature, display options, and immediate reactivity for every data makes work very easy and time saving for users. It's very intuitive and seamless to use.",
        img: "/images/maneja/maneja-1.png",
        githubLink: 'https://github.com/chivicoko/maneja',
        liveDemoLink: 'javascript:void(0);',
        techStack: 'ReactJs/vite, Typescript, TailwindCSS, MUI / Python, Django, Django Rest Framework',
        otherImages: [
            { id: 1, img: "/images/maneja/maneja-1.png" },
            { id: 2, img: "/images/maneja/maneja-2.png" },
            { id: 3, img: "/images/maneja/maneja-3.png" },
            { id: 4, img: "/images/maneja/maneja-4.png" },
            { id: 5, img: "/images/maneja/maneja-5.png" },
            { id: 6, img: "/images/maneja/maneja-6.png" },
            { id: 7, img: "/images/maneja/maneja-7.png" },
            { id: 8, img: "/images/maneja/maneja-8.png" },
        ]
    },
    { 
        id: 3,
        name: 'Ektromart',
        description: 'This is a chat application.',
        img: "/images/ektromart/ektromart-1.png",
        githubLink: 'https://github.com/chivicoko/ektromart',
        liveDemoLink: 'https://ektromart.vercel.app/',
        techStack: 'NextJs, Typescript, TailwindCSS, MUI',
        otherImages: [
            { id: 1, img: "/images/ektromart/ektromart-1.png" },
            { id: 2, img: "/images/ektromart/ektromart-2.png" },
            { id: 3, img: "/images/ektromart/ektromart-3.png" },
            { id: 4, img: "/images/ektromart/ektromart-4.png" },
            { id: 5, img: "/images/ektromart/ektromart-5.png" },
            { id: 6, img: "/images/ektromart/ektromart-6.png" },
            { id: 7, img: "/images/ektromart/ektromart-7.png" },
            { id: 8, img: "/images/ektromart/ektromart-8.png" },
            { id: 9, img: "/images/ektromart/ektromart-9.png" },
            { id: 10, img: "/images/ektromart/ektromart-10.png" },
            { id: 11, img: "/images/ektromart/ektromart-11.png" },
        ]
    },
    { 
        id: 4,
        name: 'Scrutz',
        description: 'This is a campaign management application.',
        img: "/images/scrutz/scrutz-1.png",
        githubLink: 'https://github.com/chivicoko/scrutz',
        liveDemoLink: 'https://scrutz-swart.vercel.app/',
        techStack: 'NextJs, Typescript, TailwindCSS, MUI, clerk, MongoDB',
        otherImages: [
            { id: 1, img: "/images/scrutz/scrutz-1.png" },
            { id: 2, img: "/images/scrutz/scrutz-2.png" },
            { id: 3, img: "/images/scrutz/scrutz-3.png" },
            { id: 4, img: "/images/scrutz/scrutz-4.png" },
            { id: 5, img: "/images/scrutz/scrutz-5.png" },
            { id: 6, img: "/images/scrutz/scrutz-6.png" },
        ]
    },
    { 
        id: 5,
        name: 'E-Learnr',
        description: 'This is an educational/teaching platform.',
        img: "/images/e-learnr/e-learnr-1.png",
        githubLink: 'https://github.com/chivicoko/e-learnr',
        liveDemoLink: 'javascript:void(0);',
        techStack: 'VueJs, Typescript, Pinia, TailwindCSS, Primeicons',
        otherImages: [
            { id: 1, img: "/images/e-learnr/e-learnr-1.png" },
            { id: 2, img: "/images/e-learnr/e-learnr-2.png" },
            { id: 3, img: "/images/e-learnr/e-learnr-3.png" },
            { id: 4, img: "/images/e-learnr/e-learnr-4.png" },
        ]
    },
    { 
        id: 6,
        name: 'tSup-chat',
        description: 'This is a chat application.',
        img: "/images/tsup-chat/tSup-chat-1.png",
        githubLink: 'https://github.com/chivicoko/tSup-chat',
        liveDemoLink: 'https://tsup-chat.vercel.app/',
        techStack: 'React.js, TailwindCSS, MUI, Firebase, Zustand',
        otherImages: [
            { id: 1, img: "/images/tsup-chat/tSup-chat-1.png" },
            { id: 2, img: "/images/tsup-chat/tSup-chat-2.png" },
            { id: 3, img: "/images/tsup-chat/tSup-chat-3.png" },
        ]
    },
    { 
        id: 7,
        name: 'Sweettooth Mini Store',
        description: 'This is a chat application.',
        img: "/images/sweettooth/sweettooth-1.png",
        githubLink: 'https://github.com/chivicoko/sweettooth',
        liveDemoLink: 'https://sweettooth-steel.vercel.app/',
        techStack: 'ReactJS, Typescript, Vite, SASS, MUI, Timbu Cloud API',
        otherImages: [
            { id: 1, img: "/images/sweettooth/sweettooth-1.png" },
            { id: 2, img: "/images/sweettooth/sweettooth-2.png" },
            { id: 3, img: "/images/sweettooth/sweettooth-3.png" },
            { id: 4, img: "/images/sweettooth/sweettooth-4.png" },
            { id: 5, img: "/images/sweettooth/sweettooth-5.png" },
            { id: 6, img: "/images/sweettooth/sweettooth-6.png" },
            { id: 7, img: "/images/sweettooth/sweettooth-7.png" },
            { id: 8, img: "/images/sweettooth/sweettooth-8.png" },
            { id: 9, img: "/images/sweettooth/sweettooth-9.png" },
            { id: 10, img: "/images/sweettooth/sweettooth-10.png" },
            { id: 11, img: "/images/sweettooth/sweettooth-11.png" },
        ]
    },
]

export const experiences = [
    {
        id: 1,
        company: 'Australian Contract',
        position: 'Full-stack Developer',
        duration: 'April - July 2024',
        note: "This is an Australia-based contract in which I did mostly web scraping, managing and updating the company's private web/desktop application which scrapes data from different online platforms and stores them in the company's platform. I worked as a solo developer using Python, PyQT, Pyppeteer, BeautifulSoup, developing and updating the platform as needed.",
        verifyLink: ""
    },
    {
        id: 2,
        company: 'Premium ESOWP Limited, Awka, Nigeria',
        position: 'Full-stack Developer',
        duration: 'May 2023 - April 2024',
        note: "Worked as a full-stack developer, mainly on the frontend side. Collaborated with the UI/UX/graphics guys and the backend guys to always satisfy our clients' needs. I and the teams developed websites for different schools and businesses to help automate most of their operations. I worked with HTML, CSS, JavaScript, jQuery, Bootstrap, React.js, PHP and Python as needed, while developing on the job as well.",
        verifyLink: ""
    },
    {
        id: 3,
        company: 'Rexit Management',
        position: 'Solo Full-stack App Development',
        duration: 'February 2022 - April 2022',
        note: "Built a finance management application for an individual who was having issues managing his business. He needed assistance with the management of the business, monitoring all the activities that goes on in the business, and investing the income. His business consistently grew by about 5% every month of judicious use of the app. The stack I used is React.js/Node.js/Express.js/Redux/MongoDB .",
        verifyLink: ""
    },
    {
        id: 4,
        company: 'Dufuna CC, Ibadan, Nigeria',
        position: 'Fullstack Web Developer (Intern)',
        duration: 'July 2022 - January 2023',
        note: "Received 4 months practical training and mentorship on software development using Javascript, PHP, CSS, HTML, React, Slim, Eloquent. Built a full stack shopping application with CSS, HTML and PHP. Built a fully responsive and functional customer service app using React, HTML, CSS and Bootstrap. Built a fully responsive music app using MERN stack and Rapid API.",
        verifyLink: "/Dufuna Milestone Certificate.pdf"
    },
    {
        id: 5,
        company: 'University of Michigan',
        position: 'Python Developer Trainee (Online Training)',
        duration: 'April 2020 - October 2020',
        note: "Received 6 months intensive hands-on training on the Basics and Rudiments of Python programming language, in the Coursera platform. Successfully built a full blog app using Python and Django.",
        verifyLink: "https://www.coursera.org/account/accomplishments/specialization/LVRJ8P6UMU25"
    },
];
