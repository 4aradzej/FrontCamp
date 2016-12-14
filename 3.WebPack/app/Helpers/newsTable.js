export function viewArticleAsTable(elem, article) {
        if (elem)
        {                     
            elem.innerHTML += `
                <table border='1' width='100%'>
                    <tr><th><a href=${article.url}>${article.title}</a></th></tr>
                    <tr><td class='article-body'><div class='article-image'><image src=${article.urlToImage} /></div><div class='article-description'>${article.description}</div></td></tr>
                    <tr><td>${article.author}</td></tr>
                </table> `;           
        }
    }   