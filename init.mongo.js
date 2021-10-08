db.words.remove({});

let wordsDB;

fetch("./wj3.json")
  .then(response => response.json())
  .then(json => wordsDB = json);

db.words.insertMany(issuesDB);


