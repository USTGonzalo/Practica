# Pre Prueba Programación Web

Desarrollar API REST utilizando Node.js con Express que permita gestionar Autores, Libros y Categorías de Libros.

## Libros
Tienen un
- ISDN (es el ID, no es autoincremental)
- Nombre
- Cantidad de Páginas
- Categoría
- Autor

## Autores
Tienen un
- Identificador (autoincremental)
- Nombre
- Edad

## Categorías
Tienen un
- Identificador (autoincremental)
- Descripción

# Endpoints
Debe implementar rutas CRUD para cada modelo, las cuales son:
- Listar Libros: Todos, por ISDN, por categoría.
- Listar Autores: Todos, por ID.
- Agregar Libros
- Agregar Autores
- Actualizar Libros
- Actualizar Autores
- Eliminar Libros
- Eliminar Autores

En el caso de listar libros, debe agregar el autor del mismo.
En el caso de listar autores, debe agregar los libros que han escrito.

# Restricciones
Para la evaluación, se utilizarán 2 usuario de prueba, simulando que existen en una base de datos de usuarios.
Existen 2 tipos de usuarios: Clientes y Usuarios de Sistema.

Los Clientes únicamente podrán listar Libros y autores, mientras que los Usuarios de Sistema pueden realizar cualquier acción.

Lo anterior, debe validarlo en base a JWT. Se entregará el usuario y contraseña para obtener un Token específico a cada rol, el cual deberá validar decodificando el mismo en jwt.io y ver su estuctura.

# Middlewares
- Debe agregar un middleware que valide el token para las peticiones que DEBEN restringirse.
- Debe agregar un middleware que valide el ingreso de información al guardar un nuevo Libro y un nuevo Autor.

# Validaciones
## Libros
- Para los libros, todos los campos son requeridos.
- El ISDN debe tener 8 caracteres.
- El nombre debe tener un mínino de 3 caracteres y un máximo de 100.
- La cantidad de página debe estar entre 100 y 1000.
- Debe traer un ID de categoría válido.
- Debe traer un ID de autor autor válido.
- Un ID válido se entiende por un registro que ya exista en la base de datos. No puedo agregar un Libro si el autor con ID 4 (por ejemplo), no existe.

## Autores
- Para los autores, todos los campos son requeridos.
- El nombre y la edad son requeridos.
- El nombre debe tener un mínimo de 20 caracteres y un máximo de 100.
- La edad no puede ser mayor a 100 años, ni menor a 10.

# Código base
Se entregará el archivo schema.prisma para realizar la migración, además de un seed para precargar las categorías de libros.# Practica
# Practica
# Practica
