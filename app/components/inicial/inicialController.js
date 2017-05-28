appInvestimator.controller('inicial', function($scope, $http) {
	$scope.recuperarAcao = function() {
		var url = "http://finance.google.com/finance/info";
		var params = {q : "bvmf:" + $scope.codigoAcao};
		$.ajax({
			url: url,
			jsonp: "callback",
			dataType: "jsonp",
			data: params,
			success: function(response) {
	    		$scope.nomeAcao = response[0].t;
	    		$scope.valorAcao = response[0].l_cur;
			}
		});
	}
});