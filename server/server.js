const path = require('path');
// definicion del servidor para ambiente de produccion
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'../public');

app.use(express.static(publicPath));

app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

// iniciar el server
app.listen(3000, () => {
    console.log('Servidor iniciando');
});
