import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.json({"title": "my awesome app"})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})