import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import DrawerCustom from "../../custom/Drawer/index";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../asset/logo.png";
import { menuData, MenuItem } from "../../data/menu"; 
export default function HeaderMobile() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMenu(menuData)
    const handleScroll = () => setScrolled(window.scrollY > 1);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    setDrawerOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <img
          src={Logo}
          alt="Logo"
          className="logo"
          onClick={() => handleNavigate("/")}
        />
        <MenuOutlined
          className={`menu-icon ${scrolled ? "scrolled" : ""}`}
          onClick={() => setDrawerOpen(true)}
        />
      </div>

      <DrawerCustom
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={300}
        placement="right"
        radius={{ bottomLeft: "2px", topLeft: "2px" }}
      >
        <ul className="menu-list-mobile">
          {menu.map((item) => {
            const isActive = item.path === location.pathname;
            return (
              <li key={item.id} className="font-kodchasan">
                <button
                  className={`nav-link-mobile ${
                    isActive ? "active-mobile" : ""
                  } ${scrolled ? "scrolled-mobile" : ""} font-kodchasan`}
                  onClick={() => handleNavigate(item.path)}
                >
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </DrawerCustom>
    </header>
  );
}
