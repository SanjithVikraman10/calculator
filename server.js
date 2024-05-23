const express = require('express');
const app = express();
const port = 4000;

// Serve static files from the public directory
app.use(express.static('public'));

// Route handler for GET request to /calculate
app.get('/calculate', (req, res) => {
    const { first, second, operator } = req.query;
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);
    let result;

    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }

    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
