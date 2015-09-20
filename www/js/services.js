angular.module('dreamophone.services', ['ngResource'])

.factory('Dreams', function($resource) {
  return $resource('http://localhost:3000/api/dream/:id',
    {},
    { 
      'get':    {method:'GET'},
      'save':   {method:'POST'},
      'query':  {method:'GET'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'} 
    }
  );
});
