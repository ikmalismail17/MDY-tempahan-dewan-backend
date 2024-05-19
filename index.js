import express from "express";
import cors from "cors";
import reqRouter from "./routes/uiRequest.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use('/', reqRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

export default app;