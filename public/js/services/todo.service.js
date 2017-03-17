(function(){
  angular.module('MEANTodos')
    .factory('TodoService', TodoService);

    TodoService.$inject = ['$http']; //$http == axios

    function TodoService($http){
      var baseURL = '/todos';

      function getAll(){
        return $http.get(baseURL);
      }

      function create(todo){
        return $http.post(baseURL, todo);
      }

      return {
        getAll: getAll,
        create: create
      };
    }
})()
