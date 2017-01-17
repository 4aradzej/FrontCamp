//get
//post
//route -> service doing db conn using schems
var schema = require('articleSchema');
var mongoose = require('mongoose');

module.exports = class ArticleService{
    constructor() {
        this.articleModel = mongoose.model('Article', schema);
    }

    createArticle(artData, callback)
    {
        var created = new this.articleModel(artData);
        created.save();
        
        if (callback){
            callback(created);
        }
    }
    
    getArticleByTitle(title, callback){
        var foundArticle = this.articleModel.find({ 'title': title}, callback)
    }

    getAll(callback){
        
        var query = this.articleModel.find({});
        if (callback) {
            callback(content);
        }
    };
}

