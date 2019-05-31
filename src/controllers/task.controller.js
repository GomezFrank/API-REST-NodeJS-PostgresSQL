import Task from '../models/Task';


export async function getTasks(req, res) {
   try {
        const Tasks = await Task.findAll({
            attributes: ['id', 'projectid', 'name', 'done'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            data: Tasks
        })
   } catch (error) {
       res.status(500).json({
           message: 'Error en el servidor'
       })
   }

}

export async function getOneTask(req, res){
    const { id } = req.params;
    const task = await Task.findOne({
        attributes: ['id', 'projectid', 'name', 'done'],
        where: {
            id
        }
    });
    res.json({
        task
    });

}

export async function createTask(req, res) {
    const { name, done, projectid } = req.body;
    try {
        const newTask = await Task.create({
            name,
            done, 
            projectid
        },{
            fields: ['name','done', 'projectid']
        });
        res.json({
            message: 'Nueva tarea creada con exito',
            data: newTask
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error en el servidor',
            data: {}
        })
    }

}

export async function updateTask( req, res){
    const { id } = req.params;
    const { projectid, name, done } = req.body;

    const tasks = await Task.findOne({
        attributes: ['name', 'done', 'projectid'],
        where: {
            id
        }
    });
    
    if(tasks.length > 0) {
        tasks.forEach(async task => {
            await task.update({
                projectid, 
                name,
                done
            });
        });
    }
    res.json({
        message: 'La tarea se actualizo correctamente',
        data: tasks
    })

}

export async function deleteTask(req, res) {
    const { id } = req.params;
    try {
        const countTask = await Task.destroy({
            where: { 
                id
            }
        });
        res.json({
            message: 'La tarea fue eliminada con exito',
            count: countTask
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error en el servidor',
        })
    }
}

export async function getTaskByProject(req, res) {
    const { projectid } = req.params;
    const tasks =  await Task.findAll({
        where: { projectid },
        attributes: ['id', 'projectid', 'name', 'done']
    });
    res.json({
        data: tasks
    })
}