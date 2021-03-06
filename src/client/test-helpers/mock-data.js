/* jshint -W079 */
var mockData = (function() {
  return {
    getMockPeople: getMockPeople,
    getMockStates: getMockStates,
    getMockMortgages: getMockMortgages,
    getMockMap: getMockMap
  };

  function getMockStates() {
    return [
      {
        state: 'dashboard',
        config: {
          url: '/',
          templateUrl: 'app/dashboard/dashboard.html',
          title: 'dashboard',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Dashboard'
          }
        }
      }
    ];
  }

  function getMockPeople() {
    return [
    { id: '1', firstName: 'John', lastName: 'Papa', age: 25,
    location: 'Alcoi',lat:'43.260224',lng:'-5.727997' },
    { id: '2', firstName: 'Ward', lastName: 'Bell', age: 31,
    location: 'Xativa',lat:'38.990408',lng:'-1.518675'},
    { id: '3', firstName: 'Colleen', lastName: 'Jones', age: 21,
    location: 'Enguera',lat:'38.982403',lng:'-0.66493' },
    { id: '4', firstName: 'Madelyn', lastName: 'Green', age: 18,
    location: 'Valencia',lat:'39.460622',lng:'-0.371046' },
    { id: '5', firstName: 'Ella', lastName: 'Jobs', age: 18,
    location: 'Madrid',lat:'40.426343',lng:'-3.676987' },
    { id: '6', firstName: 'Landon', lastName: 'Gates', age: 11,
    location: 'Granada',lat:'37.1899',lng:'-3.607206' },
    { id: '7', firstName: 'Haley', lastName: 'Guthrie', age: 35,
    location: 'Salamanca',lat:'41.013662',lng:'-5.727997' },
    { id: '8', firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22,
    location: 'Bilbao',lat:'43.260224',lng:'-2.934508' },
    { id: '9', firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22,
    location: 'Bilbao',lat:'43.260224',lng:'-3.934508'}
    ];
  }

  function getMockMortgages() {
    return [{
      '7855032' : {
        'ape1' : '',
        'ape2' : '',
        'dadesEconomiques' : {
          'capital' : 31231,
          'diferencial' : 1,
          'euribor' : 1,
          'ingresosMensuals' : 2131,
          'producteNomina' : false,
          'producteSegurCasa' : false,
          'producteSegurVida' : false,
          'terminiAnys' : 1,
          'tipusInteres' : 'variable'
        },
        'email' : '',
        'interesAplicat' : '2 %',
        'nif' : '',
        'nombre' : '',
        'quotaMensual' : '2.630,864 €',
        'telefono' : '',
        'totalInteresos' : '339,369 €'
      }
    }];
  }

  function getMockMap() {
    return {markers:[],setZoom: function(zoom) {}};
  }

})();

