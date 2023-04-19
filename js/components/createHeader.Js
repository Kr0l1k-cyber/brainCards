'use strict';

export const createHeader = (parent) => {
    const container = document.createElement('div');
    container.className = 'container'

    parent.append(container);

    const logo = new Image();
    logo.src = 'img/logo.svg';
    logo.className = 'header__logo';
    logo.alt = 'Логотип сервиса Brain cards';

    container.append(logo);
}