'use strict'

require('es6-promise/auto');
require('fetch-polyfill');
import {ArticleDecorator} from '../decorators/articleDecorator';
import {NewsBuilder} from '../builders/newsBuilder';


/* Classes */
class NewsError{
    constructor(e){
        this.message = e ? e : '';
    }

    view(){
        console.log(this.message);
    }

}

class NewsArticle{
    constructor(data) {
        this.author = data.author;
        this.title = data.title;
        this.description = data.description;
        this.url = data.url;
        this.urlToImage = data.urlToImage;
        this.publishedAt = data.publishedAt;
    }      
}

class NewsContainer{
    constructor(containerObj, commands)
    {
        this.container = containerObj;
        if (commands){
            this.commands = commands;
        }
        else{
            this.commands = new Array();
        }
    }

    store(command)
    {
        if (command){
            this.commands.push(command)
        }
    }

    executeGainingnews(commands)
    {
        this.commands.forEach(c => {
            c.execute().then(data => this.returnNews(data));
        });
    }

    returnNews(data){
    if (data.status == 'ok') {

        let news = data.articles.map(a => 
        {
            let articleBuilder = new NewsBuilder(new NewsArticle(a));
            articleBuilder.BuildFeed();
            articleBuilder.BuildFooter();
            return articleBuilder;
        });
        
        while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild);
        }

        news.forEach(n => {
            let markupDecorated = new ArticleDecorator(n);
            this.container.innerHTML += markupDecorated.render();
        });
    }
}

}

export {NewsError, NewsArticle, NewsContainer}