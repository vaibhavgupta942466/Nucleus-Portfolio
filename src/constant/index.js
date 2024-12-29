// src/constants/index.js
import { generateCalendarLink } from '@/utils'

export const services = [
  {
    title: 'Web Development',
    description:
      'Building modern, responsive applications with React.js and Vue.js, integrating robust backend systems for scalable and dynamic web solutions.',
    icon: '/image/web-development.svg',
  },
  {
    title: 'App Development',
    description:
      'Developing cross-platform mobile and web App using Flutter, delivering custom solutions that streamline business operations & enhance user engagement.',
    icon: '/image/app-development.svg',
  },
  {
    title: 'Process Automation & Integration',
    description:
      'Automating workflows through n8n, Make.com, and custom integrations to eliminate manual tasks and boost operational efficiency.',
    icon: '/image/automation.svg',
  },
  {
    title: 'Cloud Solutions & Architecture',
    description:
      'Implementing serverless architecture and containerized services on GCP and AWS, ensuring scalable and resilient cloud infrastructure.',
    icon: '/image/cloud-solution.svg',
  },
  {
    title: 'AI & Machine Learning Integration',
    description:
      'Implementing custom AI solutions using OpenAI, Document AI, and RASA frameworks to automate interactions and enhance business intelligence.',
    icon: '/image/ai-ml.svg',
  },
  {
    title: 'Data Management & Integration',
    description:
      'Creating unified data ecosystems with secure pipelines and ETL processes to ensure seamless data flow and accessibility across organizations.',
    icon: '/image/management.svg',
  },
  {
    title: 'Digital Workspace Solutions (SMART)',
    description:
      'Designing efficient knowledge management systems with Notion and Evernote, implementing second brain methodologies for enhanced team collaboration.',
    icon: '/image/workspace.svg',
  },
  {
    title: 'Business Operations & Analytics',
    description:
      'Transforming business data into actionable insights through Google Looker Studio dashboards, optimizing processes and driving data-informed decisions.',
    icon: '/image/business-operation.svg',
  },
]

export const clientImages = [
  { src: '/image/clients/byte-law.svg', alt: 'ByteLaw' },
  { src: '/image/clients/carsify.svg', alt: 'Carsify' },
  { src: '/image/clients/persistent.png', alt: 'Persistance' },
  { src: '/image/clients/very-mulberry.svg', alt: 'Very Mulberry' },
  { src: '/image/clients/superior-stay.svg', alt: 'Superior Stay' },
  { src: '/image/clients/neelyx-lab.png', alt: 'Neeylax' },
  { src: '/image/clients/trusted-communities.svg', alt: 'Trusted Communities' },
]

export const scriptText = `
nucleus@root:~$ .code
nucleus@root:~$ npx nucleus-creator-portfolio
nucleus@root:~$ cd nucleus-creator-portfolio
nucleus@root:/nucleus-creator-portfolio$ npm install
nucleus@root:/nucleus-creator-portfolio$ npm run dev
`
export const typingSpeed = 25

export const socialLinks = [
  {
    url: 'https://www.linkedin.com/in/vaibhav-gupta-devai/',
    icon: '/image/linkedin.svg',
  },
  {
    url: 'https://www.instagram.com/vg._nucleus/',
    icon: '/image/instagram.svg',
  },
  {
    url: 'https://github.com/vaibhavgupta942466',
    icon: '/image/github.svg',
  },
  {
    url: 'https://twitter.com/Vaibhav94246689',
    icon: '/image/x-twitterx.svg',
  },
]

export const contactInfo = [
  {
    title: 'Phone',
    value: '+91 7770957317',
    icon: '/image/mobile.svg',
    link: 'tel:+917770957317',
  },
  {
    title: 'Email',
    value: 'vaibhavgupta942466@gmail.com',
    icon: '/image/email.svg',
    link: 'mailto:vaibhavgupta942466@gmail.com',
  },
  {
    title: 'Location',
    value: 'Sirmour Rewa, India',
    icon: '/image/location.svg',
    link: 'https://maps.app.goo.gl/7vmL484Tuzs6U4ex8',
  },
  {
    title: 'Date of Birth',
    value: '23-04-2000',
    icon: '/image/calender.svg',
    link: generateCalendarLink(),
  },
]
