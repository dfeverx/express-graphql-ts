
import { runServer } from './core/express';
import dotenv from 'dotenv'

const startApp = async () => {
    dotenv.config()
    await runServer();
}

startApp()