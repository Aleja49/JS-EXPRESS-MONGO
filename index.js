const usuarios = require('./controllers/usuarios');
const cursos = require('./controllers/cursos');




const express = require('express');
const mongoose = require('mongoose');

//conexion ala base de datos mongodb

mongoose.connect('mongodb+srv://nicollpuentes04:nico2004@consultas.epzjgxb.mongodb.net/') //{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conectado a MongoDB...'))
.catch(err => console.log('No se pudo conectar con MongoDB...',err));

//middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// end points (recursos)
app.use('/api/usuarios',usuarios);
app.use('/api/cursos',cursos);



const port = process.env.PORT || 3002;
app.listen(port,()=>{
    console.log('Api REST Ok, y ejecutandose...');
})
