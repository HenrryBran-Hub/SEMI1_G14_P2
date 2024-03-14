const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


const PORT = 5000;
app.set(PORT)
app.use(express.json());
app.use(cors());


// Importa las rutas
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const photoRoutes = require('./routes/photoRoutes');
const albumRoutes = require('./routes/albumRoutes');

// Usa las rutas
app.use('/signup', authRoutes);
app.use('/login', authRoutes);
app.use('/editperfil', profileRoutes);
app.use('/loadphoto', photoRoutes);
app.use('/watchphoto', photoRoutes);
app.use('/editalbum', albumRoutes);

app.get('/check', (req, res)=>{
  res.status(200).send('OK');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
