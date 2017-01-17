db.newsposts.update(
        {
            author: "admin"
        },
        {
             $inc: { likes: 1 },
        },
        { multi : true }
);

db.newsposts.update(
        {
            likes: { $gte: 9 }
        },
        {
             $set: { comments: {author: "system", message: "Yeah! It's one of the most liked story! "},  },
             $currentDate: { lastCommentDate: true }
        },
        { multi : true }
);