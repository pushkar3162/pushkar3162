module.exports = app => {
    const book = require("../controllers/book.controllers.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", book.create);
  
    // Retrieve all Tutorials
    router.get("/", book.findAll);
  
    // Retrieve all published Tutorials
    //router.get("/published", books.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", book.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", book.update);
    // Delete a Tutorial with id
    router.delete("/:id", book.delete);

  // Delete all Tutorials
  router.delete("/", book.deleteAll);

  app.use('/api/book', router);
};