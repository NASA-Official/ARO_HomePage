import React from "react";
import cn from "classnames";
import "../styles/GoogleButton.scss";
import playstoreLogo from "../images/google-play.png"

const GoogleButton = () => {
  return (
    <div className={cn("GoogleButtonPage")}>
      <img src={playstoreLogo} alt="playstoreLogo" className={cn("playstoreLogo")}/>
      <div className={cn("ButtonText")}>Google Play</div>
    </div>
  );
};

export default GoogleButton;
