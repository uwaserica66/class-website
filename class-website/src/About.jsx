function About({ schoolName, className }) {
  return (
    <section>
      <h2>About Our Class</h2>

      <p>School: {schoolName}</p>
      <p>Class: {className}</p>

      <h3>Purpose of This Website</h3>

      <p>
        The purpose of this website is to introduce our class,
        provide information about students, and explain the subjects
        and skills we study.
      </p>

      <h3>About Software Development</h3>

      <p>
        Software Development is the process of planning, designing,
        programming, testing, and maintaining computer applications.
        Students learn to solve problems by developing software.
      </p>

      <h3>Subjects and Skills We Learn</h3>

      <ul>
        <li>Front-End Development with ReactJS</li>
        <li>Back-End Development and Database Management</li>
        <li>HTML and JavaScript Programming</li>
        <li>Software Testing and Deployment</li>
        <li>Git and GitHub Version Control</li>
      </ul>
    </section>
  );
}

export default About;