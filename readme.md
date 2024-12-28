## FINAL DRILLING Modulo 7

#### Para inicializar el Poryecto:

```
$ Node.js v20.14.0
$ npm install

```

#### Creacion tablas

## tabla Users

```text
npx sequelize model:generate --name Users --attributes firstName:string,lastName:string,email:string
```

## tabla Bootcamp

```text
npx sequelize model:generate --name Bootcamp --attributes title:string,cue:integer,description:string
```

## tabla User_Bootcamp

```text
npx sequelize model:generate --name User_Bootcamp --attributes user_id:integer,bootcamp_id:integer
```

#### Solicitud del proyecto:

##### Para el UsersController

```text

En la carpeta controllers posee los controladores tanto para el usuario (UsersController.js), como para el Bootcamp (BootcampSController.js).
Para el usuario, construir los siguientes controladores:
• Crear y guardar usuarios llamado createUser.
• Obtener los Bootcamp de un usuario llamado findUserById.
• Obtener todos los Usuarios incluyendo, los Bootcamp llamado findAll.
• Actualizar usuario por Id llamado updateUserById.
• Eliminar un usuario por Id llamado deleteUserById.

```

##### Para el BootcampController.js

```text

Para el Bootcamp, construir los siguientes controladores:
• Crear y guardar un nuevo Bootcamp llamado createBootcamp.
• Agregar un Usuario al Bootcamp llamado addUser.
• Obtener los Bootcamp por id llamado findById.
• Obtener todos los Usuarios incluyendo los Bootcamp llamado findAll.

```

##### En el archivo seeders tenemos todo lo nesesario para llenar las tablas con datos ficticios

##### Realizar las siguientes consultas:

##### • Consultando el Bootcamp por id, incluyendo los usuarios.

### puede ser consultado por postman o por web

##### http://localhost:3001/bootcamps/3

### • Listar todos los Bootcamp con sus usuarios.

#### http://localhost:3001/bootcamps

### • Consultar un usuario por id, incluyendo los Bootcamp.

#### http://localhost:3001/usuarios/1

### • Listar los usuarios con sus Bootcamp.

#### http://localhost:3001/usuarios

### • Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez.

#### solo por postman

#### localhost:3001/usuarios/1

### PUT

```
{
"firstName": "Padro",
"lastName": "Sánches"
}
```

### solo por postman

### Eliminar un usuario por id; por ejemplo: el usuario con id=1.

#### localhost:3001/usuarios/1
