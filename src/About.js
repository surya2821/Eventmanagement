import logo from './logo.svg';
import './Home.css';
import image1 from './images/g3.jpg'
import image2 from './images/g6.jpg';
import image3 from './images/e1.jpg';
import image4 from './images/e2.jpg';
import image5 from './images/e3.png';
import image6 from './images/saisurya.png';
import image7 from './images/deepthi.jpg';
import image8 from './images/nethri.jpg';
import image10 from './images/about.png';
import pms from './images/pms.gif';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NSD Event Management System</title>
    <header className="header">
      <a href="#" className="logo">Sparks Events</a>
      <nav className="navbar">
        <Link to="/">
        <a href="#home">home</a></Link>
        <a href="#service">service</a>
        <a href="#about">about</a>
        <a href="#gallery">gallery</a>
        <a href="#price">price</a>
        <a href="#review">review</a>
        <Link to="/Contact">
        <a href="/Contact">contact</a> </Link>
        <a href="#LIST OF EVENTS">Events</a>
      </nav>
      <div id="menu-bars" className="fas fa-bars" />
    </header>
    <center>
    <img src={pms}/>
    </center>
    <section className="service" id="service">
      <h1 className="heading"> our <span>services</span> </h1>
      <div className="box-container">
        <div className="box">
          <i className="fas fa-map-marker-alt" />
          <h3>venue selection</h3>
          <p>Select the venue depends on the location.</p>
        </div>
        <div className="box">
          <i className="fas fa-envelope" />
          <h3>invitation card</h3>
          <p>Just say we customise your ideas and we also define the strucher and aslo the given that given </p>
        </div>
        <div className="box">
          <i className="fas fa-music" />
          <h3>entertainment</h3>
          <p>unlimited entertainment you want.</p>
        </div>
        <div className="box">
          <i className="fas fa-utensils" />
          <h3>food and drinks</h3>
          <p>Give your menu we will make for you.</p>
        </div>
        <div className="box">
          <i className="fas fa-photo-video" />
          <h3>photos and videos</h3>
          <p>The best quality images(4k) and videos are taken.</p>
        </div>
        <div className="box">
          <i className="fas fa-birthday-cake" />
          <h3>custom food</h3>
          <p>Veg and Non Veg.</p>
        </div>
      </div>
    </section>
    <section className="about" id="about">
      <h1 className="heading"><span>about</span> us </h1>
      <div className="images">
        <div className="images">
          <img src={image10} alt="" />
        </div>
        <div className="content">
        </div>
      </div>
    </section>
    <section className="gallery" id="gallery">
      <h1 className="heading">our <span>gallery</span></h1>
      <div className="box-container">
        <div className="box">
        <img src={image3} alt="" />
          <h3 className="title">photos and events</h3>
          <div className="icons">
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-share" />
            <a href="#" className="fas fa-eye" />
          </div>
        </div>
        <div className="box">
        <img src={image5} alt="" />
          <h3 className="title">photos and events</h3>
          <div className="icons">
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-share" />
            <a href="#" className="fas fa-eye" />
          </div>
        </div>
        <div className="box">
        <img src={image4} alt="" />
          <h3 className="title">photos and events</h3>
          <div className="icons">
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-share" />
            <a href="#" className="fas fa-eye" />
          </div>
        </div>
        <div className="box">
    <img src={image1} alt="" />
          <h3 className="title">photos and events</h3>
          <div className="icons">
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-share" />
            <a href="#" className="fas fa-eye" />
          </div>
        </div>
        <div className="box">
        <img src={image2} alt="" />
          <h3 className="title">photos and events</h3>
          <div className="icons">
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-share" />
            <a href="#" className="fas fa-eye" />
          </div>
        </div>
      </div>
    </section>
    <section className="price" id="price">
      <h1 className="heading"> our <span>price</span> </h1>
      <div className="box-container">
        <div className="box">
          <h3 className="title">for birthdays</h3>
          <h3 className="amount">25000/-</h3>
          <ul>
            <li><i className="fas fa-check" />full services</li>
            <li> <i className="fas fa-check" /> decorations </li>
            <li> <i className="fas fa-check" /> music and photos </li>
            <li> <i className="fas fa-check" /> food and drinks </li>
            <li> <i className="fas fa-check" /> invitation card </li>
          </ul>
          <Link to="/payment">
          <a href="" className="btn">check out</a>
          </Link>
        </div>
        <div className="box">
          <h3 className="title">for weddings</h3>
          <h3 className="amount">4000000/-</h3>
          <ul>
            <li><i className="fas fa-check" />full services</li>
            <li> <i className="fas fa-check" /> decorations </li>
            <li> <i className="fas fa-check" /> music and photos </li>
            <li> <i className="fas fa-check" /> food and drinks </li>
            <li> <i className="fas fa-check" /> invitation card </li>
          </ul>
          <Link to="/payment">
          <a href="" className="btn">check out</a>
          </Link>
        </div>
        <div className="box">
          <h3 className="title">for concerts</h3>
          <h3 className="amount">15000/-</h3>
          <ul>
            <li><i className="fas fa-check" />full services</li>
            <li> <i className="fas fa-check" /> decorations </li>
            <li> <i className="fas fa-check" /> music and photos </li>
            <li> <i className="fas fa-check" /> food and drinks </li>
            <li> <i className="fas fa-check" /> invitation card </li>
          </ul>
          <Link to="/payment">
          <a href="" className="btn">check out</a>
          </Link>
        </div>
        <div className="box">
          <h3 className="title">for others</h3>
          <h3 className="amount">4500/-</h3>
          <ul>
            <li><i className="fas fa-check" />full services</li>
            <li> <i className="fas fa-check" /> decorations </li>
            <li> <i className="fas fa-check" /> music and photos </li>
            <li> <i className="fas fa-check" /> food and drinks </li>
            <li> <i className="fas fa-check" /> invitation card </li>
          </ul>
          <Link to="/payment">
          <a href="" className="btn">check out</a>
          </Link>
        </div>
      </div>
    </section>
    <section className="reivew" id="review"> 
      <h1 className="heading">client's <span>review</span></h1>
      <div className="review-slider swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <i className="fas fa-quote-right" />
            <div className="user">
            <img src={image6} alt="" />
              <div className="user-info">
                <h3>SAI SURYA</h3>
                <span>CEO</span>
              </div>
            </div>
            <p>Happy soul, keep smiling.......</p>
          </div>
          <div className="swiper-slide box">
            <i className="fas fa-quote-right" />
            <div className="user">
            <img src={image8} alt="" />
              <div className="user-info">
                <h3>Nethri</h3>
                <span>self love........</span>
              </div>
            </div>
            <p>Believe in your self.</p>
          </div>
          <div className="swiper-slide box">
            <i className="fas fa-quote-right" />
            <div className="user">
            <img src={image7} alt="" />
              <div className="user-info">
                <h3>Deepthi</h3>
                <span>Never give up</span>
              </div>
            </div>
            <p>always be happy..........</p>
          </div>
        </div>
      </div>
    </section>
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>branches</h3>
          <a href="#"> <i className="fas fa-map-marker-alt" /> Vijayawada </a>
          <a href="#"> <i className="fas fa-map-marker-alt" /> Guntur </a>
          <a href="#"> <i className="fas fa-map-marker-alt" /> Narasaraopet </a>
          <a href="#"> <i className="fas fa-map-marker-alt" /> Hyderabad </a>
          <a href="#"> <i className="fas fa-map-marker-alt" /> Chennai </a>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <a href="#"> <i className="fas fa-arrow-right" /> home </a>
          <a href="#"> <i className="fas fa-arrow-right" /> service </a>
          <a href="#"> <i className="fas fa-arrow-right" /> about </a>
          <a href="#"> <i className="fas fa-arrow-right" /> gallery </a>
          <a href="#"> <i className="fas fa-arrow-right" /> price </a>
          <a href="#"> <i className="fas fa-arrow-right" /> reivew </a>
          <a href="#"> <i className="fas fa-arrow-right" /> contact </a>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="#"> <i className="fas fa-phone" /> 12345678</a>
          <a href="#"> <i className="fas fa-phone" /> 8096551517 </a>
          <a href="#"> <i className="fas fa-envelope" /> allasaisurya124@gmail.com </a>
          <a href="#"> <i className="fas fa-envelope" /> nethripendem@gmail.com</a>
          <a href="#"> <i className="fas fa-envelope" /> deepthisripittala@gmail.com</a>
          <a href="#"> <i className="fas fa-map-marker-alt" /> Guntur, india -522004</a>
        </div>
        <div className="box">
          <h3>follow us</h3>
          <a href="https://www.facebook.com/saisurya.alla.3"> <i className="fab fa-facebook-f" /> facebook </a>
          <a href="https://twitter.com/Suryaalla2818"> <i className="fab fa-twitter" /> twitter </a>
          <a href="https://www.instagram.com/surya__2818/"> <i className="fab fa-instagram" /> instagram </a>
          <a href="https://www.linkedin.com/in/saisurya2818/"> <i className="fab fa-linkedin" /> linkedin </a>
        </div>
      </div>
    </section>
    {/* footer section ends */}
    {/* theme toggler  */}
    <div className="theme-toggler">
      <div className="toggle-btn">
        <i className="fas fa-cog" />
      </div>
      <h3>choose color</h3>
      <div className="buttons">
        <div className="theme-btn" style={{background: '#3867d6'}} />
        <div className="theme-btn" style={{background: '#f7b731'}} />
        <div className="theme-btn" style={{background: '#ff0033'}} />
        <div className="theme-btn" style={{background: '#20bf6b'}} />
        <div className="theme-btn" style={{background: '#fa8231'}} />
        <div className="theme-btn" style={{background: '#FC427B'}} />
      </div>
    </div>
  </div>
);
}

export default App;