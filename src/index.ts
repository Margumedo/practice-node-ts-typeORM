import app from './app'
import { AppDataSource } from "./db/conexion";


async function main() {
    try {
        await AppDataSource.initialize();
        console.log('Base de datos conectada')

        app.listen(6500, () => {
            console.log('Server Activo');
        })
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message)
        }
    }
}

main(); 