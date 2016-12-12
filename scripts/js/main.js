require('es6-promise/auto');
require('fetch-polyfill');
//require('./repository');
import {NewsError, NewsArticle} from './repository';
import {viewArticleAsTable} from './newsTable';

(function(){
    'use strict';

    let button = document.getElementById('btn');
            button.addEventListener('click', () => {
                console.log('CLICK');
                getNews(); 
            });
            
    function getNews(){
        let request = new Request("https://newsapi.org/v1/articles?source=sky-sports-news&sortBy=top&apiKey=844b4958cb104b4b9f28fe3e786f6b67", { method: 'GET' }); 

        fetch(request)
            .then(r => r.json())
            .then((data) => { returnNews(data); })
            .catch(() => {new NewsError('something wrog with getting news;').view();} );
    }
    
    function returnNews(data){
        if (data.status == 'ok') {
            let news = data.articles.map(a => new NewsArticle(a));
            let container = document.getElementById("container");
            while (container.firstChild) {
                    container.removeChild(container.firstChild);
            }

            news.forEach((n) => viewArticleAsTable(container, n));
        }
    }
})();  


