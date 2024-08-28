const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data.json');  // Load the dataset
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Endpoint to search for a product
app.get('/product', (req, res) => {
    const productName = req.query.name;
    const product = data.find(p => p.Product.toLowerCase() === productName.toLowerCase());

    if (product) {
        res.json({
            Product: product.Product,
            Green: product.Green,
            Blue: product.Blue,
            Grey: product.Grey,
            Overall: product.Overall
        });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://192.168.99.242:${PORT}`);
});
