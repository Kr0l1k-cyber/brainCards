'use strict';
import { createElement } from "../helper/createElement.js";

export const createHeader = (parent) => {
    const container = createElement('div', {
        className: 'container',
    });
    container.className = 'container'

    parent.append(container);

    const logo = createElement('img', {
        src: 'img/logo.svg',
        className: 'header__logo',
        alt: 'Логотип сервиса Brain cards',
    });
    
    container.append(logo);
}