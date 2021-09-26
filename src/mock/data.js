import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Cesar Osorio',
  subtitle: 'Back-End Developer, making simple code.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Nice to meet you.",
  paragraphTwo: "I am an Innovative professional driven by my passion and creativity, with 5+ years of experience in web design and development. Equipped with a record of success in consistently identifying and providing the technological needs of companies through innovation. Proficient in developing databases, writing and testing codes, troubleshooting simple / complex issues, and implementing new features.",
  paragraphThree: 'I am currently studying a Masters in Cloud Computing in Australia, very excited to complement my knowledge in programming with the whole world of cloud computing. ',
  resume: 'https://www.linkedin.com/in/john-cesar-osorio-web-developer-3b817568/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'api.png',
    title: 'Laravel API using Laravel / Passport',
    info: 'Laravel Passport provides a full OAuth2 server implementation for your Laravel application in a matter of minutes. Passport is built on top of the League OAuth2 server.',
    info2: '',
    url: 'https://github.com/cesarol8/vetcheck',
    repo: 'https://github.com/cesarol8/vetcheck', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'monsters.png',
    title: 'React Monster project - Online Course.',
    info: 'Short introductory course to react.',
    info2: '',
    url: 'https://serviinfoweb.github.io/monsters-rolodex/',
    repo: 'https://github.com/serviinfoweb/monsters-rolodex/tree/master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'shop.png',
    title: 'React Project Online Store.',
    info: 'Project in react for  online shop - Online Course',
    info2: '',
    url: '',
    repo: 'https://github.com/serviinfoweb/crwn-clothing', // if no repo, the button will not show up
  },
];

// SKILLS DATA
export const skillsData = [
  {
    id: 1,   
    title: 'Back - End',
    detail: [
      {
        info:'PHP',
        progress: '70'
      },
      {
        info:'LARAVEL',
        progress: '60'
      },
      {
        info:'SQL',
        progress: '70'
      },
      {
        info:'Postgres',
         progress: '70'
      },
      {
        info:'MySQL',
         progress: '70'
      },
      {
        info:'Firebase',
        progress: '40'
      },
    ]
    
  },    
  {
    id: 2,
    title: 'Front - End',
    detail: [
      {
        info:'Javascript',
        progress: '50'
      },
      {
        info:'HTML',
        progress: '80'
      },
      {
        info:'CSS',
        progress: '40'
      },
      {
        info:'Bootstrap',
        progress: '40'
      },
      {
        info:'React JS',
        progress: '30'
      },      
    ]
    
  },
  {
    id: 3,
    title: 'Tools',
    detail: [
      {
        info:'Git',
      },
      {
        info:'Postman',
      },
      {
        info:'Slack',
      },
      {
        info:'Github',
      },
      {
        info:'Bitbucket',
      },
      {
        info:'Trello',
      },      
    ]
    
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/cesarol8',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/john-cesar-osorio-web-developer-3b817568/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cesarol8',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
