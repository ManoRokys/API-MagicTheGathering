# 📦 API-MagicTheGathering

## ✨ Visão Geral

A **API-MagicTheGathering** é uma aplicação RESTful desenvolvida com **Node.js** e **Express**, conectada a um banco de dados **MongoDB** hospedado no **Atlas**.  
Ela permite realizar operações CRUD em cartas do jogo *Magic: The Gathering*.

---

## 🛠 Tecnologias Utilizadas

- **Node.js** + **Express** – Backend e rotas da API  
- **MongoDB Atlas** – Banco de dados em nuvem  
- **Mongoose** – ODM para interagir com o MongoDB  
- **Insomnia/Postman** – Testes de requisições HTTP  

---

## 📁 Estrutura do Projeto

```
API-MagicTheGathering/
├── config/
│   └── db-connection.js               # Conexão com MongoDB Atlas
├── controllers/
│   └── collectionController.js   # Lógica das rotas
├── models/
│   └── collection.js             # Schema Mongoose da carta
├── routes/
│   └── collectionRoutes.js       # Rotas da API
├── services/
│   └── collectionService.js      # Camada de serviço
├── index.js                # Arquivo principal
├── package.json            # Dependências e scripts
└── README.md               # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/ManoRokys/API-MagicTheGathering.git
cd API-MagicTheGathering
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure sua string de conexão direto no código:**

No arquivo `config/db.js`, substitua pela sua URI do MongoDB Atlas:

```js
import mongoose from "mongoose";

const dbUser = "seu Usuario aqui";
const dbPassword = "sua Senha aqui";
const connect = () => {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.aj4uf.mongodb.net/api-magicthegathering?retryWrites=true&w=majority&appName=Cluster0`
    );
    const connection = mongoose.connection;
    connection.on("error", () => {
        console.log("Erro ao conectar com o mongoDB.");
    });
    connection.on("open", () => {
        console.log("Conectado ao mondoDB com sucesso!");
    });
};
connect();
export default mongoose;
```

4. **Inicie o servidor:**

```bash
npx nodemon index.js
```

A API estará disponível em `http://localhost:4000`.

---

## 📡 Endpoints da API

| Método | Rota         | Descrição                        |
|--------|--------------|----------------------------------|
| GET    | `/collections`     | Lista todas as coleções          |
| GET    | `/collections/:id` | Retorna uma coleção especifica   |
| POST   | `/collections`     | Cria uma nova coleção            |
| PUT    | `/collections/:id` | Atualiza uma coleção existente   |
| DELETE | `/collections/:id` | Deleta uma coleção               |

| Método | Rota         | Descrição                        |
|--------|--------------|----------------------------------|
| POST   | `/collections/:collectionId/cards`         | Cria uma nova carta            |
| PUT    | `/collections/:collectionId/cards/:cardId` | Atualiza uma carta existente   |
| DELETE | `/collections/:collectionId/cards/:cardId` | Deleta uma carta               |

### 🧪 Exemplo - POST `/collections`

```json
{
    "name": "Alpha",
    "releaseYear": 1993,
    "cards": [
      {
        "name": "Black Lotus",
        "manaCost": "{0}",
        "type": "Artifact",
        "power": "-",
        "toughness": "-",
        "abilities": ["Add three mana of any one color"]
      },
      {
        "name": "Shivan Dragon",
        "manaCost": "{4}{R}{R}",
        "type": "Creature — Dragon",
        "power": "5",
        "toughness": "5",
        "abilities": ["Flying", "Firebreathing"]
      },
      {
        "name": "Serra Angel",
        "manaCost": "{3}{W}{W}",
        "type": "Creature — Angel",
        "power": "4",
        "toughness": "4",
        "abilities": ["Flying", "Vigilance"]
      },
      {
        "name": "Ancestral Recall",
        "manaCost": "{U}",
        "type": "Instant",
        "power": "-",
        "toughness": "-",
        "abilities": ["Target player draws three cards"]
      },
      {
        "name": "Dark Ritual",
        "manaCost": "{B}",
        "type": "Instant",
        "power": "-",
        "toughness": "-",
        "abilities": ["Add {B}{B}{B}"]
      }
    ]
  }
```

---

## 🧾 Testes com Insomnia

Você pode testar todos os endpoints utilizando o **Insomnia**.  
Basta criar uma coleção com as rotas ou importar um JSON de workspace.

![image](https://github.com/user-attachments/assets/c84beacf-ed08-40ef-b640-e29a6c1bb8c8)


![Captura de tela 2025-04-07 104552](https://github.com/user-attachments/assets/83cba133-7d1f-4dfe-af0e-38d00eabf371)


---

## ☁️ Banco de Dados - MongoDB Atlas

Verifique os seguintes pontos:

- A URI de conexão foi adicionada corretamente no `db-connection.js`;
- Seu IP foi liberado em **Network Access** no painel do Atlas;
- O banco está ativo com a collection `api-magicthegathering`.

![image](https://github.com/user-attachments/assets/76a27518-23c6-433b-9bd6-911d29bed14e)

![Captura de tela 2025-04-07 104740](https://github.com/user-attachments/assets/bcf529cd-a268-431b-b079-ba1455f7dd6e)


---

## 👥 Integrantes do Grupo

- **Lucas Gomes Fagundes**  
- **Afonso Luiz**  
- **José Vitor**  


