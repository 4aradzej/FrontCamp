function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import "babel-polyfill";

(function () {
    'use strict';

    var button = document.getElementById('btn');
    button.addEventListener('click', function () {
        console.log('CLICK');
        getNews();
    });

    function getNews() {
       // var request = new Request("https://newsapi.org/v1/articles?source=sky-sports-news&sortBy=top&apiKey=844b4958cb104b4b9f28fe3e786f6b67");
        var init = { method: 'GET' };

        fetch("https://newsapi.org/v1/articles?source=sky-sports-news&sortBy=top&apiKey=844b4958cb104b4b9f28fe3e786f6b67", init).then(function (r) {
            return r.json();
        }).then(function (data) {
            returnNews(data);
        }).catch(function () {
            new NewsError('something wrog with getting news;').view();
        });
    }

    function returnNews(data) {
        if (data.status == 'ok') {
            (function () {
                var news = data.articles.map(function (a) {
                    return new NewsArticle(a);
                });
                var container = document.getElementById("container");
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }

                news.forEach(function (n) {
                    return viewArticleAsTable(container, n);
                });
            })();
        }
    }

    function viewArticleAsTable(elem, article) {
        if (elem) {
            elem.innerHTML += '\n                <table border=\'1\' width=\'100%\'>\n                    <tr><th><a href=' + article.url + '>' + article.title + '</a></th></tr>\n                    <tr><td><image src=' + article.urlToImage + ' />' + article.description + '</td></tr>\n                    <tr><td>' + article.author + '</td></tr>\n                </table> ';
        }
    }

    /* Classes */

    var NewsError = function () {
        function NewsError(e) {
            _classCallCheck(this, NewsError);

            this.message = e ? e : '';
        }

        NewsError.prototype.view = function view() {
            console.log(this.message);
        };

        return NewsError;
    }();

    var NewsArticle = function NewsArticle(data) {
        _classCallCheck(this, NewsArticle);

        this.author = data.author;
        this.title = data.title;
        this.description = data.description;
        this.url = data.url;
        this.urlToImage = data.urlToImage;
        this.publishedAt = data.publishedAt;
    };
})();
