angular.module('dreamophone.services', [])

.factory('Dreams', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var dreams = [
    {
      id: 1,
      content: 'First test dream'
    }, 
    {
      id: 2,
      content: 'Second test dream'
    } 
  ];

  return {
    all: function() {
      return dreams;
    }
  };
});
