import './Main.css'
import Footer from '../Footer/Footer.js';
import Promo from '../Promo/Promo.js';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/Aboutproject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/Aboutme.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Header from '../Header/Header.js';

function Main(props) {
  return (
    <>
      <Header 
      isLoggedIn={props.isLoggedIn}/>
      <main className='main'>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;