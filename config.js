module.exports = {
  title: 'Natalie Ayuba',
  description:
    "Natalie Ayuba is a frontend developer and UI/UX designer who's all about crafting engaging user experiences.",
  url: 'https://natalieayuba.github.io',
  headerHeight: 80,
  darkMode: new Date().getHours() > 19 || new Date().getHours() < 6,
  colors: {
    blue: '#cee9eb',
    purple: '#976393',
    white: 'white',
    black: '#121212',
  },
  navLinks: ['Home', 'About', 'Projects', 'Playground'],
  socials: [
    {
      name: 'Github',
      url: 'https://github.com/natalieayuba',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/natalieayuba/',
    },
  ],
  projectLinks: [
    {
      name: 'Site',
      title: 'View live site',
    },
    {
      name: 'Code',
      title: 'View source code',
    },
    {
      name: 'Presentation',
      title: 'View presentation',
    },
    {
      name: 'Prototype',
      title: 'View prototype',
    },
  ],
  avatarFrames: [
    { src: '/images/robo-nat/robo-nat-eyes-open.svg', interval: 80 },
    { src: '/images/robo-nat/robo-nat-eyes-half-open.svg', interval: 30 },
    { src: '/images/robo-nat/robo-nat-eyes-half-closed.svg', interval: 30 },
    { src: '/images/robo-nat/robo-nat-eyes-closed.svg', interval: 60 },
    { src: '/images/robo-nat/robo-nat-eyes-half-closed.svg', interval: 30 },
    { src: '/images/robo-nat/robo-nat-eyes-half-open.svg', interval: 30 },
    { src: '/images/robo-nat/robo-nat-eyes-open.svg', interval: 250 },
    { src: '/images/robo-nat/robo-nat-eyes-half-open.svg', interval: 20 },
    { src: '/images/robo-nat/robo-nat-eyes-half-closed.svg', interval: 20 },
    { src: '/images/robo-nat/robo-nat-eyes-closed.svg', interval: 40 },
    { src: '/images/robo-nat/robo-nat-eyes-half-closed.svg', interval: 20 },
    { src: '/images/robo-nat/robo-nat-eyes-half-open.svg', interval: 20 },
    { src: '/images/robo-nat/robo-nat-eyes-open.svg', interval: 150 },
  ],
  underlines: {
    straight:
      'M6.74023 5.47959C11.8102 5.17959 16.8302 6.01959 21.9002 6.36959C27.7502 6.76959 34.3102 7.02959 39.4602 7.36959C50.7202 8.10959 61.9902 8.89959 73.2602 8.46959',
    lessStraight:
      'M6.2998 12.1508C7.0498 10.9108 15.7698 9.65084 17.3998 9.37084C25.2798 8.00084 32.9498 6.89084 40.7598 5.13084C51.3298 2.75084 62.8298 1.20084 73.6998 2.10084',
    wonky:
      'M1.5 6.46911C11.71 4.98911 26.84 -0.220894 35.68 5.64911C48.82 14.3691 64.98 10.4991 79.57 8.37911',
    veryWonky:
      'M7.3501 9.33977C10.8901 5.20977 19.1201 4.29977 22.2701 4.42977C28.4701 4.66977 36.5701 10.9998 42.3201 12.2098C44.3401 12.5698 49.0601 13.8898 56.3201 13.8598C63.4901 13.1398 69.5601 8.82977 72.6401 1.50977',
  },
  roles: {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    logoDesign: 'Logo Design',
    wireframing: 'Wireframing',
    prototyping: 'Prototyping',
    userResearch: 'User Research',
    serverlessComputing: 'Serverless Computing',
  },
  technologies: {
    react: 'React',
    javaScript: 'JavaScript',
    typeScript: 'TypeScript',
    express: 'Express',
    spotifyWebApi: 'Spotify Web API',
    reactNative: 'React Native',
    tailwindCSS: 'TailwindCSS',
    expo: 'Expo',
    netlify: 'Netlify',
    next: 'Next.js',
  },
};
