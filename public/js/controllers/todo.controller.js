(function(){
  angular.module('MEANTodos') //getter syntax
    .controller('TodoController', TodoController);

    TodoController.$inject = ['$scope', 'TodoService'];

    function TodoController($scope, TodoService){
      $scope.todos = [];
      $scope.newTodo = {};
      $scope.getTodos = getTodos;
      $scope.addTodo = addTodo;

      function addTodo(newTodo){
        console.log('creating a new todo....');
        TodoService.create(newTodo)
                   .then(function(res){
                     getTodos();
                   });
      }
      function getTodos(){
        console.log('getting the todos....');
        TodoService.getAll()
                  .then(function(res){
                    $scope.todos = res.data.todos;
                  });
      }
    }
})()
