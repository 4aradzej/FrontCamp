(function(){
    'use strict';
    
    let button = document.getElementById('btn');
            button.addEventListener('click', () => {
                console.log('CLICK');
                getNews(); 
            });
            
    function getNews(){
        let request = new Request("https://newsapi.org/v1/articles?source=sky-sports-news&sortBy=top&apiKey=844b4958cb104b4b9f28fe3e786f6b67"); 
        let init = { method: 'GET' };

        fetch(request, init)
            .then(r => r.json())
            .then((data) => { returnNews(data); })
            .catch(() => {new NewsError('something wrog with getting news;').view();} );
    }
    
    function returnNews(newsObj){
        let news = new News(newsObj);
        debugger;
        if (news.status == 'ok') {
            let container = document.getElementById("container");
            while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
            news.viewArticles(container);
            };
        }
    
    class NewsError{
        constructor(e){
            this.message = e ? e : '';
        }

        view(){
            console.log(this.message);
        }

    }


    class News{
        constructor(data) {
            debugger;
            Object.assign(this, data);
        }

        viewArticles(elem){
            this.articles.forEach(function(a){
                News.viewArticle(elem, a);
            });
        }

        static getNewsTemplated(article) {
            debugger;
            return `<table border='1' width='100%'>
                        <tr><th><a href=${article.url}>${article.title}</a></th></tr>
                        <tr><td><image src=${article.urlToImage} />${article.description}</td></tr>
                        <tr><td>${article.author}</td></tr>
                    </table> `;
        }

        static viewArticle(elem, a) {
            if (elem)
            {
                let newNode = document.createElement('div');   
                let data = News.getNewsTemplated(a);
                
                newNode.innerHTML = data;
                elem.appendChild(newNode);
            }
        }   
    }
})();  


