// types.ts

export interface IAliment {
  aliment: string;
  calories: number;
  glucides: number;
}

export interface ICategories {
  categories: string; // Catégorie de l'aliment (ex: FRUITS ET LÉGUMES)
}

export interface ILipides {
  saturees: number; // Graisses saturées
  monoInsaturees: number; // Graisses mono-insaturées
  polyInsaturees: number; // Graisses poly-insaturées
}

export interface IProteines {
  total: number; // Total des protéines
  histidine?: number; // Histidine : Important pour la croissance et la réparation des tissus
  isoleucine?: number; // Isoleucine : Joue un rôle dans la synthèse des protéines et le métabolisme
  leucine?: number; // Leucine : Crucial pour la synthèse des protéines et la réparation musculaire
  lysine?: number; // Lysine : Important pour la croissance et la production d'anticorps
  méthionine?: number; // Méthionine : Joue un rôle dans le métabolisme et la désintoxication
  phénylalanine?: number; // Phénylalanine : Précurseur de la tyrosine et de certains neurotransmetteurs
  thréonine?: number; // Thréonine : Important pour la synthèse des protéines et des collagènes
  tryptophane?: number; // Tryptophane : Précurseur de la sérotonine, important pour l'humeur
  valine?: number; // Valine : Stimule la croissance musculaire et la régénération tissulaire
  alanine?: number; // Alanine : Impliqué dans le métabolisme du glucose
  arginine?: number; // Arginine : Important pour la santé cardiovasculaire et la cicatrisation
  asparagine?: number; // Asparagine : Joue un rôle dans le métabolisme
  acide_aspartique?: number; // Acide aspartique : Impliqué dans le cycle de l'urée et la synthèse de l'ADN
  cystéine?: number; // Cystéine : Important pour la formation de la peau, des cheveux et des ongles
  acide_glutamique?: number; // Acide glutamique : Neurotransmetteur et précurseur du GABA
  glutamine?: number; // Glutamine : Contribue au métabolisme et à la structure cellulaire
  glycine?: number; // Glycine : Impliqué dans la synthèse du collagène
  proline?: number; // Proline : Important pour la production de collagène et le maintien des tissus
  sérine?: number; // Sérine : Impliqué dans la synthèse des protéines et des acides gras
  tyrosine?: number; // Tyrosine : Précurseur des hormones thyroïdiennes et des catécholamines
}

export interface IVitamines {
  A?: number; // Vitamine A (Retinol) : essentiel pour la vision, la peau et le système immunitaire
  B1?: number; // Vitamine B1 (Thiamine) : importante pour le métabolisme énergétique et la fonction nerveuse
  B2?: number; // Vitamine B2 (Riboflavine) : joue un rôle dans la production d'énergie et le métabolisme des cellules
  B3?: number; // Vitamine B3 (Niacine) : essentielle pour le métabolisme énergétique et la réparation de l'ADN
  B5?: number; // Vitamine B5 (Acide pantothénique) : important pour la synthèse des hormones et du métabolisme
  B6?: number; // Vitamine B6 (Pyridoxine) : crucial pour le métabolisme des protéines et la formation des globules rouges
  B7?: number; // Vitamine B7 (Biotine) : aide au métabolisme des graisses, des glucides et des protéines
  B9?: number; // Vitamine B9 (Acide folique) : important pour la formation des cellules sanguines et la santé fœtale
  B12?: number; // Vitamine B12 (Cobalamines) : essentielles pour la production de globules rouges et le fonctionnement du système nerveux
  C?: number; // Vitamine C (Acide ascorbique) : antioxydant important, aide à la réparation des tissus et à l'absorption du fer
  D?: number; // Vitamine D (Calciférols) : essentielle pour la santé des os et l'immunité
  E?: number; // Vitamine E (Tocophérols et tocotriénols) : antioxydants puissants, protègent les cellules contre les dommages
  K1?: number; // Vitamine K1 (Phylloquinone) : importante pour la coagulation du sang
  K2?: number; // Vitamine K2 (Ménaquinones) : jouent un rôle dans la santé des os et la coagulation sanguine
}

export interface IMineraux {
  calcium?: number; // Calcium : Essentiel pour la santé des os et des dents, ainsi que pour la fonction musculaire et nerveuse
  fer?: number; // Fer : Crucial pour la formation de l'hémoglobine et le transport de l'oxygène dans le sang
  magnesium?: number; // Magnésium : Impliqué dans plus de 300 réactions enzymatiques, important pour la santé osseuse et la fonction musculaire
  potassium?: number; // Potassium : Nécessaire pour le fonctionnement des cellules, des nerfs et des muscles
  sodium?: number; // Sodium : Essentiel pour l'équilibre des fluides et la transmission nerveuse
  zinc?: number; // Zinc : Important pour la fonction immunitaire, la cicatrisation des plaies et la synthèse des protéines
  phosphore?: number; // Phosphore : Joue un rôle clé dans la formation des os et des dents et dans la production d'énergie
  iode?: number; // Iode : Nécessaire à la production des hormones thyroïdiennes
  sélénium?: number; // Sélénium : Contribue à la protection contre les dommages oxydatifs et à la fonction immunitaire
  cuivre?: number; // Cuivre : Impliqué dans la formation des globules rouges et le maintien des nerfs et des vaisseaux sanguins
  manganèse?: number; // Manganèse : Joue un rôle dans le métabolisme des os, des acides aminés, des glucides et du cholestérol
  chrome?: number; // Chrome : Contribue à la régulation du sucre dans le sang
  molybdène?: number; // Molybdène : Important pour le fonctionnement de certaines enzymes dans le corps
  fluor?: number; // Fluor : Nécessaire pour la santé des os et des dents
}

export enum CategoriesEnum {
  FRUITS_ET_LEGUMES = "FRUITS ET LÉGUMES",
  PRODUITS_CEREAUX_ET_LEGUMINEUSES = "PRODUITS CÉRÉALIERS ET LÉGUMINEUSES",
  PRODUITS_LAITIERS = "PRODUITS LAITIERS",
  VIANDE_POISSON_ET_FRUITS_DE_MER = "VIANDE, POISSON ET FRUITS DE MER",
  MATIERES_GRASSES = "MATIÈRES GRASSES",
  PRODUITS_SUCRES = "PRODUITS SUCRÉS",
}

export type Categories = keyof typeof CategoriesEnum;
