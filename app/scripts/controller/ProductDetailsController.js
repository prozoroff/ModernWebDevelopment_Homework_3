(function () {

    'use strict';

    var ProductDetailsController = function (product) {
        this.product = product;
        this.date = new Date();
    };

    ProductDetailsController.$inject = ['product'];
    angular.module('auction').controller('ProductDetailsController', ProductDetailsController);

}());
