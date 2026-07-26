import {
  ContactInfo,
  Education,
  Experience,
  Project,
  SkillCategory,
  Certification,
} from '../types';

export const CONTACT_INFO: ContactInfo = {
  name: 'Radha Kumari',
  title: 'Software Engineer @ TATA AIG | Full-Stack & Cloud Specialist',
  location: 'Gurgaon, Haryana, India',
  phone: '9835486178',
  email: 'radhakumari162002@gmail.com',
  linkedin: 'https://linkedin.com/in/radha-kumari-35742120b',
  github: 'https://github.com/radhakumari1',
  leetcode: 'https://leetcode.com/u/Radha_120CPP/',
};

export const EDUCATION: Education = {
  institution: 'National Institute of Technology, Jamshedpur',
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science and Engineering',
  cgpa: '8.58 / 10.00',
  period: '2020 – 2024',
  location: 'Jamshedpur, Jharkhand',
  coursework: [
    'Data Structures & Algorithms (C++)',
    'Operating Systems',
    'Object-Oriented Programming (OOPs)',
    'Database Management Systems (DBMS)',
    'Machine Learning (Python)',
    'Artificial Intelligence',
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'tata-aig-se',
    role: 'Software Engineer',
    company: 'TATA AIG General Insurance Company',
    period: 'Jun 2024 – Present',
    location: 'Gurgaon, Haryana',
    type: 'Full-time',
    highlights: [
      'Migrated MongoDB and PostgreSQL (AWS RDS) authentication to a passwordless architecture across both server and serverless services, improving security and eliminating credential-based access.',
      'Implemented Kubernetes liveness probes to perform automated container health checks, improving service reliability and uptime by 20%.',
      'Engineered a full-stack reporting module enabling users to download failure reports in Excel format with configurable start and end date filters.',
      'Designed a coinsurance claim processing pipeline that ingests bulk Excel files and triggers automated end-to-end claim registration workflows across internal systems.',
      'Integrated structured logging using the Winston logging library, improving monitoring, debugging, and production issue tracking.',
    ],
    skills: [
      'Node.js',
      'Express.js',
      'AWS RDS',
      'PostgreSQL',
      'MongoDB',
      'Kubernetes',
      'Docker',
      'Winston',
      'Passwordless Auth',
    ],
    metrics: [
      { label: 'Uptime Boost', value: '+20%' },
      { label: 'AWS RDS Auth', value: 'Passwordless' },
      { label: 'Workflows', value: 'Bulk Claims Pipeline' },
    ],
  },
  {
    id: 'tata-aig-intern',
    role: 'Software Engineer Intern',
    company: 'TATA AIG General Insurance Company',
    period: 'Jan 2024 – Jun 2024',
    location: 'Gurgaon, Haryana',
    type: 'Internship',
    highlights: [
      'Built scalable Node.js REST APIs, reducing API response latency.',
      'Upgraded backend services from Node.js v12 to v20 improving security and maintainability.',
      'Optimized MySQL queries and database operations, reducing page load time by 15% and improving overall application responsiveness.',
    ],
    skills: ['Node.js', 'REST APIs', 'MySQL', 'Query Optimization', 'Express.js', 'System Architecture'],
    metrics: [
      { label: 'Page Load Time', value: '-15%' },
      { label: 'Node Version', value: 'v12 → v20' },
      { label: 'API Performance', value: 'Latency Reduced' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'sociopedia',
    title: 'Sociopedia',
    category: 'Full-Stack',
    subtitle: 'Full-stack social networking platform with real-time interactions',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Material UI'],
    description: [
      'Engineered a full-stack social media platform enabling user profiles, post creation, likes, comments, and real-time social interactions.',
      'Designed secure authentication and authorization using JWT to protect user data and manage access control.',
      'Created a responsive and dynamic UI using React and Material UI, improving usability and overall user engagement.',
    ],
    demoType: 'social',
    githubUrl: 'https://github.com/radhakumari/sociopedia',
    liveUrl: 'https://sociopedia-app.demo',
    keyFeatures: [
      'JWT Authentication & Password Encryption',
      'Dynamic Feed with Post Image Uploads',
      'Friend Lists & Profile Management',
      'Dark/Light Theme Toggle with Material UI',
    ],
  },
  {
    id: 'sales-prediction',
    title: 'Sales Prediction Engine',
    category: 'Machine Learning',
    subtitle: 'Deep learning time-series sales forecasting using LSTM neural networks',
    techStack: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
    description: [
      'Built an ML pipeline leveraging LSTM (Long Short-Term Memory) networks to forecast complex sales trends.',
      'Performed data preprocessing, missing value imputation, and feature engineering to maximize model predictive accuracy.',
      'Visualized multi-dimensional trends and strategic business insights using Matplotlib and Seaborn.',
    ],
    demoType: 'sales-ml',
    githubUrl: 'https://github.com/radhakumari/sales-prediction-lstm',
    keyFeatures: [
      'Sequential LSTM Neural Network Architecture',
      'Feature Engineering on Seasonal Trends',
      'Interactive Historical vs Predicted Sales Charts',
      'Automated Evaluation Metrics (RMSE, MAE)',
    ],
  },
  {
    id: 'face-attendance',
    title: 'Face Recognition Attendance System',
    category: 'Computer Vision & Web',
    subtitle: 'Automated biometric attendance logging via OpenCV and Flask web server',
    techStack: ['Python', 'OpenCV', 'Flask', 'Pandas', 'Excel'],
    description: [
      'Implemented real-time face recognition using OpenCV to detect and identify individuals through a live webcam stream.',
      'Automated attendance tracking by capturing recognized faces and generating daily Excel attendance records.',
      'Created a lightweight web interface using Flask to register new users, inspect face embeddings, and monitor daily attendance logs.',
    ],
    demoType: 'face-rec',
    githubUrl: 'https://github.com/radhakumari/face-recognition-attendance',
    keyFeatures: [
      'Webcam Feed Real-time Face Detection',
      'Biometric Embedding Matching Engine',
      'Auto-generated Daily Excel Spreadsheets',
      'Flask Dashboard for User Enrolment',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Frameworks',
    description: 'Core backend and modern frontend web engineering stack',
    items: [
      { name: 'Node.js', level: 95, tag: 'backend' },
      { name: 'React.js', level: 90, tag: 'frontend' },
      { name: 'Express.js', level: 92, tag: 'backend' },
      { name: 'Python', level: 88, tag: 'language' },
      { name: 'C++', level: 85, tag: 'language' },
      { name: 'C', level: 82, tag: 'language' },
      { name: 'Vue.js', level: 80, tag: 'frontend' },
      { name: 'Bootstrap', level: 85, tag: 'frontend' },
      { name: 'Git', level: 90, tag: 'tool' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure, containers, and orchestration',
    items: [
      { name: 'AWS (SQS, CloudWatch, S3)', level: 88, tag: 'cloud' },
      { name: 'Kubernetes', level: 85, tag: 'cloud' },
      { name: 'Docker', level: 88, tag: 'cloud' },
      { name: 'Microservices', level: 88, tag: 'cloud' },
      { name: 'Passwordless AWS Auth', level: 90, tag: 'cloud' },
      { name: 'Winston Logging', level: 92, tag: 'tool' },
    ],
  },
  {
    title: 'Databases & ORMs',
    description: 'Relational, document, and in-memory data store management',
    items: [
      { name: 'MongoDB', level: 90, tag: 'database' },
      { name: 'PostgreSQL', level: 88, tag: 'database' },
      { name: 'MySQL', level: 85, tag: 'database' },
      { name: 'Redis', level: 82, tag: 'database' },
      { name: 'AWS RDS', level: 88, tag: 'database' },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'google-agentic-ai',
    title: 'Antigravity Agentic AI Hands-on Lab',
    issuer: 'Google Cloud',
    dateBadge: 'Google Cloud Event',
    description:
      'Attended an exclusive Google Cloud event and completed hands-on labs exploring Antigravity, an AI-powered development environment for building Agentic AI applications and multi-modal workflows.',
    badgeType: 'google',
    skillsCovered: ['Agentic AI', 'Google Cloud', 'Antigravity Platform', 'AI Engineering'],
    verified: true,
  },
  {
    id: 'aws-cloud-cert',
    title: 'AWS Cloud Services Certification',
    issuer: 'AWS & Tata Group',
    dateBadge: 'Tata Professional Certification',
    description:
      'Earned certification in AWS cloud infrastructure and core services through the Tata professional development program, covering SQS, S3, CloudWatch, RDS, and cloud architecture best practices.',
    badgeType: 'aws',
    skillsCovered: ['AWS Cloud Architecture', 'AWS SQS & CloudWatch', 'AWS RDS', 'Security Best Practices'],
    verified: true,
  },
  {
    id: 'mongodb-advanced',
    title: 'Advanced MongoDB Certification',
    issuer: 'MongoDB University',
    dateBadge: 'Advanced Level',
    description:
      'Achieved advanced certification covering NoSQL data modeling, Vector Search for AI apps, Index optimization, complex Aggregation pipelines, and production deployments.',
    badgeType: 'mongodb',
    skillsCovered: ['Vector Search', 'NoSQL Data Modeling', 'Aggregation Framework', 'Index Tuning'],
    verified: true,
  },
];
