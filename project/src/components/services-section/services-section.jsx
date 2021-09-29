import React from 'react';
import {useState} from 'react';
import {IMAGE_WIDTH, TabType} from '../../const.js';

export default function ServicesSection() {
  const [offset, setOffset] = useState(0);
  const [initialCordinate, setInitialCordinate] = useState(0);
  const [resultCordinate, setResultCordinate] = useState(0);
  const [activeTab, setActiveTab] = useState(TabType.VAULT);

  const makeSwipe = (evt) => {
    setResultCordinate(evt.changedTouches[0].clientX);
    if (initialCordinate < resultCordinate && offset < 0) {
      setOffset(offset + IMAGE_WIDTH);
    }
    if (initialCordinate > resultCordinate && offset > - (evt.currentTarget.childNodes[0].childNodes[0].childNodes.length - 1) * IMAGE_WIDTH) {
      setOffset(offset - IMAGE_WIDTH);
    }
  }

  return (
    <div className="container services-section__main-container">
      <ul className="services-section__tabs">
        <li className="services-section__tabs-item">
          <button
            className={`services-section__tabs-button services-section__tabs-button--first ${activeTab === TabType.VAULT ? 'services-section__tabs-button--active' : ''}`}
            onClick={() => setActiveTab(TabType.VAULT)}
          >
            Вклады
          </button>
        </li>
        <li className="services-section__tabs-item">
          <button
            className={`services-section__tabs-button services-section__tabs-button--second ${activeTab === TabType.CREDIT ? 'services-section__tabs-button--active' : ''}`}
            onClick={() => setActiveTab(TabType.CREDIT)}
          >
            Кредиты
          </button>
        </li>
        <li className="services-section__tabs-item">
          <button
            className={`services-section__tabs-button services-section__tabs-button--third ${activeTab === TabType.SECURITY ? 'services-section__tabs-button--active' : ''}`}
            onClick={() => setActiveTab(TabType.SECURITY)}
          >
            Страхование
          </button>
        </li>
        <li className="services-section__tabs-item">
          <button
            className={`services-section__tabs-button services-section__tabs-button--fourth ${activeTab === TabType.SERVICE ? 'services-section__tabs-button--active' : ''}`}
            onClick={() => setActiveTab(TabType.SERVICE)}
          >
            Онлайн-сервисы
          </button>
        </li>
      </ul>
      <div
        className="services-section"
        onTouchStart={(evt) => setInitialCordinate(evt.touches[0].clientX)}
        onTouchEnd={makeSwipe}
      >
        <div className="services-section__container container">
          <ul className="services-section__items" style={{left: `${offset}%`}}>
            <li className={`services-section__item services-section__item--first ${activeTab === TabType.VAULT ? 'services-section__item--displayed' : ''}`}>
              <div className="services-section__wrapper">
                <p className="services-section__text">Вклады Лига Банка – это выгодная инвестиция в свое будущее</p>
                <ul className="services-section__list">
                  <li className="services-section__list-item">Проценты по вкладам до 7%</li>
                  <li className="services-section__list-item">Разнообразные условия</li>
                  <li className="services-section__list-item">Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li>
                </ul>
                <button className="services-section__button">Узнать подробнее</button>
              </div>
            </li>
            <li className={`services-section__item services-section__item--second ${activeTab === TabType.CREDIT ? 'services-section__item--displayed' : ''}`}>
              <div className="services-section__wrapper">
                <p className="services-section__text">Лига Банк выдает кредиты под любые цели</p>
                <ul className="services-section__list">
                  <li className="services-section__list-item">Ипотечный кредит</li>
                  <li className="services-section__list-item">Автокредит</li>
                  <li className="services-section__list-item">Потребительский кредит</li>
                </ul>
                <p className="services-section__addition">
                  Рассчитайте ежемесячный платеж <br/> и ставку по кредиту воспользовавшись нашим <span className="services-section__underline">кредитным калькулятором</span>
                </p>
              </div>
            </li>
            <li className={`services-section__item services-section__item--third ${activeTab === TabType.SECURITY ? 'services-section__item--displayed' : ''}`}>
              <div className="services-section__wrapper">
                <p className="services-section__text">Лига Страхование — застрахуем все что захотите</p>
                <ul className="services-section__list">
                  <li className="services-section__list-item">Автомобильное страхование</li>
                  <li className="services-section__list-item">Страхование жизни и здоровья</li>
                  <li className="services-section__list-item">Страхование недвижимости</li>
                </ul>
                <button className="services-section__button">Узнать подробнее</button>
              </div>
            </li>
            <li className={`services-section__item services-section__item--fourth ${activeTab === TabType.SERVICE ? 'services-section__item--displayed' : ''}`}>
              <div className="services-section__wrapper">
                <p className="services-section__text">Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</p>
                <ul className="services-section__list">
                  <li className="services-section__list-item">Мобильный банк, <br/> который всегда под рукой</li>
                  <li className="services-section__list-item">Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</li>
                </ul>
                <button className="services-section__button">Узнать подробнее</button>
              </div>
            </li>
          </ul>
          <ul className="services-section__controls">
            <li className="services-section__control">
              <button
                className={`services-section__control-button ${offset === 0 ? 'services-section__control-button--active' : ''}`}
                aria-label="1 слайд"
              >
              </button>
            </li>
            <li className="services-section__control">
              <button
                className={`services-section__control-button ${offset === -IMAGE_WIDTH * 1 ? 'services-section__control-button--active' : ''}`}
                aria-label="2 слайд"
              >
              </button>
            </li>
            <li className="services-section__control">
              <button
                className={`services-section__control-button ${offset === -IMAGE_WIDTH * 2  ? 'services-section__control-button--active' : ''}`}
                aria-label="3 слайд"
              >
              </button>
            </li>
            <li className="services-section__control">
              <button
                className={`services-section__control-button ${offset === -IMAGE_WIDTH * 3  ? 'services-section__control-button--active' : ''}`}
                aria-label="4 слайд"
              >
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
