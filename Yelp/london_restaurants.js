
// display the base map
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleHlzaHUyMjYiLCJhIjoiY2puMzl0bzRrMmR5eDNwcXZ6YTk1b2x4MSJ9.YExeZS4oHiM3y4zZtiWO7g';
  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/alexyshu226/cjvgs9wdh0eki1fqmvaycd9vs',
  center: [-0.127,51.517],
  zoom: 10.75
});

// categories and color palette
var categories = [ 'Italian','Chinese','Indian','Japanese_Korean','Pakistani','Southeast_Asian','Mediterranean','Middle_Eastern','French','American','European_Other','African','Latin_American','Other' ];
var colors = ['#fc9977','#fcbd90','#b48d6c','#bd6666','#a3d96a','#80d996','#57cfc9','#51c0db','#54a2ab','#70a5d4','#6d74cf','#584478','#e1afbe','#debb59']

// category info and borough info
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
};

var brgh = {
  "Westminster": {
    "Italian": 22.17768871,
    "Chinese": 11.95724783,
    "Indian": 5.410821643,
    "Japanese_Korean": 11.55644623,
    "Pakistani": 2.738810955,
    "Southeast_Asian": 6.947227789,
    "Mediterranean": 7.348029392,
    "Middle_Eastern": 6.21242485,
    "French": 7.281229125,
    "American": 4.943219773,
    "European_Other": 4.809619238,
    "African": 1.402805611,
    "Latin_American": 4.943219773,
    "Other": 2.271209085
  },
  "Camden": {
    "Italian": 21.68508287,
    "Chinese": 9.806629834,
    "Indian": 9.392265193,
    "Japanese_Korean": 12.15469613,
    "Pakistani": 3.729281768,
    "Southeast_Asian": 7.872928177,
    "Mediterranean": 11.60220994,
    "Middle_Eastern": 2.348066298,
    "French": 4.696132597,
    "American": 2.900552486,
    "European_Other": 4.834254144,
    "African": 1.243093923,
    "Latin_American": 5.939226519,
    "Other": 1.79558011
  },
  "Islington": {
    "Italian": 20.39473684,
    "Chinese": 6.359649123,
    "Indian": 7.894736842,
    "Japanese_Korean": 8.333333333,
    "Pakistani": 3.728070175,
    "Southeast_Asian": 11.18421053,
    "Mediterranean": 13.81578947,
    "Middle_Eastern": 1.754385965,
    "French": 5.48245614,
    "American": 2.850877193,
    "European_Other": 3.947368421,
    "African": 3.070175439,
    "Latin_American": 9.210526316,
    "Other": 1.973684211
  },
  "Hackney": {
    "Italian": 12.72084806,
    "Chinese": 8.127208481,
    "Indian": 9.187279152,
    "Japanese_Korean": 5.653710247,
    "Pakistani": 1.766784452,
    "Southeast_Asian": 13.07420495,
    "Mediterranean": 18.3745583,
    "Middle_Eastern": 1.413427562,
    "French": 3.886925795,
    "American": 5.653710247,
    "European_Other": 4.240282686,
    "African": 3.180212014,
    "Latin_American": 11.30742049,
    "Other": 1.413427562
  },
  "Hammersmith and Fulham": {
    "Italian": 22.60273973,
    "Chinese": 8.904109589,
    "Indian": 8.219178082,
    "Japanese_Korean": 7.876712329,
    "Pakistani": 4.452054795,
    "Southeast_Asian": 12.32876712,
    "Mediterranean": 8.904109589,
    "Middle_Eastern": 6.164383562,
    "French": 1.712328767,
    "American": 4.109589041,
    "European_Other": 6.849315068,
    "African": 1.712328767,
    "Latin_American": 4.452054795,
    "Other": 1.712328767
  },
  "Tower Hamlets": {
    "Italian": 11.5902965,
    "Chinese": 9.433962264,
    "Indian": 18.86792453,
    "Japanese_Korean": 7.277628032,
    "Pakistani": 10.2425876,
    "Southeast_Asian": 8.086253369,
    "Mediterranean": 12.39892183,
    "Middle_Eastern": 1.886792453,
    "French": 2.425876011,
    "American": 4.851752022,
    "European_Other": 3.773584906,
    "African": 1.347708895,
    "Latin_American": 5.121293801,
    "Other": 2.69541779
  },
  "Southwark": {
    "Italian": 18.18181818,
    "Chinese": 11.81818182,
    "Indian": 11.51515152,
    "Japanese_Korean": 5.757575758,
    "Pakistani": 4.848484848,
    "Southeast_Asian": 9.090909091,
    "Mediterranean": 9.696969697,
    "Middle_Eastern": 1.818181818,
    "French": 4.848484848,
    "American": 3.03030303,
    "European_Other": 6.666666667,
    "African": 3.636363636,
    "Latin_American": 7.878787879,
    "Other": 1.212121212
  },
  "Kensington and Chelsea": {
    "Italian": 29.56730769,
    "Chinese": 4.326923077,
    "Indian": 5.288461538,
    "Japanese_Korean": 9.134615385,
    "Pakistani": 3.605769231,
    "Southeast_Asian": 6.25,
    "Mediterranean": 8.173076923,
    "Middle_Eastern": 5.769230769,
    "French": 7.932692308,
    "American": 6.25,
    "European_Other": 5.288461538,
    "African": 1.682692308,
    "Latin_American": 3.846153846,
    "Other": 2.884615385
  },
  "Lambeth": {
    "Italian": 15.06849315,
    "Chinese": 9.315068493,
    "Indian": 9.589041096,
    "Japanese_Korean": 7.671232877,
    "Pakistani": 4.109589041,
    "Southeast_Asian": 6.575342466,
    "Mediterranean": 6.575342466,
    "Middle_Eastern": 2.191780822,
    "French": 3.287671233,
    "American": 4.383561644,
    "European_Other": 9.589041096,
    "African": 4.931506849,
    "Latin_American": 15.61643836,
    "Other": 1.095890411
  },
  "City of London": {
    "Italian": 24.75570033,
    "Chinese": 5.211726384,
    "Indian": 6.51465798,
    "Japanese_Korean": 19.21824104,
    "Pakistani": 2.931596091,
    "Southeast_Asian": 7.817589577,
    "Mediterranean": 4.885993485,
    "Middle_Eastern": 0.977198697,
    "French": 5.863192182,
    "American": 4.885993485,
    "European_Other": 5.863192182,
    "African": 0.325732899,
    "Latin_American": 9.446254072,
    "Other": 1.302931596
  },
  "Wandsworth": {
    "Italian": 20.94594595,
    "Chinese": 12.16216216,
    "Indian": 16.55405405,
    "Japanese_Korean": 5.405405405,
    "Pakistani": 9.459459459,
    "Southeast_Asian": 7.77027027,
    "Mediterranean": 3.716216216,
    "Middle_Eastern": 2.364864865,
    "French": 5.067567568,
    "American": 4.054054054,
    "European_Other": 4.72972973,
    "African": 1.013513514,
    "Latin_American": 5.405405405,
    "Other": 1.351351351
  },
  "Richmond upon Thames": {
    "Italian": 31.66666667,
    "Chinese": 7.222222222,
    "Indian": 12.22222222,
    "Japanese_Korean": 5.555555556,
    "Pakistani": 5.555555556,
    "Southeast_Asian": 10,
    "Mediterranean": 6.666666667,
    "Middle_Eastern": 1.666666667,
    "French": 5,
    "American": 5,
    "European_Other": 4.444444444,
    "African": 0.555555556,
    "Latin_American": 2.222222222,
    "Other": 2.222222222
  },
  "Hounslow": {
    "Italian": 13.28671329,
    "Chinese": 9.79020979,
    "Indian": 26.57342657,
    "Japanese_Korean": 2.797202797,
    "Pakistani": 9.79020979,
    "Southeast_Asian": 11.18881119,
    "Mediterranean": 4.895104895,
    "Middle_Eastern": 2.797202797,
    "French": 4.195804196,
    "American": 5.594405594,
    "European_Other": 4.195804196,
    "African": 0.699300699,
    "Latin_American": 2.097902098,
    "Other": 2.097902098
  },
  "Lewisham": {
    "Italian": 12.25806452,
    "Chinese": 16.77419355,
    "Indian": 16.77419355,
    "Japanese_Korean": 1.290322581,
    "Pakistani": 10.32258065,
    "Southeast_Asian": 9.677419355,
    "Mediterranean": 10.96774194,
    "Middle_Eastern": 0.64516129,
    "French": 2.580645161,
    "American": 3.225806452,
    "European_Other": 4.516129032,
    "African": 3.870967742,
    "Latin_American": 5.806451613,
    "Other": 1.290322581
  },
  "Barnet": {
    "Italian": 17.59259259,
    "Chinese": 15.27777778,
    "Indian": 11.11111111,
    "Japanese_Korean": 9.259259259,
    "Pakistani": 9.722222222,
    "Southeast_Asian": 6.481481481,
    "Mediterranean": 13.42592593,
    "Middle_Eastern": 4.62962963,
    "French": 1.851851852,
    "American": 3.240740741,
    "European_Other": 2.314814815,
    "African": 1.851851852,
    "Latin_American": 2.777777778,
    "Other": 0.462962963
  },
  "Croydon": {
    "Italian": 16.86746988,
    "Chinese": 16.86746988,
    "Indian": 12.04819277,
    "Japanese_Korean": 1.807228916,
    "Pakistani": 8.43373494,
    "Southeast_Asian": 6.626506024,
    "Mediterranean": 9.036144578,
    "Middle_Eastern": 1.204819277,
    "French": 2.409638554,
    "American": 4.21686747,
    "European_Other": 4.21686747,
    "African": 1.807228916,
    "Latin_American": 12.65060241,
    "Other": 1.807228916
  },
  "Ealing": {
    "Italian": 10.34482759,
    "Chinese": 6.896551724,
    "Indian": 21.26436782,
    "Japanese_Korean": 5.172413793,
    "Pakistani": 14.94252874,
    "Southeast_Asian": 5.747126437,
    "Mediterranean": 9.195402299,
    "Middle_Eastern": 8.045977011,
    "French": 2.298850575,
    "American": 2.873563218,
    "European_Other": 6.32183908,
    "African": 0.574712644,
    "Latin_American": 2.873563218,
    "Other": 3.448275862
  },
  "Newham": {
    "Italian": 12.23021583,
    "Chinese": 13.66906475,
    "Indian": 28.05755396,
    "Japanese_Korean": 4.316546763,
    "Pakistani": 5.035971223,
    "Southeast_Asian": 6.474820144,
    "Mediterranean": 7.913669065,
    "Middle_Eastern": 0.71942446,
    "French": 0.71942446,
    "American": 5.035971223,
    "European_Other": 4.316546763,
    "African": 2.158273381,
    "Latin_American": 7.913669065,
    "Other": 1.438848921
  },
  "Merton": {
    "Italian": 17.29323308,
    "Chinese": 17.29323308,
    "Indian": 11.27819549,
    "Japanese_Korean": 9.77443609,
    "Pakistani": 8.270676692,
    "Southeast_Asian": 6.015037594,
    "Mediterranean": 5.263157895,
    "Middle_Eastern": 3.007518797,
    "French": 2.255639098,
    "American": 4.511278195,
    "European_Other": 6.015037594,
    "African": 0.751879699,
    "Latin_American": 7.518796992,
    "Other": 0.751879699
  },
  "Waltham Forest": {
    "Italian": 15.78947368,
    "Chinese": 20,
    "Indian": 11.57894737,
    "Japanese_Korean": 2.105263158,
    "Pakistani": 11.57894737,
    "Southeast_Asian": 8.421052632,
    "Mediterranean": 10.52631579,
    "Middle_Eastern": 1.052631579,
    "French": 2.105263158,
    "American": 3.157894737,
    "European_Other": 4.210526316,
    "African": 2.105263158,
    "Latin_American": 6.315789474,
    "Other": 1.052631579
  },
  "Brent": {
    "Italian": 10.49382716,
    "Chinese": 9.87654321,
    "Indian": 24.69135802,
    "Japanese_Korean": 3.703703704,
    "Pakistani": 12.96296296,
    "Southeast_Asian": 4.320987654,
    "Mediterranean": 6.172839506,
    "Middle_Eastern": 8.641975309,
    "French": 0,
    "American": 1.851851852,
    "European_Other": 6.790123457,
    "African": 2.469135802,
    "Latin_American": 7.407407407,
    "Other": 0.617283951
  },
  "Sutton": {
    "Italian": 20.89552239,
    "Chinese": 17.91044776,
    "Indian": 11.94029851,
    "Japanese_Korean": 2.985074627,
    "Pakistani": 13.43283582,
    "Southeast_Asian": 10.44776119,
    "Mediterranean": 8.955223881,
    "Middle_Eastern": 0,
    "French": 1.492537313,
    "American": 5.970149254,
    "European_Other": 4.47761194,
    "African": 0,
    "Latin_American": 1.492537313,
    "Other": 0
  },
  "Haringey": {
    "Italian": 15.16853933,
    "Chinese": 10.6741573,
    "Indian": 11.23595506,
    "Japanese_Korean": 5.056179775,
    "Pakistani": 3.370786517,
    "Southeast_Asian": 3.93258427,
    "Mediterranean": 24.15730337,
    "Middle_Eastern": 1.685393258,
    "French": 3.93258427,
    "American": 4.494382022,
    "European_Other": 6.741573034,
    "African": 3.370786517,
    "Latin_American": 5.056179775,
    "Other": 1.123595506
  },
  "Greenwich": {
    "Italian": 11.71171171,
    "Chinese": 16.21621622,
    "Indian": 12.61261261,
    "Japanese_Korean": 7.207207207,
    "Pakistani": 9.009009009,
    "Southeast_Asian": 5.405405405,
    "Mediterranean": 6.306306306,
    "Middle_Eastern": 1.801801802,
    "French": 3.603603604,
    "American": 7.207207207,
    "European_Other": 4.504504505,
    "African": 2.702702703,
    "Latin_American": 8.108108108,
    "Other": 3.603603604
  },
  "Kingston upon Thames": {
    "Italian": 19.31818182,
    "Chinese": 13.63636364,
    "Indian": 12.5,
    "Japanese_Korean": 21.59090909,
    "Pakistani": 11.36363636,
    "Southeast_Asian": 6.818181818,
    "Mediterranean": 3.409090909,
    "Middle_Eastern": 2.272727273,
    "French": 1.136363636,
    "American": 5.681818182,
    "European_Other": 0,
    "African": 1.136363636,
    "Latin_American": 1.136363636,
    "Other": 0
  },
  "Bromley": {
    "Italian": 22.95081967,
    "Chinese": 17.21311475,
    "Indian": 14.75409836,
    "Japanese_Korean": 1.639344262,
    "Pakistani": 10.6557377,
    "Southeast_Asian": 4.098360656,
    "Mediterranean": 10.6557377,
    "Middle_Eastern": 0,
    "French": 3.278688525,
    "American": 4.098360656,
    "European_Other": 4.918032787,
    "African": 0.819672131,
    "Latin_American": 3.278688525,
    "Other": 1.639344262
  },
  "Hillingdon": {
    "Italian": 23.02158273,
    "Chinese": 13.66906475,
    "Indian": 22.30215827,
    "Japanese_Korean": 3.597122302,
    "Pakistani": 8.633093525,
    "Southeast_Asian": 3.597122302,
    "Mediterranean": 7.913669065,
    "Middle_Eastern": 2.158273381,
    "French": 2.877697842,
    "American": 5.035971223,
    "European_Other": 2.877697842,
    "African": 0,
    "Latin_American": 2.877697842,
    "Other": 1.438848921
  },
  "Redbridge": {
    "Italian": 9,
    "Chinese": 20,
    "Indian": 18,
    "Japanese_Korean": 2,
    "Pakistani": 21,
    "Southeast_Asian": 4,
    "Mediterranean": 10,
    "Middle_Eastern": 7,
    "French": 1,
    "American": 4,
    "European_Other": 3,
    "African": 0,
    "Latin_American": 0,
    "Other": 1
  },
  "Harrow": {
    "Italian": 13.1147541,
    "Chinese": 9.836065574,
    "Indian": 40.98360656,
    "Japanese_Korean": 0.819672131,
    "Pakistani": 8.196721311,
    "Southeast_Asian": 2.459016393,
    "Mediterranean": 9.016393443,
    "Middle_Eastern": 4.098360656,
    "French": 2.459016393,
    "American": 2.459016393,
    "European_Other": 2.459016393,
    "African": 0.819672131,
    "Latin_American": 1.639344262,
    "Other": 1.639344262
  },
  "Havering": {
    "Italian": 23.72881356,
    "Chinese": 18.6440678,
    "Indian": 18.6440678,
    "Japanese_Korean": 0,
    "Pakistani": 11.86440678,
    "Southeast_Asian": 5.084745763,
    "Mediterranean": 6.779661017,
    "Middle_Eastern": 0,
    "French": 0,
    "American": 5.084745763,
    "European_Other": 5.084745763,
    "African": 0,
    "Latin_American": 3.389830508,
    "Other": 1.694915254
  },
  "Enfield": {
    "Italian": 17.17171717,
    "Chinese": 10.1010101,
    "Indian": 14.14141414,
    "Japanese_Korean": 0,
    "Pakistani": 12.12121212,
    "Southeast_Asian": 2.02020202,
    "Mediterranean": 30.3030303,
    "Middle_Eastern": 2.02020202,
    "French": 3.03030303,
    "American": 3.03030303,
    "European_Other": 3.03030303,
    "African": 1.01010101,
    "Latin_American": 2.02020202,
    "Other": 0
  },
  "Bexley": {
    "Italian": 19.71830986,
    "Chinese": 15.49295775,
    "Indian": 25.35211268,
    "Japanese_Korean": 0,
    "Pakistani": 12.67605634,
    "Southeast_Asian": 2.816901408,
    "Mediterranean": 8.450704225,
    "Middle_Eastern": 0,
    "French": 2.816901408,
    "American": 4.225352113,
    "European_Other": 5.633802817,
    "African": 0,
    "Latin_American": 2.816901408,
    "Other": 0
  },
  "Barking and Dagenham": {
    "Italian": 4.545454545,
    "Chinese": 18.18181818,
    "Indian": 18.18181818,
    "Japanese_Korean": 0,
    "Pakistani": 18.18181818,
    "Southeast_Asian": 0,
    "Mediterranean": 13.63636364,
    "Middle_Eastern": 0,
    "French": 0,
    "American": 13.63636364,
    "European_Other": 4.545454545,
    "African": 0,
    "Latin_American": 9.090909091,
    "Other": 0
  }
};

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
      layers:[ 'Italian','Chinese','Indian','Japanese_Korean','Pakistani','Southeast_Asian','Mediterranean','Middle_Eastern','French','American','European_Other','African','Latin_American','Other' ]
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
        layers: [ 'Italian','Chinese','Indian','Japanese_Korean','Pakistani','Southeast_Asian','Mediterranean','Middle_Eastern','French','American','European_Other','African','Latin_American','Other' ]
    });

    if (cate.length > 0) {
        var current_ca = cate[0].properties.general_ca;
        var current_co = cate_count[categories.indexOf(current_ca)];
        document.getElementById('cate_info').innerHTML = "<strong>"+current_ca+"</strong>"+"<br><strong>Total</strong> # in London: "+current_co.toString()+"<br><strong>Mean</strong> # in a borough: "+cat[current_ca].mean.toString()+"<br><strong>Max</strong> # in a borough: "+cat[current_ca].max.toString();
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
  },'Italian','Chinese','Indian','Japanese_Korean','Pakistani','Southeast_Asian','Mediterranean','Middle_Eastern','French','American','European_Other','African','Latin_American','Other','place-city-label-minor','place-city-label-major');

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
  },'Italian','Chinese','Indian','Japanese_Korean','Pakistani','Southeast_Asian','Mediterranean','Middle_Eastern','French','American','European_Other','African','Latin_American','Other','place-city-label-minor','place-city-label-major');

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
      b_name = br[0].properties.name;
      map.setFilter('borough_hover',['==','name',b_name]);
      document.getElementById('br_name').innerHTML = '<strong>'+b_name+'</strong>';
      var brgh_pct = [];
      for (var x in categories) {
        brgh_pct.push(brgh[b_name][categories[x]].toFixed(2))
      };
      barchartplotter('brgh_bar',brgh_pct,'%');
    } else {
      document.getElementById('br_name').innerHTML = 'hover over boroughs for more information';
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
  link.style = "color:"+colors[i];

  link.onclick = function(e){
    var clickedLayer = this.textContent
    var visibility = map.getLayoutProperty(clickedLayer,'visibility');
    e.preventDefault();
    e.stopPropagation();
    if (visibility === 'visible') {
      this.className = '';
      map.setLayoutProperty(clickedLayer, 'visibility', 'none');
    } else {
      this.className = 'active';
      map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
    }
  }

  var layers = document.getElementById('legend');
  layers.appendChild(link);
};

// define function to generate barchart
function barchartplotter(id,data,label){
  new Chart(document.getElementById(id), {
      type: 'horizontalBar',
      data: {
          labels: categories,
          datasets: [{
              label: label,
              data: data,
              backgroundColor: colors,
          }]
      },
      options: {
          events: ['click'],
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: false
                  }
              }]
          }
      }
  });
};

// the total count barchart
var cate_count = [];
for (var x in categories) {
  cate_count.push(cat[categories[x]].total)
};
barchartplotter('total_bar',cate_count,'# of restaurants');

// control the open and close of side collapsibles
function openStat() {
  document.getElementById("statPanel").style.width = "297px";
}
function closeStat() {
  document.getElementById("statPanel").style.width = "0";
}
function openCate() {
  document.getElementById("catePanel").style.width = "297px";
}
function closeCate() {
  document.getElementById("catePanel").style.width = "0";
}
function openBr() {
  document.getElementById("brPanel").style.width = "297px";
}
function closeBr() {
  document.getElementById("brPanel").style.width = "0";
}
