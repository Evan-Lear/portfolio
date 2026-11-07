// ============================================================
//  EDIT THIS FILE — all site content lives here.
//  Anything left empty ("" or []) is hidden automatically.
// ============================================================
window.CONTENT = {
  name: "Your Name",
  role: "Data Engineer",
  tagline: "I build reliable data pipelines and turn messy data into decisions.",
  location: "City, Country",
  email: "you@example.com",
  resumeUrl: "",            // e.g. "assets/resume.pdf"
  photo: "",                // e.g. "assets/me.jpg"
  available: true,          // shows "Open to opportunities" badge

  socials: [
    { label: "GitHub",   url: "https://github.com/" },
    { label: "LinkedIn", url: "https://linkedin.com/in/" },
  ],

  about: [
    "Write a short paragraph about who you are and what you do.",
    "Add a second paragraph about what drives you, or what you're looking for next.",
  ],

  stats: [
    { value: "5+",  label: "Years experience" },
    { value: "20+", label: "Projects shipped" },
    { value: "10",  label: "Happy clients" },
  ],

  experience: [
    {
      company: "Company Name",
      title: "Senior Engineer",
      period: "2023 — Present",
      url: "",
      points: [
        "Describe an impact you had, ideally with a number.",
        "Another accomplishment worth highlighting.",
      ],
    },
    {
      company: "Previous Company",
      title: "Engineer",
      period: "2020 — 2023",
      url: "",
      points: ["What you built, owned, or improved."],
    },
  ],

  projects: [
    {
      title: "Project One",
      description: "One or two sentences on the problem and what you built.",
      tags: ["Python", "Airflow", "Snowflake"],
      image: "",          // e.g. "assets/project1.png"
      link: "",           // live demo
      repo: "",           // source code
    },
    {
      title: "Project Two",
      description: "One or two sentences on the problem and what you built.",
      tags: ["SQL", "dbt"],
      image: "", link: "", repo: "",
    },
    {
      title: "Project Three",
      description: "One or two sentences on the problem and what you built.",
      tags: ["TypeScript", "React"],
      image: "", link: "", repo: "",
    },
  ],

  skills: [
    { group: "Languages", items: ["Python", "SQL", "TypeScript"] },
    { group: "Data",      items: ["Spark", "dbt", "Airflow", "Kafka"] },
    { group: "Cloud",     items: ["AWS", "GCP", "Docker", "Terraform"] },
  ],

  education: [
    { school: "University Name", degree: "B.S. Computer Science", period: "2016 — 2020" },
  ],

  contactBlurb: "Have a project in mind or just want to say hi? My inbox is open.",
};
