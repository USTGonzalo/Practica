import express from 'express';
import userRouter from "../src/routers/users.route.js";
import libros from "../src/routers/libros.route.js";
import autores from "../src/routers/autores.route.js";

const app = express();

app.use(express.json());

app.use('/usuarios', userRouter);
app.use('/libros', libros);
app.use('/autores', autores);

app.get('/', (request, response) => {
    response.send("Servicio funcionando correctamente");
});

export default app;