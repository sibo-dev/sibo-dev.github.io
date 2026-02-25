import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(
            "Remember to engage with my portfolio and give your feedback! 👍"
          )}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Portfolio:{" "}
          <a
            href="https://github.com/sibo-dev/sibo-dev.github.io"
            target="_blank"
            rel="noreferrer"
          >
            Sibonelo Nkosi
          </a>
        </p>
      </div>
    </Fade>
  );
}
