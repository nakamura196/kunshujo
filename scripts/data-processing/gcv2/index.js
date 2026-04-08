const { initializeApp } = require('firestore-export-import')

const serviceAccount = require('./serviceAccountKey.json')

initializeApp(serviceAccount)

const { backups } = require('firestore-export-import')

const fs = require("fs");

backups(['doc'/*,'user'*/]) // Array of collection's name is OPTIONAL
  .then((collections) => {

    const data = JSON.stringify(collections, null , "\t")
    
    // 書き込み
    fs.writeFile("bk.json", data, (err) => {
      if (err) throw err;
    });
  })