# Sistema de Gestión Escolar

Este proyecto es un sistema de gestión escolar que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para profesores, estudiantes y cursos utilizando Node.js, TypeScript y MySQL.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js
- npm (viene con Node.js)
- MySQL
- TypeScript (`npm install -g typescript`)

## Configuración de la Base de Datos

1. Inicia tu servidor MySQL.
2. Crea una nueva base de datos llamada `gestion_escolar`.


## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la terminal:

```bash
npm install
```

## Compilación de TypeScript a JavaScript

El proyecto está escrito en TypeScript, por lo que necesitas compilar los archivos `.ts` a `.js` antes de ejecutar la aplicación. Puedes hacerlo con el siguiente comando:

```bash
tsc
```

## Configuración del Proyecto
Crea un archivo .env en el directorio raíz del proyecto y añade las siguientes variables de entorno con tus credenciales de MySQL:

DB_HOST=localhost

DB_USER=tu_usuario

DB_PORT=tu_numero_puerto

DB_PASS=tu_contraseña

DB_NAME=gestion_escolar


```bash
npm run dev
```

El servidor se iniciará y estará escuchando en http://localhost:6500.

## Uso
Puedes realizar operaciones CRUD en las siguientes rutas:

### Profesores:
Crear: `POST /profesores`

Leer: `GET /profesores`                   

Actualizar: `PUT /profesores/:id`

Eliminar: `DELETE //profesores/:id`

### Estudiantes:
Crear: `POST /estudiantes`

Leer: `GET //estudiantes`

Actualizar: `PUT /estudiantes/:id`

Eliminar: `DELETE /estudiantes/:id`

### Cursos:
Crear: `POST /cursos`

Leer: `GET /cursos`

Actualizar: `PUT /cursos/:id`

Eliminar: `DELETE /cursos/:id`


