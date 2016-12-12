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