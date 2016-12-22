'use strict';

class Component{
    constructor() {
    }

    render(){
    }
}

class Decorator extends Component {
    constructor(component) {
        super()
        this.component = component;
    }

    render(){
        this.component.render();
    }
}

export class ParagraphComponent extends Component {
    constructor(text) {
        super()
        this.text = text;
    }

    render() { 
        return `<p>${this.text}</p>`;         
    }
}

export class PicAndTextDecorator extends Decorator {
    constructor(component, picUrl) {
        super(component)
        this.picUrl = picUrl;
    }

    render(){
        return `<image class='article-image' src=${this.picUrl} /> ${this.component.render()}`;
    }
}

export class ArticleBodyTextDecorator extends Decorator {
    constructor(component) {
        super(component)
    }

    render(){
        return `<div class='article-body'> ${this.component.render()} </div>`;
    }
}

export class ArticleDescriptionTextDecorator extends Decorator {
    constructor(component) {
        super(component)
    }

    render (){
        return `<div class='article-description'> ${this.component.render()} </div>`;
    }
}

export class LinkDecorator extends Decorator {
    constructor(component, url) {
        super(component)
        this.url = url;
    }

    render (){
        return `<a href=${this.url}>${this.component.text}</a>`;
    }
}