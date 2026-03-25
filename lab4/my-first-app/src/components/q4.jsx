import { NavLink, Route, Routes } from "react-router-dom";

function HomePage() {
  return <p>Welcome to the Home page.</p>;
}

function AboutPage() {
  return <p>This is the About page of the mini router demo.</p>;
}

function ContactPage() {
  return <p>Contact: example@example.com</p>;
}

function RouterPages() {
  return (
    <section className="task-card">
      <h2>Q4: React Router Multi Page</h2>
      <nav className="sub-nav">
        <NavLink to="home">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <div className="panel">
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </section>
  );
}

export default RouterPages;
