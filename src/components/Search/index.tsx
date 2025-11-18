import React, { useEffect, useState } from "react";
import DesktopSearch from "./Desktop/index";
import MobileSearch from "./Mobile/index";

interface IndexHeaderProps {
  onSearch: (data: { name: string; year: any }) => void;
}

const IndexHeader: React.FC<IndexHeaderProps> = ({ onSearch }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1023);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? (
    <MobileSearch onSearch={onSearch} />
  ) : (
    <DesktopSearch onSearch={onSearch} />
  );
};

export default IndexHeader;
