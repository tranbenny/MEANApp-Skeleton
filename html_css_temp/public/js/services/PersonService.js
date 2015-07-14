angular.module('PersonService', []).factory('Person', [$http, function($http) {
    
    return {
        get : function() {
          return $http.get('/api/people');  
        },
        
        create : function(peopleData) {
          return $http.post('/api/people', peopleData);  
        },
        
        delete : function(id) {
            return $http.delete('/api/people/' + id);
        }
    }
    
    
    
    
    
}]);