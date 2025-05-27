import { prisma } from '../prismaLunar.js';

export const listarLibros = async () => {
    try {
        const libros = await prisma.book.findMany({
            include: {
                author: true,
                category: true
            }
        });

        return {
            status: 200,
            data: libros
        };
    } catch (error) {
        console.error(error);
        return {
            status: 500,
            message: "Error al obtener los libros"
        };
    }
};

export const BusquedaISDN = async (entrandoISDN) => {
    try {
        const busqueda = await prisma.book.findUnique({
            where:
            {
                isdn: entrandoISDN
            },
            include:{
                author: true
            }
        });

        if (busqueda) {
            return busqueda;
        }
        else {
            return {
                status: 100,
                message: "No existe"
            }
        }
    } catch (error) {
        return {
            status: 100,
            message: "ERROR EN CODIGO ISDN"
        }
    }
};

export const BusquedaCategoria = async (entrandoCategoria) => {
    try {
        const busqueda = await prisma.category.findFirst({
            where:
            {
                description: entrandoCategoria
            }
        });

        if (!busqueda) {
            return {
                status: 100,
                message: "No existe"
            }
        }

        const libro = await prisma.book.findMany({
            where: {
                categoryId: busqueda.id
            }
        });
        return libro;
    } catch (error) {
        return {
            status: 100,
            message: "ERROR EN CODIGO CATEGORIA"
        }
    }
};

export const newBook = async (dataEntrante) => {
    try {
        const busqueda = await prisma.book.findUnique({
            where:
            {
                isdn: dataEntrante.isdn
            }
        });
        
        if (busqueda) {
            return {
                status: 401,
                message: "El ISDN ya existe, por favor intenta otro"
            }
        }
        
        const add = await prisma.book.create({
            data:{
                isdn: dataEntrante.isdn,
                name: dataEntrante.name,
                pages: dataEntrante.pages,
                categoryId: dataEntrante.categoryId,
                authorId: dataEntrante.authorId
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

export const update = async (dataEntrante) => {
    try {
        const busqueda = await prisma.book.findUnique({
            where:
            {
                isdn: dataEntrante.isdn
            }
        });
        
        if (!busqueda) {
            return {
                status: 401,
                message: "El ISDN NO existe, por favor intenta otro valido"
            }
        }
        
        const add = await prisma.book.update({
            data:{
                name: dataEntrante.name,
                pages: dataEntrante.pages,
                categoryId: dataEntrante.categoryId,
                authorId: dataEntrante.authorId
            },
            where:{
                isdn: dataEntrante.isdn
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

export const deletes1 = async (isdnEntrante) => {
    try {
        const busqueda = await prisma.book.findUnique({
            where:{
                isdn: isdnEntrante
            }
        });
        
        if (!busqueda) {
            return {
                status: 401,
                message: "El ISDN NO existe, por favor intenta otro"
            }
        }
        
        const add = await prisma.book.delete({
            where:{
                isdn: isdnEntrante
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