import React, { useEffect, useState } from "react";
import DesktopHeader from "./Desktop/Header";
import MobileHeader from "./Mobile/Header"
const IndexHeader = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1023);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? <MobileHeader/> : <DesktopHeader />;
};

export default IndexHeader;
