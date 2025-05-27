import { prisma } from '../prismaLunar.js';

export const listarAutores = async () => {
    try {
        const busqueda = prisma.author.findMany({
        });

        if (!busqueda) {
            return {
                status: 404,
                message: "No existen autores actualmente"
            }
        }

        return busqueda;
    } catch (error) {
        return {
            status: 404,
            message: error
        }
    }

};

export const busquedaNombre = async (entrandoNombre) => {
    try {
        const busqueda = prisma.author.findMany({
            where:{
                name: entrandoNombre
            },
            include:{
                books: true
            }
        });

        if (!busqueda) {
            return {
                status: 404,
                message: "No existen autores actualmente"
            }
        }

        return busqueda;
    } catch (error) {
        return {
            status: 404,
            message: error
        }
    }
};

export const busquedaId = async (entrandoId) => {
    try {
        const busqueda = prisma.author.findMany({
            where:{
                id: entrandoId
            },
            include:{
                books: true
            }
        });
        
        if (!busqueda) {
            return {
                status: 404,
                message: "No existen autores actualmente"
            }
        }
        
        return busqueda;
    } catch (error) {
        return {
            status: 404,
            message: error
        }
    }
};

export const newAuthor = async (dataEntrante) => {
    try {
        const busqueda = await prisma.author.findUnique({
            where:{
                id: dataEntrante.id
            }
        });
        
        if (busqueda) {
            return {
                status: 401,
                message: "El ID ya existe, por favor intenta otro"
            }
        }
        
        const add = await prisma.author.create({
            data:{
                id: dataEntrante.id,
                name: dataEntrante.name,
                age: dataEntrante.age
            }
        });

        return add;
    } catch (error) {
        return {
            status: 404,
            message: "Error: "+ error
        }
    }
};

export const updates = async (dataEntrante) => {
    try {
        const busqueda = await prisma.author.findUnique({
            where:{
                id: dataEntrante.id
            }
        });
        
        if (!busqueda) {
            return {
                status: 401,
                message: "El ID NO existe, por favor intenta otro"
            }
        }
        
        const add = await prisma.author.update({
            data:{
                name: dataEntrante.name,
                age: dataEntrante.age
            },
            where:{
                id: dataEntrante.id
            }
        });

        return add;
    } catch (error) {
        return {
            status: 404,
            message: "Error: "+ error
        }
    }
};

export const deletes = async (idEntrante) => {
    try {
        const busqueda = await prisma.author.findUnique({
            where:{
                id: idEntrante
            }
        });
        
        if (!busqueda) {
            return {
                status: 401,
                message: "El ID NO existe, por favor intenta otro"
            }
        }
        
        const add = await prisma.author.delete({
            where:{
                id: idEntrante
            }
        });

        return add;
    } catch (error) {
        return {
            status: 404,
            message: "Error: "+ error
        }
    }
};
