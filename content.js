// ============================================================
//  EDIT THIS FILE — all site content lives here.
//  Anything left empty ("" or []) is hidden automatically.
// ============================================================
window.CONTENT = {
  name: "Evan Lear",
  role: "Marketing & Brand Strategist",
  tagline: "I build brands from the ground up and create content that turns attention into customers.",
  location: "Midlothian, Virginia",
  email: "evan.lear.jr@gmail.com",
  resumeUrl: "",            // e.g. "assets/resume.pdf" (use a copy without your home address)
  photo: "assets/evan.jpg",
  available: false,         // true shows an "Open to opportunities" badge

  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/evanlear" },
  ],

  about: [
    "I'm a marketing professional with two years of experience in social media strategy and brand development, mostly at startups and small businesses. I write and produce content for social media, email, blogs and print, and I measure it by the engagement and sales it brings in.",
    "Right now I'm the founding marketing manager at ETLMaestro, building the brand, the customer research and the marketing operations from scratch. I hold a B.S. in Psychology from William & Mary, which shapes how I think about audiences and what actually moves them.",
  ],

  stats: [
    { value: "#2",   label: "Nationwide in direct sales out of 100+ interns" },
    { value: "+45%", label: "Social engagement from campaigns I ran" },
    { value: "4×",   label: "Website traffic in a month-long campaign" },
  ],

  experience: [
    {
      company: "ETLMaestro",
      title: "Founding Marketing Manager",
      period: "Jun 2026 — Present",
      url: "",
      points: [
        "Created brand guidelines for a consistent identity, informed by research into the data orchestration industry and its competitors",
        "Ran client interviews and research to narrow the ideal customer profile",
        "Managed content and messaging across multiple channels",
        "Gave marketing direction and feedback on the company logo",
        "Built the company CRM in Excel before moving to a licensed tool",
        "Used AI to build automated workflows that made the team more efficient",
      ],
    },
    {
      company: "Storage Scholars LLC",
      title: "Marketing Lead & Senior Student Operations Manager",
      period: "Mar 2026 — Oct 2026",
      url: "",
      points: [
        "Ranked 2nd nationwide in direct sales out of more than 100 interns",
        "Created flyers and hosted events for large consumer marketing pushes",
        "Managed the marketing budget for two campuses",
        "Coordinated with logistics partners to keep operations running across both campuses",
      ],
    },
    {
      company: "MajorMatch",
      title: "Marketing Assistant (Freelance)",
      period: "Mar 2026 — Apr 2026",
      url: "",
      points: [
        "Planned and hosted campus events to drive traffic to the website",
        "Quadrupled average website traffic during a month-long project",
      ],
    },
    {
      company: "Pet Resort at Greensprings",
      title: "Marketing Strategist Intern",
      period: "May 2025 — Aug 2025",
      url: "",
      points: [
        "Ran social media campaigns that raised engagement and customer interactions by 45%",
        "Designed targeted ads that tripled cat boarding bookings",
        "Interviewed business partners and produced promotional content for blogs, flyers and social posts",
      ],
    },
    {
      company: "Southside Church of the Nazarene",
      title: "Adult & Teen Missions Leader",
      period: "2018 — 2025",
      url: "",
      points: [
        "Led or helped run more than 10 mission trips covering home repair, nature restoration and support for people experiencing homelessness",
        "Led weekly meetings for different age groups",
        "Planned and set up monthly events for up to 200 people",
      ],
    },
  ],

  // ----------------------------------------------------------
  //  SELECTED WORK — each category gets its own page at /work/<slug>
  //  Card:  title, metric (big text when no image), description, tags, image
  //  Page:  fill in `page` below. Empty sections are hidden; a page with
  //         no sections shows a "coming soon" note.
  //    page.intro     — opening paragraph
  //    page.sections  — [{ heading, body, images: ["assets/x.jpg"], link: { label, url } }]
  //    page.results   — [{ value, label }] shown as stat cards
  // ----------------------------------------------------------
  projects: [
    {
      slug: "social-media",
      title: "Social Media & Content",
      metric: "+45%",
      description: "Campaigns, ads and content across social, blogs, email and flyers, including a pet resort campaign that raised engagement 45% and tripled cat boarding bookings.",
      tags: ["Social Media", "Paid Ads", "Content Writing"],
      image: "",
      page: {
        intro: "",
        results: [
          { value: "+45%", label: "Engagement & customer interactions" },
          { value: "3×",   label: "Cat boarding bookings from targeted ads" },
        ],
        sections: [
          // { heading: "Pet Resort at Greensprings", body: "What you did and why it worked.", images: [], link: null },
        ],
      },
    },
    {
      slug: "events-growth",
      title: "Events & Growth Marketing",
      metric: "4×",
      description: "On-campus events, flyers and sales pushes that drove real numbers: 4× website traffic for MajorMatch and #2 nationwide in direct sales at Storage Scholars.",
      tags: ["Events", "Growth", "B2C Sales"],
      image: "",
      page: {
        intro: "",
        results: [
          { value: "4×", label: "Website traffic for MajorMatch" },
          { value: "#2", label: "Nationwide in direct sales (100+ interns)" },
        ],
        sections: [],
      },
    },
    {
      slug: "brand-strategy",
      title: "Brand Strategy",
      metric: "0 → 1",
      description: "Building a brand from nothing at ETLMaestro: brand guidelines, ideal customer research, logo direction and multi-channel messaging.",
      tags: ["Brand Strategy", "Research", "B2B"],
      image: "",
      page: {
        intro: "",
        results: [],
        sections: [],
      },
    },
  ],

  skills: [
    { group: "Marketing", items: ["Social Media Strategy", "Brand Development", "Content Writing", "SEO", "Email Marketing", "Marketing Analytics"] },
    { group: "Design",    items: ["Adobe Creative Cloud", "Adobe InDesign", "Canva", "Web Design"] },
    { group: "Operations", items: ["Campaign Coordination", "Data Analytics", "Microsoft Office", "CRM", "AI Workflows"] },
  ],

  education: [
    { school: "College of William & Mary", degree: "B.S. Psychology", period: "2024 — 2026" },
    { school: "Brightpoint Community College", degree: "A.S. Psychology", period: "2022 — 2024" },
  ],

  certifications: [
    { name: "Digital Professional Marketing Certificate", issuer: "Content Marketing Institute", period: "2026" },
    { name: "Essential Skills in Adobe InDesign", issuer: "Adobe", period: "2026" },
    { name: "Essential Skills in Adobe Illustrator", issuer: "Adobe", period: "In progress" },
  ],

  contactBlurb: "Need a brand built, a campaign launched or content that actually converts? Let's talk.",
};
