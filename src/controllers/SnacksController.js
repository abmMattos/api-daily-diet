const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

class SnacksController {

    async create(request, response) {
        try {
            const { name, description, inDiet, user_id } = request.body
            const snack = await prisma.snacks.create({
                data: {
                    name,
                    description,
                    inDiet,
                    user_id: user_id
                }
            })
            response.json(snack)
        } catch (err) {
            return response.status(409).send()
        }
    }

    async update(request, response) {
        try {
            const { id, name, description, inDiet, user_id } = request.body
            const snack = await prisma.snacks.update({
                where: {
                    id: id
                },
                data: {
                    name,
                    description,
                    inDiet,
                    user_id: user_id
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
            const snack = await prisma.snacks.delete({
                where: {
                    id: id
                }
            })
            response.json(snack)
        } catch (err) {
            return response.status(409).send()
        }
    }

    async findMany(request, response) {
        try {
            const snack = await prisma.snacks.findMany()
            response.json(snack)
        } catch (err) {
            return response.status(409).send()
        }
    }
    async findById(request, response) {
        try {
            const { id } = request.body
            const snack = await prisma.snacks.findUnique({
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