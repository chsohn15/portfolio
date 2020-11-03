//import './App.css';
import Intro from './components/Intro.js'
import Header from './components/Header.js'
import MyStory from './components/MyStory.js'
import Work from './components/Work.js'
import Projects from './components/Projects.js'

function App() {
  return (
    <div className="App">
      <Header />
      Personal Portfolio
      <Intro />
      <MyStory />
      <Projects />
      <Work />
    </div>
  );
}

export default App;
