import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import PropTypes from 'prop-types';

const Home = ({ darkMode }) => {
  return (
    <main>
      <AboutMe darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </main>
  );
};

export default Home;

Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
