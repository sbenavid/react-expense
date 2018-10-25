const path = require('path');
// definicion del servidor para ambiente de produccion
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

// iniciar el server
app.listen(port, () => {
    console.log('Servidor iniciando');
});
