const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

class UsersController {

    async create(request, response) {
        try {
            const { name, email, snackName, snackDescription, snackDate, inDiet } = request.body
            const user = await prisma.users.create({
                data: {
                    name,
                    email,
                    Snacks: {
                        createMany: {
                            data: [
                                {
                                    name: snackName,
                                    description: snackDescription,
                                    date: snackDate,
                                    inDiet: inDiet
                                }
                            ]
                        }
                    }
                }
            })
            response.json(user)
        } catch (err) {
            return response.status(409).send()
        }
    }

    async update(request, response) {
        try {
            const { id, name, email } = request.body
            const user = await prisma.users.update({
                where: {
                    id: id
                },
                data: {
                    name,
                    email

                }
            })
            response.json(user)
        } catch (err) {        
            return response.status(409).send()
        }
    }

    async delete(request, response) {
        try {
            const { id } = request.body
            const user = await prisma.users.delete({
                where: {
                    id: id
                }
            })
            response.json(user)
        } catch (err) {
            return response.status(409).send()
        }
    }

    async findMany(request, response) {
        try {
            const user = await prisma.users.findMany();
            response.json(user)
        } catch (err) {
            return response.status(409).send()
        }
    }

    async findUnique(request, response) {
        try {
            const { id } = request.body
            const user = await prisma.users.findUnique({
                where: {
                    id: id
                }
            })
            response.json(user)
        } catch (err) {
            return response.status(409).send()
        }
    }

    async findManyUserSnack(request, response) {
        try {
            const { id } = request.body
            const user = await prisma.users.findUnique({
                where: {
                    id: id
                },
                include: {
                    snacks: true
                }
            })
            return response.json(user)
        } catch (err) {
            return response.status(409).send()
        }
    }
}


module.exports = UsersController