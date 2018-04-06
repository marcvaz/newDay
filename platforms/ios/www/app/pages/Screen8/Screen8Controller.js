define(['require', 'app'], function(require, APP) {

    /**
     * Controller for Screen8 generated by Appery.io
     * @module Screen8
     */

    APP.controller('Screen8', ['$scope', 'Apperyio', controller]);

    function controller($scope, Apperyio) {

        /**
         * user controller variables
         */
        $scope.currentQuote = Apperyio.EntityAPI('String');
        $scope.taskDescriptionVar = Apperyio.EntityAPI('String');
        $scope.newTask = Apperyio.EntityAPI('String');

        /**
         * User controller functions
         */
        /**
         * @function init
         */
        $scope.init = function() {
            //On load screen logic
            var $routeParams = Apperyio.get("$routeParams");
            $scope.taskDescriptionVar = $routeParams.a1;
            $scope.quotes = []
            $scope.quotes.push("Hard work beats talent when talen't doesn't work hard");
            $scope.quotes.push("Success is a journey, not a destination. The doing is often more important than the outcome");
            $scope.quotes.push("Don't be concerned about reaching your destination, enjoy the journey and the destination will take care of itself");
            $scope.quotes.push("It's the will, not the skill");
            $scope.quotes.push("If it was easy everyone would do it");
            $scope.quotes.push("There is no substitute for hard work");
            $scope.quotes.push("Opportunities are usually disguised as hard work, so most people don't recognize them");
            $scope.quotes.push("Don't let your fear of what could happen make nothing happen");
            $scope.quotes.push("Growth and comfort do not co-exist");
            $scope.quotes.push("Strength and growth come only through continuous effort and struggle");
            $scope.quotes.push("Challenges are what make life interesting, overcoming them is what makes life meaningful");
            $scope.quotes.push("If you don't sacrifice for what you want, what you want becomes the sacrifice");
            $scope.quotes.push("Winners are not people who never fail, but people who never quit");
            $scope.quotes.push("Success is not final, failure is not fatal: it is the courage to continue that counts");
            $scope.quotes.push("Don't stop when you're tired, stop when you're done");
            $scope.quotes.push("Push yourself because no one else is going to do it for you");
            $scope.quotes.push("A jug fills drop by drop");
            $scope.quotes.push("Don't be afraid to fail, be afraid not to try");
            $scope.quotes.push("Do it with passion or not at all");
            $scope.quotes.push("You're always one decision away from a totally different life");
            //UTC start time
            var currentTime = new Date().getTime();
            var randomQuoteIndex = currentTime % $scope.quotes.length
            $scope.currentQuote = $scope.quotes[randomQuoteIndex];

        };

        /**
         * @function startSameTask
         */
        $scope.startSameTask = function() {
            Apperyio.navigateTo("Screen6", {
                a1: $scope.taskDescriptionVar
            });

        };

        /**
         * @function startNewTask
         */
        $scope.startNewTask = function() {
            Apperyio.navigateTo("Screen6", {
                a1: $scope.newTask
            });
        };

    }

});