const fs = require('fs');
const fss = require('fs-extra');
const path = require('path');
const express = require('express');
const cors = require("cors");
const PORT = process.env.PORT || 3333;

const app = express();

const LIVRES =[
    {
        id: 1,
        titre: "Les heures",
        auteur:"Michael Cunningham",
    },

    {
        id: 2,
        titre: "L ange du Nord",
        auteur: "Kathy Reichs",
    },

    {
        id:3,
        titre: "Operation Sweet Tooth",
        auteur: "Ian McEwan",
    }
]

//connexion front back
app.use(
    cors({
        origin: "*",
    }
    )
);

// tester la connexion
app.get('/', function(req, res) {
    res.send('Connected to API')
})

//adding afolder
app.get('/addFolder', function(req, res) {
    console.log("Folder Added")
    res.send('Folder Added')

    fs.mkdir(path.join('./', 'test'), (err)=>{
        if(err){
            return console.error(err)
        }
    })
})

//deleting non empty and empty folder
app.get('/folderDeleted', function(req, res) {
    console.log("Folder deleted")
    res.send('Folder deleted')

    fs.rmSync(path.join('./', './biblio/test'), { recursive: true }, (err)=>{
        if(err){
            return console.log(err)
        }
    })
})

//adding file
app.get('/addFile', function(req, res) {
    console.log("File added")
    res.send("File added")

for (let livre of LIVRES ) {
    fs.appendFile(`./test/${livre.titre.split(' ').join('_')}.txt`, JSON.stringify(livre), (err)=> {
        if (err){
            console.log(err)
        }
    })
}
})

//deleting a file
app.get('/deleteFile', function(req, res) {
    console.log("File deleted")
    res.send('File deleted')

    fs.unlink('./texte.txt', (err)=>{
        if(err){
            return console.log(err)
        }
    })
})

//reading a folder
app.get('/readFolder', function(req, res) {
    console.log("Folder read")
    res.send('Folder read')

    fs.readdir('./test', 'utf-8', (err, data)=> {
        if(err) {
            console.log(err)
        }
        console.log(data)
    })
})

//moving a folder
app.get('/moveFolder', function(req, res) {
    console.log("Folder moved ")
    res.send('Folder moved')

    fss.move('./test', './biblio/test', err => {
        if(err) return console.error(err);
        console.log('folder moved!');
      });
})

//listening port 
app.listen(PORT, () => {
    console.log(`Ecouter le port a http://localhost:${PORT}`)
})

module.exports = app;



