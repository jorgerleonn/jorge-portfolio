interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  modalImage?: string;
  techStack: string[];
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Flutter App',
    description: 'A mobile application built with Flutter for iOS and Android. Features modern UI and smooth animations.',
    image: '/images/Flutter tarjeta.png',
    modalImage: '/images/Flutter tarjeta.png',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/jorgerleonn/Flutter',
  },
  {
    id: 2,
    title: 'Python Projects',
    description: 'Various Python projects including automation scripts, data analysis, and machine learning examples.',
    image: '/images/Python tarjeta.png',
    modalImage: '/images/Python tarjeta.png',
    techStack: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/jorgerleonn/Python',
  },
  {
    id: 3,
    title: 'Next.js Portfolio',
    description: 'A modern portfolio website built with Next.js, TypeScript and Framer Motion. Fully responsive design with smooth animations.',
    image: '/images/Next js tarjeta.png',
    modalImage: '/images/Next js tarjeta.png',
    techStack: ['Next.js', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com/jorgerleonn/jorge-portfolio',
  },
  {
    id: 4,
    title: 'BRAINX UAV',
    description: 'Design and development of an autonomous UAV for aerial surveillance and monitoring missions. Featuring advanced flight control systems and real-time data transmission.',
    image: '/images/UAV design project.png',
    modalImage: '/images/UAV design project.png',
    techStack: ['Aerodynamics', 'Flight Control', 'PID', 'Embedded Systems'],
    github: '',
  },
];