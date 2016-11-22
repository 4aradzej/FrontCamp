'use strict';

function addTimer(){
//
}

function getNews(){
    var request = new Request("https://newsapi.org/v1/articles?source=sky-sports-news&sortBy=top&apiKey=844b4958cb104b4b9f28fe3e786f6b67"), 
    init = { method='GET' };

    fetch(request, init)
        .then(r => r.json())
        .then((data) => { returnNews(data); })
        .catch((error) => {viewError(new { ["message"] : 'something wrog with getting news;' })} );
}

function returnNews(newsObj){
    if (newsObj.status == 'ok') {
        viewArticle(newsObj.articles)
        };
    }

function viewArticle(objects)
{
    var container = document.getElementById("container");

    while (container.firstChild) {
    myNode.removeChild(myNode.firstChild);

    var newContent = newsTemplate(objects);
    container.appendChild(newContent);
}

function viewError(e)
{
    alert(e.message);
}

const newsTemplate = articles => html`
        <table>
        ${articles.map(article => html`
            <tr><a src=$${article.url}>$${article.title}</a></tr>
            <tr><td>$${article.author}</td></tr>
            <tr><td><image src=$${article.urlToImage} /></td<td>$${article.description}</td><</tr>
            <tr>$${article.author}</tr>
        `)}
        </table>
    `;

  


