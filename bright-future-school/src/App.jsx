
import { useState } from "react";
import "./App.css";

const programs = [
  {
    icon: "🌱",
    title: "Early Years",
    classes: "Playgroup – Kindergarten",
    description:
      "A happy start with creative activities, play-based learning and confidence building.",
  },
  {
    icon: "📚",
    title: "Primary School",
    classes: "Grades 1 – 5",
    description:
      "Strong foundations in reading, writing, mathematics and everyday discovery.",
  },
  {
    icon: "🎓",
    title: "Middle School",
    classes: "Grades 6 – 8",
    description:
      "Building independent thinking, problem-solving skills and academic confidence.",
  },
];

const facilities = [
  {
    icon: "🔬",
    title: "Science Lab",
    text: "Explore ideas through practical learning and experiments.",
  },
  {
    icon: "💻",
    title: "Computer Lab",
    text: "Develop digital skills for a technology-driven world.",
  },
  {
    icon: "📖",
    title: "School Library",
    text: "Discover new ideas through books and reading.",
  },
  {
    icon: "⚽",
    title: "Sports & Play",
    text: "Build teamwork, fitness and confidence through play.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80",
    alt: "Students learning in a classroom",
    label: "Learning Together",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
    alt: "Bright and welcoming classroom",
    label: "Our Classrooms",
  },
  {
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=700&q=80",
    alt: "Students participating in an activity",
    label: "Student Activities",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>✉ info@brightfuture.example</span>
          <span>✦ Learning today, leading tomorrow</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-icon">B</span>
            <span className="brand-copy">
              <strong>BRIGHT FUTURE</strong>
              <small>ACADEMY</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Academics", "#academics"],
              ["Facilities", "#facilities"],
              ["Gallery", "#gallery"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a
              className="nav-cta"
              href="#admissions"
              onClick={closeMenu}
            >
              Admissions ↗
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-shape shape-one" />
          <div className="hero-shape shape-two" />

          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow">
                ✦ A PLACE TO LEARN & GROW
              </span>
              <h1>
                Inspiring Young Minds,
                <span> Shaping Bright Futures.</span>
              </h1>
              <p>
                Every child has the potential to shine. We create a
                supportive learning environment where curiosity grows,
                confidence develops and dreams take flight.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#admissions">
                  Explore Admissions <span>↗</span>
                </a>
                <a className="btn btn-outline" href="#about">
                  Discover Our School
                </a>
              </div>

              <div className="hero-note">
                <span className="note-icon">✓</span>
                A welcoming community for every learner
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
                  alt="Students learning in a bright classroom"
                />
              </div>
              <div className="floating-card">
                <span className="floating-icon">🌟</span>
                <div>
                  <strong>Every child matters</strong>
                  <small>Learn · Grow · Achieve</small>
                </div>
              </div>
              <div className="hero-dot-pattern" />
            </div>
          </div>

          <div className="container stats">
            <div>
              <strong>01</strong>
              <span>Curiosity First</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Learning Together</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Growing With Confidence</span>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85"
                alt="A student enjoying a learning activity"
                loading="lazy"
              />
              <div className="about-badge">
                <span>💚</span>
                <strong>A love for learning</strong>
              </div>
            </div>

            <div className="about-content">
              <span className="eyebrow">WELCOME TO OUR SCHOOL</span>
              <h2>Education That Goes Beyond the Classroom</h2>
              <p>
                At Bright Future Academy, we believe education is about
                more than textbooks. It is about nurturing curiosity,
                encouraging kindness and helping every student discover
                their strengths.
              </p>
              <p>
                Our goal is to create a safe, inclusive and inspiring
                environment where students can learn at their own pace
                and prepare for a changing world.
              </p>
              <a className="text-link" href="#academics">
                Discover our approach <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section programs-section" id="academics">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">OUR ACADEMIC PROGRAMS</span>
              <h2>Every Stage, A New Opportunity</h2>
              <p>
                Learning experiences designed to support children at
                every step of their educational journey.
              </p>
            </div>

            <div className="program-grid">
              {programs.map((program, index) => (
                <article className="program-card" key={program.title}>
                  <div className={`program-icon icon-${index}`}>
                    {program.icon}
                  </div>
                  <span className="program-classes">
                    {program.classes}
                  </span>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <a href="#admissions" className="card-link">
                    Learn more <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section facilities-section" id="facilities">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">A PLACE TO THRIVE</span>
              <h2>More Than Just Classrooms</h2>
              <p>
                Spaces and activities that make school life engaging,
                balanced and memorable.
              </p>
            </div>

            <div className="facility-grid">
              {facilities.map((facility) => (
                <article className="facility-card" key={facility.title}>
                  <span className="facility-icon">{facility.icon}</span>
                  <h3>{facility.title}</h3>
                  <p>{facility.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="admission-section" id="admissions">
          <div className="container admission-inner">
            <div>
              <span className="eyebrow light-eyebrow">
                YOUR CHILD'S JOURNEY STARTS HERE
              </span>
              <h2>Give Your Child a Bright Beginning.</h2>
              <p>
                Interested in joining our school community? Contact us
                to learn more about admissions and available programs.
              </p>
            </div>
            <a className="btn btn-white" href="#contact">
              Enquire About Admission <span>↗</span>
            </a>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">LIFE AT OUR ACADEMY</span>
              <h2>Little Moments, Big Memories</h2>
              <p>
                A glimpse into the learning, discovery and friendships
                that make school special.
              </p>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((item) => (
                <figure className="gallery-item" key={item.label}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <figcaption>{item.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        ```jsx
{/* TEACHERS SECTION */}
<section className="teachers-section" id="teachers">
  <div className="section-heading">
    <p>MEET OUR TEAM</p>
    <h2>Our Expert Teachers</h2>
    <span>
      Dedicated teachers who help every student achieve success.
    </span>
  </div>

  <div className="people-grid">
    <div className="person-card">
      <img
        src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600"
        alt="School teacher"
      />
      <h3>Ms. Ayesha Khan</h3>
      <p>Senior Science Teacher</p>
    </div>

    <div className="person-card">
      <img
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
        alt="Female educator"
      />
      <h3>Ms. Sara Ahmed</h3>
      <p>English Teacher</p>
    </div>

    <div className="person-card">
      <img
        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
        alt="School administrator"
      />
      <h3>Mr. Ali Hassan</h3>
      <p>Academic Coordinator</p>
    </div>
  </div>
</section>

{/* STUDENTS SECTION */}
<section className="students-section" id="students">
  <div className="section-heading">
    <p>OUR ACHIEVERS</p>
    <h2>Brilliant Students</h2>
    <span>
      Inspiring young minds to learn, grow and shine.
    </span>
  </div>

  <div className="students-grid">
    <img
      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600"
      alt="Students learning in a classroom"
    />

    <img
      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600"
      alt="Students studying together"
    />

    <img
      src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600"
      alt="Students participating in class"
    />
  </div>
</section>

{/* CONTACT FORM + GOOGLE MAP */}
<section className="contact-section" id="contact">
  <div className="section-heading">
    <p>GET IN TOUCH</p>
    <h2>Contact Our School</h2>
    <span>
      Have a question about admissions? Send us a message.
    </span>
  </div>

  <div className="contact-grid">
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you! Your demo form has been submitted.");
        e.target.reset();
      }}
    >
      <label htmlFor="studentName">Parent / Student Name</label>
      <input
        id="studentName"
        type="text"
        placeholder="Enter your full name"
        required
      />

      <label htmlFor="studentEmail">Email Address</label>
      <input
        id="studentEmail"
        type="email"
        placeholder="Enter your email"
        required
      />

      <label htmlFor="studentPhone">Phone Number</label>
      <input
        id="studentPhone"
        type="tel"
        placeholder="Enter your phone number"
        required
      />

      <label htmlFor="studentMessage">Your Message</label>
      <textarea
        id="studentMessage"
        rows="4"
        placeholder="Write your message here..."
        required
      />

      <button type="submit">Send Message</button>
    </form>

    <div className="map-container">
      <h3>Find Our Location</h3>

      <iframe
        title="School location map"
        src="https://maps.google.com/maps?q=Gulshan-e-Maymar%2C%20Karachi%2C%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: "12px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      <p>
        <strong>Location:</strong> Gulshan-e-Maymar, Karachi
      </p>
    </div>
  </div>
</section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">LET'S CONNECT</span>
              <h2>We'd Love to Hear From You</h2>
              <p>
                Have a question about our school or admissions?
                Send us an inquiry and our team can guide you.
              </p>

              <div className="contact-detail">
                <span>📍</span>
                <div>
                  <strong>Visit Us</strong>
                  <p>School address goes here, Karachi, Pakistan</p>
                </div>
              </div>
              <div className="contact-detail">
                <span>☎</span>
                <div>
                  <strong>Call Us</strong>
                  <p>+92 XXX XXXXXXX</p>
                </div>
              </div>
              <div className="contact-detail">
                <span>✉</span>
                <div>
                  <strong>Email Us</strong>
                  <p>info@brightfuture.example</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send an Inquiry</h3>
              <p>Fill in the details below to get started.</p>

              <label htmlFor="parentName">Parent / Guardian Name</label>
              <input
                id="parentName"
                name="parentName"
                type="text"
                placeholder="Your full name"
                required
              />

              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />

              <label htmlFor="program">Interested Program</label>
              <select id="program" name="program" defaultValue="" required>
                <option value="" disabled>
                  Select a program
                </option>
                <option>Early Years</option>
                <option>Primary School</option>
                <option>Middle School</option>
                <option>General Inquiry</option>
              </select>

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help?"
                rows="4"
                required
              />

              <button className="btn btn-primary submit-btn" type="submit">
                Send Inquiry <span>↗</span>
              </button>

              {submitted && (
                <p className="success-message" role="status">
                  Thank you! This demo form has been submitted locally.
                  No information has been sent to a school.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-icon">B</span>
            <span className="brand-copy">
              <strong>BRIGHT FUTURE</strong>
              <small>ACADEMY</small>
            </span>
          </a>
          <p>Inspiring young minds. Building brighter tomorrows.</p>
          <a href="#home" className="back-top">
            Back to top ↑
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Bright Future Academy</span>
          <span>School website concept demo by Rafia Zehra</span>
        </div>
      </footer>
    </>
  );
}

export default App;
