export function viewArticleAsTable(elem, article) {
        if (elem)
        {                     
            elem.innerHTML += `
                <table border='1' width='100%'>
                    <tr><th><a href=${article.url}>${article.title}</a></th></tr>
                    <tr><td><image src=${article.urlToImage} />${article.description}</td></tr>
                    <tr><td>${article.author}</td></tr>
                </table> `;           
        }
    }