const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/admin', routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Admin panel running on http://localhost:${PORT}`));
