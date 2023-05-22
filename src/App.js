import './App.css';
import ContactSection from './components/ContactSection';
import Hero from './components/Hero';
import JoinSection from './components/JoinSection';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import SolutionsSection from './components/SolutionsSection';
import WorkSection from './components/WorkSection';

function App() {
  return (
    <>
      <LoadingScreen/>
      <Navbar/>
      <Hero/>
      <SolutionsSection/>
      <WorkSection/>
      <JoinSection/>
      <ContactSection/>
    </>
  );
}

export default App;