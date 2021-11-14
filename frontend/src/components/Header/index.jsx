import React from "react";
import { DivHeader, Text, Link } from "./styles.js";

export default function Header() {
  return (
    <>
      <DivHeader className="header">
        <Text>
          <Link href="/">Projeto - Mind Consulting</Link>
        </Text>
      </DivHeader>
    </>
  );
}
