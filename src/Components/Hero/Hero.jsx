import "./Hero.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="navbar">
        <img className="logo" src={logo} alt="" />
        <img className="menu" src={menu} alt="" />
      </div>

      <div className="text-box">
        <h1>Shutter Menu Design</h1>
        <p>
          Press Subscribe Easy Tutorials Hindi YouTube channel to watch more
          videos on website development. <br /> the bell icon to get instant
          noti fication for latest
        </p>
      </div>

      <div className="row">
        <div id="leftCol"></div>
        <div id="rightCol"></div>
      </div>
    </div>
  );
};

export default Hero;
