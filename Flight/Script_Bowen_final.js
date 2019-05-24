mapboxgl.accessToken = 'pk.eyJ1IjoiYm93ZW56IiwiYSI6ImNqcXozdGhvcTAwejk0OXJ1dXdjOHF2OWYifQ.HQbdYg7FZiEdy7QoiTsMVQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alexyshu226/cjvgs9wdh0eki1fqmvaycd9vs',
    center: [0.5, 51.482444],
    zoom: 8.30
});

var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

var color=['#fc9977','#fcbd90','#b48d6c','#bd6666','#a3d96a','#80d996','#57cfc9','#51c0db','#54a2ab','#70a5d4',];

function filterBy(month) {

    var filters = ['==', 'reporting_period', months[month]];
    map.setFilter('PAX', filters);
    map.setFilter('text', filters);
    // Set the label to the month
    document.getElementById('month').textContent = months[month];

};

var lgw=[[1.76,0.54,0.38],[1.92,0.54,0.34],[2.31,0.6,0.37],[2.7,0.59,0.29],[2.92,0.63,0.31],[3.14,0.65,0.36],[3.3,0.71,0.43],[3.41,0.7,0.44],[3.12,0.65,0.39],[2.85,0.64,0.33],[2.11,0.58,0.25],[2.16,0.55,0.28]];
var lhr=[[2.94,0.8,2.02],[2.81,0.79,1.74],[3.38,0.93,2.13],	[3.46,0.98,2.09],	[3.62,1.02,1.98],	[3.75,1.06,2.25],	[3.97,1.17,2.63],	[3.85,1.13,2.63],	[3.58,1.07,2.28],	[3.65,1.1,2.2],	[3.21,0.98,1.92],	[3.27,0.98,2.24]];
var stn=[[0.24,1.5,0.05],	[0.26,1.4,0.04],	[0.3,1.62,0.04],	[0.35,1.94,0.05],	[0.46,1.97,0.04],	[0.54,1.98,0.06],	[0.58,2.06,0.08],	[0.65,2.19,0.08],	[0.55,2,0.08],	[0.46,1.96,0.07],	[0.24,1.65,0.07],	[0.27,1.65,0.08]];
var sen=[[0.05,0.02,0],	[0.05,0.03,0],	[0.06,0.03,0],	[0.07,0.04,0],	[0.07,0.05,0],	[0.08,0.06,0],	[0.09,0.08,0],	[0.11,0.08,0],	[0.1,0.06,0],	[0.09,0.05,0],	[0.06,0.03,0],	[0.07,0.04,0]];
var lcy=[[0.19,0.09,0.03],	[0.21,0.09,0.03],	[0.24,0.11,0.04],	[0.23,0.12,0.04],	[0.27,0.12,0.03],	[0.28,0.13,0.03],	[0.31,0.13,0.03],	[0.3,0.11,0.03],	[0.27,0.12,0.03],	[0.28,0.12,0.03],	[0.27,0.11,0.03],	[0.22,0.1,0.03]]
var ltn=[[0.44,0.58,0.01],	[0.49,0.54,0],	[0.58,0.63,0.01],	[0.65,0.73,0.01],	[0.69,0.78,0.01],	[0.7,0.81,0.02],	[0.74,0.86,0.03],	[0.76,0.9,0.04],	[0.69,0.8,0.02],	[0.67,0.8,0.01],	[0.58,0.54,0.01],	[0.72,0.54,0]]

var chartdata=[[lhr],[lgw],[lcy],[stn],[ltn],[sen]];
console.log(chartdata);

