
import { runServer } from './core/server';
import dotenv from 'dotenv'

const startApp = async () => {

    dotenv.config()

    await runServer();



}
startApp()