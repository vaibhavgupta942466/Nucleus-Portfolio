// src/constants/index.js
import { generateCalendarLink } from '@/utils'

export const scriptText = `
C:\\Users\\nucleus> .code
C:\\Users\\nucleus> npx nucleus-creator-portfolio
C:\\Users\\nucleus> cd nucleus-creator-portfolio
C:\\Users\\nucleus\\nucleus-creator-portfolio> npm install
C:\\Users\\nucleus\\nucleus-creator-portfolio> npm run dev
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
