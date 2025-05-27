import { response, Router } from 'express';
import { busquedaId, busquedaNombre, deletes, listarAutores, newAuthor, updates } from '../services/autores.services.js';

const router = Router();

router.get('/', async (request, response) => {
    response.json( await listarAutores());
});

router.get('/nombre/:name', async (request, response) => {
    const nombre = request.params.name;
    response.json( await busquedaNombre(nombre));
});

router.get('/porid/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    response.json(await busquedaId(id));
});

router.post('/add/', async (request, response) => {
    const datos = request.body;
    response.json(await newAuthor(datos));
});

router.put('/update/', async (request, response) => {
    const newDatos = request.body;
    response.json(await updates(newDatos));
});

router.delete('/delete/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    response.json(await deletes(id));
});

export default router;