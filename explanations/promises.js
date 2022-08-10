function requestHandler(req, res){
  User.findById(req.userId)
    .then(function(user){
      return Tasks.findById(user.taskId)
    })
    .then(function(task){
      task.completed = true;
      task.save();
    })
    .then(function(){
      res.send('Tasks completed');
    })
    .catch(function(errores){
      res.send(errores);
    })
}