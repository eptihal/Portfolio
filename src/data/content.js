// ─────────────────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update the site —
// you should not need to touch any component to change text, links,
// skills, experience, certifications or projects.
// ─────────────────────────────────────────────────────────────────────────

// import.meta.env.BASE_URL reflects the `base` set in vite.config.js
// (currently a relative "./"). Building paths from it — instead of
// hardcoding a leading "/" — is what makes these links resolve
// correctly regardless of where the site is deployed (domain root,
// a subfolder, or opened as a local file).
const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: "Eptihal Nasr",
  fullName: "Eptihal Nasr Alhawy",
  headline: "Machine Learning Engineer",
  subheadline: "Python · SQL · Data Science",
  location: "Cairo, Egypt",
  photo: `${BASE}assets/images/profile.jpg`,
  cvPath: `${BASE}assets/documents/Eptihal-Nasr-CV.pdf`,
  intro:
    "Information Technology graduate from Delta Technological University, building a career in machine learning and data science. Currently training in the Digital Egypt Pioneers Initiative (DEPI) Machine Learning track, with hands-on work in Python, data preprocessing, forecasting and anomaly detection.",
  about:
    "I graduated with a Bachelor's degree in Information Technology (Software) from Delta Technological University with an overall grade of 83.9% (Very Good). My focus is machine learning and data science — I'm currently a Machine Learning Intern with the Digital Egypt Pioneers Initiative, training across Python, data science, deep learning, NLP, computer vision and Azure AI, and developing a capstone project along the ML track. My strongest practical experience so far comes from an AI-enhanced ERP team project, where I built the sales-forecasting and anomaly-detection components. I'm looking for machine learning, data science and technical roles where I can keep building on that foundation.",
};

export const socials = {
  email: "ebtihalalhawy@gmail.com",
  linkedin: "https://linkedin.com/in/eptihal-alhawy",
  github: "https://github.com/eptihal",
};

export const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python", level: "Proficient" },
      { name: "C++", level: "Familiar" },
      { name: "Java", level: "Familiar" },
      { name: "C", level: "Basic" },
      { name: "Dart / Flutter", level: "Familiar" },
    ],
  },
  {
    category: "Data & Databases",
    items: [
      { name: "SQL", level: "Working knowledge" },
      { name: "Database programming", level: "Working knowledge" },
      { name: "Data Analysis", level: "Learning" },
      { name: "Big Data & Analytics", level: "Learning" },
    ],
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "Machine Learning", level: "Working knowledge" },
      { name: "Forecasting", level: "Working knowledge" },
      { name: "Anomaly Detection", level: "Working knowledge" },
      { name: "Deep Learning", level: "Training in progress" },
      { name: "NLP", level: "Training in progress" },
      { name: "Computer Vision", level: "Training in progress" },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML / CSS", level: "Working knowledge" },
      { name: "JavaScript", level: "Working knowledge" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git / GitHub", level: "Working knowledge" },
      { name: "Linux / Terminal", level: "Working knowledge" },
      { name: "Azure AI", level: "Exposure via ML training" },
      { name: "MLOps / MLflow", level: "Exposure via ML training" },
      { name: "Hugging Face", level: "Exposure via ML training" },
      { name: "Blender", level: "Basic" },
    ],
  },
];

// Sequential — this is a real timeline, so dates and ordering matter.
export const experience = [
  {
    role: "Machine Learning Intern",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Jul 2026 – Present",
    points: [
      "Hands-on training in Python, Data Science, Machine Learning, Deep Learning, NLP, Computer Vision and Azure AI.",
      "Working with data preprocessing, visualization and MLOps tools including MLflow and Hugging Face.",
      "Developing a capstone project as part of the Machine Learning track.",
    ],
  },
  {
    role: "AI-Enhanced ERP System (Smart ERP System)",
    org: "Team Project — presented at the Tahkom Scientific Exhibition",
    period: "Team Project",
    points: [
      "Collaborated with a teammate to build an ERP system enhanced with AI-driven predictive and analytical features.",
      "Contributed the AI components of the system, focusing on sales forecasting to support demand and revenue planning.",
      "Worked on anomaly detection functionality to flag irregular patterns in the system's data.",
      "Integrated the AI outputs into the ERP workflow to provide predictive and analytical insights to end users.",
    ],
  },
  {
    role: "AI Training",
    org: "Huawei ICT Academy",
    period: "2025",
    points: [
      "Completed HCIA-AI V4.0 training covering artificial intelligence concepts and applications.",
      "Gained practical knowledge of AI technologies through hands-on learning.",
    ],
  },
  {
    role: "Metro Training",
    org: "Egyptian Company for Metro (ECM)",
    period: "Aug 12–17, 2023",
    points: ["Completed technical training as an Information Technology student."],
  },
];

