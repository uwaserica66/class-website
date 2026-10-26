function Home({
  schoolName,
  className,
  clickCount,
  setClickCount,
  showView
}) {
  return (
    <section>
      <h2>Welcome to Our Class Website</h2>

      <p>School: {schoolName}</p>
      <p>Class: {className}</p>
      <p>Trade: Software Development</p>

      <h3>Welcome Message</h3>

      <p>
        Welcome to our class website. This website introduces our class,
        presents our students, and explains the skills we learn.
      </p>

      <h3>About Our Class</h3>

      <p>
        We are students learning how to design, develop, test, and deploy
        software applications using modern programming technologies.
      </p>

      <h3>Explore Our Website</h3>

      <button onClick={() => showView('About')}>
        Learn About Our Class
      </button>{' '}

      <button onClick={() => showView('Students')}>
        View Students
      </button>{' '}

      <button onClick={() => showView('Contact')}>
        Contact Us
      </button>

      <h3>React Click Counter</h3>

      <p>You have clicked the counter button {clickCount} times.</p>

      <button onClick={() => setClickCount(clickCount + 1)}>
        Click Me
      </button>
    </section>
  );
}

export default Home;