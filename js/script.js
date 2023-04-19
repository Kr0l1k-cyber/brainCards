'use strict';
import { createHeader } from "./components/createHeader.Js";

const initApp = () => {
    const headerParent = document.querySelector('.header');    
    const app = document.querySelector('#app');

    createHeader(headerParent);

};


initApp();