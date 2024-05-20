import express from "express";
import dewandisplay from "../controller/dewandisplay.js";

const reqRouter = express.Router();

//post request

//get request
reqRouter.get('/dewandisplay', dewandisplay)
//put request

//delete request

export default reqRouter;