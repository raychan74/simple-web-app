const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

app.listen(PORT);
