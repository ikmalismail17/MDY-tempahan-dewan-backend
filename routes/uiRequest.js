import express from "express";
import dewanDisplay from "../controller/dewandisplay.js";
import orderDisplay from "../controller/admin/orderDisplay.js"

const reqRouter = express.Router();

//post request

//get request
reqRouter.get('/dewandisplay', dewanDisplay);
reqRouter.get('/orderdisplay', orderDisplay)
//put request

//delete request

export default reqRouter;