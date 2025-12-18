// Data-driven content for portfolio sections

const profile = {
  name: "PUNIT JADHAV",
  title:
    "Full Stack Developer | React | Node.js | Python | Scalable Applications | DSA",
  email: "jadhavpunit30@gmail.com",
  location: "Mumbai, Maharashtra, India",
  linkedin: "punit-jadhav-001579236",
  linkedinUrl: "https://www.linkedin.com/in/punit-jadhav-001579236/",
  github: "Punitjadhav07",
  githubUrl: "https://github.com/Punitjadhav07",
};

const experiences = [
  {
    role: "Java Fullstack Training",
    company: "TechPathShaala",
    year: "2025",
    bullets: [
      "Comprehensive training in Java fullstack development",
      "Core areas: Java, Spring Boot, backend development, web systems",
    ],
  },
];

const projects = [
  {
    title: "Expense Tracker",
    subtitle: "Web Application",
    description: [
      "Designed a dynamic expense management app with add/edit/delete and category sorting.",
      "Implemented modal-based editing with reusable component structure.",
      "Optimized UI/UX, state updates, and overall performance.",
    ],
    linkLabel: "GitHub Repo",
    linkUrl: "https://github.com/Punitjadhav07/Expense-Tracker.git",
    image: "./assets/portfolio.jpeg",
  },
  {
    title: "E-Commerce Website",
    subtitle: "Full Stack Shopping Platform",
    description: [
      "Built a responsive ecommerce frontend using React and Redux.",
      "Features: product listings, cart, filters, product detail pages, checkout.",
      "Backend APIs for user auth and product management, deployed on Netlify.",
    ],
    linkLabel: "Live Demo",
    linkUrl: "https://shoppingwebsite01.netlify.app/",
    image: "./assets/customer.jpeg",
  },
  {
    title: "Task Management System",
    subtitle: "Fullstack Web Application",
    description: [
      "Developed a task manager with RESTful APIs and persistent storage.",
      "Tech stack: React frontend, Node.js + Express backend, SQL database.",
      "Features: task creation, assignment, tracking, status updates.",
    ],
    linkLabel: "GitHub Repo",
    linkUrl: "https://github.com/Punitjadhav07/Task_Management",
    image: "./assets/library.jpeg",
  },
  {
    title: "Medi Bot",
    subtitle: "Medical Chatbot",
    description: [
      "Developed an AI-powered medical chatbot to assist users with basic health queries.",
      "Built using Python and Streamlit with machine learning models for intent detection.",
      "Focused on a simple, conversational UI and clear guidance for non-technical users.",
    ],
    linkLabel: "Project Details",
    linkUrl: "https://github.com/Punitjadhav07/Medi-Bot",
    image: "./assets/dev.jpeg",
  },
];

const certifications = [
  {
    title: "CS50’s Introduction to Computer Science",
    provider: "Harvard University",
    date: "Oct 2024",
    bullets: [
      "Learned core CS fundamentals, algorithms, data structures, and software engineering.",
    ],
  },
  {
    title: "Java Data Structures & Algorithms + LeetCode",
    provider: "Udemy",
    date: "Sep 2024",
    bullets: [
      "In-depth DSA concepts with practical LeetCode problem-solving.",
    ],
  },
  {
    title: "Certificate Course in Logic Building in C#",
    provider: "C-DAC ACTS",
    date: "Aug 2025 · SM VITA, Mumbai",
    bullets: [
      "60-hour part-time certificate course completed with Grade C+.",
      "Modules: MS .NET, C#, OOP Concepts, Project.",
      "Authorized Training Centre of C-DAC ACTS Pune.",
    ],
  },
  {
    title: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
    provider: "Udemy",
    date: "Aug 2024",
    bullets: [
      "Learned enterprise Java development, REST API design, and ORM with Hibernate.",
    ],
  },
];

const education = {
  degree: "B.E. Information Technology",
  institute: "Vidyalankar Institute of Technology",
  duration: "Aug 2023 – Oct 2027 · Mumbai, India",
  details: [
    "Currently 3rd Year, 5th Semester.",
    "Cumulative GPA: 7.62.",
    "Active participation in sports and college technical events.",
    "Relevant Coursework: Data Structures, Algorithms, DBMS, OS, Web Development.",
  ],
};

const technicalSkills = {
  programmingLanguages: ["JavaScript", "Python", "Java", "C", "TypeScript"],
  webTechnologies: [
    "React",
    "Redux",
    "Node.js",
    "Express.js",
    "HTML5",
    "CSS3",
    "REST APIs",
  ],
  databases: ["MongoDB", "SQL", "JDBC"],
  frameworksTools: ["Spring Boot", "Hibernate", "Git", "GitHub", "Netlify"],
  concepts: [
    "OOP",
    "Data Structures",
    "Algorithms",
    "Full Stack Development",
  ],
};

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "card";

  if (project.image) {
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;
    card.appendChild(img);
  }

  const title = document.createElement("h2");
  title.textContent = project.title;
  card.appendChild(title);

  // Match original template: one paragraph block for description
  const desc = document.createElement("p");
  const lines = [...(project.subtitle ? [project.subtitle] : []), ...project.description];
  desc.textContent = lines.join(" ");
  card.appendChild(desc);

  // Match original template button styling (use <button> inside .card)
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = project.linkLabel || "Show Project";
  if (project.linkUrl) {
    button.addEventListener("click", () => {
      window.open(project.linkUrl, "_blank", "noopener,noreferrer");
    });
  }
  card.appendChild(button);

  return card;
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = "";
  projects.forEach((project) => {
    const card = createProjectCard(project);
    container.appendChild(card);
  });
}

