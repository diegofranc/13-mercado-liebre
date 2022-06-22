const express = require ('express');
const app = express();

const path = require ('path');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath));

app.listen (PORT, ()=> console.log('Server running at http://${HOST}:${PORT}/'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})
