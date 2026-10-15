import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

const services = [
  {
    number: "01",
    title: "LinkedIn Optimization",
    description:
      "Transform your LinkedIn profile into a professional presence that communicates your value, builds credibility, and attracts the right opportunities.",
    tags: ["Profile Optimization", "Headline & About", "Personal Positioning"],
  },
  {
    number: "02",
    title: "Personal Branding Strategy",
    description:
      "Build a clear and consistent personal brand that helps you communicate your expertise, share your story, and stand out in your industry.",
    tags: ["Brand Strategy", "Content Direction", "Brand Identity"],
  },
  {
    number: "03",
    title: "Graphic Design",
    description:
      "Create clean, professional visual content that supports your brand identity and makes your message easier to understand.",
    tags: ["Social Media Graphics", "Carousels", "Brand Visuals"],
  },
  {
    number: "04",
    title: "Content Writing",
    description:
      "Turn your ideas and expertise into clear, engaging content that sounds authentic and connects with your target audience.",
    tags: ["LinkedIn Posts", "Content Ideas", "Brand Messaging"],
  },
  {
    number: "05",
    title: "Website Design",
    description:
      "Create a professional online home for your personal brand with a clean layout, responsive design, and a clear message.",
    tags: ["Personal Websites", "Landing Pages", "Responsive Design"],
  },
];

const tools = [
  "Canva",
  "Figma",
  "CapCut",
  "Notion",
  "ChatGPT",
  "SEO Plugins",
  "Google Workspace",
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your goals, audience, expertise, and what makes your story different.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "I develop a clear direction for your positioning, messaging, content, and visual identity.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "We turn the strategy into practical assets, from optimized profiles to content and design.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "We review the work, make thoughtful improvements, and keep your brand aligned with your goals.",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="brand">
          <img
            src="/logo2.svg"
            alt="Shikha Rise IT Lab"
            className="brand-logo"
          />

          <span className="brand-text">
            <strong>SHIKHA RISE</strong>
            <small>IT LAB</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#" onClick={() => setMenuOpen(false)}>
  Home
</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#process" onClick={() => setMenuOpen(false)}>
            Process
          </a>
          <a href="#consultation" onClick={() => setMenuOpen(false)}>
  Consultation
</a>
<a href="#contact" onClick={() => setMenuOpen(false)}>
  Contact
</a>

          <a
            href="#contact"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk <ArrowIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}
