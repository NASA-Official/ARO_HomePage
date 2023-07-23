import React from "react";
import ProgressBar from "../components/ProgressBar";
import cn from "classnames";
import { ReactComponent as Aro_logo } from "../images/Aro_logo.svg";
import "../styles/Home.scss";
import GoogleButton from "../components/GoogleButton";
import AROUserimage from "../images/ARO_user_image.png";

const Home = () => {
  return (
    <div className={cn("Homepage")}>
      <ProgressBar />
      <div className={cn("Homepage_body")}>
        <div className={cn("logo_container")}>
          <Aro_logo width="160" height="100" />
        </div>

        <div className={cn("HomeIntroduceContainer")}>
          <div className={cn("aro_slogan")}>
            FIND YOUR OWN AURORA
            <div className={cn("GoogleButtonContainer")}>
              <GoogleButton className={cn("GoogleButton")} />
            </div>
          </div>

          <div className={cn("ARO_user_image_container")}>
            <img
              src={AROUserimage}
              alt="AROUserImage"
              className={cn("AROUserImage")}
            />
          </div>
        </div>
      </div>
      <div className={cn("Homepage_foot")}></div>
    </div>
  );
};

export default Home;
