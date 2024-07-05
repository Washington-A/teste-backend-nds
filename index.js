const express = require('express');
const dotenv = require('dotenv');
const routes = require('./src/routes/routes')

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(routes)
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});