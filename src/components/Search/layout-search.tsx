import React, { ReactNode, useState } from "react";
import IndexHeader from "./index";
import Footer from "../../layout/footer/footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [searchData, setSearchData] = useState<{ name: string; year: any } | null>(null);

  return (
    <div className="main-layout">
      <IndexHeader onSearch={(data) => setSearchData(data)} />
      {React.cloneElement(children as React.ReactElement<any>, { searchData })}
      <Footer />
    </div>
  );
};

export default MainLayout;
