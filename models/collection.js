import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: String,
  manaCost: String,
  type: String,
  power: String,
  toughness: String,
  abilities: [String], 
});

const collectionSchema = new mongoose.Schema({
  name: String, 
  releaseYear: Number,
  cards: [cardSchema], 
});

// Criando a coleção MTG no banco
const Collection = mongoose.model("Collection", collectionSchema);

export default Collection;
