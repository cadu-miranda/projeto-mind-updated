import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        Desenvolvido com{" "}
        <FontAwesomeIcon
          icon={faHeart}
          color="red"
          fixedWidth
          transform="left-2"
        />
        por <strong>Carlos Eduardo Miranda</strong>
      </footer>
    </>
  );
}
