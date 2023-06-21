import express, {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from 'express'
import EmployeesService from '../services/employeesService'

const router = express.Router()

router.get(
    '/',
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const employees = await EmployeesService.getInstance().findAll()
            response.status(200).json(employees)
        } catch (err) {
            next(err)
        }
    }
)

router.post(
    '/',
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const payload = { ...request.body }
            const newDepartment = await EmployeesService.getInstance().save(
                payload
            )
            response.status(201).json({ ...newDepartment.dataValues })
        } catch (err) {
            next(err)
        }
    }
)

router.get(
    '/:id',
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const existingDepartment =
                await EmployeesService.getInstance().findById(request.params.id)
            if (!existingDepartment) {
                response.status(404).json({
                    message: `Employee with EmpID ${request.params.id} not found`,
                })
            } else {
                response.status(200).json(existingDepartment)
            }
        } catch (error) {
            next(error)
        }
    }
)

router.put('/:id', async (req, res, next) => {
    try {
        const empID = req.params.id
        const data = await EmployeesService.getInstance().update(empID, {
            ...req.body,
        })

        res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const empid = req.params.id
        await EmployeesService.getInstance().deleteByPrimaryKey(empid)

        res.status(200).json({
            message: `department_successfully_deleted: ${empid}`,
        })
    } catch (err) {
        next(err)
    }
})
export default router