document.getElementById("contentdiv").innerHTML="<h2>Tips for flying from/to London:</h2> <br>London have six airtports which handle <strong>177 million</strong> passengers last year."
var  Airports = {
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.1820629,51.1536621 ]
    },
    "properties": {
    "reporting_period":"January",
    "reporting_airport_name":"GATWICK",
    "PAX":2.85,
    "UK":1.76,
    "EU":0.54,
    "NON_EU":0.38,
    "lg_PAX":14.862,
    "lg_UK":14.382,
    "lg_EU":13.192,
    "lg_NON":12.843
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.1820629,51.1536621 ]
    },
    "properties": {
    "reporting_period":"February",
    "reporting_airport_name":"GATWICK",
    "PAX":2.98,
    "UK":1.92,
    "EU":0.54,
    "NON_EU":0.34,
    "lg_PAX":14.908,
    "lg_UK":14.469,
    "lg_EU":13.198,
    "lg_NON":12.737
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.1820629,51.1536621 ]
    },
    "properties": {
    "reporting_period":"March",
    "reporting_airport_name":"GATWICK",
    "PAX":3.48,
    "UK":2.31,
    "EU":0.6,
    "NON_EU":0.37,
    "lg_PAX":15.062,
    "lg_UK":14.653,
    "lg_EU":13.308,
    "lg_NON":12.825
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.1820629,51.1536621 ]
    },
    "properties": {
    "reporting_period":"April",
    "reporting_airport_name":"GATWICK",
    "PAX":3.74,
    "UK":2.7,
    "EU":0.59,
    "NON_EU":0.29,
    "lg_PAX":15.135,
    "lg_UK":14.809,
    "lg_EU":13.29,
    "lg_NON":12.583
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.1820629,51.1536621 ]
    },
    "properties": {
    "reporting_period":"May",
    "reporting_airport_name":"GATWICK",
    "PAX":4.1,
    "UK":2.92,
    "EU":0.63,
    "NON_EU":0.31,
    "lg_PAX":15.227,
    "lg_UK":14.886,
    "lg_EU":13.358,
    "lg_NON":12.652
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.1820629,51.1536621 ]
    },
    "properties": {
    "reporting_period":"June",
    "reporting_airport_name":"GATWICK",
    "PAX":4.5,
    "UK":3.14,
    "EU":0.65,
    "NON_EU":0.36,
    "lg_PAX":15.32,
    "lg_UK":14.96,
    "lg_EU":13.392,
    "lg_NON":12.803
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.1820629,51.1536621 ]
    },
    "properties": {
    "reporting_period":"July",
    "reporting_airport_name":"GATWICK",
    "PAX":4.8,
    "UK":3.3,
    "EU":0.71,
    "NON_EU":0.43,
    "lg_PAX":15.384,
    "lg_UK":15.011,
    "lg_EU":13.466,
    "lg_NON":12.967
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.1820629,51.1536621 ]
    },
    "properties": {
    "reporting_period":"August",
    "reporting_airport_name":"GATWICK",
    "PAX":4.93,
    "UK":3.41,
    "EU":0.7,
    "NON_EU":0.44,
    "lg_PAX":15.41,
    "lg_UK":15.041,
    "lg_EU":13.456,
    "lg_NON":13.003
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.1820629,51.1536621 ]
    },
    "properties": {
    "reporting_period":"September",
    "reporting_airport_name":"GATWICK",
    "PAX":4.48,
    "UK":3.12,
    "EU":0.65,
    "NON_EU":0.39,
    "lg_PAX":15.315,
    "lg_UK":14.954,
    "lg_EU":13.381,
    "lg_NON":12.862
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.1820629,51.1536621 ]
    },
    "properties": {
    "reporting_period":"October",
    "reporting_airport_name":"GATWICK",
    "PAX":4.02,
    "UK":2.85,
    "EU":0.64,
    "NON_EU":0.33,
    "lg_PAX":15.206,
    "lg_UK":14.863,
    "lg_EU":13.375,
    "lg_NON":12.696
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.1820629,51.1536621 ]
    },
    "properties": {
    "reporting_period":"November",
    "reporting_airport_name":"GATWICK",
    "PAX":3.05,
    "UK":2.11,
    "EU":0.58,
    "NON_EU":0.25,
    "lg_PAX":14.932,
    "lg_UK":14.564,
    "lg_EU":13.271,
    "lg_NON":12.425
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.1820629,51.1536621 ]
    },
    "properties": {
    "reporting_period":"December",
    "reporting_airport_name":"GATWICK",
    "PAX":3.16,
    "UK":2.16,
    "EU":0.55,
    "NON_EU":0.28,
    "lg_PAX":14.966,
    "lg_UK":14.584,
    "lg_EU":13.225,
    "lg_NON":12.539
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.4542955,51.4700223 ]
    },
    "properties": {
    "reporting_period":"January",
    "reporting_airport_name":"HEATHROW",
    "PAX":5.77,
    "UK":2.94,
    "EU":0.8,
    "NON_EU":2.02,
    "lg_PAX":15.568,
    "lg_UK":14.894,
    "lg_EU":13.588,
    "lg_NON":14.52
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.4542955,51.4700223 ]
    },
    "properties": {
    "reporting_period":"February",
    "reporting_airport_name":"HEATHROW",
    "PAX":5.35,
    "UK":2.81,
    "EU":0.79,
    "NON_EU":1.74,
    "lg_PAX":15.492,
    "lg_UK":14.849,
    "lg_EU":13.582,
    "lg_NON":14.368
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.4542955,51.4700223 ]
    },
    "properties": {
    "reporting_period":"March",
    "reporting_airport_name":"HEATHROW",
    "PAX":6.45,
    "UK":3.38,
    "EU":0.93,
    "NON_EU":2.13,
    "lg_PAX":15.68,
    "lg_UK":15.034,
    "lg_EU":13.745,
    "lg_NON":14.573
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.4542955,51.4700223 ]
    },
    "properties": {
    "reporting_period":"April",
    "reporting_airport_name":"HEATHROW",
    "PAX":6.54,
    "UK":3.46,
    "EU":0.98,
    "NON_EU":2.09,
    "lg_PAX":15.693,
    "lg_UK":15.058,
    "lg_EU":13.795,
    "lg_NON":14.553
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.4542955,51.4700223 ]
    },
    "properties": {
    "reporting_period":"May",
    "reporting_airport_name":"HEATHROW",
    "PAX":6.63,
    "UK":3.62,
    "EU":1.02,
    "NON_EU":1.98,
    "lg_PAX":15.707,
    "lg_UK":15.101,
    "lg_EU":13.833,
    "lg_NON":14.501
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.4542955,51.4700223 ]
    },
    "properties": {
    "reporting_period":"June",
    "reporting_airport_name":"HEATHROW",
    "PAX":7.09,
    "UK":3.75,
    "EU":1.06,
    "NON_EU":2.25,
    "lg_PAX":15.774,
    "lg_UK":15.138,
    "lg_EU":13.876,
    "lg_NON":14.627
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.4542955,51.4700223 ]
    },
    "properties": {
    "reporting_period":"July",
    "reporting_airport_name":"HEATHROW",
    "PAX":7.8,
    "UK":3.97,
    "EU":1.17,
    "NON_EU":2.63,
    "lg_PAX":15.869,
    "lg_UK":15.195,
    "lg_EU":13.974,
    "lg_NON":14.782
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.4542955,51.4700223 ]
    },
    "properties": {
    "reporting_period":"August",
    "reporting_airport_name":"HEATHROW",
    "PAX":7.64,
    "UK":3.85,
    "EU":1.13,
    "NON_EU":2.63,
    "lg_PAX":15.85,
    "lg_UK":15.165,
    "lg_EU":13.941,
    "lg_NON":14.783
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.4542955,51.4700223 ]
    },
    "properties": {
    "reporting_period":"September",
    "reporting_airport_name":"HEATHROW",
    "PAX":6.96,
    "UK":3.58,
    "EU":1.07,
    "NON_EU":2.28,
    "lg_PAX":15.756,
    "lg_UK":15.092,
    "lg_EU":13.886,
    "lg_NON":14.638
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.4542955,51.4700223 ]
    },
    "properties": {
    "reporting_period":"October",
    "reporting_airport_name":"HEATHROW",
    "PAX":6.96,
    "UK":3.65,
    "EU":1.1,
    "NON_EU":2.2,
    "lg_PAX":15.755,
    "lg_UK":15.109,
    "lg_EU":13.911,
    "lg_NON":14.603
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.4542955,51.4700223 ]
    },
    "properties": {
    "reporting_period":"November",
    "reporting_airport_name":"HEATHROW",
    "PAX":6.11,
    "UK":3.21,
    "EU":0.98,
    "NON_EU":1.92,
    "lg_PAX":15.626,
    "lg_UK":14.982,
    "lg_EU":13.793,
    "lg_NON":14.47
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.4542955,51.4700223 ]
    },
    "properties": {
    "reporting_period":"December",
    "reporting_airport_name":"HEATHROW",
    "PAX":6.5,
    "UK":3.27,
    "EU":0.98,
    "NON_EU":2.24,
    "lg_PAX":15.687,
    "lg_UK":15.002,
    "lg_EU":13.796,
    "lg_NON":14.622
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.049518,51.504844 ]
    },
    "properties": {
    "reporting_period":"January",
    "reporting_airport_name":"LONDON CITY",
    "PAX":0.32,
    "UK":0.19,
    "EU":0.09,
    "NON_EU":0.03,
    "lg_PAX":12.677,
    "lg_UK":12.178,
    "lg_EU":11.442,
    "lg_NON":10.389
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.049518,51.504844 ]
    },
    "properties": {
    "reporting_period":"February",
    "reporting_airport_name":"LONDON CITY",
    "PAX":0.33,
    "UK":0.21,
    "EU":0.09,
    "NON_EU":0.03,
    "lg_PAX":12.706,
    "lg_UK":12.243,
    "lg_EU":11.421,
    "lg_NON":10.341
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.049518,51.504844 ]
    },
    "properties": {
    "reporting_period":"March",
    "reporting_airport_name":"LONDON CITY",
    "PAX":0.38,
    "UK":0.24,
    "EU":0.11,
    "NON_EU":0.04,
    "lg_PAX":12.856,
    "lg_UK":12.384,
    "lg_EU":11.593,
    "lg_NON":10.489
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.049518,51.504844 ]
    },
    "properties": {
    "reporting_period":"April",
    "reporting_airport_name":"LONDON CITY",
    "PAX":0.39,
    "UK":0.23,
    "EU":0.12,
    "NON_EU":0.04,
    "lg_PAX":12.861,
    "lg_UK":12.366,
    "lg_EU":11.654,
    "lg_NON":10.475
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.049518,51.504844 ]
    },
    "properties": {
    "reporting_period":"May",
    "reporting_airport_name":"LONDON CITY",
    "PAX":0.42,
    "UK":0.27,
    "EU":0.12,
    "NON_EU":0.03,
    "lg_PAX":12.958,
    "lg_UK":12.509,
    "lg_EU":11.691,
    "lg_NON":10.44
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.049518,51.504844 ]
    },
    "properties": {
    "reporting_period":"June",
    "reporting_airport_name":"LONDON CITY",
    "PAX":0.44,
    "UK":0.28,
    "EU":0.13,
    "NON_EU":0.03,
    "lg_PAX":13.003,
    "lg_UK":12.556,
    "lg_EU":11.749,
    "lg_NON":10.414
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.049518,51.504844 ]
    },
    "properties": {
    "reporting_period":"July",
    "reporting_airport_name":"LONDON CITY",
    "PAX":0.47,
    "UK":0.31,
    "EU":0.13,
    "NON_EU":0.03,
    "lg_PAX":13.069,
    "lg_UK":12.637,
    "lg_EU":11.787,
    "lg_NON":10.451
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.049518,51.504844 ]
    },
    "properties": {
    "reporting_period":"August",
    "reporting_airport_name":"LONDON CITY",
    "PAX":0.44,
    "UK":0.3,
    "EU":0.11,
    "NON_EU":0.03,
    "lg_PAX":12.995,
    "lg_UK":12.603,
    "lg_EU":11.609,
    "lg_NON":10.398
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.049518,51.504844 ]
    },
    "properties": {
    "reporting_period":"September",
    "reporting_airport_name":"LONDON CITY",
    "PAX":0.42,
    "UK":0.27,
    "EU":0.12,
    "NON_EU":0.03,
    "lg_PAX":12.951,
    "lg_UK":12.493,
    "lg_EU":11.717,
    "lg_NON":10.369
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.049518,51.504844 ]
    },
    "properties": {
    "reporting_period":"October",
    "reporting_airport_name":"LONDON CITY",
    "PAX":0.44,
    "UK":0.28,
    "EU":0.12,
    "NON_EU":0.03,
    "lg_PAX":12.992,
    "lg_UK":12.556,
    "lg_EU":11.707,
    "lg_NON":10.425
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.049518,51.504844 ]
    },
    "properties": {
    "reporting_period":"November",
    "reporting_airport_name":"LONDON CITY",
    "PAX":0.41,
    "UK":0.27,
    "EU":0.11,
    "NON_EU":0.03,
    "lg_PAX":12.926,
    "lg_UK":12.507,
    "lg_EU":11.615,
    "lg_NON":10.31
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.049518,51.504844 ]
    },
    "properties": {
    "reporting_period":"December",
    "reporting_airport_name":"LONDON CITY",
    "PAX":0.35,
    "UK":0.22,
    "EU":0.1,
    "NON_EU":0.03,
    "lg_PAX":12.762,
    "lg_UK":12.303,
    "lg_EU":11.463,
    "lg_NON":10.411
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.376388,51.879248 ]
    },
    "properties": {
    "reporting_period":"January",
    "reporting_airport_name":"LUTON",
    "PAX":1.03,
    "UK":0.44,
    "EU":0.58,
    "NON_EU":0.01,
    "lg_PAX":13.849,
    "lg_UK":12.997,
    "lg_EU":13.27,
    "lg_NON":8.569
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.376388,51.879248 ]
    },
    "properties": {
    "reporting_period":"February",
    "reporting_airport_name":"LUTON",
    "PAX":1.05,
    "UK":0.49,
    "EU":0.54,
    "NON_EU":0,
    "lg_PAX":13.868,
    "lg_UK":13.109,
    "lg_EU":13.206,
    "lg_NON":8.381
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.376388,51.879248 ]
    },
    "properties": {
    "reporting_period":"March",
    "reporting_airport_name":"LUTON",
    "PAX":1.23,
    "UK":0.58,
    "EU":0.63,
    "NON_EU":0.01,
    "lg_PAX":14.019,
    "lg_UK":13.268,
    "lg_EU":13.347,
    "lg_NON":9.099
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.376388,51.879248 ]
    },
    "properties": {
    "reporting_period":"April",
    "reporting_airport_name":"LUTON",
    "PAX":1.4,
    "UK":0.65,
    "EU":0.73,
    "NON_EU":0.01,
    "lg_PAX":14.155,
    "lg_UK":13.379,
    "lg_EU":13.498,
    "lg_NON":9.432
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.376388,51.879248 ]
    },
    "properties": {
    "reporting_period":"May",
    "reporting_airport_name":"LUTON",
    "PAX":1.52,
    "UK":0.69,
    "EU":0.78,
    "NON_EU":0.01,
    "lg_PAX":14.234,
    "lg_UK":13.441,
    "lg_EU":13.566,
    "lg_NON":9.323
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.376388,51.879248 ]
    },
    "properties": {
    "reporting_period":"June",
    "reporting_airport_name":"LUTON",
    "PAX":1.59,
    "UK":0.7,
    "EU":0.81,
    "NON_EU":0.02,
    "lg_PAX":14.277,
    "lg_UK":13.462,
    "lg_EU":13.606,
    "lg_NON":9.803
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.376388,51.879248 ]
    },
    "properties": {
    "reporting_period":"July",
    "reporting_airport_name":"LUTON",
    "PAX":1.7,
    "UK":0.74,
    "EU":0.86,
    "NON_EU":0.03,
    "lg_PAX":14.344,
    "lg_UK":13.521,
    "lg_EU":13.667,
    "lg_NON":10.403
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.376388,51.879248 ]
    },
    "properties": {
    "reporting_period":"August",
    "reporting_airport_name":"LUTON",
    "PAX":1.76,
    "UK":0.76,
    "EU":0.9,
    "NON_EU":0.04,
    "lg_PAX":14.38,
    "lg_UK":13.541,
    "lg_EU":13.714,
    "lg_NON":10.53
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.376388,51.879248 ]
    },
    "properties": {
    "reporting_period":"September",
    "reporting_airport_name":"LUTON",
    "PAX":1.57,
    "UK":0.69,
    "EU":0.8,
    "NON_EU":0.02,
    "lg_PAX":14.264,
    "lg_UK":13.442,
    "lg_EU":13.594,
    "lg_NON":10.019
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.376388,51.879248 ]
    },
    "properties": {
    "reporting_period":"October",
    "reporting_airport_name":"LUTON",
    "PAX":1.53,
    "UK":0.67,
    "EU":0.8,
    "NON_EU":0.01,
    "lg_PAX":14.238,
    "lg_UK":13.421,
    "lg_EU":13.596,
    "lg_NON":9.308
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.376388,51.879248 ]
    },
    "properties": {
    "reporting_period":"November",
    "reporting_airport_name":"LUTON",
    "PAX":1.13,
    "UK":0.58,
    "EU":0.54,
    "NON_EU":0.01,
    "lg_PAX":13.935,
    "lg_UK":13.263,
    "lg_EU":13.196,
    "lg_NON":8.519
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -0.376388,51.879248 ]
    },
    "properties": {
    "reporting_period":"December",
    "reporting_airport_name":"LUTON",
    "PAX":1.27,
    "UK":0.72,
    "EU":0.54,
    "NON_EU":0,
    "lg_PAX":14.058,
    "lg_UK":13.482,
    "lg_EU":13.205,
    "lg_NON":8.48
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.699632,51.567908 ]
    },
    "properties": {
    "reporting_period":"January",
    "reporting_airport_name":"SOUTHEND",
    "PAX":0.07,
    "UK":0.05,
    "EU":0.02,
    "NON_EU":0,
    "lg_PAX":11.092,
    "lg_UK":10.771,
    "lg_EU":9.802,
    "lg_NON":0
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.699632,51.567908 ]
    },
    "properties": {
    "reporting_period":"February",
    "reporting_airport_name":"SOUTHEND",
    "PAX":0.08,
    "UK":0.05,
    "EU":0.03,
    "NON_EU":0,
    "lg_PAX":11.277,
    "lg_UK":10.852,
    "lg_EU":10.216,
    "lg_NON":3.784
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.699632,51.567908 ]
    },
    "properties": {
    "reporting_period":"March",
    "reporting_airport_name":"SOUTHEND",
    "PAX":0.09,
    "UK":0.06,
    "EU":0.03,
    "NON_EU":0,
    "lg_PAX":11.427,
    "lg_UK":11,
    "lg_EU":10.349,
    "lg_NON":6.469
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.699632,51.567908 ]
    },
    "properties": {
    "reporting_period":"April",
    "reporting_airport_name":"SOUTHEND",
    "PAX":0.11,
    "UK":0.07,
    "EU":0.04,
    "NON_EU":0,
    "lg_PAX":11.637,
    "lg_UK":11.161,
    "lg_EU":10.651,
    "lg_NON":6.413
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.699632,51.567908 ]
    },
    "properties": {
    "reporting_period":"May",
    "reporting_airport_name":"SOUTHEND",
    "PAX":0.13,
    "UK":0.07,
    "EU":0.05,
    "NON_EU":0,
    "lg_PAX":11.764,
    "lg_UK":11.215,
    "lg_EU":10.904,
    "lg_NON":0
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.699632,51.567908 ]
    },
    "properties": {
    "reporting_period":"June",
    "reporting_airport_name":"SOUTHEND",
    "PAX":0.14,
    "UK":0.08,
    "EU":0.06,
    "NON_EU":0,
    "lg_PAX":11.878,
    "lg_UK":11.28,
    "lg_EU":11.08,
    "lg_NON":0
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.699632,51.567908 ]
    },
    "properties": {
    "reporting_period":"July",
    "reporting_airport_name":"SOUTHEND",
    "PAX":0.17,
    "UK":0.09,
    "EU":0.08,
    "NON_EU":0,
    "lg_PAX":12.026,
    "lg_UK":11.396,
    "lg_EU":11.266,
    "lg_NON":0
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.699632,51.567908 ]
    },
    "properties": {
    "reporting_period":"August",
    "reporting_airport_name":"SOUTHEND",
    "PAX":0.19,
    "UK":0.11,
    "EU":0.08,
    "NON_EU":0,
    "lg_PAX":12.153,
    "lg_UK":11.596,
    "lg_EU":11.303,
    "lg_NON":0
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.699632,51.567908 ]
    },
    "properties": {
    "reporting_period":"September",
    "reporting_airport_name":"SOUTHEND",
    "PAX":0.15,
    "UK":0.1,
    "EU":0.06,
    "NON_EU":0,
    "lg_PAX":11.945,
    "lg_UK":11.488,
    "lg_EU":10.942,
    "lg_NON":0
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.699632,51.567908 ]
    },
    "properties": {
    "reporting_period":"October",
    "reporting_airport_name":"SOUTHEND",
    "PAX":0.15,
    "UK":0.09,
    "EU":0.05,
    "NON_EU":0,
    "lg_PAX":11.891,
    "lg_UK":11.46,
    "lg_EU":10.842,
    "lg_NON":0
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.699632,51.567908 ]
    },
    "properties": {
    "reporting_period":"November",
    "reporting_airport_name":"SOUTHEND",
    "PAX":0.09,
    "UK":0.06,
    "EU":0.03,
    "NON_EU":0,
    "lg_PAX":11.434,
    "lg_UK":10.962,
    "lg_EU":10.457,
    "lg_NON":0
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.699632,51.567908 ]
    },
    "properties": {
    "reporting_period":"December",
    "reporting_airport_name":"SOUTHEND",
    "PAX":0.11,
    "UK":0.07,
    "EU":0.04,
    "NON_EU":0,
    "lg_PAX":11.596,
    "lg_UK":11.161,
    "lg_EU":10.553,
    "lg_NON":0
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.2388661,51.8860181 ]
    },
    "properties": {
    "reporting_period":"January",
    "reporting_airport_name":"STANSTED",
    "PAX":1.8,
    "UK":0.24,
    "EU":1.5,
    "NON_EU":0.05,
    "lg_PAX":14.404,
    "lg_UK":12.385,
    "lg_EU":14.218,
    "lg_NON":10.744
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.2388661,51.8860181 ]
    },
    "properties": {
    "reporting_period":"February",
    "reporting_airport_name":"STANSTED",
    "PAX":1.73,
    "UK":0.26,
    "EU":1.4,
    "NON_EU":0.04,
    "lg_PAX":14.365,
    "lg_UK":12.479,
    "lg_EU":14.154,
    "lg_NON":10.594
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.2388661,51.8860181 ]
    },
    "properties": {
    "reporting_period":"March",
    "reporting_airport_name":"STANSTED",
    "PAX":1.99,
    "UK":0.3,
    "EU":1.62,
    "NON_EU":0.04,
    "lg_PAX":14.503,
    "lg_UK":12.623,
    "lg_EU":14.297,
    "lg_NON":10.675
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.2388661,51.8860181 ]
    },
    "properties": {
    "reporting_period":"April",
    "reporting_airport_name":"STANSTED",
    "PAX":2.36,
    "UK":0.35,
    "EU":1.94,
    "NON_EU":0.05,
    "lg_PAX":14.676,
    "lg_UK":12.775,
    "lg_EU":14.478,
    "lg_NON":10.832
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.2388661,51.8860181 ]
    },
    "properties": {
    "reporting_period":"May",
    "reporting_airport_name":"STANSTED",
    "PAX":2.52,
    "UK":0.46,
    "EU":1.97,
    "NON_EU":0.04,
    "lg_PAX":14.738,
    "lg_UK":13.048,
    "lg_EU":14.494,
    "lg_NON":10.696
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.2388661,51.8860181 ]
    },
    "properties": {
    "reporting_period":"June",
    "reporting_airport_name":"STANSTED",
    "PAX":2.64,
    "UK":0.54,
    "EU":1.98,
    "NON_EU":0.06,
    "lg_PAX":14.785,
    "lg_UK":13.207,
    "lg_EU":14.5,
    "lg_NON":11.029
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.2388661,51.8860181 ]
    },
    "properties": {
    "reporting_period":"July",
    "reporting_airport_name":"STANSTED",
    "PAX":2.77,
    "UK":0.58,
    "EU":2.06,
    "NON_EU":0.08,
    "lg_PAX":14.835,
    "lg_UK":13.279,
    "lg_EU":14.537,
    "lg_NON":11.266
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.2388661,51.8860181 ]
    },
    "properties": {
    "reporting_period":"August",
    "reporting_airport_name":"STANSTED",
    "PAX":2.97,
    "UK":0.65,
    "EU":2.19,
    "NON_EU":0.08,
    "lg_PAX":14.905,
    "lg_UK":13.381,
    "lg_EU":14.6,
    "lg_NON":11.346
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.2388661,51.8860181 ]
    },
    "properties": {
    "reporting_period":"September",
    "reporting_airport_name":"STANSTED",
    "PAX":2.68,
    "UK":0.55,
    "EU":2,
    "NON_EU":0.08,
    "lg_PAX":14.802,
    "lg_UK":13.223,
    "lg_EU":14.511,
    "lg_NON":11.281
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.2388661,51.8860181 ]
    },
    "properties": {
    "reporting_period":"October",
    "reporting_airport_name":"STANSTED",
    "PAX":2.53,
    "UK":0.46,
    "EU":1.96,
    "NON_EU":0.07,
    "lg_PAX":14.744,
    "lg_UK":13.037,
    "lg_EU":14.489,
    "lg_NON":11.223
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.2388661,51.8860181 ]
    },
    "properties": {
    "reporting_period":"November",
    "reporting_airport_name":"STANSTED",
    "PAX":1.98,
    "UK":0.24,
    "EU":1.65,
    "NON_EU":0.07,
    "lg_PAX":14.499,
    "lg_UK":12.407,
    "lg_EU":14.318,
    "lg_NON":11.179
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 0.2388661,51.8860181 ]
    },
    "properties": {
    "reporting_period":"December",
    "reporting_airport_name":"STANSTED",
    "PAX":2.02,
    "UK":0.27,
    "EU":1.65,
    "NON_EU":0.08,
    "lg_PAX":14.519,
    "lg_UK":12.504,
    "lg_EU":14.316,
    "lg_NON":11.313
    }
  }
]};


