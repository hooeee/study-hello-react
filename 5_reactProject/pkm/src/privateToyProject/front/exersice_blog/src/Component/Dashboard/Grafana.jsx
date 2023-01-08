import "./Grafana.css";
import React, { useState } from "react";
function Grafana() {
  const [isVisible, setIsVisible] = useState(1);

  return (
    <>
      <div>
        <div className="grafana-tab-main">
          <ul className="front-ul">
            <li
              className={isVisible == 0 ? "on-li-style" : "off-li-style"}
              onClick={() => {
                setIsVisible(0);
              }}
            >
              운동 데이터
            </li>
            <li
              className={isVisible == 1 ? "on-li-style" : "off-li-style"}
              onClick={() => {
                setIsVisible(1);
              }}
            >
              운동 세부데이터
            </li>
          </ul>
        </div>
        <div className="grafana-style">
          <div className="grafana-content-main">
            {isVisible == 0 ? (
              <>
                <div className="on-li-style">운동 데이터</div>
                <iframe
                  src="http://3dpit.iptime.org:3000/d/7iZhYOPnk12/undong_daesibodeu?orgId=1&from=1641168000000&to=1672358400000"
                  width="1000px"
                  height="8100px"
                  frameborder="0"
                ></iframe>
              </>
            ) : (
              <>
                <div className="on-li-style">운동 세부데이터</div>
                <iframe
                  src="http://3dpit.iptime.org:2905"
                  width="1000px"
                  height="8100px"
                  frameborder="0"
                ></iframe>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Grafana;
