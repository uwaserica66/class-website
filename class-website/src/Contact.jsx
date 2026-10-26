function Contact({ schoolName, showView }) {
  return (
    <section>
      <h2>Contact Us</h2>

      <p>School: {schoolName}</p>

      <p>Location: Rwanda</p>

      <p>
        Email:{' '}
        <a href="mailto:school@example.com">
          school@example.com
        </a>
      </p>

      <p>
        For more information about our class, please contact the school.
      </p>

      <button onClick={() => showView('Home')}>
        Return to Home
      </button>
    </section>
  );
}

export default Contact;