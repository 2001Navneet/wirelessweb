import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Banner = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  const navigate = useNavigate();
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          {isAuthenticated && (
            <h2>
              <span id="welcome">Welcome</span> {user.name}
            </h2>
          )}
          <h1>Let's Buy</h1>
          <p>
            Elevate your experience with top-notch speakers, headphones,
            watches, and more. Explore innovation and style at our online
            emporium.
          </p>
          <div className="ctas">
            <div className="banner-cta" onClick={() => navigate("/read")}>
              Read More
            </div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img src={BannerImg} alt="banner image" className="banner-img" />
      </div>
    </div>
  );
};

export default Banner;
