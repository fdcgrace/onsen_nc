var module = ons.bootstrap('my-app', ['onsen']);
module.controller('AppController', function($scope, $http) { 
	$scope.errorMsg = "";
	$scope.login = function(user){
		//app.navi.pushPage('home.html');
		$http.post('https://english.fdc-inc.com/api/users/login', user)
			.success(function(response){
				if(response.error){
					console.log(response.error.message);
					$scope.errorMsg = response.error.message;
				}else {
					app.navi.pushPage('home.html');
				}
			}).error(function(response){
				  console.log(response);
			});
	}

    var loadTeacher = function() {

      $http.post('https://english-staging.fdc-inc.com/api/teachers/search', {users_api_token: "a074bf5d6be388f9f9088d1c5487c528"})
        .success(function(response){
        	console.log('test');
          $scope.instructors = response.teachers;
          //console.log(JSON.stringify(response.teachers));
        }).error(function(response){
          console.log(response);
        });
    };
    $scope.allTeacher = function(){

    	loadTeacher();	
    }
    loadTeacher();

    $scope.insInfo = function(id){
    	$http.post('https://english-staging.fdc-inc.com/api/teachers/detail', {users_api_token: "a074bf5d6be388f9f9088d1c5487c528", teachers_id: id})
    		.success(function(response){
    			$scope.teacherInfo = response.teacher;
    			//console.log(JSON.stringify(response.teacher));
    		}).error(function(response){
    			console.log(response);
    		});
    	app.navi.pushPage('detail.html');
    }

    var loadLesson = function() {
      $http.post('https://english-staging.fdc-inc.com/api/lesson/messages', {users_api_token: "a074bf5d6be388f9f9088d1c5487c528"})
        .success(function(response){
          $scope.lessons = response.messages;
          //console.log(JSON.stringify(response.messages));
        }).error(function(response){
          console.log(response);
        });
    };
    loadLesson();
	$scope.lessonList = true;
	$scope.memoList = false;
	$scope.favoriteList = false;
    $scope.getMemo = function(){
    	$scope.lessonList = false;
    	$scope.memoList = true;
    	$scope.favoriteList = false;
    	/*$http.post('https://english-staging.fdc-inc.com/api/memos/list', {users_api_token: "a074bf5d6be388f9f9088d1c5487c528"})
	        .success(function(response){
	          $scope.memos = response;
	          console.log(JSON.stringify(response));
	        }).error(function(response){
	          console.log(response);
	        });*/
    }
    $scope.memoDetail = function(){
    	app.navi.pushPage('memoDetail.html');
    }

    $scope.getLesson = function(){
    	$scope.lessonList = true;
		$scope.memoList = false;
		$scope.favoriteList = false;
		loadLesson();
    }
    $scope.lessonDetail = function(){
    	app.navi.pushPage('lessonDetail.html');
    }

    $scope.getFavorite = function(){
    	$scope.lessonList = false;
		$scope.memoList = false;
		$scope.favoriteList = true;
    	loadLesson();
    }

    $scope.favoriteDetail = function(){
    	app.navi.pushPage('favoriteDetail.html');
    }
});

/*$(function(){*/
$(document).ready(function(){

	'use strict';
	/*$(document).on('click', '#login', function(){
		app.navi.pushPage('home.html');
	});*/

	/*$(document).on('click', '#search-page .item', function(){
		app.navi.pushPage('detail.html');
	});*/

  	$(document).on( 'scroll', '#scroller', function(){
  		alert('test');
	});

});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       alert("bottom!");
   }
});