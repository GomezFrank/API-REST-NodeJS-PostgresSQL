import express, { json } from 'express'; // Importar framework express para crear y configurar el servidor.
import morgan from 'morgan'; // Este modulo nos sirve para ver por consola las peticiones del cliente.

//Importacion de las routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

//Inicializacion del servidor
const app = express();


/* Middlewaers */
app.use(morgan('dev'));
app.use(json()); // El modulo json esta incluido ya en express, y nos sirve para que el server entienda los archivos en formato json.


//Llamando a las routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);


export default app;
