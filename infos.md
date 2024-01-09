# Schéma Mongoose pour les Aliments

## Informations générales

- `aliment`: String (requis) - Nom de l'aliment
- `calories`: Number (requis, min: 0) - Nombre de calories par portion
- `glucides`: Number (requis, min: 0) - Quantité de glucides par portion

## Catégorie

- `categorie`: String (requis, valeurs possibles: "FRUITS ET LÉGUMES", "PRODUITS CÉRÉALIERS ET LÉGUMINEUSES", "PRODUITS LAITIERS", "VIANDE, POISSON ET FRUITS DE MER", "MATIÈRES GRASSES", "PRODUITS SUCRÉS") - Catégorie de l'aliment

## Lipides

- `lipides.saturees`: Number (requis, min: 0) - Graisses saturées
- `lipides.monoInsaturees`: Number (requis, min: 0) - Graisses mono-insaturées
- `lipides.polyInsaturees`: Number (requis, min: 0) - Graisses poly-insaturées

## Protéines

- `protéines.total`: Number (requis, min: 0) - Quantité totale de protéines
- Acides aminés essentiels (peuvent être requis en fonction de l'aliment) :
  - `protéines.histidine`: Number
  - `protéines.isoleucine`: Number
  - `protéines.leucine`: Number
  - `protéines.lysine`: Number
  - `protéines.méthionine`: Number
  - `protéines.phénylalanine`: Number
  - `protéines.thréonine`: Number
  - `protéines.tryptophane`: Number
  - `protéines.valine`: Number
- Acides aminés non essentiels (peuvent être requis en fonction de l'aliment) :
  - `protéines.alanine`: Number
  - `protéines.arginine`: Number
  - `protéines.asparagine`: Number
  - `protéines.acide_aspartique`: Number
  - `protéines.cystéine`: Number
  - `protéines.acide_glutamique`: Number
  - `protéines.glutamine`: Number
  - `protéines.glycine`: Number
  - `protéines.proline`: Number
  - `protéines.sérine`: Number
  - `protéines.tyrosine`: Number

## Vitamines

- Toutes les vitamines (peuvent être requises en fonction de l'aliment) :
  - `vitamines.A`: Number
  - `vitamines.B1`: Number
  - `vitamines.B2`: Number
  - `vitamines.B3`: Number
  - `vitamines.B5`: Number
  - `vitamines.B6`: Number
  - `vitamines.B7`: Number
  - `vitamines.B9`: Number
  - `vitamines.B12`: Number
  - `vitamines.C`: Number
  - `vitamines.D`: Number
  - `vitamines.E`: Number
  - `vitamines.K1`: Number
  - `vitamines.K2`: Number

## Minéraux

- Tous les minéraux (peuvent être requis en fonction de l'aliment) :
  - `mineraux.calcium`: Number
  - `mineraux.fer`: Number
  - `mineraux.magnesium`: Number
  - `mineraux.potassium`: Number
  - `mineraux.sodium`: Number
  - `mineraux.zinc`: Number
  - `mineraux.phosphore`: Number
  - `mineraux.iode`: Number
  - `mineraux.sélénium`: Number
  - `mineraux.cuivre`: Number
  - `mineraux.manganèse`: Number
  - `mineraux.chrome`: Number
  - `mineraux.molybdène`: Number
  - `mineraux.fluor`: Number

---

il faut que je puisse encoder toute les informations depuis une CLI
par exemple inquierer
