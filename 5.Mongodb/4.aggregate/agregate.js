db.grades.aggregate(
    [
        {
            $project: {
                nonquizScores: {
                    $filter: {
                        input: "$scores",
                        as: "scoreItem",
                        cond: { $ne: [ "$$scoreItem.type", "quiz" ] }
                    }
                },
                student_id: 1,
                class_id: 1   
            } 
        },
        { $unwind: { path: "$nonquizScores", preserveNullAndEmptyArrays: true } },
        { $group: { _id:  {"studentId": "$student_id", "classId": "$class_id"}, averagePerStudent:{$avg:"$nonquizScores.score"}}}, 
        { $group: { _id: "$_id.classId", average: {$avg: "$averagePerStudent"}} },
        { $sort: { "averagePerStudent": -1 } },
        { $limit : 1 }
    ]
);