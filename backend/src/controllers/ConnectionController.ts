import {Request, Response} from 'express'
import db from '../database/connect';


export default class ConnectionController {
   
    async index(req: Request, res: Response){
        const resp = await db('connections').count('* as total')
        const { total  } = resp[0];
        return res.status(201).json({total})
    }

    async create(req: Request, res: Response)
    {
        const {user_id} = req.body
        const trx = await db.transaction()
        try {
           
            await trx('connections').insert({
                user_id
            })
        
            await trx.commit()
            return res.status(201).json({ status: true })
        } catch (error) {
            await trx.rollback()
            console.log('error: ', error);
            return res.status(400).json({
                message: 'Ocorreu algum erro para criar a classe'
            })
        }
    }
}