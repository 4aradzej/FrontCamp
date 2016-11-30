(function () {
    'use strict';

    let button = document.getElementById('btn');
    button.addEventListener('click', () => {
        console.log('CLICK');
        getNews();
    });

    function getNews() {
        let request = new Request("https://newsapi.org/v1/articles?source=sky-sports-news&sortBy=top&apiKey=844b4958cb104b4b9f28fe3e786f6b67");
        let init = { method: 'GET' };

        fetch(request, init).then(r => r.json()).then(data => {
            returnNews(data);
        }).catch(() => {
            new NewsError('something wrog with getting news;').view();
        });
    }

    function returnNews(data) {
        if (data.status == 'ok') {
            let news = data.articles.map(a => new NewsArticle(a));
            let container = document.getElementById("container");
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            news.forEach(n => viewArticleAsTable(container, n));
        }
    }

    function viewArticleAsTable(elem, article) {
        if (elem) {
            elem.innerHTML += `
                <table border='1' width='100%'>
                    <tr><th><a href=${ article.url }>${ article.title }</a></th></tr>
                    <tr><td><image src=${ article.urlToImage } />${ article.description }</td></tr>
                    <tr><td>${ article.author }</td></tr>
                </table> `;
        }
    }

    /* Classes */
    class NewsError {
        constructor(e) {
            this.message = e ? e : '';
        }

        view() {
            console.log(this.message);
        }

    }

    class NewsArticle {
        constructor(data) {
            this.author = data.author;
            this.title = data.title;
            this.description = data.description;
            this.url = data.url;
            this.urlToImage = data.urlToImage;
            this.publishedAt = data.publishedAt;
        }
    }
})();