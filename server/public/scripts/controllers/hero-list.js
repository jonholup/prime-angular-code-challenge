app.controller('HeroListController', ['$http', function($http){
    console.log('Hero List Controller loaded');
    var self = this;
    self.heroes = { list: []};


    getHeros();
    function getHeros() {
  $http({
    method: 'GET',
    url: '/heroes'
  }).then(function(response) {
    console.log('this is response.data from factory',response.data);
    console.log('this is response from factory', response);
    self.heroes.list = response.data;
    // factoryTasks = {
  //   list: [{name: 'sleep', id: 1}, {name: 'wake up', id: 2}]
  // }

  });
}

}]);
