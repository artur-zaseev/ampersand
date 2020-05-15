import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import Main from "../pages/Main";
import Bestsellers from "../pages/Bestsellers";
import Catalog from "../pages/Catalog";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Delivery from "../pages/Delivery";
import Faq from "../pages/Faq";
import CatalogItem from "./CatalogItem";
import Basket from "../pages/Basket";
import Ready from "../pages/Ready";

// Router
import {BrowserRouter, Route} from "react-router-dom";

// Redux
import {useDispatch} from "react-redux";

// Actions
import {setWindowWidth, syncBasket, syncFaq} from "../redux-actions";

export default function App() {
  let [pageTitle, setPageTitle] = useState("амперсанд");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWindowWidth(window.innerWidth));
    window.addEventListener("resize", () => {
      dispatch(setWindowWidth(window.innerWidth));
    });
    dispatch(syncBasket());
    dispatch(syncFaq());
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar title={pageTitle} />
        <div className="content">
          <Route
            path="/"
            exact
            component={() => (
              <>
                {setPageTitle("амперсанд")}
                <Main />
              </>
            )}
          />
          <Route
            path="/bestsellers"
            component={() => (
              <>
                {setPageTitle("Бестселлеры")}
                <Bestsellers />
              </>
            )}
          />
          <Route
            path="/catalog"
            exact
            component={() => (
              <>
                {setPageTitle("Каталог")}
                <Catalog />
              </>
            )}
          />
          <Route
            path="/catalog/:id"
            component={match => (
              <>
                {setPageTitle("О книге")}
                <CatalogItem match={match.match} />
              </>
            )}
          />
          <Route
            path="/about"
            component={() => (
              <>
                {setPageTitle("О нас")}
                <About />
              </>
            )}
          />
          <Route
            path="/contacts"
            component={() => (
              <>
                {setPageTitle("Контакты")}
                <Contacts />
              </>
            )}
          />
          <Route
            path="/delivery"
            component={() => (
              <>
                {setPageTitle("Доставка")}
                <Delivery />
              </>
            )}
          />
          <Route
            path="/faq"
            component={() => (
              <>
                {setPageTitle("FAQ")}
                <Faq />
              </>
            )}
          />
          <Route
            path="/basket"
            component={() => (
              <>
                {setPageTitle("Корзина")}
                <Basket />
              </>
            )}
          />
          <Route
            path="/ready"
            component={() => (
              <>
                {setPageTitle("амперсанд")}
                <Ready />
              </>
            )}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}
