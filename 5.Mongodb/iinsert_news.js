conn = new Mong("mongodb://<AlexR92>:<!QAZ2wsx>@ds113628.mlab.com:13628");
db = conn.getDB("mynews");
db.getCollection("newsposts").insert(
    {
        source: "sky-sports-news",
        author: "By Lyall Thomas",
        title: "Liverpool boss Jurgen Klopp warns Reds: 'We have to keep on going'",
        description: "Liverpool boss Jurgen Klopp insists they have only set the base for their season and can still improve as they chase the Premier League title.",
        url: "http://www.skysports.com/football/news/11669/10719464/liverpool-boss-jurgen-klopp-happy-with-reds-at-halfway-point",
        urlToImage: "http://e0.365dm.com/17/01/150x150/skysports-premier-league-football-jurgen-klopp-liverpool-shouting-animiated_3863633.jpg",
        publishedAt: "2017-01-06T10:04:00Z",
        comments: [{user: "admin", message: "heheh..."}, {user: "admin", message: "never guess who wrote thiss=)..."}],
        likes: 1
    }
);
