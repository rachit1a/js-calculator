const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (index.html, app.js, styles.css)
app.use(express.static('public'));

// Calculator endpoints
app.post('/add', (req, res) => {
    const { x, y } = req.body;
    const result = parseFloat(x) + parseFloat(y);
    res.json({ result });
});

app.post('/subtract', (req, res) => {
    const { x, y } = req.body;
    const result = parseFloat(x) - parseFloat(y);
    res.json({ result });
});

app.post('/multiply', (req, res) => {
    const { x, y } = req.body;
    const result = parseFloat(x) * parseFloat(y);
    res.json({ result });
});

app.post('/divide', (req, res) => {
    const { x, y } = req.body;
    const result = parseFloat(x) / parseFloat(y);
    res.json({ result });
});

app.post('/clr', (req, res) => {
    res.json({ message: 'Cleared' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
