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
            .catch((error) => {viewError({ message : 'something wrog with getting news;' })} );
    }
    
    function returnNews(newsObj){
        if (newsObj.status == 'ok') {
            viewArticle(newsObj.articles)
            };
        }

    function viewArticle(objects){
        let container = document.getElementById("container");

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
       
        objects.forEach(function(article) {
            let newNode = document.createElement('div');   
            let data = getNewsTemplated(article);
            debugger;
            newNode.innerHTML = data;
            container.appendChild(newNode);
        });
    }

    function getNewsTemplated(article) 
    {
        return `<table border='1' width='100%'>
                    <tr><th><a href=${article.url}>${article.title}</a></th></tr>
                    <tr><td><image src=${article.urlToImage} />${article.description}</td></tr>
                    <tr><td>${article.author}</td></tr>
                </table> `;
    }

    function viewError(e)
    {
        alert(e.message);
    }
})();  


