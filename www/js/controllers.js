angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller("Copmatability", function($scope, $cordovaSocialSharing) {
    var e1 = document.getElementById("TExttdddd").value;
  $scope.shareAnywhere = function() {
		
		 	//alert("check whether image shared or not" );
        $cordovaSocialSharing.share("My message", "#"+e1, "", "http://personalty.co.nf/");
	
    }
  
      $scope.showMeTheTawafoq = function() {
			document.getElementById("fff").style.display = "block";
	  var e1 = document.getElementById("TExttdddd").value;
	    
	      switch (e1) {
                case "ISFJ":
				  $scope.love=" ESFP";
				  $scope.lovelink=" #/app/ESFP"; 
				    $scope.enemylink=" #/app/ENTP"; 
                  $scope.bestrelation=" ISFJ, ENFJ, ESTJ";
		    $scope.possibleelation=" ESFJ, ESTP, ISFP, INFJ, INFP,  ISTJ, ISFP";
			    $scope.worsterelation=" ENTJ, INTJ,  INTP, ENFP ";
		
		$scope.enemy="  ENTP ";
                 
                    break;
                case "ISFP":
				  $scope.love=" ESTJ";
   $scope.bestrelation="  ESFP, ISFP";
		    $scope.possibleelation=" ESTP, ESFJ, ISTP, ENFJ, INFJ, INFP, ISFJ, ISTJ, ENFP";
			    $scope.worsterelation="  INTJ, ENTP, INTP";
		  $scope.lovelink=" #/app/ESTJ"; 
				    $scope.enemylink=" #/app/ENTJ"; 
		$scope.enemy="  ENTJ ";
                   
                    break;
                case "ISTP":
						  $scope.love=" ESFJ";
        $scope.bestrelation=" ESTJ, ISTJ, INTJ, ISTP, ESTP";
		    $scope.possibleelation=" ENTJ, INTP,  INFJ, ISFJ, ISFP, ENTP";
			    $scope.worsterelation="  ESFP, ENFP, INFP";
		
		$scope.enemy="  ENFJ ";
		  $scope.lovelink=" #/app/ESFJ"; 
				    $scope.enemylink=" #/app/ENFJ"; 


		
                   
                    break;
                case "INTP":
				  $scope.love=" ENTJ";
   $scope.bestrelation="  ENTP, INTP, INTJ";
		    $scope.possibleelation=" ESTJ, ISTJ, ESTP,  ENFJ, INFJ, ENFP, INFP";
			    $scope.worsterelation="  ISFJ, ISTP, ESFP, ISFP";
		
		$scope.enemy="  ESFJ ";
                   $scope.lovelink=" #/app/ENTJ"; 
				    $scope.enemylink=" #/app/ESFJ"; 
                    break;
                case "INFP":
					  $scope.love=" ENFJ";
   $scope.bestrelation=" ENFP, INFP, INFJ";
		    $scope.possibleelation="  ISFJ, ESFJ, ESFP, ISFP, ENTP, INTP";
			    $scope.worsterelation="  ISTJ, ESTP, ISTP, ENTJ, INTJ";
		
		$scope.enemy="  ESTJ ";
                         $scope.lovelink=" #/app/ENFJ"; 
				    $scope.enemylink=" #/app/ESTJ"; 
                    break;
                case "INFJ":
   $scope.love=" ENFP";
                      $scope.bestrelation="  ENTP,  INFJ, INFP, ENFJ";
		    $scope.possibleelation="  ISFJ, ESFP, ISFP, ENTJ, INTJ, INTP, ISTJ";
			    $scope.worsterelation=" ESTJ, ESFJ,  ISTP";
		
		$scope.enemy="ESTP ";
		       $scope.lovelink=" #/app/ENFP"; 
				    $scope.enemylink=" #/app/ESTP"; 
                    break;
                case "ESFJ":
    $scope.love=" ISFP";
                    $scope.bestrelation=" ESTJ, ENFP";
		    $scope.possibleelation=" ISFJ, ESFJ, ENFJ, INFP, ISTP, ESFP";
			    $scope.worsterelation=" ESTP, ENTJ, INTJ, ENTP,  INFJ, ISTJ";
		
		$scope.enemy="  INTP ";
		 $scope.lovelink=" #/app/ISFP"; 
				    $scope.enemylink=" #/app/INTP"; 
                    break;
                case "ESFP":
				   $scope.love=" ISTJ";
   $scope.bestrelation="  ESTP, ISFP";
		    $scope.possibleelation=" ESTJ, ESFJ, ISFJ, ESFP, ENTP, ENFJ, INFJ, ENFP, INFP";
			    $scope.worsterelation=" ISTP, ENTJ,  INTP";
		
		$scope.enemy="  INTJ ";
		 $scope.lovelink=" #/app/ISTJ"; 
				    $scope.enemylink=" #/app/INTJ"; 
                   
                    break;
                case "ESTJ":
    $scope.love=" ISTP";
                      $scope.bestrelation=" ISTJ, ESFJ, ISFJ, ENTJ, INTJ";
		    $scope.possibleelation=" ENTP, INTP, ESTP, ESFP, ISFP";
			    $scope.worsterelation=" ESTJ, ENFJ, INFJ,  ENFP";
		
		$scope.enemy="  INFP ";
				 $scope.lovelink=" #/app/ISTP"; 
				    $scope.enemylink=" #/app/INFP"; 
                    break;
                case "ENFJ":
				 $scope.love=" INFP";
   $scope.bestrelation=" ISFJ, ENFJ, ENTJ, INFJ, ENFP";
		    $scope.possibleelation="  ESFJ, ESFP, ISFP, INTP, ISTJ, ENTP";
			    $scope.worsterelation=" ESTJ, ESTP,  INTJ";
		
		$scope.enemy="  ISTP ";
				 $scope.lovelink=" #/app/INFP"; 
				    $scope.enemylink=" #/app/ISTP"; 
                  
                    break;
                case "ENFP":
  $scope.love=" INFJ";
                      $scope.bestrelation=" INFJ, INFP, ENFJ, ENFP, ESFJ";
		    $scope.possibleelation=" ENTJ, ENTP, INTJ, INTP,ESFP, ISFP";
			    $scope.worsterelation="   ESTJ, ISTP, ESTP, ISFJ";
		
		$scope.enemy="  ISTJ ";
			 $scope.lovelink=" #/app/INFJ"; 
				    $scope.enemylink=" #/app/ISTJ"; 
                    break;
                case "ENTJ":
   $scope.love=" INTP";
                     $scope.bestrelation=" ESTJ, ISTP, ENTJ, ENFJ, INTJ";
		    $scope.possibleelation=" ISTJ, ESTP, ENTP, INFJ, ENFP";
			    $scope.worsterelation=" ESFJ, ISFJ, ESFP,  INFP";
		
		$scope.enemy="  ISFP ";
				 $scope.lovelink=" #/app/INTP"; 
				    $scope.enemylink=" #/app/ISFP"; 
                    break;
            
                case "ENTP":
				  $scope.love=" ESFJ";
				  $scope.bestrelation=" ENTP, INTP, INFJ";
		    $scope.possibleelation=" ESTJ, ISTJ, ESTP, ESFP, ENTJ, ENFP, INFP, ENFJ";
			    $scope.worsterelation="   ISTP, ISFP, INTJ";
		
		$scope.enemy="  ISFJ ";
 
                    $scope.lovelink=" #/app/ESFJ"; 
				    $scope.enemylink=" #/app/ISFJ"; 
              
                    break;
                case "ESTP":
   $scope.love=" ISTJ";
                    $scope.bestrelation="ISTJ, ESTP, ISTP, ESFP";
		    $scope.possibleelation="  ESTJ, ISFP, ENTJ, ENTP, INTP, ISFJ";
			    $scope.worsterelation="  ESFJ, INTJ, ENFJ,  ENFP, INFP";
		
		$scope.enemy="  INFJ ";
		  $scope.lovelink=" #/app/ISTJ"; 
				    $scope.enemylink=" #/app/INFJ"; 
              

                    break;
                case "INTJ":
    $scope.love=" ENTP";
                   $scope.bestrelation=" ESTJ, INTJ, ISTP, ENTJ";
		    $scope.possibleelation=" INTP, INFJ, INFP, ENFP";
			    $scope.worsterelation=" ESFJ, ISFJ, ESTP,  ISFP,  INFP, ENFJ";
		
		$scope.enemy="  ESFP ";
  $scope.lovelink=" #/app/ENTP"; 
				    $scope.enemylink=" #/app/ESFP"; 
                    break;
					   case "ISTJ":
    $scope.love=" ISTJ";
                   $scope.bestrelation=" ESTJ, ISTJ, INTJ, ISTP, ESTP";
		    $scope.possibleelation=" ENTJ, INTP, ENFJ, INFJ, ISFJ, ISFP, ENTP";
			    $scope.worsterelation=" ESFJ, ESFP, ENFP, INFP";
		
		$scope.enemy="  ENFP ";
  $scope.lovelink=" #/app/ISTJ"; 
				    $scope.enemylink=" #/app/ENFP"; 
                    break;
					default:
						document.getElementById("fff").style.display = "none";
					alert("only Capital letter and Vaild Personalty ");
					break;
            }

    };

   
 
})
.controller("share11", function($scope, $cordovaSocialSharing) {
 
    $scope.shareAnywhere = function() {
		
		 	//alert("check whether image shared or not" );
        $cordovaSocialSharing.share("My message", "My Subject", "", "");
	
    }

   
 
})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'البطل', id: 1,img:"img/enfj.png" ,title1: 'ENFJ'},
    { title: 'المناضل', id: 2,img:"img/enfp.png",title1: 'ENFP' },
    { title: 'القائد', id: 3 ,img:"img/entj.png",title1: 'ENTJ'},
    { title: 'المحاور', id: 4 ,img:"img/entp.png",title1: 'ENTP'},
    { title: 'القنصل', id: 5 ,img:"img/esfj.png",title1: 'ESFJ'},
    { title: 'المسلي', id: 6 ,img:"img/esfp.png",title1: 'ESFP'}, 
	{ title: 'التنفيذي', id: 7,img:"img/estj.png" ,title1: 'ESTJ'},
	  { title: 'رائد عمل', id: 8 ,img:"img/estp.png",title1: 'ESTP'},
	    { title: 'المحامي', id: 9,img:"img/infj.png",title1: 'INFJ' },
		  { title: 'الوسيط', id: 10 ,img:"img/infp.png",title1: 'INFP'},
		    { title: 'المهندس', id: 11 ,img:"img/intj.png",title1: 'INTJ'},
			  { title: 'المنطقي', id: 12 ,img:"img/intp.png",title1: 'INTP'}, 
			  { title: 'المدافع', id: 13 ,img:"img/isfj.png",title1: 'ISFJ'}, 
			  { title: 'الفنان', id: 14 ,img:"img/isfp.png",title1: 'ISFP'}, 
			  { title: 'المفتش', id: 15 ,img:"img/istj.png",title1: 'ISTJ'}, 
			  { title: 'الحرفي', id: 16 ,img:"img/istp.png",title1: 'ISTP'}
			  
  ];
})
.controller('search', function($scope, $stateParams,$state) {
	
	 
		
	 $scope.showMeTheNumber = function(){
		 
		    var E;
            var N;
            var T;
            var P;
            var e1 = document.getElementById("e1").value;
            var e2 = document.getElementById("e2").value;
            var e3 = document.getElementById("e3").value;
            var e4 = document.getElementById("e4").value;
            var e5 = document.getElementById("e5").value;
            var ee = parseInt(e1) + parseInt(e2) + parseInt(e3) + parseInt(e4) + parseInt(e5);
            if (ee >= 250) {
                //document.getElementById("footer").innerHTML = ee
                E = 1;
            } else {
                //document.getElementById("footer").innerHTML = ee
                E = 0;
            }

            var n1 = document.getElementById("n1").value;
            var n2 = document.getElementById("n2").value;
            var n3 = document.getElementById("n3").value;
            var n4 = document.getElementById("n4").value;
            var n5 = document.getElementById("n5").value;
            if (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) + parseInt(n5) >= 250) {

                N = 1;
            } else {
                N = 0;
            }
            var t1 = document.getElementById("t1").value;
            var t2 = document.getElementById("t2").value;
            var t3 = document.getElementById("t3").value;
            var t4 = document.getElementById("t4").value;
            var t5 = document.getElementById("t5").value;
            if (parseInt(t1) + parseInt(t2) + parseInt(t3) + parseInt(t4)+parseInt(t5) >= 250) {

                T = 1;
            } else {
                T = 0;
            }
            var p1 = document.getElementById("p1").value;
            var p2 = document.getElementById("p2").value;
            var p3 = document.getElementById("p3").value;
            var p4 = document.getElementById("p4").value;
            var p5 = document.getElementById("p5").value;
            if (parseInt(p1) + parseInt(p2) + parseInt(p3) + parseInt(p4)+parseInt(p5) >= 250) {

                P = 1;
            } else {
                P = 0;
            }
            var a = E + "" + N + "" + T + "" + P;
            //document.getElementById("logo").innerHTML = a;

            switch (a) {
                case "0000":
                $state.go('app.ISFJ');
                 
                    break;
                case "0001":
               $state.go('app.ISFP');
                   
                    break;
                case "0011":
                $state.go('app.ISTP');
                   
                    break;
                case "0111":
 $state.go('app.INTP');
                 
                    break;
                case "0101":
 $state.go('app.INFP');
                    
                    break;
                case "0100":
 $state.go('app.INFJ');
                    
                    break;
                case "1000":
 $state.go('app.ESFJ');
                  
                    break;
                case "1001":
 $state.go('app.ESFP');
                   
                    break;
                case "1010":
 $state.go('app.ESTJ');
                    
                    break;
                case "1100":
 $state.go('app.ENFJ');
                  
                    break;
                case "1101":
 $state.go('app.ENFP');
                    
                    break;
                case "1110":
 $state.go('app.ENTJ');
                   
                    break;
            
                case "1111":
 $state.go('app.ENTP');
                   
              
                    break;
                case "1011":
 $state.go('app.ESTP');
                  

                    break;
                case "0110":
 $state.go('app.INTJ');
                 

                    break;
					case "0010":
 $state.go('app.ISTJ');
                 

                    break;
            }



 
  }
})
.controller('browse', function($scope, $stateParams,$state) {
	 $scope.gofiles = function(){
		 
		  $state.go('app.search');
	 }
	
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
