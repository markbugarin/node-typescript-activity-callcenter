import express, {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from 'express'
import ProductsService from '../services/productsService'

const router = express.Router()

router.get(
    '/',
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const prodducts = await ProductsService.getInstance().findAll()
            response.status(200).json(prodducts)
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
            const newDepartment = await ProductsService.getInstance().save(
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
                await ProductsService.getInstance().findById(request.params.id)
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
        const ProdID = req.params.id
        const data = await ProductsService.getInstance().update(ProdID, {
            ...req.body,
        })

        res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const ProdID = req.params.id
        await ProductsService.getInstance().deleteByPrimaryKey(ProdID)

        res.status(200).json({
            message: `department_successfully_deleted: ${ProdID}`,
        })
    } catch (err) {
        next(err)
    }
})
export default router
