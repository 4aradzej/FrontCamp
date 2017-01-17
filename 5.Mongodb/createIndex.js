// db.newsposts.createIndex(
//    {
//         author: 1
//    }
// );

db.newsposts.createIndex(
   {
        author: 1,
        likes: 1
   },
   { name: "author_liked"}
);

db.newsposts.createIndex(
   {
        publishedAt: -1
   },
   { name: "date_created"}
);

db.newsposts.createIndex(
   {
        source: 1,
        "comments.user": 1
   },
   { name: "newssource_commentsuser"}
);

