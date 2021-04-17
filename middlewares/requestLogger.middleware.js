const requestLogger = (req, res, next) => {
  console.log("LOGGED", req.method)
  next();
}

module.exports = requestLogger