var route = {
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470020], [-97.380979, 42.877742]]
    },
    "properties": {
    "Name":"United States",
    "Flights":507,
    "LnFlight":7.228511004
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470021], [35.16895529, 39.06160342]]
    },
    "properties": {
    "Name":"Turkey",
    "Flights":99,
    "LnFlight":5.59511985
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470022], [-98.30775723, 61.36206827]]
    },
    "properties": {
    "Name":"Canada",
    "Flights":74,
    "LnFlight":5.304065093
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470023], [54.30015737, 23.90527175]]
    },
    "properties": {
    "Name":"United Arab Emirates",
    "Flights":49,
    "LnFlight":4.891820298
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470024], [79.61197355, 22.88578035]]
    },
    "properties": {
    "Name":"India",
    "Flights":48,
    "LnFlight":4.871201011
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470025], [103.8190739, 36.56176801]]
    },
    "properties": {
    "Name":"China",
    "Flights":45,
    "LnFlight":4.80666249
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470026], [51.18478512, 25.30600936]]
    },
    "properties": {
    "Name":"Qatar",
    "Flights":38,
    "LnFlight":4.63758616
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470027], [33.00600358, 34.91666932]]
    },
    "properties": {
    "Name":"Cyprus",
    "Flights":36,
    "LnFlight":4.583518938
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470028], [114.15769, 22.28552]]
    },
    "properties": {
    "Name":"Hong Kong",
    "Flights":34,
    "LnFlight":4.526360525
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470029], [103.8172532, 1.35877066]]
    },
    "properties": {
    "Name":"Singapore",
    "Flights":28,
    "LnFlight":4.33220451
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470030], [25.08388384, -29.0003377]]
    },
    "properties": {
    "Name":"South Africa",
    "Flights":26,
    "LnFlight":4.258096538
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470031], [-8.45616045, 29.83762793]]
    },
    "properties": {
    "Name":"Morocco",
    "Flights":25,
    "LnFlight":4.218875825
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470032], [138.0308921, 37.59230065]]
    },
    "properties": {
    "Name":"Japan",
    "Flights":24,
    "LnFlight":4.17805383
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470033], [-2.57240158, 49.46809855]]
    },
    "properties": {
    "Name":"Guernsey",
    "Flights":23,
    "LnFlight":4.135494216
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470034], [25.21552327, 42.76889988]]
    },
    "properties": {
    "Name":"Bulgaria",
    "Flights":22,
    "LnFlight":4.091042453
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470035], [44.53687041, 24.12245467]]
    },
    "properties": {
    "Name":"Saudi Arabia",
    "Flights":16,
    "LnFlight":3.772588722
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470036], [35.00444995, 31.4611019]]
    },
    "properties": {
    "Name":"Israel",
    "Flights":15,
    "LnFlight":3.708050201
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470037], [-102.5234504, 23.94753932]]
    },
    "properties": {
    "Name":"Mexico",
    "Flights":15,
    "LnFlight":3.708050201
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470038], [-53.09783199, -10.78777567]]
    },
    "properties": {
    "Name":"Brazil",
    "Flights":14,
    "LnFlight":3.63905733
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470039], [29.8618993, 26.49593108]]
    },
    "properties": {
    "Name":"Egypt",
    "Flights":14,
    "LnFlight":3.63905733
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470040], [127.8391693, 36.3852463]]
    },
    "properties": {
    "Name":"South Korea",
    "Flights":14,
    "LnFlight":3.63905733
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470041], [101.0028835, 15.11816347]]
    },
    "properties": {
    "Name":"Thailand",
    "Flights":14,
    "LnFlight":3.63905733
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470042], [50.54197759, 26.04200845]]
    },
    "properties": {
    "Name":"Bahrain",
    "Flights":12,
    "LnFlight":3.48490665
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470043], [35.88016327, 33.92306993]]
    },
    "properties": {
    "Name":"Lebanon",
    "Flights":12,
    "LnFlight":3.48490665
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470044], [109.6976155, 3.78987255]]
    },
    "properties": {
    "Name":"Malaysia",
    "Flights":12,
    "LnFlight":3.48490665
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470045], [8.08944243, 9.59411807]]
    },
    "properties": {
    "Name":"Nigeria",
    "Flights":12,
    "LnFlight":3.48490665
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470046], [37.79594437, 0.5998746]]
    },
    "properties": {
    "Name":"Kenya",
    "Flights":10,
    "LnFlight":3.302585093
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470047], [47.58699362, 29.33431677]]
    },
    "properties": {
    "Name":"Kuwait",
    "Flights":10,
    "LnFlight":3.302585093
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470048], [36.77137251, 31.24579389]]
    },
    "properties": {
    "Name":"Jordan",
    "Flights":8,
    "LnFlight":3.079441542
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470049], [56.09165967, 20.60515412]]
    },
    "properties": {
    "Name":"Oman",
    "Flights":8,
    "LnFlight":3.079441542
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470050], [57.57120758, -20.2777156]]
    },
    "properties": {
    "Name":"Mauritius",
    "Flights":7,
    "LnFlight":2.945910149
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470051], [2.61732102, 28.15893844]]
    },
    "properties": {
    "Name":"Algeria",
    "Flights":6,
    "LnFlight":2.791759469
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470052], [-65.17980881, -35.38135347]]
    },
    "properties": {
    "Name":"Argentina",
    "Flights":6,
    "LnFlight":2.791759469
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470053], [-59.55980198, 13.18145371]]
    },
    "properties": {
    "Name":"Barbados",
    "Flights":6,
    "LnFlight":2.791759469
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470054], [9.55288287, 34.11956663]]
    },
    "properties": {
    "Name":"Tunisia",
    "Flights":6,
    "LnFlight":2.791759469
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470055], [-60.96969329, 13.8947837]]
    },
    "properties": {
    "Name":"Saint Lucia",
    "Flights":5,
    "LnFlight":2.609437912
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470056], [-61.7946956, 17.27754256]]
    },
    "properties": {
    "Name":"Antigua and Barbuda",
    "Flights":4,
    "LnFlight":2.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470057], [134.4909988, -25.73288736]]
    },
    "properties": {
    "Name":"Australia",
    "Flights":4,
    "LnFlight":2.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470058], [78.035889, 25.025885]]
    },
    "properties": {
    "Name":"Bahamas",
    "Flights":4,
    "LnFlight":2.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470059], [90.23812793, 23.86730412]]
    },
    "properties": {
    "Name":"Bangladesh",
    "Flights":4,
    "LnFlight":2.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470060], [114.7220255, 4.51968241]]
    },
    "properties": {
    "Name":"Brunei",
    "Flights":4,
    "LnFlight":2.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470061], [-71.38255879, -37.73069754]]
    },
    "properties": {
    "Name":"Chile",
    "Flights":4,
    "LnFlight":2.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470062], [-73.08114936, 3.91383156]]
    },
    "properties": {
    "Name":"Colombia",
    "Flights":4,
    "LnFlight":2.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470063], [39.6008014, 8.62278417]]
    },
    "properties": {
    "Name":"Ethiopia",
    "Flights":4,
    "LnFlight":2.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470064], [-1.21676901, 7.95345124]]
    },
    "properties": {
    "Name":"Ghana",
    "Flights":4,
    "LnFlight":2.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470065], [67.29149657, 48.15687954]]
    },
    "properties": {
    "Name":"Kazakhstan",
    "Flights":4,
    "LnFlight":2.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470066], [69.33958027, 29.94975221]]
    },
    "properties": {
    "Name":"Pakistan",
    "Flights":4,
    "LnFlight":2.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470067], [122.8839215, 11.77539737]]
    },
    "properties": {
    "Name":"Philippines",
    "Flights":4,
    "LnFlight":2.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470068], [80.70107795, 7.61266309]]
    },
    "properties": {
    "Name":"Sri Lanka",
    "Flights":4,
    "LnFlight":2.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470069], [106.2991386, 16.64601451]]
    },
    "properties": {
    "Name":"Vietnam",
    "Flights":4,
    "LnFlight":2.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470070], [-64.75454185, 32.31368594]]
    },
    "properties": {
    "Name":"Bermuda",
    "Flights":3,
    "LnFlight":2.098612289
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470071], [20.04983034, 41.14245128]]
    },
    "properties": {
    "Name":"Albania",
    "Flights":2,
    "LnFlight":1.693147181
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470072], [47.54599646, 40.28827674]]
    },
    "properties": {
    "Name":"Azerbaijan",
    "Flights":2,
    "LnFlight":1.693147181
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470073], [-23.95990969, 15.95518822]]
    },
    "properties": {
    "Name":"Cape Verde",
    "Flights":2,
    "LnFlight":1.693147181
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470074], [-79.01606913, 21.62290023]]
    },
    "properties": {
    "Name":"Cuba",
    "Flights":2,
    "LnFlight":1.693147181
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470075], [-70.50569086, 18.8943308]]
    },
    "properties": {
    "Name":"Dominican Republic",
    "Flights":2,
    "LnFlight":1.693147181
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470076], [43.50778995, 42.16855944]]
    },
    "properties": {
    "Name":"Georgia",
    "Flights":2,
    "LnFlight":1.693147181
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470077], [54.27407071, 32.57503287]]
    },
    "properties": {
    "Name":"Iran",
    "Flights":2,
    "LnFlight":1.693147181
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470078], [-77.31482556, 18.15695476]]
    },
    "properties": {
    "Name":"Jamaica",
    "Flights":2,
    "LnFlight":1.693147181
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470079], [-74.38242889, -9.15280281]]
    },
    "properties": {
    "Name":"Peru",
    "Flights":2,
    "LnFlight":1.693147181
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470080], [55.47601997, -4.66097821]]
    },
    "properties": {
    "Name":"Seychelles",
    "Flights":2,
    "LnFlight":1.693147181
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470081], [120.9542726, 23.75400343]]
    },
    "properties": {
    "Name":"Taiwan",
    "Flights":2,
    "LnFlight":1.693147181
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470082], [-69.98267466, 12.52088881]]
    },
    "properties": {
    "Name":"Aruba",
    "Flights":1,
    "LnFlight":1
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470083], [-84.19208786, 9.9763424]]
    },
    "properties": {
    "Name":"Costa Rica",
    "Flights":1,
    "LnFlight":1
    }
  }
]
};
var route_europe={
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470052], [-3.64754874, 40.24448626]]
    },
    "properties": {
    "Name":"Spain",
    "Flights":532,
    "ln_flight":6.276643489
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470036], [12.07000946, 42.79663568]]
    },
    "properties": {
    "Name":"Italy",
    "Flights":389,
    "ln_flight":5.963579344
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470031], [10.38577693, 51.10697903]]
    },
    "properties": {
    "Name":"Germany",
    "Flights":343,
    "ln_flight":5.837730447
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470030], [2.53618475, 46.18700581]]
    },
    "properties": {
    "Name":"France",
    "Flights":277,
    "ln_flight":5.624017506
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470035], [-8.13793167, 53.1754426]]
    },
    "properties": {
    "Name":"Ireland",
    "Flights":213,
    "ln_flight":5.361292166
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470032], [22.95556207, 39.07466973]]
    },
    "properties": {
    "Name":"Greece",
    "Flights":160,
    "ln_flight":5.075173815
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470043], [5.2814735, 52.10080804]]
    },
    "properties": {
    "Name":"Netherlands",
    "Flights":146,
    "ln_flight":4.983606622
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470046], [-8.50105506, 39.59550247]]
    },
    "properties": {
    "Name":"Portugal",
    "Flights":146,
    "ln_flight":4.983606622
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470054], [8.20866006, 46.79785296]]
    },
    "properties": {
    "Name":"Switzerland",
    "Flights":145,
    "ln_flight":4.976733742
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470045], [19.39011841, 52.12759537]]
    },
    "properties": {
    "Name":"Poland",
    "Flights":86,
    "ln_flight":4.454347296
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470027], [10.02799418, 55.98126391]]
    },
    "properties": {
    "Name":"Denmark",
    "Flights":84,
    "ln_flight":4.430816799
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470053], [16.74371219, 62.79232016]]
    },
    "properties": {
    "Name":"Sweden",
    "Flights":68,
    "ln_flight":4.219507705
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470044], [15.34832968, 68.75014407]]
    },
    "properties": {
    "Name":"Norway",
    "Flights":60,
    "ln_flight":4.094344562
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470021], [14.12647809, 47.58549847]]
    },
    "properties": {
    "Name":"Austria",
    "Flights":51,
    "ln_flight":3.931825633
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470048], [96.68657347, 61.98052168]]
    },
    "properties": {
    "Name":"Russia",
    "Flights":50,
    "ln_flight":3.912023005
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470026], [15.31240065, 49.73341073]]
    },
    "properties": {
    "Name":"Czech Republic",
    "Flights":41,
    "ln_flight":3.713572067
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470033], [19.39559381, 47.16277712]]
    },
    "properties": {
    "Name":"Hungary",
    "Flights":38,
    "ln_flight":3.63758616
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470025], [16.40413079, 45.08047284]]
    },
    "properties": {
    "Name":"Croatia",
    "Flights":37,
    "ln_flight":3.610917913
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470029], [26.27467024, 64.49884844]]
    },
    "properties": {
    "Name":"Finland",
    "Flights":35,
    "ln_flight":3.555348061
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470023], [4.64064572, 50.63981435]]
    },
    "properties": {
    "Name":"Belgium",
    "Flights":27,
    "ln_flight":3.295836866
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470040], [14.40522042, 35.92151315]]
    },
    "properties": {
    "Name":"Malta",
    "Flights":26,
    "ln_flight":3.258096538
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470039], [6.07182681, 49.76724687]]
    },
    "properties": {
    "Name":"Luxembourg",
    "Flights":24,
    "ln_flight":3.17805383
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470047], [24.97293286, 45.85242939]]
    },
    "properties": {
    "Name":"Romania",
    "Flights":24,
    "ln_flight":3.17805383
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470034], [-18.57397086, 64.99575263]]
    },
    "properties": {
    "Name":"Iceland",
    "Flights":15,
    "ln_flight":2.708050201
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470055], [31.38325794, 48.99656784]]
    },
    "properties": {
    "Name":"Ukraine",
    "Flights":13,
    "ln_flight":2.564949357
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470037], [24.9123704, 56.85085306]]
    },
    "properties": {
    "Name":"Latvia",
    "Flights":12,
    "ln_flight":2.48490665
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470049], [20.457273, 44.787197]]
    },
    "properties": {
    "Name":"Serbia",
    "Flights":10,
    "ln_flight":2.302585093
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470038], [23.88720035, 55.32611078]]
    },
    "properties": {
    "Name":"Lithuania",
    "Flights":8,
    "ln_flight":2.079441542
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470051], [14.8044464, 46.11555444]]
    },
    "properties": {
    "Name":"Slovenia",
    "Flights":6,
    "ln_flight":1.791759469
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470028], [25.54248555, 58.67192416]]
    },
    "properties": {
    "Name":"Estonia",
    "Flights":4,
    "ln_flight":1.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470042], [19.2388382, 42.7889115]]
    },
    "properties": {
    "Name":"Montenegro",
    "Flights":4,
    "ln_flight":1.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470050], [19.47905212, 48.70547175]]
    },
    "properties": {
    "Name":"Slovakia",
    "Flights":4,
    "ln_flight":1.386294361
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470020], [20.04983034, 41.14245128]]
    },
    "properties": {
    "Name":"Albania",
    "Flights":2,
    "ln_flight":0.693147181
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470041], [28.45673742, 47.19499323]]
    },
    "properties": {
    "Name":"Moldova",
    "Flights":2,
    "ln_flight":0.693147181
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470022], [28.03208711, 53.53131155]]
    },
    "properties": {
    "Name":"Belarus",
    "Flights":1,
    "ln_flight":0
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "LineString",
       "coordinates":  [[0, 51.470024], [17.76876588, 44.17449912]]
    },
    "properties": {
    "Name":"Bosnia and Herzegovina",
    "Flights":1,
    "ln_flight":0
    }
  }
]
};

