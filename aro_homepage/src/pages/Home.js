import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from "../components/ProgressBar";
import cn from "classnames";
import { ReactComponent as Aro_logo } from "../images/Aro_logo.svg";
import "../styles/Home.scss";
import GoogleButton from "../components/GoogleButton";
import AROUserimage from "../images/ARO_user_image.png";

import { ReactComponent as AROIcon } from "../images/ARO_app_icon.svg";
import { ReactComponent as AROstampImg } from "../images/ARO_stamp_img.svg";
import { ReactComponent as AROGraphImg } from "../images/ARO_graph_img.svg";
import { ReactComponent as ARODiaryImg } from "../images/ARO_diary_img.svg";

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
            <div className={cn("slogan1")}>FIND</div>
            <div className={cn("slogan2")}>YOUR</div>
            <div className={cn("slogan3")}>OWN</div>
            <div className={cn("slogan4")}>AURORA</div>
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
        <div className={cn("Spacer")} />

        <div className={cn("HomeIntroduceContainer1")}>
          <div className={cn("IntroduceContainer1ImgSection")}>
            <AROGraphImg
              className={cn("IntroduceContainer1Img")}
            />
          </div>
          <div
            className={"HomeIntroduceContainer1FeatureContainer"}
          >
            <div className={cn("HomeIntroduceContainer1Feature")}>오로라 수치</div>
            <div className={cn("HomeIntroduceContainer1Description")}>
              매 시간별로 확인할 수 있는 오로라 지수
            </div>
          </div>
        </div>




        <div className={cn("HomeIntroduceContainer2")}>
          <div className={cn("IntroduceContainer2ImgSection")}>
            <AROstampImg
              className={cn("IntroduceContainer2Img")}
            />
          </div>
          <div
            className={"HomeIntroduceContainer2FeatureContainer"}
          >
            <div className={cn("HomeIntroduceContainer2Feature")}>스탬프</div>
            <div className={cn("HomeIntroduceContainer2Description")}>
              약 40개의 여행지별 얻을 수 있는 스탬프
            </div>
          </div>
        </div>


        <div className={cn("HomeIntroduceContainer3")}>
          <div className={cn("IntroduceContainer3ImgSection")}>
            <ARODiaryImg
              className={cn("IntroduceContainer3Img")}
            />
          </div>
          <div
            className={"HomeIntroduceContainer3FeatureContainer"}
          >
            <div className={cn("HomeIntroduceContainer3Feature")}>다이어리</div>
            <div className={cn("HomeIntroduceContainer3Description")}>
              여행의 추억을 사진과 함께 기록
            </div>
          </div>
        </div>





      </div>

      <div className={cn("Spacer")} />

      <div className={cn("HomepageFoot")}>
        <div className={cn("AppIconSection")}>
          <div className={cn("FootAppIcon")}>
            <AROIcon height="70" />
          </div>
          <div className={cn("FootAppName")}>ARO</div>
        </div>
        <div className={cn("FootDeveloperIntroduce")}>소개</div>
        <div className={cn("FootMemberSummary")}>개인정보 처리방침</div>
      </div>
    </div>
  );
};

export default Home;
