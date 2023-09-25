// In a new file named "server.js"
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
