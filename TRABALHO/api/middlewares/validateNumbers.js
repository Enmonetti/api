
module.exports = (req, res, next) => {
  const numeros = req.body.numeros;
  if (!Array.isArray(numeros) || numeros.length === 0) {
    return res.status(400).json({ erro: 'Envie um array válido no campo "numeros".' });
  }
  if (!numeros.every(n => typeof n === 'number')) {
    
    return res.status(400).json({ erro: 'Todos os elementos do array devem ser números.' });
  }
  next();
};