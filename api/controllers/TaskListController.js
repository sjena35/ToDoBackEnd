/**
 * TaskListController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `TaskListController.create()`
   */
  create: async function (req, res) {
    try{

      let {taskname, status,description,userId}=req.allParams();

      if(!taskname){
        return res.badRequest({err:'title field is required'});
      }

      const task= await TaskList.create({
        taskname:taskname,
        status:status,
        description:description,
        user:userId
      }).fetch()

      return res.ok(task)
    }
    catch(err){
      res.serverError(err)
    }
  },

  /**
   * `TaskListController.find()`
   */
  find: async function (req, res) {
    try{ 
      const tasks = await TaskList.find({}) 
      return res.ok(tasks);
     } 
     catch (err){ 
       return res.serverError(err); 
      }

  },

/*   findByUserId: async function (req, res) {
    try{ 
      console.log(req.params)
      const tasks = await TaskList.find({userId:req.params}) 
      return res.ok(tasks);
     } 
     catch (err){ 
       return res.serverError(err); 
      }

  }, */
  /**
   * `TaskListController.findById()`
   */
  findById: async function (req, res) {
    return res.json({
      todo: 'findById() is not implemented yet!'
    });
  },

  /**
   * `TaskListController.delete()`
   */
  del: async function (req, res) {
    try {
      
      console.log('in delete id =',req.params.id)
      const results = await TaskList.destroy({
          id: req.params.id
      })
      console.log("in delete resullts=",results)
      res.ok(results);
  }
  catch (err) {
      res.serverError(err)
  }

  },

  /**
   * `TaskListController.update()`
   */
  update: async function (req, res) {
    try {
      let param = req.allParams();
      let attribute = {};
      if (param.taskname) 
          attribute.taskname = param.taskname;
      if (param.status) 
          attribute.status = param.status;
      if (param.description) 
          attribute.description = param.description;
      
      const result = await TaskList.update({
          id: req.params.id
      }, attribute);
      return res.ok(result)
  }
  catch (err) {
      res.serverError(err);
  }
  }

};

