import { db } from '../database/models'
import Employees from '../database/models/employees'

class EmployeesService {
    private static instance: EmployeesService

    static getInstance(): EmployeesService {
        if (!EmployeesService.instance) {
            EmployeesService.instance = new EmployeesService()
        }
        return EmployeesService.instance
    }

    findAll = async () => {
        const employees: Employees[] = await Employees.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        })
        return employees
    }

    findById = async (id: string) => {
        const existingEmployees: Employees | null = await Employees.findByPk(id)
        return existingEmployees
    }

    save = async (object: any) => {
        try {
            if (!object && Object.keys(object.length == 0)) {
                throw new Error('Object must contain at least one property')
            }
            const employees = await Employees.create({ ...object })
            return employees
        } catch (err) {
            throw err
        }
    }

    update = async (id: string, object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            )
        }

        let existingEmployees = await this.findById(id)
        if (!existingEmployees) {
            throw new Error('Employees_not_found')
        }

        try {
            await Employees.update(
                { ...object },
                {
                    where: { EmpID: id },
                }
            )

            existingEmployees = await this.findById(id)
            return existingEmployees
        } catch (err) {
            throw err
        }
    }

    deleteByPrimaryKey = async (id: string) => {
        let existingEmployees = await this.findById(id)
        if (!existingEmployees) {
            throw new Error('Employees_not_found')
        }

        try {
            await existingEmployees.destroy()
        } catch (err) {
            throw err
        }
    }
}

export default EmployeesService
