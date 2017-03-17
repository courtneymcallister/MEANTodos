(function(){
  angular.module('MEANTodos') //getter syntax
    .controller('TodoController', TodoController);

    TodoController.$inject = ['$scope', 'TodoService'];

    function TodoController($scope, TodoService){
      $scope.todos = [];
      $scope.getTodos = getTodos;

      function getTodos(){
        console.log('getting the todos yo....');
        TodoService.getAll()
                  .then(function(res){
                    $scope.todos = res.data.todos;
                  });
      }
    }
})()
