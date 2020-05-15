import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import SidebarNav from "./SidebarNav";
import BasketCounter from "./BasketCounter";

// Images
import {ReactComponent as Logo} from "../static/logo-and-text.svg";
import {ReactComponent as LogoWhiteAndText} from "../static/logo_white_and_text.svg";
import {ReactComponent as SvgBasket} from "../static/basket.svg";
import {ReactComponent as LogoMonolit} from "../static/logo_white_and_text.svg";
import {Burger} from "../static/modules/Burger/Burger";
import {Gerl} from "../static/modules/Gerl/Gerl";
import {LogoAndText} from "../static/modules/LogoAndText/LogoAndText";

// Redux
import {useSelector} from "react-redux";

export default function Sidebar({title}) {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [allBasketCount, setAllBasketCount] = useState(null);
  const winWidth = useSelector(state => state.windowReducer);
  const basket = useSelector(state => state.basketReducer);

  useEffect(() => {
    const _basketAll = basket.reduce((acc, val) => acc + val.count, 0);
    setAllBasketCount(_basketAll);
  }, [basket]);

  const toggleSidebar = () => setSidebar(!isSidebarOpen);
  const isMainPage = () => window.location.pathname === "/";

  return (
    <div className="sidebar">
      <div className="left">
        <div className="top">
          <div className="burger_wrap" onClick={() => toggleSidebar()}>
            <Burger isActiv={isSidebarOpen} />
          </div>
        </div>

        {!isSidebarOpen && isMainPage() && winWidth > 800 && (
          <Link to="/" className="logo">
            <LogoWhiteAndText />
          </Link>
        )}

        {winWidth <= 800 && !isMainPage() && (
          <Link to="/" className="logo">
            <LogoAndText title={title} />
          </Link>
        )}

        {winWidth <= 800 && isMainPage() && (
          <Link to="/" className="logo">
            <LogoMonolit />
          </Link>
        )}

        <Link
          to="/basket"
          className="sidebar_basket_logo"
          onClick={() => setSidebar(false)}
        >
          <div className="counter_wripper">
            <BasketCounter count={allBasketCount} />
          </div>
          <SvgBasket />
        </Link>
      </div>

      <div className={isSidebarOpen ? "right open" : "right"}>
        <Link onClick={() => toggleSidebar()} to="/" className="right_logo">
          <Logo />
        </Link>
        <SidebarNav toggleSidebar={toggleSidebar} />
        <div className="image">
          <Gerl height={window.innerHeight * 0.5} />
        </div>
      </div>
    </div>
  );
}
