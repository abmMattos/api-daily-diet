const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

class SnacksController {

    async create(request, response) {
        try {
            const { name, description, date, inDiet, user_id } = request.body
            const snack = await prisma.snack.create({
                data: {
                    name,
                    description,
                    date,
                    inDiet,
                    user_id
                }
            })
            response.json(snack)
        } catch (err) {
            return response.status(409).send()
        }
    }

    async update(request, response) {
        try {
            const { id, name, description, date, inDiet } = request.body
            const snack = await prisma.snack.update({
                where: {
                    id: id
                },
                data: {
                    name,
                    description,
                    date,
                    inDiet,

                }
            }
            )
            response.json(snack)

        } catch (err) {
            return response.status(409).send()
        }
    }

    async delete(request, response) {
        try {
            const { id } = request.body
            const snack = await prisma.snack.delete({
                where: {
                    id: id
                }
            })
            response.json(snack)
        } catch (err) {
            return response.status(409).send()
        }
    }

    async findMany(response) {
        try {
            const snack = await prisma.snack.findMany()
            response.json(snack)
        } catch (err) {
            return response.status(409).send()
        }
    }
    async findById(request, response) {
        try {
            const { id } = request.body
            const snack = await prisma.snack.findById({
                where: {
                    id: id
                }
            })
            response.json(snack)
        } catch (err) {
            return response.status(409).send()
        }
    }

}


module.exports = SnacksController