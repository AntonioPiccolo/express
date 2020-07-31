const express = require('express')
const fs = require('fs')

const app = express()
const portNumber = process.argv[2];
const dirFile = process.argv[3];

app.use(express.static(dirFile))

app.get('/books', (req,res) =>{
    fs.readFile(dirFile, (err,data) =>{       
        if(err){
            console.error(err)
        }
        let fileObj = JSON.parse(data)
        res.json(fileObj)
    })
})

app.listen(portNumber);