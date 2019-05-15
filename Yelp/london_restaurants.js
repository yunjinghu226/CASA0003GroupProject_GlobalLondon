
// display the base map
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleHlzaHUyMjYiLCJhIjoiY2puMzl0bzRrMmR5eDNwcXZ6YTk1b2x4MSJ9.YExeZS4oHiM3y4zZtiWO7g';
  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/alexyshu226/cjvgs9wdh0eki1fqmvaycd9vs',
  center: [-0.127,51.517],
  zoom: 10.75
});

// categories and color palette
var categories = [ 'Italian','Chinese','Indian','Japanese_Korean','Pakistani','Southeast_Asian','Mediterranean','Middle_Eastern','American','European_Other','African','Latin_American','Other' ];
var colors = ['#fc9977','#fcbd90','#b48d6c','#bd6666','#a3d96a','#80d996','#57cfc9','#51c0db','#70a5d4','#6d74cf','#584478','#e1afbe','#debb59']
var cate_count = [1556,878,958,648,498,608,778,273,349,402,143,492,141]

// add functional features
map.on('load',function(){

  // add tileset sources
  map.addSource('resta_dots', {
    "type": "vector",
    "url": "mapbox://alexyshu226.3egwtdt1"
  });

  map.addSource('borough',{
    "type":"vector",
    "url":"mapbox://alexyshu226.71acgrbj"
  });

  // add dot layers by category
  for (var i = 0; i < categories.length; i++) {
    map.addLayer({
      'id': categories[i],
      'type': 'circle',
      'source': 'resta_dots',
      'source-layer': 'restaurants_final-0qa9rl', // name of tilesets
      'layout': {'visibility': 'visible'},
      'paint': {
        'circle-color': colors[i],
        'circle-opacity': 1,
        'circle-radius': {
          'base': 2,
          'stops': [[12, 3], [14, 6]]
          },
      },
      'filter': ['==','general_ca',categories[i]]
    },'place-city-label-minor','place-city-label-major');
  };

  // add hover layers by category
  map.addLayer({
    'id': 'dot_click',
    'type': 'circle',
    'source': 'resta_dots',
    'source-layer': 'restaurants_final-0qa9rl', // name of tilesets
    'layout': {'visibility':'visible'},
    'paint': {
      'circle-color': '#ffffff',
      'circle-opacity': 1,
      'circle-radius': {
        'base': 2,
        'stops': [[12, 3], [14, 6]]
        },
      'circle-stroke-color': '#000000',
      'circle-stroke-width': 2,
      'circle-stroke-opacity': 1
    },
    'filter': ['==','general_ca',""]
  },'place-city-label-minor','place-city-label-major');

  //change cursor to pointer when over dots
  map.on('mousemove',function(e){
    var dot = map.queryRenderedFeatures(e.point,{
      layers:[ 'Italian','Chinese','Indian','Japanese_Korean','Pakistani','Southeast_Asian','Mediterranean','Middle_Eastern','American','European_Other','African','Latin_American','Other' ]
    });
    if (dot.length > 0) {
      map.getCanvas().style.cursor = 'pointer';
    } else {
      map.getCanvas().style.cursor = '';
    };
  });

  // add a click for each category
  map.on('click', function (e) {
    var cate = map.queryRenderedFeatures(e.point, {
        layers: [ 'Italian','Chinese','Indian','Japanese_Korean','Pakistani','Southeast_Asian','Mediterranean','Middle_Eastern','American','European_Other','African','Latin_American','Other' ]
    });

    if (cate.length > 0) {
        var current_ca = cate[0].properties.general_ca;
        var current_co = cate_count[categories.indexOf(current_ca)];
        document.getElementById('cate_info').innerHTML = current_ca+": "+current_co.toString();
        map.setFilter('dot_click', ["==", "general_ca", current_ca]);

    } else {
        document.getElementById('cate_info').innerHTML = 'click on dots for infomation about the category';
        map.setFilter('dot_click',["==",'general_ca','']);
    }

  });

  //add borough layer
  map.addLayer({
    'id': 'boroughs',
    'type': 'line',
    'source': 'borough',
    'source-layer': 'borough_final-dzvk5z', // name of tilesets
    'layout': {'visibility':'visible'},
    'paint': {
      'line-color': '#b8b8b8',
      'line-opacity': 1,
      'line-width': 2
    }
  },'Italian','Chinese','Indian','Japanese_Korean','Pakistani','Southeast_Asian','Mediterranean','Middle_Eastern','American','European_Other','African','Latin_American','Other','place-city-label-minor','place-city-label-major');

  //add invisible borough layer for clicking
  map.addLayer({
    'id': 'borough_fill',
    'type': 'fill',
    'source': 'borough',
    'source-layer': 'borough_final-dzvk5z', // name of tilesets
    'layout': {'visibility':'visible'},
    'paint': {
      'fill-color': '#ffffff',
      'fill-opacity': 0
    }
  },'Italian','Chinese','Indian','Japanese_Korean','Pakistani','Southeast_Asian','Mediterranean','Middle_Eastern','American','European_Other','African','Latin_American','Other','place-city-label-minor','place-city-label-major');

  //add borough hover layer
  map.addLayer({
    'id': 'borough_hover',
    'type': 'line',
    'source': 'borough',
    'source-layer': 'borough_final-dzvk5z', // name of tilesets
    'layout': {'visibility':'visible'},
    'paint': {
      'line-color': '#595959',
      'line-opacity': 1,
      'line-width': 4
    },
    'filter': ['==','name','']
  },'place-city-label-minor','place-city-label-major');

  map.on('mousemove',function(e){
    var br = map.queryRenderedFeatures(e.point,{
      layers:['borough_fill']
    });
    if (br.length > 0) {
      document.getElementById('br_info').innerHTML = br[0].properties.name;
      map.setFilter('borough_hover',['==','name',br[0].properties.name])
    } else {
      document.getElementById('br_info').innerHTML = 'hover over boroughs for more information';
      map.setFilter('borough_hover',['==','name',''])
    }
  });

});

