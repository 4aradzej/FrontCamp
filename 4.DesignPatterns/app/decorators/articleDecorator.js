'use strict';

class ArticleDecorator {
    constructor(articleFeed) {
    this.component = articleFeed;
}

    render() { 
        return `<div style='dorder: 5px solid red;'>${this.component.GetResult()}</div>`;         
    }
}

export {ArticleDecorator}