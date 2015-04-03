/**
 * controller file- save and delete Task
 */

var app = angular.module('todoApp', []);
app.controller('toDoCntrlr',function($scope)
{
$scope.newTask="";
$scope.priority = 'medium'; // setting priority to medium
$scope.taskList=[];

//adds the todo list
$scope.add=function(){
	if(event.keyCode == 13 && $scope.newTask){
	$scope.taskList.push({"title":$scope.newTask,"checked":false,"priority":$scope.priority});
	$scope.priority = 'medium';
	$scope.newTask="";
	}
	}
	
//removed from array
$scope.deleteTask = function(index) {
    $scope.taskList.splice(index, 1);
}

});