// add legend with on/off switch
for (var i = 0; i < categories.length; i++) {
  var id = categories[i];

  var link = document.createElement('a');
  link.href = '#';
  link.className = 'active';
  link.textContent = id;

  link.onclick = function (e) {
    var clickedLayer = this.textContent;
    e.preventDefault();
    e.stopPropagation();

    var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

    if (visibility === 'visible') {
      map.setLayoutProperty(clickedLayer, 'visibility', 'none');
      this.className = '';
    } else {
      this.className = 'active';
      map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
    }
  };

  var layers = document.getElementById('legend');
  layers.appendChild(link);
};

// general info collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
};

//Generate charts
// bar chart for the total number of each category
var ctx = document.getElementById('total_bar');
var total_bar = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: categories,
        datasets: [{
            label: '# of restaurants',
            data: cate_count,
            backgroundColor: colors,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});

var cat = {
  "African": {
    "max": 21,
    "mean": 4.333333333,
    "total": 143
  },
  "American": {
    "max": 74,
    "mean": 10.57575758,
    "total": 349
  },
  "Chinese": {
    "max": 179,
    "mean": 26.60606061,
    "total": 878
  },
  "European_Other": {
    "max": 72,
    "mean": 12.18181818,
    "total": 402
  },
  "French": {
    "max": 109,
    "mean": 10.72727273,
    "total": 354
  },
  "Indian": {
    "max": 81,
    "mean": 29.03030303,
    "total": 958
  },
  "Italian": {
    "max": 332,
    "mean": 47.15151515,
    "total": 1556
  },
  "Japanese_Korean": {
    "max": 173,
    "mean": 19.63636364,
    "total": 648
  },
  "Latin_American": {
    "max": 74,
    "mean": 14.90909091,
    "total": 492
  },
  "Mediterranean": {
    "max": 110,
    "mean": 23.57575758,
    "total": 778
  },
  "Middle_Eastern": {
    "max": 93,
    "mean": 8.272727273,
    "total": 273
  },
  "Other": {
    "max": 34,
    "mean": 4.272727273,
    "total": 141
  },
  "Pakistani": {
    "max": 41,
    "mean": 15.09090909,
    "total": 498
  },
  "Southeast_Asian": {
    "max": 104,
    "mean": 18.42424242,
    "total": 608
  }
}

