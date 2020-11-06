import Intro from './components/Intro.js'
import Menu from './components/Menu.js'
import MyStory from './components/MyStory.js'
import Work from './components/Work.js'
import Projects from './components/Projects.js'
import Blogs from './components/Blogs.js'
import styled from 'styled-components';

function App() {

  const Header = styled.h1`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  &:before, &:after {
    content: '';
    border-top: 2px solid;
    margin: 0 20px 0 0;
    flex: 1 0 20px;
  }
  &:after {
    margin: 0 0 0 20px;
  }
  `;


  return (
    <div className="App">
      <Menu />
      <Intro />
      <MyStory Header={Header}/>
      <Projects Header={Header}/>
      <Blogs Header={Header}/>
      <Work Header={Header}/>
    </div>
  );
}

export default App;
