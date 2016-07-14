angular.module('botanicofutbol', [])

.controller('mainController', function($scope, $http) {

    $scope.formTournament = {};
    $scope.formTeam = {};
    $scope.formPlayer = {};
    $scope.formFixture = {};
    $scope.tournamentData = {};
    $scope.teamData = {};
    $scope.playerData = {};
    $scope.fixtureData = {};
    $scope.fixtureZoneData = {};

    $scope.getFixtureByZoneId = function(zoneId) {
        $http.get('/fixture/' + zoneId)
            .success(function(data) {
                $scope.fixtureZoneData = data;
                console.log("Get Fixture by zoneId success");
            })
            .error(function(data) {
                console.log('Error: ' + data);
        });
    };

    /**
    * Tournament methods
    */

    getAllTournament();
    getAllTeams();
    getAllPlayers();
    getAllFixtures();

    // Get all tournament
    function getAllTournament() {
        $http.get('/tournament')
            .success(function(data) {
                $scope.tournamentData = data;
                console.log("Get all tournament success");
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Crate tournament
    $scope.addTournament = function() {
        $http.post('/tournament', $scope.formTournament)
            .success(function(data) {
                $scope.tournamentData.push(data);
                $scope.formTournament = {};                
                console.log("Add tournament success");
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Delete tournament
    $scope.deleteTournament = function(tournamentID) {
        $http.delete('/tournament/' + tournamentID)
            .success(function(data) {
                var index = $scope.tournamentData.indexOf(tournamentID);
                $scope.tournamentData.splice(index, 1);
                console.log("Delete tournament success ");
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    /**
    * Team methods
    */
     
    // Get all teams
    function getAllTeams() {
        $http.get('/team')
            .success(function(data) {
                $scope.teamData = data;
                console.log("Get all team success");
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Add team
    $scope.addTeam = function() {
        $http.post('/team', $scope.formTeam)
            .success(function(data) {
                $scope.teamData.push(data);
                $scope.formTeam = {};                
                console.log("Add team success");
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Delete team
    $scope.deleteTeam = function(teamID) {
        $http.delete('/team/' + teamID)
            .success(function(data) {
                var index = $scope.teamData.indexOf(teamID);
                $scope.teamData.splice(index, 1);
                console.log("Delete team success ");
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

     /**
    * Player methods
    */

    // Get all players
    function getAllPlayers() {
        $http.get('/player')
            .success(function(data) {
                $scope.playerData = data;
                console.log("Get all player success");
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Crate tournament
    $scope.addPlayer = function() {
        $http.post('/player', $scope.formPlayer)
            .success(function(data) {
                $scope.playerData.push(data);
                $scope.formPlayer = {};                
                console.log("Add player success");
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Delete tournament
    $scope.deletePlayer = function(playerID) {
        $http.delete('/player/' + playerID)
            .success(function(data) {
                var index = $scope.playerData.indexOf(playerID);
                $scope.playerData.splice(index, 1);
                console.log("Delete player success ");
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    /**
    * Fixture methods
    */

    // Get all tournament
    function getAllFixtures() {
        $http.get('/fixture')
            .success(function(data) {
                $scope.fixtureData = data;
                console.log("Get all fixture success");
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Crate tournament
    $scope.addFixture = function() {
        $http.post('/fixture', $scope.formFixture)
            .success(function(data) {
                $scope.fixtureData.push(data);
                $scope.formfixture = {};                
                console.log("Add fixture success");
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Delete tournament
    $scope.deleteFixture = function(fixtureId, matchId) {
        $http.delete('/fixture/' + fixtureId + '/' + matchId)
            .success(function(data) {
                var objToDelete = $scope.fixtureData.filter(function ( obj ) {
                    return objToDelete.id == fixtureId && objToDelete.match_id == matchId;
                })[0];
                var index = $scope.fixtureData.indexOf(objToDelete);
                $scope.fixtureData.splice(index, 1);
                console.log("Delete fixture success ");
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


});