import { response, Router } from 'express';
import { BusquedaCategoria, BusquedaISDN, deletes1, listarLibros, newBook, update } from '../services/libros.services.js';

const router = Router();

router.get('/', async (request, response) => {
    response.json(await listarLibros())
});

router.get('/isdn/:ISDN', async (request, response) => {
    const ISDN = request.params.ISDN;
    response.json(await BusquedaISDN(ISDN))
});

router.get('/categorias/:categoria', async (request, response) => {
    const categoria = request.params.categoria;
    response.json(await BusquedaCategoria(categoria))
});

router.post('/add/', async (request, response) => {
    const datos = request.body;
    response.json(await newBook(datos));
});

router.put('/update/', async (request, response) => {
    const newDatos = request.body;
    response.json(await update(newDatos));
});

router.delete('/delete/:isdn', async (request, response) => {
    const isdn = request.params.isdn;
    response.json(await deletes1(isdn));
});

export default router;