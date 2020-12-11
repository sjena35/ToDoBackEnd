/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

/* const User = require("../models/User"); */

module.exports = {
  

  /**
   * `UserController.findById()`
   */
  findById: async function (req, res) {
    try {
      console.log("find one",req.params.id)
      const user = await User.findOne({
          id: req.params.id
      });
      return res.ok(user);
  }
  catch (err) {
      return res.serverError(err);
  }
  },
  


  /**
   * `UserController.findByEmail()`
   */
  findBEmail: async function (req, res) {
    try {
      console.log("find one",req.params.email)
      const user = await User.findOne({useremail:req.params.email});
      return res.ok(user);
  }
  catch (err) {
      return res.serverError(err);
  }
  },

  /**
   * `UserController.find()`
   */
  find: async function (req, res) {
    try {
      const user = await User.find();
      return res.ok(user);
  }
  catch (err) {
      return res.serverError(res);
  }
  },

  /**
   * `UserController.create()`
   */
  create: async function (req, res) {
    try {
      let param = req.allParams();
      if (!param.useremail) { return res.badRequest({ err: "Email is required field!" }) }

      const results = await User.create({
          useremail: param.email,
          password: param.password,
          firstname:param.firstname,
          lastname:param.lastname,
          gender:param.gender,
          dateOfBirth:param.dateOfBirth
      });
      return res.ok(results);
  }

  catch (err) {
      return res.serverError(err);
  }
  },

  /**
   * `UserController.delete()`
   */
  delete: async function (req, res) {
    try {
      const results = await User.destroy({
          id: req.params.id
      })
      res.ok(results);
  }
  catch (err) {
      res.serverError(err)
  }
  }

};

