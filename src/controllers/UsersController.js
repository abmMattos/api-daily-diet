const { PrismaClient } = require("@prisma/client");
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient()

class UsersController {

    async create(request, response) {
        try {
            const { name, email, senha } = request.body
            const user = await prisma.users.create({
                data: {
                    name,
                    email,
                    senha
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

    async countUserSnacks(request, response) {
        try {
            const { id } = request.body;
            const user = await prisma.users.findUnique({
                where: {
                    id: id
                }
            });

            if (!user) {
                return response.status(404).json({ error: "Usuário não encontrado" });
            }

            const snacksCount = await prisma.snacks.count({
                where: {
                    user_id: id
                }
            });

            return response.json({ userId: id, snacksCount: snacksCount });
        } catch (err) {
            console.error("Erro ao contar snacks por usuário:", err);
            return response.status(500).json({ error: "Erro interno do servidor" });
        }
    }

    async countUserSnacksInDiet(request, response) {
        try {
            const { id } = request.body;
            const user = await prisma.users.findUnique({
                where: {
                    id: id
                }
            });

            if (!user) {
                return response.status(404).json({ error: "Usuário não encontrado" });
            }

            const snacksCount = await prisma.snacks.count({
                where: {
                    user_id: id,
                    inDiet: true
                }
            });

            return response.json({ userId: id, snacksCount: snacksCount });
        } catch (err) {
            console.error("Erro ao contar snacks por usuário:", err);
            return response.status(500).json({ error: "Erro interno do servidor" });
        }
    }

    async countUserSnacksOutDiet(request, response) {
        try {
            const { id } = request.body;
            const user = await prisma.users.findUnique({
                where: {
                    id: id
                }
            });

            if (!user) {
                return response.status(404).json({ error: "Usuário não encontrado" });
            }

            const snacksCount = await prisma.snacks.count({
                where: {
                    user_id: id,
                    inDiet: false
                }
            });

            return response.json({ userId: id, snacksCount: snacksCount });
        } catch (err) {
            console.error("Erro ao contar snacks por usuário:", err);
            return response.status(500).json({ error: "Erro interno do servidor" });
        }
    }

    async login(request, response) {
        try {
            const { email, senha } = request.body;
            const user = await prisma.users.findUnique({
                where: {
                    email: email
                }
            });
            if (!user) {
                return response.status(401).json({ error: 'Usuário inexistente' });
            }
            const senhaBate = senha == user.senha;
            if (!senhaBate) {
                return response.status(401).json({ error: 'Senha errada' });
            }
            const token = jwt.sign({ id: user.id }, 'chave', {
                expiresIn: '1h',
            });
            response.status(200).json({ token });
        } catch (error) {
            response.status(500).json({ error: 'Login falhou' });
        }
    }
}

module.exports = UsersController