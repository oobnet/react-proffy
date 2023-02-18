import {Request, Response} from 'express'
import db from '../database/connect';
import ScheduleInterface from '../intefaces/scheduleInterface';
import convertHourToMinutes from '../convertHourToMinutes';

export default class ClasseController {
    

    async index(req: Request, res: Response)
    {
        const filters  = req.query
      
    
        if(!filters.week_day || !filters.subject || !filters.time)
            return res.status(400).json({ error: 'Error esta faltando algum parametro'})
        


        const timeHour = convertHourToMinutes(filters.time as string)
        const classes = await db('classes')
        .whereExists(function(){
            this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`classe_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??',[Number(filters.week_day as string) ])
                .whereRaw('`class_schedule`.`from` <= ??',[timeHour])
                .whereRaw('`class_schedule`.`to` > ??',[timeHour])
        })
        .where('classes.subject','=',filters.subject as string)
        .join('users','classes.user_id','=','users.id')
        
        return res.status(201).json({filters, timeHour,classes})
    }

    async create(req: Request, res: Response)
    {
        const {name,bio,avatar,whatapp,subject,schedule,cost} = req.body
        const trx = await db.transaction()
        try {
           
            const user =  await trx('users').insert({
                name,bio,avatar,whatapp
            })
        
            const user_id = user.shift()
            const classes = await trx('classes').insert({
                subject, cost, user_id
            })
        
            const classe_id = classes.shift()
            const scheduleItem = schedule.map(( scheduleItem: ScheduleInterface ) => {
                return {
                    classe_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                }
            })
            await trx('class_schedule').insert(scheduleItem)
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