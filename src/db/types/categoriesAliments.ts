import mongoose, { Schema } from "mongoose";

// Crée un schéma pour une catégorie de produits
const categorieSchema = new Schema({
  categories: {
    type: String,
    required: true,
    enum: [
      "FRUITS ET LÉGUMES",
      "PRODUITS CÉRÉALIERS ET LÉGUMINEUSES",
      "PRODUITS LAITIERS",
      "VIANDE, POISSON ET FRUITS DE MER",
      "MATIÈRES GRASSES",
      "PRODUITS SUCRÉS",
    ],
  },
});

module.exports = mongoose.model("Categories", categorieSchema);
