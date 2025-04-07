import express from "express";
import mongoose from "./config/db-connection.js"; // Conexão com MongoDB Atlas
import Collection from "./models/collection.js"; // Modelo de coleção (já importado como referência)

const app = express();

// Importando as rotas da API MTG
import collectionRoutes from './routes/collectionRoutes.js';

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', collectionRoutes); // Mesmo comportamento original

// ROTA PRINCIPAL
app.get("/", (req, res) => {
  const demoCollections = [
    {
      name: "Kamigawa: Neon Dynasty",
      releaseYear: 2022,
      cards: [
        {
          name: "The Wandering Emperor",
          manaCost: "{2}{W}{W}",
          type: "Legendary Planeswalker",
          power: null,
          toughness: null
        }
      ]
    },
    {
      name: "March of the Machine",
      releaseYear: 2023,
      cards: [
        {
          name: "Breach the Multiverse",
          manaCost: "{5}{B}{B}",
          type: "Sorcery",
          power: null,
          toughness: null
        }
      ]
    }
  ];

  res.json(demoCollections);
});

// Inicializando o servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API MTG rodando em http://localhost:${port}.`);
  }
});
