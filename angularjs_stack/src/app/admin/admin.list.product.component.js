"use strict"

angular.module('admin')

.component('adminListProductComponent', {
  	templateUrl:'./../../../templates/admin.html',
  	bindings: { products: '<' },
  	controllerAs: "model",
  	controller: function($scope, Poroduct, $state) {
    	this.deleteProduct = function(product) {
        	Poroduct.delete({ id: product.id }, function(data) {
        		if(data[0].result === "success") {
        			$state.reload();        	
        		}
        	});
        }
    }
});
