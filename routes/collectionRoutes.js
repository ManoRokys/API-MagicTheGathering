import express from "express";
import collectionController from "../controllers/collectionController.js";

const collectionRoutes = express.Router();

//  Rotas para coleções
collectionRoutes.get("/collections", collectionController.getAllCollections); // Listar todas
collectionRoutes.get("/collections/:id", collectionController.getOneCollection); // Listar uma
collectionRoutes.post("/collections", collectionController.createCollection); // Criar
collectionRoutes.put("/collections/:id", collectionController.updateCollection); // Atualizar
collectionRoutes.delete("/collections/:id", collectionController.deleteCollection); // Deletar

//  Rotas para cartas (dentro de coleções)
collectionRoutes.post("/collections/:collectionId/cards", collectionController.addCard); // Adicionar carta
collectionRoutes.put("/collections/:collectionId/cards/:cardId", collectionController.updateCard); // Editar carta
collectionRoutes.delete("/collections/:collectionId/cards/:cardId", collectionController.deleteCard); // Remover carta

export default collectionRoutes;
