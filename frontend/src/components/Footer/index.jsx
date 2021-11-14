import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { DivFooter, Text } from "./styles.js";

export default function Footer() {
  return (
    <>
      <DivFooter>
        Desenvolvido com{" "}
        <FontAwesomeIcon
          icon={faHeart}
          color="red"
          fixedWidth
          transform="left-2"
        />
        por <Text>Carlos Eduardo Miranda</Text>
      </DivFooter>
    </>
  );
}
