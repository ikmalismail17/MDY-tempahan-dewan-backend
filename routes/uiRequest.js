import express from "express";
import dewanDisplay from "../controller/dewandisplay.js";
import orderDisplay from "../controller/admin/orderDisplay.js"
import dewanAdmin from "../controller/admin/dewanAdmin.js";

const reqRouter = express.Router();

//post request

//get request
reqRouter.get('/dewandisplay', dewanDisplay);
reqRouter.get('/orderdisplay', orderDisplay);
reqRouter.get('/dewanproperty', dewanAdmin);
//put request

//delete request

export default reqRouter;