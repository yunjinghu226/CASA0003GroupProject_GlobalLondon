
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

// bar chart for the number of restaurants of a category in different boroughs
  // define a function, take the category name, return a list of top ten boroughs and a list of number of restaurants in each of them
  function distribution(category){

  }