function renderContact() {
  const contactInfo = document.getElementById("contact-info");
  if (!contactInfo) return;

  const nameEl = contactInfo.querySelector(".name");
  const emailEl = contactInfo.querySelector(".email");
  const phoneEl = contactInfo.querySelector(".phone");

  // Keep visual content close to original template but still driven by JS
  if (nameEl) nameEl.textContent = "Punit Jadhav";
  if (emailEl) emailEl.textContent = profile.email;
  if (phoneEl) phoneEl.textContent = "Mumbai, Maharashtra, India";

  const yearSpan = document.getElementById("copyright-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

function renderExperience() {
  const container = document.getElementById("experience-container");
  if (!container) return;

  container.innerHTML = "";

  experiences.forEach((exp) => {
    const wrapper = document.createElement("div");
    wrapper.className = "Company1";

    const content = document.createElement("div");
    content.className = "Company1_content";

    const title = document.createElement("h2");
    title.textContent = `${exp.role} · ${exp.company}`;
    content.appendChild(title);

    const yearP = document.createElement("p");
    yearP.textContent = exp.year;
    content.appendChild(yearP);

    exp.bullets.forEach((b) => {
      const p = document.createElement("p");
      p.textContent = `• ${b}`;
      content.appendChild(p);
    });

    wrapper.appendChild(content);
    container.appendChild(wrapper);
  });
}

function renderCertifications() {
  const container = document.getElementById("certifications-list");
  if (!container) return;

  container.innerHTML = "";

  certifications.forEach((cert) => {
    const block = document.createElement("div");
    block.className = "cert-item";

    const title = document.createElement("h3");
    title.textContent = cert.title;
    block.appendChild(title);

    const meta = document.createElement("p");
    meta.textContent = `${cert.provider} · ${cert.date}`;
    meta.style.fontWeight = "500";
    block.appendChild(meta);

    cert.bullets.forEach((b) => {
      const p = document.createElement("p");
      p.textContent = `• ${b}`;
      block.appendChild(p);
    });

    container.appendChild(block);
  });
}

function renderEducationAndSkills() {
  // Optionally extend existing sections with textual details
  const degreeList = document.querySelector(".degree .list");
  if (degreeList) {
    // Ensure last item (bachelors) has the detailed education info in a tooltip-style paragraph
    const bachelorsItem = degreeList.querySelector("li:nth-child(3)");
    if (bachelorsItem) {
      const extra = document.createElement("p");
      extra.style.marginTop = "8px";
      extra.style.color = "#555555";
      extra.textContent = education.details.join(" ");
      bachelorsItem.appendChild(extra);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderContact();
  renderProjects();
  renderExperience();
  renderCertifications();
  renderEducationAndSkills();

  // Download resume functionality
  const downloadBtn = document.getElementById("download-resume");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      // Uses the PDF placed in the project root; browser will trigger a download
      window.open("Punit%20Resume%20(2).pdf", "_blank");
    });
  }

  // "My Work" button scrolls to Projects section
  const myWorkBtn = document.querySelector(".work");
  if (myWorkBtn) {
    myWorkBtn.addEventListener("click", () => {
      const projectsSection = document.getElementById("project");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Project carousel buttons
  const projectsContainer = document.getElementById("projects-container");
  const prevBtn = document.getElementById("project-prev");
  const nextBtn = document.getElementById("project-next");
  const scrollAmount = 400;

  if (projectsContainer && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      projectsContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
    nextBtn.addEventListener("click", () => {
      projectsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }

  // Contact modal: choose LinkedIn or GitHub
  const contactBtn = document.querySelector(".contact-button");
  const contactModal = document.getElementById("contact-modal");
  const contactLinkedInBtn = document.getElementById("contact-linkedin");
  const contactGithubBtn = document.getElementById("contact-github");
  const contactModalClose = document.getElementById("contact-modal-close");

  if (contactBtn && contactModal) {
    contactBtn.addEventListener("click", () => {
      contactModal.classList.add("show");
    });
  }

  if (contactModal && contactModalClose) {
    contactModalClose.addEventListener("click", () => {
      contactModal.classList.remove("show");
    });

    // Close when clicking outside the modal content
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove("show");
      }
    });
  }

  if (contactLinkedInBtn) {
    contactLinkedInBtn.addEventListener("click", () => {
      window.open(profile.linkedinUrl, "_blank", "noopener,noreferrer");
    });
  }

  if (contactGithubBtn) {
    contactGithubBtn.addEventListener("click", () => {
      window.open(profile.githubUrl, "_blank", "noopener,noreferrer");
    });
  }
});


