app.controller('mainCtrl',["$scope","$http",function($scope,$http){
  $scope.calls=[]
  $scope.Qualified=[]
  $scope.cost=[]
  
	$http.get('./data.json').then(function(data){
		console.log(data.data);
		var jsondata=data.data
		for(i in jsondata.calls){
		  $scope.calls.push([i,jsondata.calls[i]])
		  $scope.Qualified.push([i,jsondata.Quallified[i]])
		  $scope.cost.push([i,jsondata.cost[i]])
		}
		
		//console.log($scope.calls,$scope.Qualified,$scope.cost)
		$scope.data1=[{
		  "key":"Quantity",
		  "bar":true,
		  "values":$scope.calls
		}]
		
		$scope.data2=[{
		  "key":"Quantity",
		  "bar":true,
		  "values":$scope.Qualified
		}]

		$scope.data3=[{
		  "key":"Quantity",
		  "bar":true,
		  "values":$scope.cost
		}]
		
	})
	
	
	$scope.options = {
            chart: {
                type: 'historicalBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 65,
                    left: 50
                },
                x: function(d){return d[0];},
                y: function(d){return d[1]},
                showValues: true,
                valueFormat: function(d){
                    return d
                },
                duration: 100,
                xAxis: {
                    axisLabel: 'Country-Code',
                    tickFormat: function(d) {
                        console.log(d)
                        return d
                    },
                    rotateLabels: 30,
                    showMaxMin: false
                },
                
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10,
                    tickFormat: function(d){
                        return d
                    }
                }
            }
        };
      
	
}])