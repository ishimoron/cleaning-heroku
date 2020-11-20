import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import "./styles.css";
import TimerIcon from "@material-ui/icons/Timer";
import '../../../assets/css/animate.css'

function SustainingCleaning() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => set((state) => !state)} className="animated delay-1s fadeInLeft">
      <a.div
        class="c back"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <div className="article-content">
          <div className="article-title">
            <h3>Поддерживающая Уборка</h3>
          </div>
          <ul className="article-info">
            <li>от 650 грн</li>
            <li
              style={{ marginLeft: 20, display: "flex", alignItems: "center" }}
            >
              <TimerIcon />
              3-3,5 часа
            </li>
          </ul>
        </div>
      </a.div>
      <a.div
        class="c front"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <div>
          <p>уборка это очень просто</p>
        </div>
      </a.div>
    </div>
  );
}

export default SustainingCleaning;
