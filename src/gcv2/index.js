const { initializeApp } = require('firestore-export-import')

const serviceAccount = require('./serviceAccountKey.json')

initializeApp(serviceAccount)

const { backups } = require('firestore-export-import')

const fs = require("fs");

backups(['doc'/*,'user'*/]) // Array of collection's name is OPTIONAL
  .then((collections) => {
    // You can do whatever you want with collections
    //console.log(JSON.stringify(collections))

    const data = JSON.stringify(collections, null , "\t")
    
    // 書き込み
    fs.writeFile("bk.json", data, (err) => {
      if (err) throw err;
      console.log('正常に書き込みが完了しました');
    });
  })