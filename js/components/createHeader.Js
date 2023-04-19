'use strict';
import { createElement } from "../helper/createElement.js";

export const createHeader = (parent) => {
    const container = createElement('div', {
        className: 'container header__container',
    });
    container.className = 'container'

    parent.append(container);

    const headerLogoLink = createElement('a', {
        href:'#',
        className: 'header__logo-link',
    })

    const logo = createElement('img', {
        src: 'img/logo.svg',
        className: 'header__logo',
        alt: 'Логотип сервиса Brain cards',
    });
    
    headerLogoLink.append(logo);
    container.append(headerLogoLink);
};
/* 

    <div class="container header__container">
        <a class="header__logo-link" href="#">
            <img class="header__logo" src="img/logo.svg" alt="Логотип сервиса Brain Cards">
        </a>
        <h2 class="header__subtitle">Категории</h2>
        <button class="header__btn">Добавить категорию</button>
    </div>
</header>
*/
