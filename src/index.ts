import express from 'express';
import product from './routes';
import { AppDataSource } from './data-source';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', product);

AppDataSource.initialize()
    .then(() => console.log('synchronized'))
    .catch((error) => console.error(error)); 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});