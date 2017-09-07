angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
    */
    $scope.addListing = function() {
        $scope.listings.push(
            {
                "code": $scope.newCode,
                "name": $scope.newName,
                "coordinates": {
                    "latitude": $scope.newLat,
                    "longitude": $scope.newLong
                },
            "address": $scope.newAdd
            });
        //clear the text boxes
        $scope.newCode = null;
        $scope.newName = null;
        $scope.newLat = null;
        $scope.newLong = null;
        $scope.newAdd = null;
    };
    $scope.deleteListing = function(index) {
        var ind = $scope.listings.indexOf(index);
        $scope.listings.splice(ind, 1);
    };
    $scope.showDetails = function(index) {
        $scope.coordinates = index.coordinates;
        $scope.address = index.address;
    };
  }
]);
