import React from "react";
import {Link} from "react-router-dom";

export default function SidebarNav({toggleSidebar}) {
  return (
    <nav>
      <ul>
        <li>
          <Link onClick={() => toggleSidebar()} to="/bestsellers">
            Бестселлеры
          </Link>
        </li>
        <li>
          <Link onClick={() => toggleSidebar()} to="/catalog">
            Каталог
          </Link>
        </li>
        <li>
          <Link onClick={() => toggleSidebar()} to="/about">
            О Нас
          </Link>
        </li>
        <li>
          <Link onClick={() => toggleSidebar()} to="/contacts">
            Контакты
          </Link>
        </li>
        <li>
          <Link onClick={() => toggleSidebar()} to="/delivery">
            Доставка
          </Link>
        </li>
        <li>
          <Link onClick={() => toggleSidebar()} to="/faq">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
