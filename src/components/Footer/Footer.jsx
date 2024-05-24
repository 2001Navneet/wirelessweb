import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Discover premium audio gear and stylish accessories for your
            lifestyle at our online store.
          </div>
        </div>
        <div className="col">
          <div className="title">contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Banglore,110129,</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone:78964573541,</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text"></div>Email: shop@nav.com
          </div>
        </div>
        <div className="col">
          <div className="title">Category</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speakers</div>
          <div className="text">Wireless Earbuds</div>
          <div className="text">Home Theatre</div>
          <div className="text">Projectors</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">Created by Navneet as minor Project</div>
        </div>
        <img src={Payment} />
      </div>
    </footer>
  );
};
// b3cb378fcda97e737ac857c51ac09d94f56ea8527597be53cceee79ee0ddda8ba9406bdc55de1295add6281224a9b7496db36b4405ee26eb61e59f07b8da6960cb82e9522ff07f53811fe937900a2cc2c5d8fe4114fa7c53cf800121e1eab382153ff66e977cce82fcb08383fd01faf49209a91d9a978029d7685e4f644ac5b5
export default Footer;
