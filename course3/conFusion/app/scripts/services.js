'use strict';

angular.module('confusionApp')
    .constant("baseURL", "http://localhost:3000/")

    .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {

            this.getDishes = function(){

                return $resource(baseURL+"dishes/:id", null, {'update':{method:'put'}});

            };

            // implement a function named getPromotion
            // that returns a selected promotion.
            this.getPromotion = function () {
                return $resource(baseURL+"promotions/:id", null, {'update':{method:'put'}});
            };


    }])

    .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        var corpfac = {};

        corpfac.getLeaders = function () {
            return $resource(baseURL+"leadership/:id", null, {'update':{method:'put'}});
        };
        return corpfac;
    }])

    .factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        var fdfac = {};

        fdfac.getFeedback = function () {
            return $resource(baseURL+"feedback/:id", null, {'update':{method:'put'}});
        };

        return fdfac;
    }

    ])

;
