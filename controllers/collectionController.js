import collectionService from "../services/collectionService.js";
import { ObjectId } from "mongodb";

// GET all collections
const getAllCollections = async (req, res) => {
  try {
    const collections = await collectionService.getAll();
    res.status(200).json({ collections });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// GET one collection
const getOneCollection = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) return res.sendStatus(400);

    const collection = await collectionService.getOne(id);
    if (!collection) return res.sendStatus(404);

    res.status(200).json({ collection });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// POST new collection (with optional cards)
const createCollection = async (req, res) => {
  try {
    const { name, releaseYear, cards } = req.body;
    await collectionService.createCollection(name, releaseYear, cards);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// PUT update collection data
const updateCollection = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) return res.sendStatus(400);

    const { name, releaseYear } = req.body;
    await collectionService.updateCollection(id, name, releaseYear);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// DELETE a collection
const deleteCollection = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) return res.sendStatus(400);

    await collectionService.deleteCollection(id);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// POST add card to collection
const addCard = async (req, res) => {
  try {
    const { collectionId } = req.params;
    const cardData = req.body;
    await collectionService.addCardToCollection(collectionId, cardData);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// PUT update card in collection
const updateCard = async (req, res) => {
  try {
    const { collectionId, cardId } = req.params;
    const cardData = req.body;
    await collectionService.updateCard(collectionId, cardId, cardData);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// DELETE card from collection
const deleteCard = async (req, res) => {
  try {
    const { collectionId, cardId } = req.params;
    await collectionService.removeCard(collectionId, cardId);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

export default {
  getAllCollections,
  getOneCollection,
  createCollection,
  updateCollection,
  deleteCollection,
  addCard,
  updateCard,
  deleteCard,
};