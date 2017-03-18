(function(){
  angular.module('MEANTodos') //getter syntax
    .controller('TodoController', TodoController);

    TodoController.$inject = ['$scope', 'TodoService'];

    function TodoController($scope, TodoService){
      $scope.todos = [];
      $scope.newTodo = {};
      $scope.addTodo = addTodo;
      $scope.deleteTodo = deleteTodo;
      getTodos();

      function addTodo(newTodo){
        TodoService.create(newTodo)
                   .then(function(res){
                     getTodos();
                     $scope.newTodo = {};
                   });
      }
      function deleteTodo(todo){
        TodoService.delete(todo)
                   .then(function(res){
                     getTodos();
                   });
      }

      function getTodos(){
        TodoService.getAll()
                  .then(function(res){
                    $scope.todos = res.data.todos;
                  });
      }
    }
})()
