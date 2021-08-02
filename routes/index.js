const router = require('express').Router()
const UserController = require('../controllers/userController')
const authorize = require('../middlewares/authentication')


// router.get('/', (req, res) => res.send('test!!!'))
// router.use(authorize)
router.use(authorize)
router.post('/users', UserController.addUser)
router.get('/users/by-account/:accountNumber', UserController.readUserByaccountNumber)
router.get('/users/by-identity/:identityNumber', UserController.readUserByidentityNumber)
router.put('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)



module.exports = router