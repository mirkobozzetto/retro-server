import mongoose from "mongoose";
import { Schema, SchemaTypes } from "mongoose";

const SchemaAliment = new mongoose.Schema({
  aliment: { type: String, required: true },
  calories: { type: Number, required: true, min: 0 },
  glucides: { type: Number, required: true, min: 0 },
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
  lipides: {
    saturees: { type: Number, required: true, min: 0 }, // Graisses saturées
    monoInsaturees: { type: Number, required: true, min: 0 }, // Graisses mono-insaturées
    polyInsaturees: { type: Number, required: true, min: 0 }, // Graisses poly-insaturées
  },
  proteines: {
    total: { type: Number, required: true, min: 0 },
    // Acides aminés essentiels (ne peuvent pas être synthétisés par le corps)
    histidine: { type: Number, required: false }, // Important pour la croissance et la réparation des tissus
    isoleucine: { type: Number, required: false }, // Joue un rôle dans la synthèse des protéines et le métabolisme
    leucine: { type: Number, required: false }, // Crucial pour la synthèse des protéines et la réparation musculaire
    lysine: { type: Number, required: false }, // Important pour la croissance et la production d'anticorps
    méthionine: { type: Number, required: false }, // Joue un rôle dans le métabolisme et la désintoxication
    phénylalanine: { type: Number, required: false }, // Précurseur de la tyrosine et de certains neurotransmetteurs
    thréonine: { type: Number, required: false }, // Important pour la synthèse des protéines et des collagènes
    tryptophane: { type: Number, required: false }, // Précurseur de la sérotonine, important pour l'humeur
    valine: { type: Number, required: false }, // Stimule la croissance musculaire et la régénération tissulaire

    // Acides aminés non essentiels (peuvent être synthétisés par le corps)
    alanine: { type: Number, required: false }, // Impliqué dans le métabolisme du glucose
    arginine: { type: Number, required: false }, // Important pour la santé cardiovasculaire et la cicatrisation
    asparagine: { type: Number, required: false }, // Joue un rôle dans le métabolisme
    acide_aspartique: { type: Number, required: false }, // Impliqué dans le cycle de l'urée et la synthèse de l'ADN
    cystéine: { type: Number, required: false }, // Important pour la formation de la peau, des cheveux et des ongles
    acide_glutamique: { type: Number, required: false }, // Neurotransmetteur et précurseur du GABA
    glutamine: { type: Number, required: false }, // Contribue au métabolisme et à la structure cellulaire
    glycine: { type: Number, required: false }, // Impliqué dans la synthèse du collagène
    proline: { type: Number, required: false }, // Important pour la production de collagène et le maintien des tissus
    sérine: { type: Number, required: false }, // Impliqué dans la synthèse des protéines et des acides gras
    tyrosine: { type: Number, required: false }, // Précurseur des hormones thyroïdiennes et des catécholamines
  },
  vitamines: {
    A: { type: Number, required: false }, // Retinol : essentiel pour la vision, la peau et le système immunitaire
    B1: { type: Number, required: false }, // Thiamine : importante pour le métabolisme énergétique et la fonction nerveuse
    B2: { type: Number, required: false }, // Riboflavine : joue un rôle dans la production d'énergie et le métabolisme des cellules
    B3: { type: Number, required: false }, // Niacine : essentielle pour le métabolisme énergétique et la réparation de l'ADN
    B5: { type: Number, required: false }, // Acide pantothénique : important pour la synthèse des hormones et du métabolisme
    B6: { type: Number, required: false }, // Pyridoxine : crucial pour le métabolisme des protéines et la formation des globules rouges
    B7: { type: Number, required: false }, // Biotine : aide au métabolisme des graisses, des glucides et des protéines
    B9: { type: Number, required: false }, // Acide folique : important pour la formation des cellules sanguines et la santé fœtale
    B12: { type: Number, required: false }, // Cobalamines : essentielles pour la production de globules rouges et le fonctionnement du système nerveux
    C: { type: Number, required: false }, // Acide ascorbique : antioxydant important, aide à la réparation des tissus et à l'absorption du fer
    D: { type: Number, required: false }, // Calciférols : essentiels pour la santé des os et l'immunité
    E: { type: Number, required: false }, // Tocophérols et tocotriénols : antioxydants puissants, protègent les cellules contre les dommages
    K1: { type: Number, required: false }, // Phylloquinone : importante pour la coagulation du sang
    K2: { type: Number, required: false }, // Ménaquinones : jouent un rôle dans la santé des os et la coagulation sanguine
  },
  mineraux: {
    calcium: { type: Number, required: false }, // Essentiel pour la santé des os et des dents, ainsi que pour la fonction musculaire et nerveuse
    fer: { type: Number, required: false }, // Crucial pour la formation de l'hémoglobine et le transport de l'oxygène dans le sang
    magnesium: { type: Number, required: false }, // Impliqué dans plus de 300 réactions enzymatiques, important pour la santé osseuse et la fonction musculaire
    potassium: { type: Number, required: false }, // Nécessaire pour le fonctionnement des cellules, des nerfs et des muscles
    sodium: { type: Number, required: false }, // Essentiel pour l'équilibre des fluides et la transmission nerveuse
    zinc: { type: Number, required: false }, // Important pour la fonction immunitaire, la cicatrisation des plaies et la synthèse des protéines
    phosphore: { type: Number, required: false }, // Joue un rôle clé dans la formation des os et des dents et dans la production d'énergie
    iode: { type: Number, required: false }, // Nécessaire à la production des hormones thyroïdiennes
    sélénium: { type: Number, required: false }, // Contribue à la protection contre les dommages oxydatifs et à la fonction immunitaire
    cuivre: { type: Number, required: false }, // Impliqué dans la formation des globules rouges et le maintien des nerfs et des vaisseaux sanguins
    manganèse: { type: Number, required: false }, // Joue un rôle dans le métabolisme des os, des acides aminés, des glucides et du cholestérol
    chrome: { type: Number, required: false }, // Contribue à la régulation du sucre dans le sang
    molybdène: { type: Number, required: false }, // Important pour le fonctionnement de certaines enzymes dans le corps
    fluor: { type: Number, required: false }, // Nécessaire pour la santé des os et des dents
  },
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
