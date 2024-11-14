const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const validateCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);
    let check1 = (sum * 10) % 11;
    if (check1 === 10) check1 = 0;
    if (check1 !== parseInt(cpf.charAt(9))) return false;
    
    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);
    let check2 = (sum * 10) % 11;
    if (check2 === 10) check2 = 0;
    return check2 === parseInt(cpf.charAt(10));
};

app.post('/api/validate-cpf', (req, res) => {
    const { cpf } = req.body;
    const isValid = validateCPF(cpf);
    res.json({ isValid });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));