export const education = {
  degree: "Bachelor's Degree in Information Technology — Software",
  university: "Delta Technological University — Faculty of Technology and Energy",
  period: "2022 – 2026",
  detail: "Overall Grade: 83.9% — Very Good",
};

export const certifications = [
  {
    name: "One Million Prompters Certificate — Prompt Engineering",
    issuer: "Dubai Future Foundation & Dubai Centre for Artificial Intelligence",
  },
  {
    name: "System Analysis Using AI (CSW Certificate)",
    issuer: "Microsoft Egypt, Ministry of Youth and Sports, Care Egypt",
    date: "Dec 2025",
  },
  {
    name: "Generative AI Tools (CSW Certificate)",
    issuer: "Microsoft Egypt, Ministry of Youth and Sports, Care Egypt",
    date: "Dec 2025",
  },
  {
    name: "HCIA-AI V4.0 Course Certificate",
    issuer: "Huawei ICT Academy",
    date: "Sep 2025",
  },
  {
    name: "Boost Your Productivity with AI Certificate",
    issuer: "Maharat Google, Ministry of Youth and Sports, Ministry of Social Solidarity, Injaz Egypt",
  },
  {
    name: "Python Programming Basics Certificate",
    issuer: "ITI / Mahara-Tech",
    date: "Feb 2026",
  },
  {
    name: "Metro Training Certificate",
    issuer: "Egyptian Company for Metro (ECM)",
    date: "Aug 12–17, 2023",
  },
];

// Add real projects here as they're ready — each card supports the fields
// below. Leave repo/demo/image unset until you have a real link or image;
// the card will show it as "coming soon" instead of a broken link.
export const projects = [
  {
    title: "Retail Sales & Profitability Dashboard",
    description:
      "Interactive Power BI dashboard for analyzing retail sales, profitability, orders, returns, and regional performance.",
    tech: ["Power BI", "Power Query", "DAX", "Data Visualization"],
    features: [
      "Sales and profitability KPI tracking",
      "Interactive filtering by year, region, and category",
      "Category, regional, and product performance analysis",
    ],
    repo: "https://github.com/eptihal/Retail-Sales-PowerBI",
    image: `${BASE}assets/images/dashboard.png`,
  },

  {
    title: "Python Sales Data Analysis",
    description:
      "Python-based analysis of online retail sales to explore revenue, products, countries, monthly trends, and customer performance.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
    features: [
      "Data cleaning and revenue calculation",
      "Top products and countries by revenue",
      "Monthly sales and customer analysis",
    ],
    repo: "https://github.com/eptihal/Python-Sales-Analysis",
   image: `${BASE}assets/images/python-sales-analysis.png`,
  },
];

export const services = [
  {
    title: "Machine Learning",
    description:
      "Building and applying ML models for tasks like forecasting and anomaly detection, from data preprocessing through to integrated outputs.",
  },
  {
    title: "Python Development",
    description:
      "Writing clean, working Python for data processing, automation and ML pipelines.",
  },
  {
    title: "SQL & Data Processing",
    description:
      "Structuring, querying and preparing data in SQL databases to support analysis and modeling.",
  },
  {
    title: "Data Analysis",
    description:
      "Exploring and preparing datasets to surface patterns that support decisions — a skill I'm actively developing through ongoing training.",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
