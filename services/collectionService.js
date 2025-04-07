import Collection from "../models/collection.js";

class CollectionService {
  // Listar todas as coleções
  async getAll() {
    try {
      const collections = await Collection.find();
      return collections;
    } catch (error) {
      console.error(error);
    }
  }

  // Criar uma nova coleção com cartas
  async createCollection(name, releaseYear, cards = []) {
    try {
      const newCollection = new Collection({
        name,
        releaseYear,
        cards, // array de cartas com name, manaCost, type, etc.
      });

      await newCollection.save();
    } catch (error) {
      console.error(error);
    }
  }

  // Adicionar uma nova carta a uma coleção existente
  async addCardToCollection(collectionId, cardData) {
    try {
      const collection = await Collection.findById(collectionId);
      if (!collection) return null;

      collection.cards.push(cardData);
      await collection.save();
    } catch (error) {
      console.error(error);
    }
  }

  // Deletar uma coleção inteira
  async deleteCollection(id) {
    try {
      await Collection.findByIdAndDelete(id);
      console.log(`Coleção com id: ${id} excluída.`);
    } catch (error) {
      console.error(error);
    }
  }

  // Atualizar dados de uma coleção
  async updateCollection(id, name, releaseYear) {
    try {
      await Collection.findByIdAndUpdate(id, {
        name,
        releaseYear,
      });
      console.log(`Coleção com id: ${id} atualizada com sucesso.`);
    } catch (error) {
      console.error(error);
    }
  }

  // Buscar uma única coleção
  async getOne(id) {
    try {
      const collection = await Collection.findById(id);
      return collection;
    } catch (error) {
      console.error(error);
    }
  }

  // Remover uma carta de uma coleção
  async removeCard(collectionId, cardId) {
    try {
      const collection = await Collection.findById(collectionId);
      if (!collection) return null;

      collection.cards = collection.cards.filter(card => card._id.toString() !== cardId);
      await collection.save();
    } catch (error) {
      console.error(error);
    }
  }

  // Atualizar uma carta específica
  async updateCard(collectionId, cardId, cardData) {
    try {
      const collection = await Collection.findById(collectionId);
      if (!collection) return null;

      const cardIndex = collection.cards.findIndex(card => card._id.toString() === cardId);
      if (cardIndex === -1) return null;

      collection.cards[cardIndex] = { ...collection.cards[cardIndex]._doc, ...cardData };
      await collection.save();
    } catch (error) {
      console.error(error);
    }
  }
}

export default new CollectionService();