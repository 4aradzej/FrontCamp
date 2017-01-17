db.newsposts.deleteOne(
    {
        publishedAt: { $type: 10, $exists: true} 
    }
);