//import './App.css';
import Intro from './components/Intro.js'
import Header from './components/Header.js'
import MyStory from './components/MyStory.js'
import Work from './components/Work.js'
import Projects from './components/Projects.js'
import Blogs from './components/Blogs.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <MyStory />
      <Projects />
      <Blogs />
      <Work />
    </div>
  );
}

export default App;