var brgh = {
  "Barking and Dagenham": {
    "African": 0,
    "American": 13.63636364,
    "Chinese": 18.18181818,
    "European_Other": 4.545454545,
    "French": 0,
    "Indian": 18.18181818,
    "Italian": 4.545454545,
    "Japanese_Korean": 0,
    "Latin_American": 9.090909091,
    "Mediterranean": 13.63636364,
    "Middle_Eastern": 0,
    "Other": 0,
    "Pakistani": 18.18181818,
    "Southeast_Asian": 0
  },
  "Barnet": {
    "African": 1.851851852,
    "American": 3.240740741,
    "Chinese": 15.27777778,
    "European_Other": 2.314814815,
    "French": 1.851851852,
    "Indian": 11.11111111,
    "Italian": 17.59259259,
    "Japanese_Korean": 9.259259259,
    "Latin_American": 2.777777778,
    "Mediterranean": 13.42592593,
    "Middle_Eastern": 4.62962963,
    "Other": 0.462962963,
    "Pakistani": 9.722222222,
    "Southeast_Asian": 6.481481481
  },
  "Bexley": {
    "African": 0,
    "American": 4.225352113,
    "Chinese": 15.49295775,
    "European_Other": 5.633802817,
    "French": 2.816901408,
    "Indian": 25.35211268,
    "Italian": 19.71830986,
    "Japanese_Korean": 0,
    "Latin_American": 2.816901408,
    "Mediterranean": 8.450704225,
    "Middle_Eastern": 0,
    "Other": 0,
    "Pakistani": 12.67605634,
    "Southeast_Asian": 2.816901408
  },
  "Brent": {
    "African": 2.469135802,
    "American": 1.851851852,
    "Chinese": 9.87654321,
    "European_Other": 6.790123457,
    "French": 0,
    "Indian": 24.69135802,
    "Italian": 10.49382716,
    "Japanese_Korean": 3.703703704,
    "Latin_American": 7.407407407,
    "Mediterranean": 6.172839506,
    "Middle_Eastern": 8.641975309,
    "Other": 0.617283951,
    "Pakistani": 12.96296296,
    "Southeast_Asian": 4.320987654
  },
  "Bromley": {
    "African": 0.819672131,
    "American": 4.098360656,
    "Chinese": 17.21311475,
    "European_Other": 4.918032787,
    "French": 3.278688525,
    "Indian": 14.75409836,
    "Italian": 22.95081967,
    "Japanese_Korean": 1.639344262,
    "Latin_American": 3.278688525,
    "Mediterranean": 10.6557377,
    "Middle_Eastern": 0,
    "Other": 1.639344262,
    "Pakistani": 10.6557377,
    "Southeast_Asian": 4.098360656
  },
  "Camden": {
    "African": 1.243093923,
    "American": 2.900552486,
    "Chinese": 9.806629834,
    "European_Other": 4.834254144,
    "French": 4.696132597,
    "Indian": 9.392265193,
    "Italian": 21.68508287,
    "Japanese_Korean": 12.15469613,
    "Latin_American": 5.939226519,
    "Mediterranean": 11.60220994,
    "Middle_Eastern": 2.348066298,
    "Other": 1.79558011,
    "Pakistani": 3.729281768,
    "Southeast_Asian": 7.872928177
  },
  "City of London": {
    "African": 0.325732899,
    "American": 4.885993485,
    "Chinese": 5.211726384,
    "European_Other": 5.863192182,
    "French": 5.863192182,
    "Indian": 6.51465798,
    "Italian": 24.75570033,
    "Japanese_Korean": 19.21824104,
    "Latin_American": 9.446254072,
    "Mediterranean": 4.885993485,
    "Middle_Eastern": 0.977198697,
    "Other": 1.302931596,
    "Pakistani": 2.931596091,
    "Southeast_Asian": 7.817589577
  },
  "Croydon": {
    "African": 1.807228916,
    "American": 4.21686747,
    "Chinese": 16.86746988,
    "European_Other": 4.21686747,
    "French": 2.409638554,
    "Indian": 12.04819277,
    "Italian": 16.86746988,
    "Japanese_Korean": 1.807228916,
    "Latin_American": 12.65060241,
    "Mediterranean": 9.036144578,
    "Middle_Eastern": 1.204819277,
    "Other": 1.807228916,
    "Pakistani": 8.43373494,
    "Southeast_Asian": 6.626506024
  },
  "Ealing": {
    "African": 0.574712644,
    "American": 2.873563218,
    "Chinese": 6.896551724,
    "European_Other": 6.32183908,
    "French": 2.298850575,
    "Indian": 21.26436782,
    "Italian": 10.34482759,
    "Japanese_Korean": 5.172413793,
    "Latin_American": 2.873563218,
    "Mediterranean": 9.195402299,
    "Middle_Eastern": 8.045977011,
    "Other": 3.448275862,
    "Pakistani": 14.94252874,
    "Southeast_Asian": 5.747126437
  },
  "Enfield": {
    "African": 1.01010101,
    "American": 3.03030303,
    "Chinese": 10.1010101,
    "European_Other": 3.03030303,
    "French": 3.03030303,
    "Indian": 14.14141414,
    "Italian": 17.17171717,
    "Japanese_Korean": 0,
    "Latin_American": 2.02020202,
    "Mediterranean": 30.3030303,
    "Middle_Eastern": 2.02020202,
    "Other": 0,
    "Pakistani": 12.12121212,
    "Southeast_Asian": 2.02020202
  },
  "Greenwich": {
    "African": 2.702702703,
    "American": 7.207207207,
    "Chinese": 16.21621622,
    "European_Other": 4.504504505,
    "French": 3.603603604,
    "Indian": 12.61261261,
    "Italian": 11.71171171,
    "Japanese_Korean": 7.207207207,
    "Latin_American": 8.108108108,
    "Mediterranean": 6.306306306,
    "Middle_Eastern": 1.801801802,
    "Other": 3.603603604,
    "Pakistani": 9.009009009,
    "Southeast_Asian": 5.405405405
  },
  "Hackney": {
    "African": 3.180212014,
    "American": 5.653710247,
    "Chinese": 8.127208481,
    "European_Other": 4.240282686,
    "French": 3.886925795,
    "Indian": 9.187279152,
    "Italian": 12.72084806,
    "Japanese_Korean": 5.653710247,
    "Latin_American": 11.30742049,
    "Mediterranean": 18.3745583,
    "Middle_Eastern": 1.413427562,
    "Other": 1.413427562,
    "Pakistani": 1.766784452,
    "Southeast_Asian": 13.07420495
  },
  "Hammersmith and Fulham": {
    "African": 1.712328767,
    "American": 4.109589041,
    "Chinese": 8.904109589,
    "European_Other": 6.849315068,
    "French": 1.712328767,
    "Indian": 8.219178082,
    "Italian": 22.60273973,
    "Japanese_Korean": 7.876712329,
    "Latin_American": 4.452054795,
    "Mediterranean": 8.904109589,
    "Middle_Eastern": 6.164383562,
    "Other": 1.712328767,
    "Pakistani": 4.452054795,
    "Southeast_Asian": 12.32876712
  },
  "Haringey": {
    "African": 3.370786517,
    "American": 4.494382022,
    "Chinese": 10.6741573,
    "European_Other": 6.741573034,
    "French": 3.93258427,
    "Indian": 11.23595506,
    "Italian": 15.16853933,
    "Japanese_Korean": 5.056179775,
    "Latin_American": 5.056179775,
    "Mediterranean": 24.15730337,
    "Middle_Eastern": 1.685393258,
    "Other": 1.123595506,
    "Pakistani": 3.370786517,
    "Southeast_Asian": 3.93258427
  },
  "Harrow": {
    "African": 0.819672131,
    "American": 2.459016393,
    "Chinese": 9.836065574,
    "European_Other": 2.459016393,
    "French": 2.459016393,
    "Indian": 40.98360656,
    "Italian": 13.1147541,
    "Japanese_Korean": 0.819672131,
    "Latin_American": 1.639344262,
    "Mediterranean": 9.016393443,
    "Middle_Eastern": 4.098360656,
    "Other": 1.639344262,
    "Pakistani": 8.196721311,
    "Southeast_Asian": 2.459016393
  },
  "Havering": {
    "African": 0,
    "American": 5.084745763,
    "Chinese": 18.6440678,
    "European_Other": 5.084745763,
    "French": 0,
    "Indian": 18.6440678,
    "Italian": 23.72881356,
    "Japanese_Korean": 0,
    "Latin_American": 3.389830508,
    "Mediterranean": 6.779661017,
    "Middle_Eastern": 0,
    "Other": 1.694915254,
    "Pakistani": 11.86440678,
    "Southeast_Asian": 5.084745763
  },
  "Hillingdon": {
    "African": 0,
    "American": 5.035971223,
    "Chinese": 13.66906475,
    "European_Other": 2.877697842,
    "French": 2.877697842,
    "Indian": 22.30215827,
    "Italian": 23.02158273,
    "Japanese_Korean": 3.597122302,
    "Latin_American": 2.877697842,
    "Mediterranean": 7.913669065,
    "Middle_Eastern": 2.158273381,
    "Other": 1.438848921,
    "Pakistani": 8.633093525,
    "Southeast_Asian": 3.597122302
  },
  "Hounslow": {
    "African": 0.699300699,
    "American": 5.594405594,
    "Chinese": 9.79020979,
    "European_Other": 4.195804196,
    "French": 4.195804196,
    "Indian": 26.57342657,
    "Italian": 13.28671329,
    "Japanese_Korean": 2.797202797,
    "Latin_American": 2.097902098,
    "Mediterranean": 4.895104895,
    "Middle_Eastern": 2.797202797,
    "Other": 2.097902098,
    "Pakistani": 9.79020979,
    "Southeast_Asian": 11.18881119
  },
  "Islington": {
    "African": 3.070175439,
    "American": 2.850877193,
    "Chinese": 6.359649123,
    "European_Other": 3.947368421,
    "French": 5.48245614,
    "Indian": 7.894736842,
    "Italian": 20.39473684,
    "Japanese_Korean": 8.333333333,
    "Latin_American": 9.210526316,
    "Mediterranean": 13.81578947,
    "Middle_Eastern": 1.754385965,
    "Other": 1.973684211,
    "Pakistani": 3.728070175,
    "Southeast_Asian": 11.18421053
  },
  "Kensington and Chelsea": {
    "African": 1.682692308,
    "American": 6.25,
    "Chinese": 4.326923077,
    "European_Other": 5.288461538,
    "French": 7.932692308,
    "Indian": 5.288461538,
    "Italian": 29.56730769,
    "Japanese_Korean": 9.134615385,
    "Latin_American": 3.846153846,
    "Mediterranean": 8.173076923,
    "Middle_Eastern": 5.769230769,
    "Other": 2.884615385,
    "Pakistani": 3.605769231,
    "Southeast_Asian": 6.25
  },
  "Kingston upon Thames": {
    "African": 1.136363636,
    "American": 5.681818182,
    "Chinese": 13.63636364,
    "European_Other": 0,
    "French": 1.136363636,
    "Indian": 12.5,
    "Italian": 19.31818182,
    "Japanese_Korean": 21.59090909,
    "Latin_American": 1.136363636,
    "Mediterranean": 3.409090909,
    "Middle_Eastern": 2.272727273,
    "Other": 0,
    "Pakistani": 11.36363636,
    "Southeast_Asian": 6.818181818
  },
  "Lambeth": {
    "African": 4.931506849,
    "American": 4.383561644,
    "Chinese": 9.315068493,
    "European_Other": 9.589041096,
    "French": 3.287671233,
    "Indian": 9.589041096,
    "Italian": 15.06849315,
    "Japanese_Korean": 7.671232877,
    "Latin_American": 15.61643836,
    "Mediterranean": 6.575342466,
    "Middle_Eastern": 2.191780822,
    "Other": 1.095890411,
    "Pakistani": 4.109589041,
    "Southeast_Asian": 6.575342466
  },
  "Lewisham": {
    "African": 3.870967742,
    "American": 3.225806452,
    "Chinese": 16.77419355,
    "European_Other": 4.516129032,
    "French": 2.580645161,
    "Indian": 16.77419355,
    "Italian": 12.25806452,
    "Japanese_Korean": 1.290322581,
    "Latin_American": 5.806451613,
    "Mediterranean": 10.96774194,
    "Middle_Eastern": 0.64516129,
    "Other": 1.290322581,
    "Pakistani": 10.32258065,
    "Southeast_Asian": 9.677419355
  },
  "Merton": {
    "African": 0.751879699,
    "American": 4.511278195,
    "Chinese": 17.29323308,
    "European_Other": 6.015037594,
    "French": 2.255639098,
    "Indian": 11.27819549,
    "Italian": 17.29323308,
    "Japanese_Korean": 9.77443609,
    "Latin_American": 7.518796992,
    "Mediterranean": 5.263157895,
    "Middle_Eastern": 3.007518797,
    "Other": 0.751879699,
    "Pakistani": 8.270676692,
    "Southeast_Asian": 6.015037594
  },
  "Newham": {
    "African": 2.158273381,
    "American": 5.035971223,
    "Chinese": 13.66906475,
    "European_Other": 4.316546763,
    "French": 0.71942446,
    "Indian": 28.05755396,
    "Italian": 12.23021583,
    "Japanese_Korean": 4.316546763,
    "Latin_American": 7.913669065,
    "Mediterranean": 7.913669065,
    "Middle_Eastern": 0.71942446,
    "Other": 1.438848921,
    "Pakistani": 5.035971223,
    "Southeast_Asian": 6.474820144
  },
  "Redbridge": {
    "African": 0,
    "American": 4,
    "Chinese": 20,
    "European_Other": 3,
    "French": 1,
    "Indian": 18,
    "Italian": 9,
    "Japanese_Korean": 2,
    "Latin_American": 0,
    "Mediterranean": 10,
    "Middle_Eastern": 7,
    "Other": 1,
    "Pakistani": 21,
    "Southeast_Asian": 4
  },
  "Richmond upon Thames": {
    "African": 0.555555556,
    "American": 5,
    "Chinese": 7.222222222,
    "European_Other": 4.444444444,
    "French": 5,
    "Indian": 12.22222222,
    "Italian": 31.66666667,
    "Japanese_Korean": 5.555555556,
    "Latin_American": 2.222222222,
    "Mediterranean": 6.666666667,
    "Middle_Eastern": 1.666666667,
    "Other": 2.222222222,
    "Pakistani": 5.555555556,
    "Southeast_Asian": 10
  },
  "Southwark": {
    "African": 3.636363636,
    "American": 3.03030303,
    "Chinese": 11.81818182,
    "European_Other": 6.666666667,
    "French": 4.848484848,
    "Indian": 11.51515152,
    "Italian": 18.18181818,
    "Japanese_Korean": 5.757575758,
    "Latin_American": 7.878787879,
    "Mediterranean": 9.696969697,
    "Middle_Eastern": 1.818181818,
    "Other": 1.212121212,
    "Pakistani": 4.848484848,
    "Southeast_Asian": 9.090909091
  },
  "Sutton": {
    "African": 0,
    "American": 5.970149254,
    "Chinese": 17.91044776,
    "European_Other": 4.47761194,
    "French": 1.492537313,
    "Indian": 11.94029851,
    "Italian": 20.89552239,
    "Japanese_Korean": 2.985074627,
    "Latin_American": 1.492537313,
    "Mediterranean": 8.955223881,
    "Middle_Eastern": 0,
    "Other": 0,
    "Pakistani": 13.43283582,
    "Southeast_Asian": 10.44776119
  },
  "Tower Hamlets": {
    "African": 1.347708895,
    "American": 4.851752022,
    "Chinese": 9.433962264,
    "European_Other": 3.773584906,
    "French": 2.425876011,
    "Indian": 18.86792453,
    "Italian": 11.5902965,
    "Japanese_Korean": 7.277628032,
    "Latin_American": 5.121293801,
    "Mediterranean": 12.39892183,
    "Middle_Eastern": 1.886792453,
    "Other": 2.69541779,
    "Pakistani": 10.2425876,
    "Southeast_Asian": 8.086253369
  },
  "Waltham Forest": {
    "African": 2.105263158,
    "American": 3.157894737,
    "Chinese": 20,
    "European_Other": 4.210526316,
    "French": 2.105263158,
    "Indian": 11.57894737,
    "Italian": 15.78947368,
    "Japanese_Korean": 2.105263158,
    "Latin_American": 6.315789474,
    "Mediterranean": 10.52631579,
    "Middle_Eastern": 1.052631579,
    "Other": 1.052631579,
    "Pakistani": 11.57894737,
    "Southeast_Asian": 8.421052632
  },
  "Wandsworth": {
    "African": 1.013513514,
    "American": 4.054054054,
    "Chinese": 12.16216216,
    "European_Other": 4.72972973,
    "French": 5.067567568,
    "Indian": 16.55405405,
    "Italian": 20.94594595,
    "Japanese_Korean": 5.405405405,
    "Latin_American": 5.405405405,
    "Mediterranean": 3.716216216,
    "Middle_Eastern": 2.364864865,
    "Other": 1.351351351,
    "Pakistani": 9.459459459,
    "Southeast_Asian": 7.77027027
  },
  "Westminster": {
    "African": 1.402805611,
    "American": 4.943219773,
    "Chinese": 11.95724783,
    "European_Other": 4.809619238,
    "French": 7.281229125,
    "Indian": 5.410821643,
    "Italian": 22.17768871,
    "Japanese_Korean": 11.55644623,
    "Latin_American": 4.943219773,
    "Mediterranean": 7.348029392,
    "Middle_Eastern": 6.21242485,
    "Other": 2.271209085,
    "Pakistani": 2.738810955,
    "Southeast_Asian": 6.947227789
  }
}

// bar chart for the number of restaurants of a category in different boroughs
  // define a function, take the category name, return a list of top ten boroughs and a list of number of restaurants in each of them
  // function distribution(category){
  //   var b = map.querySourceFeatures('borough','boroughs');
  //   var topb = b.sort(function(a,b){a.properties[category] - b.properties[category]}).reverse().slice(0,10);
  //   var count = [];
  //   for (var i = 0; i < 10; i++) {
  //     count.push(topb[i].properties[category])
  //   }
  //   return [topb,count]
  // }
