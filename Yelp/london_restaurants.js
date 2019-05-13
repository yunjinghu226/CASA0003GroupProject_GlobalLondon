
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

// add functional features
map.on('load',function(){

  // add tileset sources
  map.addSource('resta_dots', {
    "type": "vector",
    "url": "mapbox://alexyshu226.bc7wi6sp"
  });

  // add dot layers by category
  for (var i = 0; i < categories.length; i++) {
    map.addLayer({
      'id': categories[i],
      'type': 'circle',
      'source': 'resta_dots',
      'source-layer': 'restaurants-bt7efa', // name of tilesets
      'layout': {'visibility': 'visible'},
      'paint': {
        'circle-color': colors[i],
        'circle-opacity': 1,
        'circle-radius': {
          'base': 1.75,
          'stops': [[12, 2.5], [22, 180]]
          },
      },
      'filter': ['==','general_ca',categories[i]]
    },'place-city-label-minor','place-city-label-major');
  };

  // add hover layers by category
  map.addLayer({
    'id': 'dot_hover',
    'type': 'circle',
    'source': 'resta_dots',
    'source-layer': 'restaurants-bt7efa', // name of tilesets
    'layout': {'visibility':'visible'},
    'paint': {
      'circle-color': '#ffffff',
      'circle-opacity': 1,
      'circle-radius': {
        'base': 1.75,
        'stops': [[12, 2.5], [22, 180]]
        },
      'stroke-color': '#000000',
      'stroke-width': 2,
      'stroke-opacity': 1
    }
    //'filter': ['==','general_ca',""]
  },'place-city-label-minor','place-city-label-major');


  // the three functions below add a hover effect to display the information for each category
  map.on('mousemove', function (e) {
    var cate = map.queryRenderedFeatures(e.point, {
        layers: [ 'Italian','Chinese','Indian','Japanese_Korean','Pakistani','Southeast_Asian','Mediterranean','Middle_Eastern','American','European_Other','African','Latin_American','Other' ]
    });

    //hover-show texts
    if (cate.length > 0) {
        document.getElementById('hover').innerHTML = cate[0].properties.general_ca;
    } else {
        document.getElementById('hover').innerHTML = 'hover over dots';
    }

    //hover-show border
    map.setFilter('dot_hover', ["==", "general_ca", cate[0].properties.general_ca]);
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
