#!/usr/bin/env node

import inquirer from "inquirer";
import mongoose from "mongoose";
import { AlimentModel } from "db/foods";
// import { AlimentModel } from "./path-to-your-model"; // Ajustez le chemin

// Connexion à MongoDB
mongoose.connect("your-mongodb-uri");

interface ReponseAliment {
  aliment: string;
  categorie: string;
  // Ajoutez d'autres champs attendus ici
}

interface ReponseProteines {
  total: number;
  askAmines: boolean;
  // Ajoutez d'autres champs pour les acides aminés ici
}

const questions = [
  { type: "input", name: "aliment", message: "Nom de l'aliment :" },
  {
    type: "list",
    name: "categorie",
    message: "Catégorie :",
    choices: ["Fruit", "Légume", "Viande", "Céréale", "Autre"],
  },
  // Ajoutez d'autres questions ici
];

async function askProteines(): Promise<ReponseProteines> {
  const proteineResponse = await inquirer.prompt([
    {
      type: "number",
      name: "total",
      message: "Quantité de protéines (par 100g) :",
    },
    {
      type: "confirm",
      name: "askAmines",
      message: "Voulez-vous entrer les acides aminés ?",
    },
  ]);

  if (proteineResponse.askAmines) {
    const aminesResponse = await inquirer.prompt([
      // Ajoutez ici les questions pour les acides aminés
    ]);
    return { ...proteineResponse, ...aminesResponse };
  }

  return proteineResponse;
}

inquirer.prompt(questions).then(async (answers: ReponseAliment) => {
  const proteines = await askProteines();
  const newAliment = new AlimentModel({ ...answers, proteines });

  newAliment
    .save()
    .then(() => {
      console.log("Aliment enregistré avec succès.");
      mongoose.disconnect();
    })
    .catch((err: Error) => {
      console.error("Erreur lors de l'enregistrement :", err.message);
      mongoose.disconnect();
    });
});
