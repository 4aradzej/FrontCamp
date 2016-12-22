'use strict';
// var decorators = require('../decorators/commonDecorators');
import * as decs from '../decorators/commonDecorators';

class Builder {
    constructor() {
    }

    BuildPanel (){
    }
    BuildFeed (){
    }
    BuildFooter (){
    }
}

class NewsBuilder extends Builder {
    constructor(article) {
        super();
        this.markup = ``;
        this.article = article;
   }

    BuildFeed (article){
        var descriptionComponent = new decs.ParagraphComponent(this.article.description);
        var titleComponent = new decs.ParagraphComponent(this.article.title);
        var description = new decs.ArticleDescriptionTextDecorator(descriptionComponent);
        var pic = new decs.PicAndTextDecorator(description, this.article.urlToImage);
        var body = new decs.ArticleBodyTextDecorator(pic);
        
        var link = new decs.LinkDecorator(titleComponent, this.article.url)
        this.markup += link.render() + body.render();
    }

    BuildFooter (){
        this.markup += `<div class='footer' > Written by: ${this.article.author}</div>`;
    }

    GetResult (){
        return this.markup;
    }
}

export {NewsBuilder}