# 📝 ToDo List avec React et Redux

## 📌 Description

Ce projet consiste à créer une application **ToDo List** avec **React**.

Redux est utilisé pour gérer l'état global des tâches.

L'application permet à l'utilisateur d'ajouter, modifier et filtrer les tâches.

---

## 🎯 Objectif

L'objectif de ce projet est de pratiquer :

- React
- Redux
- Redux Toolkit
- React-Redux
- La gestion de l'état global
- Les composants React
- Les hooks `useState`, `useSelector` et `useDispatch`

---

## 🚀 Fonctionnalités

L'utilisateur peut :

- ➕ Ajouter une nouvelle tâche
- 📋 Afficher la liste des tâches
- ✅ Marquer une tâche comme terminée
- ❌ Marquer une tâche comme non terminée
- ✏️ Modifier une tâche
- 🔎 Filtrer les tâches

Les filtres disponibles sont :

- **Toutes**
- **Faites**
- **Pas faites**

---

## 📋 Structure d'une tâche

Chaque tâche possède trois attributs :

```javascript
{
  id: 1,
  description: "Apprendre React",
  isDone: false
}
