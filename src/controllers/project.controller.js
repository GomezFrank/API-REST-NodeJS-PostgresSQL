import Project from '../models/Project';

export async function getProject(req, res) { // Funcion para obtener todos los projects 
    try {
        const projects = await Project.findAll();
        res.json({
            data: projects
        });
    } catch (error) {
        res.status(500).json({
            message: 'A ocurrido un error en el servidor'
        });
    } 
    
}

export async function getOneProject(req, res) { // Funciones para obtener un project por id
    const { id } =  req.params;
    try {
        const project = await Project.findOne({
            where: {
                id
            }
        });
        res.json({
            data: project
        });
    } catch (error) {
        res.status(500).json({
            message: 'A ocurrido un error en el servidor'
        });
    }
}

export async function createProject(req, res) { // Funcion para crear un nuevo projects
    const { name, priority, description, deleverydate } = req.body;
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deleverydate
        }, {
            fields: ['name', 'priority', 'description', 'deleverydate']
        });
        if(newProject) {
            return res.json({
                message: 'Projecto fue creados exitosamente',
                data: newProject,
            });
        }
    } catch (error) {
        console.log(error)
        res.status('500').json({
            message: 'A ocurrido un error en el servidor',
            data: {}
        })
    }
}

export async function deleteProject(req, res) { // Funcion para eliminar un project
    const { id } = req.params;
    try {
        const deleteRowCount = await Project.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'El project fue eliminado correctamente',
            count: deleteRowCount
        });
    } catch (error) {
        res.status(500).json({
            message: 'A ocurrido un error en el servidor'
        });
    }

}

export async function updateProject(req, res) { // Funcion para actualizar un project
    const { id } = req.params;
    const { name, priority, description, deleverydate } = req.body;
    
    try {
        const projects = await Project.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'deleverydate'],
            where: {
                id
            }
        });
        if(projects.length > 0) {
            projects.forEach( async project => {
                await project.update({
                    name,
                    priority,
                    description,
                    deleverydate
                });
            });
        }
        return res.json({
            message: 'El project fue actualizado correctamente',
            data: projects
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error en el servidor'
        });
    }
       
}





