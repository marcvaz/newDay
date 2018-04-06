define(['require', 'app'], function(require, APP) {

    /**
     * Controller for Screen3 generated by Appery.io
     * @module Screen3
     */

    APP.controller('Screen3', ['$scope', 'Apperyio', controller]);

    function controller($scope, Apperyio) {

        /**
         * user controller variables
         */
        $scope.feelingString = Apperyio.EntityAPI('String');
        $scope.debugEnabled = Apperyio.EntityAPI('Boolean');
        $scope.taskDescriptionVar = Apperyio.EntityAPI('String');
        $scope.incomingThought = Apperyio.EntityAPI('String');

        /**
         * User controller functions
         */
        /**
         * @function init
         */
        $scope.init = function() {
            //On load screen logic
            // array of throughts
            $scope.thoughts = [];
            //console.log($scope.thoughts);
            // collected feeling
            $scope.feelingString = "";
            //Enabling debug 
            $scope.debugEnabled = false;
            //On load screen logic
            var $routeParams = Apperyio.get("$routeParams");
            $scope.taskDescriptionVar = $routeParams.a1;
            if ($scope.debugEnabled) {
                console.log($routeParams.a1, $routeParams.a2, $routeParams.a3, $routeParams.a4, $routeParams.a5, $routeParams.a6);
            }
            if ($routeParams.a2 == "true") {
                $scope.feelingString = "anxious";
            }
            if ($routeParams.a3 == "true") {
                if ($scope.feelingString !== "") {
                    $scope.feelingString = $scope.feelingString + ", ";
                }
                $scope.feelingString = $scope.feelingString + "angry";
            }
            if ($routeParams.a4 == "true") {
                if ($scope.feelingString !== "") {
                    $scope.feelingString = $scope.feelingString + ", ";
                }
                $scope.feelingString = $scope.feelingString + "sad";
            }

            if ($routeParams.a5 == "true") {
                if ($scope.feelingString !== "") {
                    $scope.feelingString = $scope.feelingString + ", ";
                }
                $scope.feelingString = $scope.feelingString + "guilty";
            }
            if ($routeParams.a6 == "true") {
                if ($scope.feelingString !== "") {
                    $scope.feelingString = $scope.feelingString + ", ";
                }
                $scope.feelingString = $scope.feelingString + "disgusted";
            }
        };

        /**
         * @function addThought
         */
        $scope.addThought = function() {
            if ($scope.incomingThought) {
                $scope.thoughts.push($scope.incomingThought);
                if ($scope.debugEnabled) {
                    console.log("incoming thought:", $scope.incomingThought);
                    console.log("all thoughts:", $scope.thoughts);
                }
                $scope.incomingThought = "";
            }
        };

        /**
         * @function fightNegativeThoughts
         */
        $scope.fightNegativeThoughts = function() {
            //console.log($scope.taskDescriptionVar);
            var path = "path1";
            if ($scope.thoughts.length < 1) {
                path = "path2";
                //console.log("path2");
                Apperyio.navigateTo("Screen4", {
                    a1: path,
                    a2: $scope.taskDescriptionVar
                });
            } else {
                //console.log("path1");
                Apperyio.navigateTo("Screen4", {
                    a1: path,
                    a2: $scope.thoughts,
                    a3: $scope.taskDescriptionVar
                });
            }
        };

        /**
         * @function loadCommonThoughts
         */
        $scope.loadCommonThoughts = function() {
            var modalOptions = { // About Ionic Modal: https://links.appery.io/ve-snippet-modal-ionic
                animation: 'slide-in-up',
                // The animation to show & hide with
                focusFirstInput: false,
                // Whether to autofocus the first input of the modal when shown
                backdropClickToClose: true,
                // Whether to close the modal on clicking the backdrop
                hardwareBackButtonClose: true // Whether the modal can be closed using the hardware back button on Android and similar devices
            };
            Apperyio.get('Modals').loadModal("Modal1").then(

            function(modalInstance) {
                modalInstance.open(modalOptions).then(function(modal) {
                    modal.scope.modal = modal;
                    modal.show();
                });
            }, function(error) {
                console.log(error);
            });
        };

    }

});