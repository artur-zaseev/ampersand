import React, {useState, useEffect} from "react";
import anime from "animejs";

// Images
import {ReactComponent as Logo} from "../static/logo.svg";
import {ReactComponent as AboutImage} from "../static/about_image.svg";
import {ReactComponent as ScrollDown} from "../static/icon_scroll_down.svg";

// Redux
import {useSelector} from "react-redux";

export default function About() {
  let [direction, setDirection] = useState(null);
  const winWidth = useSelector(state => state.windowReducer);

  useEffect(() => {
    if (winWidth > 800) {
      direction === "Up" && animation("forward");
      direction === "Down" && animation("back");
    }
  }, [direction]);

  useEffect(() => {
    anime({
      targets: ".morthing",
      d: [
        {
          value:
            "M859.3 157.632C859.3 157.632 754.9 20.2316 554 1.73156C353 -16.6684 297.7 116.132 228.2 183.932C158.4 252.032 13.0999 301.832 1.8999 465.832C-9.3001 629.832 79.4999 712.732 202.8 709.432C326.1 706.132 364.1 734.232 468.7 790.632C573.1 847.032 747.2 823.732 829.4 739.232C911.5 654.732 973.5 613.232 990.7 455.832C1008.2 298.532 859.3 157.632 859.3 157.632Z",
          duration: 1
        },
        {
          value:
            "M847 110.5C847 110.5 747.762 22.4999 546.862 3.99991C345.862 -14.4001 297.615 53.1312 228.115 120.931C158.315 189.031 13.0146 238.831 1.81457 402.831C-9.38543 566.831 79.4146 649.731 202.715 646.431C326.015 643.131 415.762 663.6 520.362 720C624.762 776.4 747.115 760.731 829.315 676.231C911.415 591.731 973.415 550.231 990.615 392.831C1008.11 235.531 847 110.5 847 110.5Z"
        },
        {
          value:
            "M817.5 138C688.5 47.5 670.5 15.3874 546.862 4.0693C345.862 -14.3307 263 34.7 193.5 102.5C123.7 170.6 13.0146 238.901 1.81458 402.901C-9.38542 566.901 80.5 643.601 213.5 676.3C346.5 709 400.482 641.147 514 676.3C591.5 700.3 758.5 714.5 834 657.5C897.5 604 973.415 550.301 990.615 392.901C1008.11 235.601 946.5 228.5 817.5 138Z"
        },
        {
          value:
            "M859.3 105.634C859.3 105.634 770.4 22.0001 569.5 3.50009C368.5 -14.8999 297.7 64.1337 228.2 131.934C158.4 200.034 13.0999 249.834 1.8999 413.834C-9.3001 577.834 79.4999 660.734 202.8 657.434C326.1 654.134 393.9 616.6 498.5 673C603 711.766 732 705 814.5 657.434C920.5 575.7 973.5 561.234 990.7 403.834C1008.2 246.534 859.3 105.634 859.3 105.634Z"
        },
        {
          value:
            "M859.3 157.632C859.3 157.632 754.9 20.2316 554 1.73156C353 -16.6684 297.7 116.132 228.2 183.932C158.4 252.032 13.0999 301.832 1.8999 465.832C-9.3001 629.832 79.4999 712.732 202.8 709.432C326.1 706.132 364.1 734.232 468.7 790.632C573.1 847.032 747.2 823.732 829.4 739.232C911.5 654.732 973.5 613.232 990.7 455.832C1008.2 298.532 859.3 157.632 859.3 157.632Z"
        }
      ],
      easing: "linear",
      duration: 25000,
      loop: true
    });
  }, []);

  const setView = e => {
    if (winWidth > 800) {
      e.deltaY > 0 && setDirection("Up");
      e.deltaY < 0 && setDirection("Down");
    }
  };

  const animation = type => {
    if (type === "forward") {
      anime
        .timeline({
          easing: "linear"
        })
        .add({
          targets: ".first",
          opacity: 0,
          duration: 100
        })
        .add({
          targets: ".first",
          maxHeight: 0,
          duration: 1
        })
        .add({
          targets: ".second",
          maxHeight: 999,
          duration: 300
        })
        .add({
          targets: ".second",
          opacity: 1,
          duration: 200
        });
    } else {
      anime
        .timeline({
          easing: "linear"
        })
        .add({
          targets: ".second",
          opacity: 0,
          duration: 1
        })
        .add({
          targets: ".second",
          maxHeight: 0,
          duration: 1
        })
        .add({
          targets: ".first",
          maxHeight: 300,
          duration: 400
        })
        .add({
          targets: ".first",
          opacity: 1,
          duration: 200
        });
    }
  };

  return (
    <div className="about" onWheel={e => setView(e)}>
      <div className="page_title">
        <h1>
          <Logo />
          <span>О Нас</span>
        </h1>
      </div>
      <div className="about_content">
        <div className="text">
          <div className="first">
            <h1>
              «Амперсанд» — это история о людях, искренне увлеченных своим
              делом.
            </h1>
            <p>
              Наши клиенты любят делиться своими мыслями и переживаниями на
              бумаге, а мы — отправлять эти самые мысли в тираж, рассказывая о
              новых книгах всему миру.
            </p>
          </div>
          <div className="second">
            <p>
              Эта история не только про бизнес. Мы с особой тщательностью
              подходим к выбору тех, кто выпустит свое новое творение под именем
              нашего издательства. Все рукописи, поступающие в нашу редакцию,
              читает каждый участник команды «Амперсанда».
            </p>
            <p>
              Авторы нашего издательства — блогеры и медийные личности,
              освещающие важные и актуальные темы для современного общества
              темы: психологию взаимоотношений, самореализацию, развитие
              креативного мышления и поиск жизненной гармонии.
            </p>
            <p>
              Для нас каждый новый проект — интересная, но вместе с тем сложная
              задача. В сплоченном сотрудничестве с писателем мы всегда
              стремимся создать уникальный и полезный продукт, который сможет
              занять особое место на книжной полке читателя.
            </p>
          </div>
        </div>
        <div className="image">
          <AboutImage />
        </div>
      </div>
      <div className="about_scrollIcon">
        <ScrollDown />
      </div>
    </div>
  );
}
