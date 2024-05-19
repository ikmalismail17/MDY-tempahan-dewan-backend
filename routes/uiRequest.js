import express from "express";

const reqRouter = express.Router();

//post request

//get request
reqRouter.get('/datadisplay', (req, res)=>{
    res.send('Data Display');
})
//put request

//delete request

export default reqRouter;