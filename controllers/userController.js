const { User } = require('../models')

class UserController {
  static readAll (req, res, next) {

    User
      .findAll()
      .then(dataUser => res.status(200).json({ dataUser }))
      .catch(err => next(err))

  }

  static readUserByaccountNumber (req, res, next) {
    const accountNumber = req.params.accountNumber

    console.log(accountNumber, 'req.params')

    User
      .findOne({ where : { accountNumber }})
      .then(foundUser => res.status(200).json({ foundUser }))
      .catch(err => next(err))
  }

  static readUserByidentityNumber (req, res, next) {

    const identityNumber = req.params.identityNumber

    User
      .findOne({ where : { identityNumber }})
      .then(foundUser => res.status(200).json({ foundUser }))
      .catch(err => next(err))
  }


  static addUser (req, res, next) {

    const newUser = {
      username      : req.body.username,
      email         : req.body.email,
      accountNumber : req.body.accountNumber,
      identityNumber: req.body.identityNumber
    }

    User
      .create({ ...newUser })
      .then( data => res.status(201).json({ data }))
      .catch(err => next(err))

  }

  static deleteUser(req, res, next) {

    const id = req.params.id


    User
      .destroy({where : {id} })
      .then( _=> res.status(200).json({ message: 'success delete user'}))
      .catch(err => next(err))
  }

  static updateUser(req, res, next) {
    
    const id = req.params.id

    const dataUpdate = {
      username      : req.body.username,
      email         : req.body.email,
      accountNumber : req.body.accountNumber,
      identityNumber: req.body.identityNumber
    }

    User
      .update(dataUpdate, { where : {id} })
      .then( _ => res.status(200).json({ message : 'Success Updated User'}))
      .catch(err => next(err))

  }
}

module.exports = UserController