# TP React Hooks - Application de Gestion de Produits  

🔗 [Lien vers mon dépôt GitHub](https://github.com/ZAINABELARABI/TP-React-hooks)

---

## Objectif 

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (`useState`, `useEffect`, `useContext`) ainsi que la création de hooks personnalisés.

---

## Exercice 1 : État et Effets


🛠️ **1.1.Modification du composant productSearch**

Recherche en temps réel avec `useState` et `useEffect`.  
Filtrage dynamique des produits affichés selon le texte saisi.

![Description de l'image](images/Screen1.png)  

🛠️ **1.2.Implémentation de debounce sur la recherche**
Pour éviter de lancer la recherche à chaque frappe au clavier, nous avons utilisé un **hook personnalisé `useDebounce`** qui attend un délai de 500ms avant de mettre à jour le terme recherché. Cela réduit les appels inutiles et améliore les performances.

Nous avons importé ce hook dans `ProductSearch.js` et remplacé l'utilisation directe de `searchTerm` dans le `useEffect` par `debouncedSearchTerm`.

![Description de l'image](images/Screen1.2.png)  

## Exercice 2 : État et Effets
### 2.1. Utilisation de `useContext` pour partager l'état de recherch
Nous avons créé un contexte `SearchContext` pour partager l'état de recherche entre les
composants. Nous avons utilisé `useContext` pour accéder à cet état
dans `ProductSearch.js` et `ProductList.js`.

### 2.2. Ajout de sélecteur de langue (LanguageSelector.js)
Nous avons créé un composant `LanguageSelector` qui utilise le contexte `LanguageContext`. Il affiche un menu déroulant avec les options : Français, Anglais et Espagnol.

🛠️ option English
![Description de l'image](images/English.png) 

🛠️ option Espagnol
![Description de l'image](images/Esp.png)  