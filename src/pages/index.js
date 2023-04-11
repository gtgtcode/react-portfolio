import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { useState } from "react";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOnAbout, setOnAbout] = useState(true);
  const [isOnPortfolio, setOnPortfolio] = useState(false);
  const [isOnContact, setOnContact] = useState(false);
  const [isOnResume, setOnResume] = useState(false);
  const props = {
    isOnAbout,
    setOnAbout,
    isOnPortfolio,
    setOnPortfolio,
    isOnContact,
    setOnContact,
    isOnResume,
    setOnResume,
  };

  return (
    <main className="">
      <Header {...props} />
      <Navigation {...props} />
    </main>
  );
}
