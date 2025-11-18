import React, { useEffect, useState } from "react";
import TimelineDesktop from "./TimeLineDes";
import TimelineMobile from "./TimeLineMb";
import { Period } from "./interface";
import { getMocThoiGian } from "./callData";

const IndexTimeLine = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [data, setData] = useState<Period[]>([]);

  useEffect(() => {
    getMocThoiGian().then((res) => {
      if (res) setData(res);
    });
  }, []);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1023);

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? (
    <TimelineMobile events={data} />
  ) : (
    <TimelineDesktop events={data} />
  );
};

export default IndexTimeLine;
