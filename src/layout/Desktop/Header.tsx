import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuItem, menuData } from "../../data/menu";
import Logo from '../../asset/logo.png';
export default function Header() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMenu(menuData);
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
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
        <nav>
          <ul>
            {menu.map((item) => {
              const isActive = item.path === location.pathname;
              return (
                <li key={item.id} >
                  <button
                    className={`nav-link ${isActive ? "active" : ""} ${
                      scrolled ? "scrolled" : ""
                    } font-kodchasan`}
                    onClick={() => handleNavigate(item.path)}
                  >
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
