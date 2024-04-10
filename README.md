# API Express and ORM Prisma.js
This project consist of an API using Express and ORM Prisma .js

## Runner Project
- node src/server.js
- npm start
- npm run dev

- Documentação API Controle de dieta diária

Requisitos Funcionais:
RF1 - O sistema deve permitir a criação de usuário
RF2 - O sistema deve permitir identificar o usuário
RF3 - O sistema deve permitir registrar as refeições
RF4 - O sistema deve mostrar data e horário das refeições registradas
RF5 - O sistema deve permitir editar as refeições registradas
RF6 - O sistema deve permitir deletar as refeições registradas
RF7 - O sistema deve permitir relacionar a refeição a determinado usuário
RF8 - O sistema deve permitir listar as refeições registradas
RF9 - O sistema deve permitir mostrar as refeições que fazem parte da dieta
RF10 - O sistema deve permitir mostrar as refeições que não fazem parte da dieta
RF11 - O sistema deve permitir mostrar qual foi a melhor sequência de dias dentro da dieta

### Histórias do usuário:
História de usuário 1: Como usuário desse sistema, eu quero poder fazer o meu cadastro para criar o registros das minhas refeições.
Cenário: Fazer cadastro do perfil
Dado que estou criando meu usuário no sistema
Quando eu quiser "adicionar usuário" e preencher os campos com as informações necessárias
Então o sistema deve registrar meu usuário.

História de usuário 2: Como usuário desse sistema, eu quero poder registrar a minha refeição e ter a opção de colocar se faz parte ou não da dieta.
Cenário: Registrar refeições
Dado que estou registrando minhas refeições no sistema
Quando eu quiser “adicionar refeição” e preencher os campos com as informações necessárias
Então o sistema deve registrar essa refeição ao meu usuário e me indicar se essa refeição faz parte ou não da minha dieta.


História de usuário 3: Como usuário desse sistema, eu quero poder visualizar minhas refeições registradas para conseguir ter um melhor controle da minha dieta.
Cenário:Visualizar refeições
Dado que eu estou com o sistema aberto
Quando eu quiser “Visualizar minhas refeições” e preencher os campos com as informações de busca
Então o sistema deve me mostrar todas as refeições registradas no meu usuário.

História de usuário 4: Como usuário desse sistema, eu quero poder visualizar qual foi o meu recorde dentro da dieta.
Cenário: Acompanhar sequência de dias na dieta
Dado que estou com o sistema aberto
Quando eu quiser verificar minha sequência de de dias na dieta
Então o sistema deve me mostrar qual foi meu maior número de dias dentro da dieta.

História de usuário 5: Como usuário desse sistema, eu quero poder editar ou deletar uma refeição registrada anteriormente.
Cenário: Editar ou deletar refeição
Dado que estou visualizando minhas refeições e encontro algum problema no registro
Quando eu quiser editar ou deletar esse registro
Então o sistema deve permitir que eu faça esse tipo de alteração nos meus registros de refeições.



### Informações sobre banco de dados e tabelas:

O banco de dados utilizado foi o MYSQL

![Modelo Relacional](https://github.com/abmMattos/api-daily-diet/assets/112213284/598cd270-a77f-42e0-b086-0e407b9c06c7)







Rotas relacionados ao usuário:
Rotas - Users ('/users/create')	

Criar usuário: '/create',

Dar update: '/update'

Fazer login: '/login'

Deletar usuário: '/delete'

Procurar usuários: '/'



### Rotas relacionadas às refeições:
Rotas - Snacks ('/snacks/create')

Criar refeição: '/create'

Procurar todas as refeições: '/usersnack'

Procurar uma refeição: '/findunique'

Contagem de refeições:'/countusersnacks'

Contagem das refeições dentro da dieta: '/countusersnacksindiet'

Contagem das refeições fora da dieta: '/countusersnacksoutdiet'

Mostrar melhor sequência dentro da dieta: '/bestdietsequence', 

Verificação do token: '/login'

Buscar todas as refeições: '/'

Procurar refeição pelo ID: '/findById'

Editar informações da refeição: '/update'

Deletar refeição: '/delete'
