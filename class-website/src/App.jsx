import { useState } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Students from './Students.jsx';
import Contact from './Contact.jsx';

function App() {
  const [currentView, setCurrentView] = useState('Home');
  const [clickCount, setClickCount] = useState(0);

  const schoolName = 'EAV Kivumu TSS';
  const className = 'L4 Software Development';

  function showView(view) {
    setCurrentView(view);
  }

  function renderView() {
    switch (currentView) {
      case 'Home':
        return (
          <Home
            schoolName={schoolName}
            className={className}
            clickCount={clickCount}
            setClickCount={setClickCount}
            showView={showView}
          />
        );

      case 'About':
        return (
          <About
            schoolName={schoolName}
            className={className}
          />
        );

      case 'Students':
        return <Students className={className} />;

      case 'Contact':
        return (
          <Contact
            schoolName={schoolName}
            showView={showView}
          />
        );

      default:
        return <Home schoolName={schoolName} className={className} />;
    }
  }

  return (
    <div>
      <header>
        <h1>{schoolName}</h1>
        <p>{className}</p>
      </header>

      <nav>
        <button onClick={() => showView('Home')}>Home</button>{' '}
        <button onClick={() => showView('About')}>About</button>{' '}
        <button onClick={() => showView('Students')}>Students</button>{' '}
        <button onClick={() => showView('Contact')}>Contact</button>
      </nav>

      <main>
        {renderView()}
      </main>

      <footer>
        <p>
          &copy; 2026 {schoolName} - Software Development Class
        </p>
      </footer>
    </div>
  );
}

export default App;