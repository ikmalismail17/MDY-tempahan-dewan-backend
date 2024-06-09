import express from "express";
import dewanDisplay from "../controller/dewandisplay.js";
import orderDisplay from "../controller/admin/orderDisplay.js"
import dewanAdmin from "../controller/admin/dewanAdmin.js";

const reqRouter = express.Router();

//post request
reqRouter.post('/api/tempahdewan');
reqRouter.post('/api/dewanadd');

//get request
reqRouter.get('/api/dewandisplay', dewanDisplay);
reqRouter.get('/api/orderdisplay', orderDisplay);
reqRouter.get('/api/dewanproperty', dewanAdmin);
reqRouter.get('/api/orderdisplay/:id');
reqRouter.get('/api/profile/:id');

//put request
reqRouter.put('/api/profile/:id');
reqRouter.put('/api/tempahdewan/:id');
reqRouter.put('/api/dewanupdate/:id');

//delete request

export default reqRouter;