function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/shikhaprof?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        in
      </a>

      <a
        href="https://www.facebook.com/share/1EXnCyCour/"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        f
      </a>

      <a
        href="https://www.instagram.com/shikhaprof?stkn=MXJsYTMyN3M1bWs2cA==S"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        ◎
      </a>

      <a
        href="https://wa.me/8801531107600"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        ☎
      </a>
    </div>
  );
}
function Hero() {
  return (
    <section className="hero section" id="home">
      <SocialLinks />
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot"></span>
            PERSONAL BRANDING & DIGITAL PRESENCE
          </div>

          <h1>
            Make your
            <br />
            <span className="gradient-text">expertise</span> visible.
          </h1>

          <p className="hero-description">
            I help CEOs, startup founders, and professionals build a
            stronger LinkedIn presence and a personal brand that communicates
            their value with clarity and confidence.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Work With Me <ArrowIcon />
            </a>

            <a href="#services" className="button button-secondary">
              Explore Services ↓
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line"></span>
            <span className="hero-note-text">
              Strategy · Content · Design · Digital Presence
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>

          <div className="profile-card">
            <div className="profile-card-top">
              <span className="mini-label">YOUR BRAND, YOUR STORY</span>
              <span className="card-sparkle">✳</span>
            </div>

            <div className="profile-photo-wrapper">
              <div className="profile-ring ring-one"></div>
              <div className="profile-ring ring-two"></div>

              <div className="profile-avatar">
                <img src="/shikha.jpg" alt="Shikha" />
              </div>

              <div className="photo-status">
                <span></span>
                Available for projects
              </div>
            </div>

            <h2>Build a brand</h2>
            <h3>that feels like you.</h3>

            <p>
              Clear positioning.
              <br />
              Meaningful content.
              <br />
              A stronger digital presence.
            </p>

            <div className="profile-card-bottom">
              <span className="tiny-dot"></span>
              <span>Let&apos;s build your next chapter</span>
              <ArrowIcon />
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span className="floating-icon">✦</span>

            <div>
              <strong>Personal Brand</strong>
              <small>Built with purpose</small>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-icon">↗</span>

            <div>
              <strong>Digital Presence</strong>
              <small>Designed to connect</small>
            </div>
          </div>
        </div>
      </div>

      <div className="container hero-bottom">
        <span>HELPING PROFESSIONALS SHOW UP WITH PURPOSE</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}

function IntroStrip() {
  return (
    <section className="intro-strip">
      <div className="container intro-strip-inner">
        <span>PERSONAL BRANDING</span>
        <span>✦</span>
        <span>CONTENT</span>
        <span>✦</span>
        <span>DESIGN</span>
        <span>✦</span>
        <span>DIGITAL PRESENCE</span>
        <span>✦</span>
        <span>STRATEGY</span>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section problem-section">
      <div className="container two-column">
        <div>
          <span className="section-kicker">THE CHALLENGE</span>

          <h2 className="section-heading">
            Your expertise is valuable.
            <br />
            <span className="muted-heading">But can people see it?</span>
          </h2>
        </div>

        <div className="problem-copy">
          <p>
            In a digital-first world, being good at what you do is only part
            of the equation. Your online presence needs to communicate your
            value before you even enter the room.
          </p>

          <p>
            A clear personal brand helps the right people understand who you
            are, what you do, and why your perspective matters.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container two-column about-grid">
        <div className="about-visual">
          <div className="about-frame">
            <div className="about-photo">
              <img src="/shikha.jpg" alt="Shikha" />
            </div>

            <div className="about-frame-caption">
              <span>CREATIVITY</span>
              <span>×</span>
              <span>STRATEGY</span>
            </div>
          </div>

          <div className="about-sticker">
            <span>✳</span>
            <p>
              Thoughtful
              <br />
              digital growth
            </p>
          </div>
        </div>

        <div className="about-content">
          <span className="section-kicker">A LITTLE ABOUT ME</span>

          <h2 className="section-heading">
            Hi, I&apos;m <span className="gradient-text">Shikha.</span>
            <br />
            Your brand-building partner.
          </h2>

          <p>
            I&apos;m passionate about helping professionals and businesses
            communicate their value through personal branding, content, and
            thoughtful digital experiences.
          </p>

          <p>
            My approach brings together creativity, strategy, and technology.
            I believe your online presence should do more than look good — it
            should tell your story clearly and support the goals you care
            about.
          </p>

          <div className="highlights">
            <div>
              <span>✦</span>
              <div>
                <strong>Creative thinking</strong>
                <small>Ideas shaped around your brand and audience.</small>
              </div>
            </div>

            <div>
              <span>✦</span>
              <div>
                <strong>Strategic approach</strong>
                <small>Purposeful work guided by clear objectives.</small>
              </div>
            </div>

            <div>
              <span>✦</span>
              <div>
                <strong>Technology-minded</strong>
                <small>Digital skills combined with creative thinking.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-kicker">WHAT I DO</span>

            <h2 className="section-heading">
              Services designed
              <br />
              <span className="gradient-text">around your growth.</span>
            </h2>
          </div>

          <p>
            From strategy to execution, I help you build a digital presence
            that feels intentional, professional, and authentically yours.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-number">{service.number}</div>

              <div className="service-main">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="service-arrow">
                <ArrowIcon />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  return (
    <section className="section tools-section">
      <div className="container">
        <span className="section-kicker">MY TOOLKIT</span>

        <p className="tools-description">
          A flexible digital toolkit helps turn ideas into polished,
          practical, and engaging experiences.
        </p>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div className="tool-item" key={tool}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{tool}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const reasons = [
    {
      number: "01",
      title: "Your story comes first",
      text: "Your brand should reflect your personality, experience, and goals instead of feeling generic.",
    },
    {
      number: "02",
      title: "Strategy behind the visuals",
      text: "Every design and content decision should have a purpose and support your larger direction.",
    },
    {
      number: "03",
      title: "Clear and collaborative",
      text: "The process stays simple, transparent, and focused on creating work you can confidently use.",
    },
  ];

  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-kicker">WHY WORK TOGETHER</span>

            <h2 className="section-heading">
              More than
              <br />
              <span className="gradient-text">just pretty pixels.</span>
            </h2>
          </div>

          <p>
            Good personal branding connects strategy, storytelling, design,
            and technology into one clear experience.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article className="reason-card" key={reason.number}>
              <span>{reason.number}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <span className="section-kicker">HOW IT WORKS</span>

        <h2 className="section-heading">
          Simple process.
          <br />
          <span className="gradient-text">Thoughtful results.</span>
        </h2>

        <div className="process-grid">
          {process.map((step) => (
            <article className="process-card" key={step.number}>
              <div className="process-top">
                <span>{step.number}</span>
                <span>✦</span>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function ConsultationSection() {
  return (
    <section className="section" id="consultation">
      <div className="container">
        <span className="section-kicker">
          LINKEDIN PERSONAL BRANDING STRATEGY
        </span>

        <h2 className="section-heading">
          Your LinkedIn Profile Should Work as Hard as You Do.
        </h2>

        <p>
          Book a 1-on-1 strategy session and get a clear,
          personalized plan for your LinkedIn presence.
        </p>

        <a href="#contact" className="button button-primary">
          Book Your Session <ArrowIcon />
        </a>
        <div className="session-options">
  <div className="session-card">
    <span>QUICK FIX</span>
    <h3>30 Minutes</h3>
    <div className="session-price">$30</div>
    <p>
      Focused review of your headline, About section,
      or one specific LinkedIn content question.
    </p>
    <a href="#contact">Book Quick Fix →</a>
  </div>

  <div className="session-card featured">
    <span>FULL STRATEGY</span>
    <h3>60 Minutes</h3>
    <div className="session-price">$50</div>
    <p>
      Complete profile audit, content strategy,
      positioning, target audience, and Q&A.
    </p>
    <a href="#contact">Book Full Strategy →</a>
  </div>
</div>
      </div>
      <div className="consultation-audience">
  <span className="section-kicker">WHO THIS IS FOR</span>

  <h3 className="section-heading">
    Built around your <span className="gradient-text">next move.</span>
  </h3>

  <div className="audience-grid">
    <div className="audience-card">
      <h4>Founders & CEOs</h4>
      <p>Build authority and show your expertise clearly on LinkedIn.</p>
    </div>

    <div className="audience-card">
      <h4>Coaches & Consultants</h4>
      <p>Use LinkedIn to attract the right clients and opportunities.</p>
    </div>

    <div className="audience-card">
      <h4>Job Seekers</h4>
      <p>Make your profile stronger and easier for recruiters to notice.</p>
    </div>

    <div className="audience-card">
      <h4>Professionals</h4>
      <p>Understand what's not working and what you should improve.</p>
    </div>
  </div>
</div>
<div className="consultation-how">
  <span className="section-kicker">HOW IT WORKS</span>

  <h3 className="section-heading">
    Four simple steps.
    <br />
    <span className="gradient-text">No wasted time.</span>
  </h3>

  <div className="how-grid">
    <div className="how-card">
      <span>01</span>
      <h4>Book your session</h4>
      <p>Choose 30 or 60 minutes based on what you need.</p>
    </div>

    <div className="how-card">
      <span>02</span>
      <h4>Send your profile link</h4>
      <p>I&apos;ll review your profile before we talk.</p>
    </div>

    <div className="how-card">
      <span>03</span>
      <h4>We talk</h4>
      <p>Live video call with direct feedback and real answers.</p>
    </div>

    <div className="how-card">
      <span>04</span>
      <h4>Get your summary</h4>
      <p>Receive a short written recap of your key priorities.</p>
    </div>
  </div>
</div>

<div className="consultation-testimonials">
  <span className="section-kicker">CLIENT TESTIMONIALS</span>

  <h3 className="section-heading">What clients say</h3>

  <p className="testimonials-intro">
    Real feedback from the founders, coaches, and professionals
    who have worked with Sayma.
  </p>

  <div className="testimonials-grid">
    <div className="testimonial-card">
      <div className="testimonial-stars">★★★★★</div>
      <p>
        I hired SAYMA to optimize my LinkedIn profile, and the results
        were transformative! She refined my headline, summary, and
        experience sections to highlight my unique value proposition.
        My profile now attracts more views, connection requests, and
        meaningful opportunities. She has a keen eye for detail and
        a deep understanding of LinkedIn’s algorithm. Highly recommend!
      </p>
      <div className="testimonial-client">
        <img src="/carlos.jpeg" alt="Carlos Martinez" />
        <div>
          <h4>Carlos Martinez</h4>
          <span>CEO &amp; Co-Founder, Dura-Shine Clean</span>
        </div>
      </div>
    </div>

    <div className="testimonial-card">
      <div className="testimonial-stars">★★★★★</div>
      <p>
        I had the pleasure of working with Sayma to optimize my
        LinkedIn profile, and the results were outstanding! She
        transformed my profile into a powerful, SEO-friendly tool
        that attracts the right opportunities. Thanks a lot, dear
        Sayma! I'll recommend you to my referral people. Good luck
        and go ahead.
      </p>
      <div className="testimonial-client">
        <img src="/murad.jpeg" alt="Md. Murad Hasan" />
        <div>
          <h4>Md. Murad Hasan</h4>
          <span>General Manager, Corporate Sales — UCB Fintech</span>
        </div>
      </div>
    </div>

    <div className="testimonial-card">
      <div className="testimonial-stars">★★★★★</div>
      <p>
        I confidently recommend Sayma as a LinkedIn profile creation
        and optimization expert. She demonstrates strong expertise
        in personal branding, profile structure, and keyword
        optimization. Her work is professional, strategic, and
        aligned with my goals. She communicates clearly and delivers
        well-optimized LinkedIn profiles that enhance visibility
        and credibility.
      </p>
      <div className="testimonial-client">
        <img src="/sazzad.jpeg" alt="Md. Sazzad Hosen" />
        <div>
          <h4>Md. Sazzad Hosen</h4>
          <span>LinkedIn Profile Optimization Client</span>
        </div>
      </div>
    </div>

    <div className="testimonial-card">
      <div className="testimonial-stars">★★★★★</div>
      <p>
        Working with Sayma has been an absolute pleasure. She has a
        keen eye for crafting compelling, professional profiles that
        attract opportunities. Her networking, collaboration, research,
        and project management skills make her a valuable asset.
        Her volunteer work also highlights her dedication to social
        impact. Highly recommend.
      </p>
      <div className="testimonial-client">
        <img src="/tahrima.jpeg" alt="Tahrima Islam" />
        <div>
          <h4>Tahrima Islam</h4>
          <span>Linkedin Client</span>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="consultation-faq">
  <span className="section-kicker">FAQ</span>

  <h3 className="section-heading">
    Questions?
    <br />
    <span className="gradient-text">Let&apos;s clear them up.</span>
  </h3>

  <div className="faq-list">
    <details className="faq-item">
      <summary>What if I don't have a LinkedIn profile yet?</summary>
      <p>
        That's fine. The 60-minute session can help you build a plan
        from scratch, including your headline, About section, and content direction.
      </p>
    </details>

    <details className="faq-item">
      <summary>Can this turn into ongoing work?</summary>
      <p>
        Yes. Many clients start with one session and continue with
        monthly content or strategy work if it is a good fit.
      </p>
    </details>

    <details className="faq-item">
      <summary>Do you record the session?</summary>
      <p>
        On request, yes. You can ask for the session to be recorded
        so you can review the feedback later.
      </p>
    </details>

    <details className="faq-item">
      <summary>What's your background?</summary>
      <p>
        I'm Shikha, a LinkedIn Strategist and Personal Branding Expert,
        helping founders and professionals build a stronger LinkedIn presence.
      </p>
    </details>
  </div>
</div>
<div className="consultation-profile">
  <div className="consultation-profile-image">
    <img src="/shikha.jpg" alt="Shikha" />
  </div>

  <div className="consultation-profile-content">
    <span className="section-kicker">YOUR STRATEGIST</span>

    <h3 className="section-heading">
      Strategy with a
      <br />
      <span className="gradient-text">creative eye.</span>
    </h3>

    <p>
      I&apos;m Shikha, a LinkedIn Strategist and Personal Branding Expert,
      helping founders and professionals turn their LinkedIn presence into
      a stronger professional and business asset.
    </p>

    <p>
      My approach combines strategy, storytelling, design, and digital
      thinking to create a presence that feels authentic and purposeful.
    </p>
  </div>
</div>

<div className="consultation-final-cta">
  <span className="section-kicker">READY?</span>

  <h3>
    Ready to Fix
    <br />
    <span className="gradient-text">What&apos;s Not Working?</span>
  </h3>

  <p>
    Thirty minutes could change how your profile performs for the next year.
  </p>

  <a href="#contact" className="button button-primary">
    Book Your Consultation <ArrowIcon />
  </a>
</div>
    </section>
  );
}
function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    emailjs.sendForm(
  "service_41r72kw",
  "template_ljqn4rd",
  event.target,
  {
    publicKey: "aTzjI8u9-Cuec80dl"
  }
)
.then(() => {
  setSubmitted(true);
})
.catch((error) => {
  console.error(
    "EmailJS error status:", error.status,
    "Error details:", error.text
  );
  alert("Message could not be sent. Please try again.");
});
  }
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-wrapper">
        <div className="contact-intro">
          <span className="section-kicker">LET&apos;S TALK</span>

          <h2>
            Have a project
            <br />
            <span className="gradient-text">in mind?</span>
          </h2>

          <p className="contact-lead">
            Tell me a little about your project, your goals, and what
            you&apos;re looking to achieve. Let&apos;s turn your ideas into a
            meaningful digital experience.
          </p>

          <div className="contact-info">
            <div className="contact-info-item">
              <span>✉</span>

              <div>
                <small>EMAIL</small>
                <a href="mailto:sbshikha1997@gmail.com">
                  sbshikha1997@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <span>↗</span>

              <div>
                <small>RESPONSE TIME</small>
                <strong>Usually within 24–48 hours</strong>
              </div>
            </div>

            <div className="contact-info-item">
              <span>✦</span>

              <div>
                <small>LET&apos;S CREATE</small>
                <strong>Something meaningful together</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="form-card-top">
            <div>
              <span className="form-label">PROJECT INQUIRY</span>
              <h3>Start a conversation.</h3>
            </div>

            <span className="form-sparkle">✦</span>
          </div>

          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>

              <h3>Thank you for reaching out.</h3>

              <p>
                Your inquiry has been received. I&apos;ll get back to you
                within 24–48 hours.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="reset-button"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">YOUR NAME</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">WORK EMAIL</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">
                  WHAT CAN I HELP YOU WITH?
                </label>

                <select id="service" name="service" defaultValue="" required>
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="LinkedIn Optimization">
                    LinkedIn Optimization
                  </option>

                  <option value="Personal Branding Strategy">
                    Personal Branding Strategy
                  </option>

                  <option value="Graphic Design">
                    Graphic Design
                  </option>

                  <option value="Content Writing">
                    Content Writing
                  </option>

                  <option value="Website Design">
                    Website Design
                  </option>

                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget">
                  PROJECT BUDGET <span>OPTIONAL</span>
                </label>

                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled>
                    Select your budget range
                  </option>

                  <option value="Under $250">Under $250</option>
                  <option value="$250 - $500">$250 – $500</option>
                  <option value="$500 - $1,000">$500 – $1,000</option>
                  <option value="$1,000+">$1,000+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  TELL ME ABOUT YOUR PROJECT
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project, goals, timeline, or anything else I should know..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                <span>Send Project Inquiry</span>
                <span className="submit-arrow">↗</span>
              </button>

              <p className="form-note">
                Your information will only be used to respond to your inquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="brand">
          <img
            src="/logo2.svg"
            alt="Shikha Rise IT Lab"
            className="brand-logo"
          />

          <span className="brand-text">
            <strong>SHIKHA RISE</strong>
            <small>IT LAB</small>
          </span>
        </a>

        <div className="footer-center">
          PERSONAL BRANDING · CONTENT · DESIGN · DIGITAL PRESENCE
        </div>

        <a
          href="mailto:sbshikha843@gmail.com"
          className="footer-email"
        >
          sbshikha1997@gmail.com
        </a>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Shikha Rise IT Lab. All rights reserved.</span>
        <span>Built with creativity & technology.</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <IntroStrip />
        <ProblemSection />
        <AboutSection />
        <ServicesSection />
        <ToolsSection />
        <WhySection />
        <ProcessSection />
        <ContactSection />
        <ConsultationSection />
      </main>

      <Footer />
    </>
  );
}

export default App;