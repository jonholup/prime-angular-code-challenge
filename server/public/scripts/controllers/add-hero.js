app.controller('AddHeroController', ['$http', function($http){
    console.log('Add Hero Controller loaded');
    var self = this;
    self.newHero = {};
    self.heroes = { list: []};

    self.addHero = function addHero(newHero) {
 $http({
   method: 'POST',
   url: '/heroes',
   data: newHero
 }).then(function(response){
   console.log(response);
   getHeros();
   newHero = {};

 });
}; // ends addPerson function

function getHeros() {
$http({
method: 'GET',
url: '/heroes'
}).then(function(response) {
console.log('this is response.data from factory',response.data);
console.log('this is response from factory', response);
self.heroes.list = response.data;
});
}

}]);
