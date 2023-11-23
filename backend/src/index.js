import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from "./routes/index.js";

const app = express()
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});