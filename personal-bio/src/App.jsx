import './App.css'

// Component 1: Introduction
function Introduction({ name, bio }) {
  return (
    <header className="hero">
      <img
       src='/profile.jpg'
       alt='profile of Jane'
      />
      <p className="eyebrow">WELCOME TO MY PERSONAL PAGE</p>
      <h1>Hi, I'm {name}!</h1>
      <p>{bio}</p>
    </header>
  );
}

// Component 2: About Me
function AboutMe() {
  return (
    <section className="section">
      <h2>About Me</h2>
      <p>
        I am a curious and motivated person who enjoys learning
        new things, developing my skills, and discovering new
        opportunities. I believe in personal growth, creativity,
        and continuous learning.
      </p>
    </section>
  );
}

// Component 3: Reusable Skills component
function Skills({ title, skills }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <span className="skill" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

// Component 4: Hobbies
function Hobbies({ interests }) {
  return (
    <section className="section">
      <h2>My Hobbies & Interests</h2>
      <ul className="hobby-list">
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </section>
  );
}

// Component 5: Contact
function Contact({ email, location }) {
  return (
    <section className="section contact">
      <h2>Contact Me</h2>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>Location: {location}</p>
    </section>
  );
}

// Main App component
function App() {
  return (
    <div className="page">
      <Introduction
        name="Jane"
        bio="A passionate learner who loves creativity, technology, and personal development."
      />

      <main className="content">
        <AboutMe />

        <Skills
          title="Technical Skills"
          skills={["HTML", "CSS", "JavaScript", "React"]}
        />

        <Skills
          title="Personal Skills"
          skills={[
            "Communication",
            "Teamwork",
            "Problem-solving",
            "Time management"
          ]}
        />

        <Hobbies
          interests={[
            "Crocheting",
            "Reading",
            "Going on adventures"
          ]}
        />

        <Contact
          email="njane3554@gmail.com"
          location="Kenya"
        />
      </main>

      <footer>
        <p>© 2026 Jane | My Personal Bio Page</p>
      </footer>
    </div>
  );
}

export default App;
