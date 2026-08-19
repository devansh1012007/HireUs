// ============================================================
// PROJECTS DATA — EDIT THIS ARRAY TO ADD / REPLACE PROJECTS
//
// Each project supports:
//   title, description, role, technologies, githubUrl, liveUrl, image
// Set githubUrl / liveUrl to '' to hide the action link.
// ============================================================

export const projects = [
  {
    title: 'ZITO Logistics Platform',
    description:
      'Production startup software — logistics platform built and shipped with a live team. Real users, real bugs, real iterations.',
    role: 'Full team (Archit — Testing)',
    technologies: ['React', 'Node.js', 'Express', 'REST API'],
    year: '2026',
    githubUrl: '',
    liveUrl: 'https://zito-logistics-platform.vercel.app/',
    image: '',
  },
  {
    title: 'Spotit - A place to put all your civic issues',
    description:
      'A platform Where both Users post their civic issues in a community with a geotagged photo, which is upvoted by other people facing same issues, based upvote and severity detection problems are highlighted in the admin dashboard, admin verifies, and work starts',
    role: 'Frontend',
    technologies: ['React', 'CSS', 'Design Tokens','Python','SupaBase'],
    year: '2026',
    githubUrl: '',
    liveUrl: 'https://spotitmain.vercel.app/',
    image: '',
  },
  {
    title: 'EchoFlow - Audio content social media platform',
    description:
      'Audio only social media platform with backend pipeline for ingesting and processing audio content. The system is designed to handle large volumes of audio data, perform various transformations, and prepare it for further analysis or distribution.',
    role: 'Backend and DevOps',
    technologies: ['Django','PostgreSQL', 'REST', 'Redis', 'Celery', 'Docker'],
    year: '2026',
    githubUrl: 'https://github.com/devansh1012007/EchoFlow',
    liveUrl: '',
    image: '',
  },
  {
    title: 'XAUUSD Indicator-Based Algo Trading',
    description:
      'Prototype research system for XAUUSD (Gold) using Walk-Forward Validation with Bayesian Optimization. Two strategies (VM and TV) tested on 1-minute OHLCV data with GPU-accelerated indicator math via cudf/cupy.',
    role: 'AI / ML Ops',
    technologies: ['Python', 'Optuna', 'cudf', 'cupy', 'pandas', 'matplotlib'],
    year: '2025',
    githubUrl: 'https://github.com/architgore050/indicator-based-algo-trading',
    liveUrl: '',
    image: '',
  },
  {
    title: 'Robotic Arm Vision & Actuation — 3D Simulation',
    description:
      'Fully simulated environment for an AI agent pipeline controlling a UR5 robotic arm. SAM 2.1 segmentation, LLM reasoning via OpenAI-compatible API, and inverse kinematics through PyBullet physics.',
    role: 'AI / ML + Robotics',
    technologies: ['Python', 'SAM 2.1', 'PyBullet', 'FastAPI', 'LLM tool calling'],
    year: '2025',
    githubUrl: 'https://github.com/architgore050/robo-arm',
    liveUrl: '',
    image: '',
  },
  {
    title: 'Kairix Daemon — Local AI Agent',
    description:
      'A local AI agent built around a quantized Granite 3.2 2B GGUF model. Can browse the web, search the internet, read/write files, and run shell commands — all driven by tool calling. Zero frameworks, hand-written.',
    role: 'AI / ML Engineering',
    technologies: ['Python', 'llama-cpp-python', 'FastAPI', 'Playwright', 'BeautifulSoup'],
    year: '2025',
    githubUrl: 'https://github.com/architgore050/kairix-daemon',
    liveUrl: '',
    image: '',
  },
];

export default projects;