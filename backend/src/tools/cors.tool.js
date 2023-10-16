module.exports = (_req, res, next) => {
  res.setHeader('access-control-allow-origin', '*');
  res.setHeader('access-control-allow-methods', 'GET, POST, PUT, DELETE');
  res.setHeader('access-control-allow-headers', 'Content-Type, Authorization');
  next();
};

// Define requisições à domínio:
// 'access-control-allow-origin', '*'
// * => Aqualquer url
// localhost:qualquer-port

// Define métodos que poderá usar:
// 'access-control-allow-methods', '*'
// * => Aqualquer método
// 'GET, POST, PUT, DELETE, OPTIONS' => CRUD
  // OPTIONS para web

// Define que só pode acessar se tiver um header:
// 'access-control-allow-headers', '*'
// * => Aqualquer header ou nenhum
// 'um-header-qualquer'