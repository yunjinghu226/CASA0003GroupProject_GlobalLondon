
// display the base map
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleHlzaHUyMjYiLCJhIjoiY2puMzl0bzRrMmR5eDNwcXZ6YTk1b2x4MSJ9.YExeZS4oHiM3y4zZtiWO7g';
  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/alexyshu226/cjvgs9wdh0eki1fqmvaycd9vs',
  center: [-0.127,51.517],
  zoom: 10.75
});

// add functional features
map.on('load',function(){

  // add tileset sources
  map.addSource('resta_dots', {
    "type": "vector",
    "url": "mapbox://alexyshu226.bc7wi6sp"
  });

  var categories = [ 'Italian','Chinese','Indian','Japanese_Korean','Pakistani','Southeast_Asian','Mediterranean','Middle_Eastern','American','European_Other','African','Latin_American','Other' ];
  var colors = ['#fc9977','#fcbd90','#b48d6c','#bd6666','#a3d96a','#80d996','#57cfc9','#51c0db','#70a5d4','#6d74cf','#584478','#e1afbe','#debb59']

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

});
