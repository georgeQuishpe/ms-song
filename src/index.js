const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;  
const router = express.Router();
const songsRouter = require('./routes/songs.routes');

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);
router.use('/songs', songsRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});