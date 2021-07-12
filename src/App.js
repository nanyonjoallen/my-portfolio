// import './App.css';
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import './App.css';
import Particles from "react-particles-js";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from "./components/Experience";
import { Parallax } from "react-parallax";
import Container from  "react-bootstrap/Container";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <div>
      <Particles
      params={{
        particles:{
          number:{
            value:30,
            density: {
            enable:true,
            value_area: 900
          }
        },
        shape:{
          type: "circle",
          stoke:{
            widith:6,
            color: "blue"
          }
        }
      }
      }}
      />
      <NavigationBar/> 
      <Header/> 
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require('./images/img1.jpeg')}
          bgImageAlt="the image"
          strength={-200}>
        <Container className="container-box rounded">
          <Fade duration ={500}>
            {/* <About/> */}
          </Fade>  
        </Container>   
        </Parallax>       
      </div>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
      </div>
        
  );
}

export default App;
