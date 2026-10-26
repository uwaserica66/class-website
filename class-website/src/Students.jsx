function Students({ className }) {
  const students = [
    {
      id: 'S001',
      name: 'Mugisha Emmanuel',
      trade: 'Software Development'
    },
    {
      id: 'S002',
      name: 'Student Two',
      trade: 'Software Development'
    },
    {
      id: 'S003',
      name: 'Student Three',
      trade: 'Software Development'
    },
    {
      id: 'S004',
      name: 'Student Four',
      trade: 'Software Development'
    },
    {
      id: 'S005',
      name: 'Student Five',
      trade: 'Software Development'
    }
  ];

  return (
    <section>
      <h2>Our Students</h2>

      <p>Class: {className}</p>

      <p>
        The following list presents students in our Software
        Development class.
      </p>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Trade: {student.trade}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Students;