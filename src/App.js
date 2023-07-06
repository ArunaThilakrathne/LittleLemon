import './App.css';
import Footer from './Components/Footer.js';
import Nav from './Components/Nav.js';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Logo from './Images/Logo .svg'
import Testimonials from './Components/Testimonials';
import About from './Components/About';
function App() {
  return (
    //<></> react fragment
   <>
   <div className="main-grid">
    {/*summary of what a given page is about*/}
    <meta name="description" content="Little Lemon Restaurant"/>

    {/* to give a title for your shared link or shared content. */}
    <meta name="og:title" content="Restaurant"/>

    {/* A title is usually followed by a description, which is what the og:description meta tag is for. */}
    <meta name="og:description" content="Eat delicious foods"/>

    {/* specifies the image to serve when a link is shared on social media.  */}
    <meta name="og:image" content={Logo}/>
    
    <Nav img={Logo}/>
    <Header/>
    <Main/>
    <Testimonials/>
    <About/>
    <Footer/>
    </div>
    </>

  );
}

export default App;
