const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 8000;

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => console.log(`Connected to port ${port}`));