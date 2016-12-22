'use strict';

require('es6-promise/auto');
require('fetch-polyfill');

import {NewsContainer} from './Repositories/repository';
import {GetNewsFeedCommand} from './commands/getNewsFeedCommand';

document.addEventListener('DOMContentLoaded', () => {
    
    let command = new GetNewsFeedCommand('sky-sports-news');
    let container = document.getElementById("container");
    let mngr = new NewsContainer(container);
    mngr.store(command);

    let button = document.getElementById('btn');
    button.addEventListener('click', () => {
        console.log('CLICK');
        mngr.executeGainingnews();
    });
});  