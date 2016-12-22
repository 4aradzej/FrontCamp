'use strict'

require('es6-promise/auto');
require('fetch-polyfill');
import {NewsError} from '../Repositories/repository';

export class GetNewsFeedCommand{
    constructor(source){
        this.newsSource = source;
    }

    execute(){
        let request = new Request(`https://newsapi.org/v1/articles?source=${this.newsSource}&sortBy=top&apiKey=844b4958cb104b4b9f28fe3e786f6b67`, { method: 'GET' }); 

        return new Promise((resolve, reject) => {
            fetch(request)
                .then(r => r.json())
                .then((data) => { if (data.status == 'ok'){ resolve(data)} })
                .catch(() => {new NewsError('something wrog with getting news;').view();} );
  });
        
        
    }
}