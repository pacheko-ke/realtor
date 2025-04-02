import express from 'express'

export default function server () {
   
    // const express = require('express')
    const app = express()
    app.listen(8080, () => console.log("server started"))
}

server()