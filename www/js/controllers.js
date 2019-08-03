var firebaseConfig = {
    apiKey: "AIzaSyA4C64fW2fGGXBbBIcUq2U7OxzM4hSsjfY",
    authDomain: "maxapp-9439a.firebaseapp.com",
    databaseURL: "https://maxapp-9439a.firebaseio.com",
    projectId: "maxapp-9439a",
    storageBucket: "",
    messagingSenderId: "275790358662",
    appId: "1:275790358662:web:32e0f01ca7d43aa6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state) {

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
    $state.go("loginAndRegister")
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

.controller('categoriesCtrl', function($scope) {
  $scope.categories=[
        {
          nombre:"Tv y video",
          icono:"fas fa-tv"
        },

        {
          nombre:"Celulares",
          icono:"fas fa-mobile-alt"
        },

        {
          nombre:"Linea Blanca",
          icono:"fas fa-bath"
        },

        {
          nombre:"Videojuegos",
          icono:"ion-game-controller-b"
        
        },

        {
          nombre:"Electrodomesticos",
          icono:"fas fa-blender-phone"
        },

        {
          nombre:"Computacion y Tablets",
          icono:"fas fa-laptop"
        },

        {
          nombre:"Audio",
          icono:"fas fa-headphones"
        },

        {
          nombre:"Audio para vehiculos",
          icono:"fas fa-car"
        },

        {
          nombre:"Camaras y Drones",
          icono:"fas fa-camera"
        
        },

        {
          nombre:"Audifonos y Bocinas",
          icono:"ion-stats-bars"
        },

        {
          nombre:"Prendas Personales",
          icono:"fas fa-person-booth"
        },

        {
          nombre:"Cuidado Personal",
          icono:"fas fa-shower"
        },

         {
          nombre:"Ambientadores",
          icono:"fas fa-spa"
        }

        
  ]


})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller("loginAndRegisterCtrl",function($state,$scope,$rootScope) {
    $scope.datos = {};

    console.log("ca4rga controlador")

    $scope.obtenerDatos = function(x) {
    
      firebase.auth().createUserWithEmailAndPassword(x.email, x.password).then(function a(y){
        $scope.codigo = y.user.uid;
        $scope.correo = x.email;
        $scope.password = x.password
      firebase.database().ref("/Usuarios").set({
        codigo: $scope.codigo,
        correo: $scope.correo,
        contra:  $scope.password
      })
       console.log(y)
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    }
})
