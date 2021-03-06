import express from 'express';
import 'dotenv/config';
import fetch from 'node-fetch'
import cors from 'cors';

const app = express();
const PORT = 8000;
const apiKey = process.env.KEY;

const getDataById = async (id) => {
    const result = await fetch(`https://ridb.recreation.gov/api/v1/recareas/${id}?full=true&apikey=${apiKey}`)
    const json = await result.json();
    return json;
}

const dataExtractor = (obj) => {
    const images = obj.MEDIA.map(url => { return url.URL })
    const card = {
        id: obj.RecAreaID,
        name: obj.RecAreaName,
        description: obj.RecAreaDescription,
        directions: obj.RecAreaDirections,
        lon: obj.RecAreaLongitude,
        lat: obj.RecAreaLatitude,
        link: obj.LINK[0].URL,
        gallery: images

    }
    return card
}

app.use(cors())

app.get('/api/:id', async (req, res) => {
    try {
        const parkId = req.params.id;
        const data = await getDataById(parkId);
        const parkData = dataExtractor(data);
        res.status(200).json(parkData).end();
    }
    catch (error) {
        console.log(error)
        res.status(500).end()
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})