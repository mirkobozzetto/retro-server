import mongoose from "mongoose";

const SchemaAliment = new mongoose.Schema({
  id: { type: String, required: true },
  aliment: { type: String, required: true },
  calories: { type: Number, required: true },
  vitamines: { type: String, required: true },
  mineraux: { type: String, required: true },
  proteines: { type: String, required: true },
  glucides: { type: String, required: true },
  graisses: { type: String, required: true },
});

export const AlimentModel = mongoose.model("Aliment", SchemaAliment);
export const getAliments = () => AlimentModel.find();

export const alimentType = (aliment: string) => AlimentModel.findById(aliment);
export const alimentById = (id: string) => AlimentModel.findById(id);

export const createAliment = (values: Record<string, unknown>) =>
  new AlimentModel(values).save().then((aliment) => aliment.toObject());

export const deleteAlimentbyId = (id: string) =>
  AlimentModel.findByIdAndDelete({ _id: id });

export const updateAliment = (id: string, values: Record<string, unknown>) =>
  AlimentModel.findByIdAndUpdate(id, values, { new: true });
