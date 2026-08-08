interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  page?: string;
  category: 'software' | 'aeroespacial';
  status?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'BRAINX UAV',
    description: 'UAV autónomo de ala fija — Clase C4. Perfil Selig 1223, 2.2 m de envergadura, sistema de control de vuelo propio. Diseño y desarrollo independiente desde cero.',
    techStack: ['Aerodinámica', 'Control de Vuelo', 'PID', 'Sistemas Embebidos'],
    github: '',
    page: '/projects/uav',
    category: 'aeroespacial',
    status: 'En desarrollo',
  },
  {
    id: 2,
    title: 'FavSupply',
    description: 'Plataforma web de suministros y recursos. Desarrollo completo del frontend y la experiencia de usuario con diseño moderno y funcional.',
    techStack: ['React', 'TypeScript', 'CSS3'],
    github: '',
    page: 'https://favsupply.com/',
    category: 'software',
  },
  {
    id: 3,
    title: 'Portfolio Next.js',
    description: 'Portfolio web moderno construido con Next.js, TypeScript y Framer Motion. Diseño responsive con identidad visual propia.',
    techStack: ['Next.js', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com/jorgerleonn/jorge-portfolio',
    category: 'software',
  },
  {
    id: 4,
    title: 'Proyectos Python',
    description: 'Scripts de automatización, análisis de datos y ejemplos de machine learning desarrollados en Python.',
    techStack: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/jorgerleonn/Python',
    category: 'software',
  },
];
