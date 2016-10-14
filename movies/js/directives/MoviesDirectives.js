(
function(){
  angular.module('MoviesApp')
  .directive('loading', loadingDirective);

  function loadingDirective (){
      return {
        restrict: 'E',
        replace:true,
        template: '<div class="loading"><img src="images/ajax-loader.gif" width="40" height="40" />LOADING...</div>',
        link: function (scope, element, attr) {
          scope.$watch('loadingStatus', function (val) {
              if (val)
                  scope.loadingStatus = true;
              else
                  scope.loadingStatus = false;
          });
        }
      }
  };

})();