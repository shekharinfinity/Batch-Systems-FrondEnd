// server/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Serve static files
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
