const authorize = (req, res, next) => {
  console.log(req.headers.access_token, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')

  const access_token = req.headers.access_token
  if (access_token) next()
  else res.status(401).json({message: 'unauthorize'})
}

module.exports = authorize
