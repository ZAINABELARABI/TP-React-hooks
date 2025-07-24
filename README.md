# TP React Hooks - Application de Gestion de Produits  
*Réalisé par Zineb EL ARABI*

🔗 [Lien vers mon dépôt GitHub](https://github.com/ZAINABELARABI/TP-React-hooks)

---

## Objectif

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (`useState`, `useEffect`, `useContext`) ainsi que la création de hooks personnalisés.

---

## Exercice 1 : État et Effets


Solution
Pour cet exercice, j’ai implémenté la recherche en temps réel dans le composant ProductSearch.

J’ai utilisé le hook useState pour stocker la valeur de recherche.

Avec useEffect, j’ai filtré la liste des produits à chaque changement du texte saisi.

La recherche est insensible à la casse et affiche uniquement les produits dont le nom contient la chaîne recherchée.

Le rendu affiche le nom, l’image, et une courte description de chaque produit correspondant.

![Description de l'image](images/Screen1.png)  