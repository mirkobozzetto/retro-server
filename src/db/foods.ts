import mongoose from "mongoose";

const SchemaAliment = new mongoose.Schema({
  aliment: { type: String, required: true },
  calories: { type: Number, required: true },
  vitamines: { type: String, required: true },
  mineraux: { type: String, required: true },
  proteines: { type: String, required: true },
  glucides: { type: String, required: true },
  graisses: { type: String, required: true },
});
