const express = require('express');
const app = express();

// Middleware pour désactiver CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');  // Remplacez par une URL spécifique
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// Votre route API
app.get('/api/etudiants', (req, res) => {
  res.json([
    { id: 1, nom: 'Jean Dupont', age: 21 },
    { id: 2, nom: 'Marie Curie', age: 22 }
  ]);
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