// A single point that animates along the route.
// Coordinates are initially set to origin.
var point = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"United States","Flights":"507"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Turkey","Flights":"99"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Canada","Flights":"74"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"United Arab Emirates","Flights":"49"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"India","Flights":"48"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"China","Flights":"45"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Qatar","Flights":"38"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Cyprus","Flights":"36"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Hong Kong","Flights":"34"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Singapore","Flights":"28"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"South Africa","Flights":"26"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Morocco","Flights":"25"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Japan","Flights":"24"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Guernsey","Flights":"23"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Bulgaria","Flights":"22"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Gibraltar","Flights":"16"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Saudi Arabia","Flights":"16"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Israel","Flights":"15"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Mexico","Flights":"15"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Brazil","Flights":"14"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Egypt","Flights":"14"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"South Korea","Flights":"14"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Thailand","Flights":"14"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Bahrain","Flights":"12"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Lebanon","Flights":"12"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Malaysia","Flights":"12"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Nigeria","Flights":"12"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Kenya","Flights":"10"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Kuwait","Flights":"10"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Jordan","Flights":"8"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Oman","Flights":"8"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Mauritius","Flights":"7"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Algeria","Flights":"6"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Argentina","Flights":"6"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Barbados","Flights":"6"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Tunisia","Flights":"6"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Saint Lucia","Flights":"5"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Antigua and Barbuda","Flights":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Australia","Flights":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Bahamas","Flights":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Bangladesh","Flights":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Brunei","Flights":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Chile","Flights":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Colombia","Flights":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Ethiopia","Flights":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Ghana","Flights":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Kazakhstan","Flights":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Pakistan","Flights":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Philippines","Flights":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Sri Lanka","Flights":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Vietnam","Flights":"4"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Bermuda","Flights":"3"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Albania","Flights":"2"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Azerbaijan","Flights":"2"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Cape Verde","Flights":"2"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Cuba","Flights":"2"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Dominican Republic","Flights":"2"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Georgia","Flights":"2"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Iran","Flights":"2"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Jamaica","Flights":"2"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Peru","Flights":"2"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Seychelles","Flights":"2"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Taiwan","Flights":"2"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Aruba","Flights":"1"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0,51.470034]},"properties":{"City":"Costa Rica","Flights":"1"}}]};
var point_europe={
"type": "FeatureCollection",
"name": "eupointgeojson",
"features": [
{ "type": "Feature", "properties": { "City": "Spain", "Flights": "532", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Italy", "Flights": "389", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Germany", "Flights": "343", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "France", "Flights": "277", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Ireland", "Flights": "213", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Greece", "Flights": "160", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Netherlands", "Flights": "146", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Portugal", "Flights": "146", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Switzerland", "Flights": "145", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Poland", "Flights": "86", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Denmark", "Flights": "84", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Sweden", "Flights": "68", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Norway", "Flights": "60", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Austria", "Flights": "51", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Russia", "Flights": "50", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Czech Republic", "Flights": "41", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Hungary", "Flights": "38", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Croatia", "Flights": "37", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Finland", "Flights": "35", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Belgium", "Flights": "27", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Malta", "Flights": "26", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Luxembourg", "Flights": "24", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Romania", "Flights": "24", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Iceland", "Flights": "15", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Ukraine", "Flights": "13", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Latvia", "Flights": "12", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Serbia", "Flights": "10", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Lithuania", "Flights": "8", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Slovenia", "Flights": "6", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Estonia", "Flights": "4", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Montenegro", "Flights": "4", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Slovakia", "Flights": "4", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Albania", "Flights": "2", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Moldova", "Flights": "2", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Belarus", "Flights": "1", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } },
{ "type": "Feature", "properties": { "City": "Bosnia and Herzegovina", "Flights": "1", "LAT": 0.0, "LON": 51.470033 }, "geometry": { "type": "Point", "coordinates": [ 51.470033, 0.0 ] } }
]
};


// Draw an arc between the `origin` & `destination` of the two points
for (var j = 0; j < route.features.length; j++) {
  var lineDistance=turf.lineDistance(route.features[j], 'kilometers');
  var arc = [];
  var steps = 500;
  for (var i = 0; i < lineDistance; i += lineDistance / steps) {
      var segment = turf.along(route.features[j], i, 'kilometers');
      arc.push(segment.geometry.coordinates);
  }
  route.features[j].geometry.coordinates = arc;
}

for (var j = 0; j < route_europe.features.length; j++) {
  var lineDistance=turf.lineDistance(route_europe.features[j], 'kilometers');
  var arc = [];
  var steps = 500;
  for (var i = 0; i < lineDistance; i += lineDistance / steps) {
      var segment = turf.along(route_europe.features[j], i, 'kilometers');
      arc.push(segment.geometry.coordinates);
  }
  route_europe.features[j].geometry.coordinates = arc;
}

// Used to increment the value of the point measurement against the route.
var counter = 0;

function openAirport() {
  document.getElementById("play").style.visibility = "hidden"
  document.getElementById("airportPanel").style.width = "497px";
  document.getElementById("infobar").style.visibility = "visible"
};
function openEurope() {
  document.getElementById("contentdiv").innerHTML="<h2>Tips for flying from/to London:</h2> <br><p>London airports connect 36 European contries.In 2017, London Heathrow recorded the highest number of air passengers (78 million), <strong>NO.1 in Europe</strong></p>"
  document.getElementById("europePanel").style.width = "497px";
  document.getElementById("infobar").style.visibility = "hidden"
  document.getElementById("play").style.visibility = "visible"
  var eurchart = document.getElementById('europe_chart');
  var myBarChart = new Chart(eurchart, {
      type: 'horizontalBar',
      data: {
        labels:["Spain","Italy","Germany","France","Ireland","Netherlands","Portugal","Switzerland","Denmark","Sweden"],
        datasets:[{
          label: "Countries have the most flights connceted London",
          data:[532, 389, 343, 277, 213, 160,146,146,145],
          backgroundColor:color
        }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });

};
function closeAirport() {
  document.getElementById("airportPanel").style.width = "0";
};
function openWorld() {
  document.getElementById("contentdiv").innerHTML="<h2>Tips for flying from/to London:</h2> <br><p>Six airtports serve a total of 14 domestic destinations and 396 international destinations</p>"
  document.getElementById("infobar").style.visibility = "hidden"
  document.getElementById("play").style.visibility = "visible"
  document.getElementById("worldPanel").style.width = "497px";
  var worldchart = document.getElementById('world_chart');
  var myBarChart2 = new Chart(worldchart, {
      type: 'horizontalBar',
      data: {
        labels:["United States","Turkey","Canada","United Arab Emirates","India","China","Qatar","Cyprus","Hong Kong","Singapore"],
        datasets:[{
          label: "Countries have the most flights connceted London",
          data:[507, 99, 74, 49, 48, 45,38,36,34,28],
          backgroundColor:color
        }]
      },
      options: {
        event:["click"],
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
};
function closeWorld(){
  document.getElementById("worldPanel").style.width = "0";
};
function closeEurope() {
  document.getElementById("europePanel").style.width = "0";
};


map.on('load', function () {
    // Add a source and layer displaying a point which will be animated in a circle.
    map.addSource('route', {
        "type": "geojson",
        "data": route
    });
    console.log(map.route);

    map.addSource('point', {
        "type": "geojson",
        "data": point
    });
    map.addSource('route_europe', {
        "type": "geojson",
        "data": route_europe
    });

    map.addSource('point_europe', {
        "type": "geojson",
        "data": point_europe
    });



    map.addSource('Airports', {
        "type": "geojson",
        "data": Airports
    });
            // console.log(Airports);
            map.addLayer({
                'id': 'PAX',
                'type': 'circle',
                'source': 'Airports',
                'layout': {
                'visibility': 'visible'
              },
                'paint': {
                    'circle-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'lg_PAX'],
                        13, '#FC9977',
                        16, '#a3d96a'
                    ],
                    'circle-opacity': 0.75,
                    'circle-radius': [
                        'interpolate',
                        ['linear'],
                        ['get', 'lg_PAX'],
                        10, 40,
                        15, 80,
                    ]
                }
            });



            map.addLayer({
                'id': 'text',
                'type': 'symbol',
                'source': 'Airports',
                'layout': {
                'visibility': 'visible'
              },
                'layout': {
                    'text-field': ['concat', ['to-string', ['get', 'PAX']], 'M'],
                    'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                    'text-size': 20
                },
                'paint': {
                    'text-color': 'rgba(255,255,255,1)'
                }
            });
            map.addLayer({
                "id": "route",
                "source": "route",
                "type": "line",
                'layout': {
                'visibility': 'none'
              },
                "paint": {
                    "line-width": [
                        'interpolate',
                        ['linear'],
                        ['get', 'LnFlight'],
                        1, 0.25,
                        2, 2,
                        4, 4,
                        6, 8
                    ],
                    'line-opacity': 0.5,
                    "line-color": "#b26a68"
                }
            });

            map.addLayer({
                "id": "point",
                "source": "point",
                "type": "symbol",
                "layout": {
                  'visibility': 'none',
                      "icon-image": "airport-15",
                    "icon-rotate": ["get", "bearing"],
                    "icon-rotation-alignment": "map",
                    "icon-allow-overlap": true,
                    "icon-ignore-placement": true
                }
            });

            map.addLayer({
                "id": "route_europe",
                "source": "route_europe",
                "type": "line",
                'layout': {
                'visibility': 'none'
              },
                "paint": {
                    "line-width": [
                        'interpolate',
                        ['linear'],
                        ['get', 'ln_flight'],
                        0, 0.25,
                        2, 2,
                        4, 4,
                        6, 8
                    ],
                    'line-opacity': 0.5,
                    "line-color": "#1da6cc"
                }
            });

            map.addLayer({
                "id": "point_europe",
                "source": "point_europe",
                "type": "symbol",
                "layout": {
                  'visibility': 'none',
                      "icon-image": "airport-15",
                    "icon-rotate": ["get", "bearing"],
                    "icon-rotation-alignment": "map",
                    "icon-allow-overlap": true,
                    "icon-ignore-placement": true
                }
            });

            // Set filter to first month of the year
            // 0 = January
            filterBy(0);
            document.getElementById('slider').addEventListener('input', function(e) {
                var month = parseInt(e.target.value, 10);
                console.log(month);
                filterBy(month);
            });






    function animate() {
    // Update point geometry to a new position based on counter denoting
    // the index to access the arc.
    for (var i = 0; i < route.features.length; i++) {
      point.features[i].geometry.coordinates = route.features[i].geometry.coordinates[counter];

      // Calculate the bearing to ensure the icon is rotated to match the route arc
      // The bearing is calculate between the current point and the next point, except
      // at the end of the arc use the previous point and the current point
      point.features[i].properties.bearing = turf.bearing(
      turf.point(route.features[i].geometry.coordinates[counter >= steps ? counter - 1 : counter]),
      turf.point(route.features[i].geometry.coordinates[counter >= steps ? counter : counter + 1])
      );
    }


    // Update the source with this new data.
    map.getSource('point').setData(point);

    // Request the next frame of animation so long the end has not been reached.
    if (counter < steps) {
    requestAnimationFrame(animate);
    }

    counter = counter + 1;
    }

    function animateEU() {
    // Update point geometry to a new position based on counter denoting
    // the index to access the arc.
    for (var i = 0; i < route_europe.features.length; i++) {
      point_europe.features[i].geometry.coordinates = route_europe.features[i].geometry.coordinates[counter];

      // Calculate the bearing to ensure the icon is rotated to match the route arc
      // The bearing is calculate between the current point and the next point, except
      // at the end of the arc use the previous point and the current point
      point_europe.features[i].properties.bearing = turf.bearing(
      turf.point(route_europe.features[i].geometry.coordinates[counter >= steps ? counter - 1 : counter]),
      turf.point(route_europe.features[i].geometry.coordinates[counter >= steps ? counter : counter + 1])
      );
    }


    // Update the source with this new data.
    map.getSource('point_europe').setData(point_europe);

    // Request the next frame of animation so long the end has not been reached.
    if (counter < steps) {
    requestAnimationFrame(animateEU);
    }

    counter = counter + 1;
    }



    document.getElementById('replay').addEventListener('click', function() {
        // Set the coordinates of the original point back to origin
        // Update the source layer
        map.getSource('point').setData(point);
        map.getSource('point_europe').setData(point_europe);

        // Reset the counter
        counter = 0;

        // Restart the animation.

        animate(counter);
        animateEU(counter);
    });

    document.getElementById('airportbtn').addEventListener('click', function() {
      closeEurope();
      closeWorld();
      map.setLayoutProperty('PAX', 'visibility', 'visible');
      map.setLayoutProperty('text', 'visibility', 'visible');
      map.setLayoutProperty('route', 'visibility', 'none');
      map.setLayoutProperty('point', 'visibility', 'none');
      map.setLayoutProperty('route_europe', 'visibility', 'none');
      map.setLayoutProperty('point_europe', 'visibility', 'none');
      map.flyTo({
      // These options control the ending camera position: centered at
      // the target, at zoom level 9, and north up.
      center: [0.5, 51.482444],
      zoom: 8.30,
      bearing: 0,
      pitch:0,
      speed: 0.5, // make the flying slow
      curve: 1 // change the speed at which it zooms out
    });

    // Update the source layer
    map.getSource('point').setData(point);

    // Reset the counter
    counter = 0;

    // Restart the animation.
    animateEU(counter);
  });


    document.getElementById('europebtn').addEventListener('click', function() {
      closeAirport();
      closeWorld();
      map.setLayoutProperty('PAX', 'visibility', 'none');
      map.setLayoutProperty('text', 'visibility', 'none');
      map.setLayoutProperty('route', 'visibility', 'none');
      map.setLayoutProperty('point', 'visibility', 'none');
      map.setLayoutProperty('route_europe', 'visibility', 'visible');
      map.setLayoutProperty('point_europe', 'visibility', 'visible');
      map.flyTo({
      // These options control the ending camera position: centered at
      // the target, at zoom level 9, and north up.
      center: [20.275575,52.146960],
      zoom: 3.2,
      bearing: 72.44,
      pitch:85.00,
      speed: 0.5, // make the flying slow
      curve: 1 // change the speed at which it zooms out
    });

    // Update the source layer
    map.getSource('point').setData(point);

    // Reset the counter
    counter = 0;

    // Restart the animation.
    animateEU(counter);
  });



    document.getElementById('worldwidebtn').addEventListener('click', function() {
      closeAirport();
      closeEurope();
      map.flyTo({
      // These options control the ending camera position: centered at
      // the target, at zoom level 9, and north up.
      center: [62.779970, -22.155874],
      zoom: 1.47,
      bearing: 21.02,
      pitch:24.00,
      speed: 0.5, // make the flying slow
      curve: 1 // change the speed at which it zooms out
      // This can be any easing function: it takes a number between
      // 0 and 1 and returns another number between 0 and 1.
    });
    map.setLayoutProperty('PAX', 'visibility', 'none');
    map.setLayoutProperty('text', 'visibility', 'none');
    map.setLayoutProperty('route_europe', 'visibility', 'none');
    map.setLayoutProperty('point_europe', 'visibility', 'none');
    map.setLayoutProperty('route', 'visibility', 'visible');
    map.setLayoutProperty('point', 'visibility', 'visible');
    point.features[0].geometry.coordinates = origin;
    // Update the source layer
    map.getSource('point').setData(point);

    // Reset the counter
    counter = 0;

    // Restart the animation.
    animate(counter);
  });



function popup(layer){
  map.on('click', layer, function (e) {
      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = "Country Name:"+e.features[0].properties.City+"<p>"+"Flight:"+e.features[0].properties.Flights;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
  });




  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', layer, function () {
      map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', layer, function () {
      map.getCanvas().style.cursor = '';
  });

};

popup('point');
popup('point_europe');
var myPieChart= null;
function clickchart(){
  map.on('click','PAX' , function (e) {

    document.getElementById("dispayfisrt").innerHTML="";
      if(myPieChart!=null){
        myPieChart.destroy();
    }
      var coordinates = e.features[0].geometry.coordinates.slice();
      var data = [e.features[0].properties.UK,e.features[0].properties.EU,e.features[0].properties.NON_EU]
       myPieChart=new Chart(document.getElementById("airport_chart"), {
          type: 'doughnut',
          data: {
            labels: ["UK", "EU", "Others"],
            datasets: [
              {
                label: "The Number of Passeger (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: data
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: 'Passeger composition'
            }
          }
      });

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
    });
  };

clickchart()


});
