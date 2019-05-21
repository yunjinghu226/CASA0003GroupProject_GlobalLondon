
mapboxgl.accessToken = 'pk.eyJ1IjoiZGVtaWx1IiwiYSI6ImNqbjM5dDd5MTF3aW8zd3Bsa2Y2am1wOXAifQ.GW3DcJ5xzCAS0MK_jQz3ag';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/demilu/cjvpdrslh17gr1cobizl7fwt1',
  center: [-0.133527, 51.516370],
  zoom: 17.0,
  pitch: 60.0,
  bearing: -66.50
});


// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function() {
// Insert the layer beneath any symbol layer.
  var layers = map.getStyle().layers;

  var labelLayerId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
      labelLayerId = layers[i].id;
      break;
    }
  }


  // Add the 3d building height tileset to the map (which uses the openstreet map data)
map.addLayer({
  'id': '3d-buildings',
  'source': 'composite',
  'source-layer': 'building',
  'filter': ['==', 'extrude', 'true'],
  'type': 'fill-extrusion',
  'minzoom': 15,
  'paint': {
    'fill-extrusion-color': [
      'match',
      ['get','type'],
      'retail','#223b53',
      'residential','#d5871a',
      'shop','#51c0db',
      'commercial','#438f5e',
      /* other */ '#ccc'
    ],

    // use an 'interpolate' expression to add a smooth transition effect to the
    // buildings as the user zooms in
    'fill-extrusion-height': [
      "interpolate", ["linear"], ["zoom"],
      15, 0,
      15.05, ["get", "height"]
      ],
    'fill-extrusion-base': [
      "interpolate", ["linear"], ["zoom"],
      15, 0,
      15.05, ["get", "min_height"]
      ],
    'fill-extrusion-opacity': .6
    }
  }, labelLayerId);


//add lengend for change in color
var layers = ['Retail','Commercial','Residential','Other'];
var colors = ['#223b53','#438f5e', '#d5871a', '#ccc'];

  for (i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var color = colors[i];
    var item = document.createElement('div');
    var key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;

    var value = document.createElement('span');
    value.innerHTML = layer;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
  }

  //add an invisiable layer of shop points to allow interaction
  map.addLayer({
      'id': 'shops-oxfordst',
      'type': 'circle',
      // data from tileset in Mapbox
      'source': {
        type: 'vector',
        url: 'mapbox://demilu.91jzw9pk'

      },
      'source-layer': 'OxfordStShops-70j2jt', // name of tileset same as Mapbox
      'layout': {
          'visibility': 'visible'
      },
      'paint': {
        'circle-radius': 15,
        'circle-opacity': 0,
        'circle-color': "#007cbf"}
    });


    //interaction when mouse move over
    map.on("mousemove", function (e) {
        var info = map.queryRenderedFeatures(e.point, {
            layers: ["shops-oxfordst"]
        });

    //hover to show text
        if (info.length > 0) {
            //show name and value in sidebar
            document.getElementById('brandicon').innerHTML = "<img src='"+ info[0].properties.logo +"' alt='"+ info[0].properties.Shops + "'style=' max-height:100px;max-width:300px;'>";
            document.getElementById('shopname').innerHTML = 'Shop Name: '+ info[0].properties.Shops;
            document.getElementById('origincountry').innerHTML = 'Country of origin: '+info[0].properties.Country;
            if (info[0].properties.yearofesta != 0){
              document.getElementById('yearofesta').innerHTML = 'First store in the UK opened in: '+info[0].properties.yearofesta;
            }
            if (info[0].properties.numberofsh != 0){
              document.getElementById('numberofsh').innerHTML = 'Number of shops in the UK: '+info[0].properties.numberofsh;
            }

        } else {
            //if not hovering over a feature set info to title and guide
            document.getElementById('brandicon').innerHTML = "";
            document.getElementById('shopname').innerHTML = "<h2>Brands in Oxford Street</h2><h3>Move your mouse on top of each shop to see detailed information</h3>";
            document.getElementById('origincountry').innerHTML = "";
            document.getElementById('yearofesta').innerHTML = "";
            document.getElementById('numberofsh').innerHTML = "";
        }
    });

});



// Scrollable side bar for scence change
var chapters = {
    'TTM1': {
      bearing: -66.50,
      center: [-0.135647, 51.516017],
      zoom: 17.0,
      pitch: 60,
      speed: 0.1,
    },
    'TTM2': {
      bearing: -66.50,
      center: [-0.138435, 51.515824],
      zoom: 17.0,
      pitch: 60,
      speed: 0.1,
    },
    'TTM3': {
      bearing: -66.50,
      center: [-0.140669, 51.515521],
      zoom: 17.0,
      pitch: 60,
      speed: 0.1,
    },
    'OX1': {
      bearing: -66.50,
      center: [-0.143667, 51.515180],
      zoom: 17.0,
      pitch: 60,
      speed: 0.1,
    },
    'OX2': {
      bearing: -66.50,
      center: [-0.151347, 51.514182],
      zoom: 17.0,
      pitch: 60,
      speed: 0.1,
    },
    'BN1': {
      bearing: -66.50,
      center: [-0.155036, 51.513871],
      zoom: 17.0,
      pitch: 60,
      speed: 0.1,
    },
    'BN2': {
      bearing:-66.50,
      center: [-0.155231, 51.513826],
      zoom: 17.0,
      pitch: 60,
      speed: 0.1,
    },
    'citation': {
      bearing:-71.50,
      center: [-0.137131, 51.515763],
      zoom: 15.6,
      pitch: 60,
      speed: 0.1,
    }
  };

//Scatterplot to show timeline and size of shops
//csv data is read from github
  Plotly.d3.csv("https://raw.githubusercontent.com/Demilululu/Data_for_CW3/master/brand_country.csv", function(err, rows){

  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

    var data1 = [{
        type: 'scatter',
        mode: 'markers',
        x: unpack(rows, 'yearofestablish'),
        y: unpack(rows, 'numberofshops'),
        text: unpack(rows, 'Shops'),
        marker: {
          size: unpack(rows, 'numberofshops'),
          sizemode: "area",
          sizeref: 0.08
        },
        transforms: [
          {
          type: 'filter',
          target: unpack(rows, 'Country'),
          operation: '!=',
          value: 'Switzerland' //Data is missing for the shops from Switzerland
          },
          {
          type: 'groupby',
          groups: unpack(rows, 'Country'),
          styles: [
            {target: 'United Kingdom', value: {marker: {color: '#ec5454'}}},
            {target: 'United States', value: {marker: {color: '#e1afbe'}}},
            {target: 'Spain', value: {marker: {color: '#70a5d4'}}},
            {target: 'Japan', value: {marker: {color: '#6d74cf'}}},
            {target: 'Italy', value: {marker: {color: '#51c0db'}}},
            {target: 'Denmark', value: {marker: {color: '#80d996'}}},
            {target: 'Australia', value: {marker: {color: '#bd6666'}}},
            {target: 'Poland', value: {marker: {color: '#54a2ab'}}},
            {target: 'Sweden', value: {marker: {color: '#fcbd90'}}},
            {target: 'Austria', value: {marker: {color: '#c282f9'}}},
            {target: 'Canada', value: {marker: {color: '#584478'}}},
            {target: 'Germany', value: {marker: {color: '#b48d6c'}}},
            {target: 'Greece', value: {marker: {color: '#debb59'}}},
            {target: 'Ireland', value: {marker: {color: '#a3d96a'}}},
            {target: 'Korea', value: {marker: {color: '#a186b8'}}},
            {target: 'Netherlands', value: {marker: {color: '#ffbe57'}}},
            {target: 'Saudi Arabia', value: {marker: {color: '#438f5e'}}}
          ]
    }]
  }];

  var layout1 = {
      title: '</br>Year of Establishment & Number of stores in UK by countries',
      height: 510,
      width: 680,
      yaxis: {
       type: 'log'
     },
     font: {
      family: 'Helvetica',
      size: 12,
      color: '#000000'
    }
  };

  Plotly.plot('graph1', data1, layout1)
  });

// Pie Chart showing types of shops
  var data2 = [{
    values: [ 1, 5, 1, 1, 1, 5, 2, 24, 3],
    labels: ['Ireland', 'Italy', 'Japan', 'Netherlands', 'Poland', 'Spain', 'Sweden','United Kingdom','United States' ],
    domain: {column: 0, row:0},
    text: 'Fashion wear',
    textposition: 'inside',
    name: 'Fashion wear',
    hoverinfo: 'label+percent+name',
    hole: .45,
    type: 'pie'
  },{
    values: [1, 2, 1, 1, 7],
    labels: ['Australia', 'Italy', 'Poland', 'Saudi Arabia', 'United Kingdom'],
    text: 'Health & Beauty',
    textposition: 'inside',
    domain: {column: 1, row: 0},
    name: 'Health &<br>Beauty',
    hoverinfo: 'label+percent+name',

    hole: .45,
    type: 'pie'
  },{
    values: [1, 1, 1, 4, 4, 3],
    labels: ['Austria', 'Denmark', 'Greece', 'Switzerland', 'United Kingdom','United States'],
    text: 'Jewellery & Accessories',
    textposition: 'inside',
    domain: {column: 2, row: 0},
    name: 'Jewellery &<br>Accessories ',
    hoverinfo: 'label+percent+name',
    hole: .45,
    type: 'pie'
  },
  {
    values: [1, 1, 1, 1, 1, 2, 12, 5],
    labels: ['Canada', 'Denmark', 'Germany', 'Italy', 'Japan','Spain','United Kingdom','United States'],
    text: 'Sports & Footwear',
    textposition: 'inside',
    domain: {column: 0, row: 1},
    name: 'Sports &<br>Footwear',
    hoverinfo: 'label+percent+name',
    hole: .45,
    type: 'pie'
  },
  {
    values: [1, 8],
    labels: ['Korea','United Kingdom'],
    text: 'Electrical & Mobile services',
    textposition: 'inside',
    domain: {column: 1, row: 1},
    name: 'Electrical &<br>Mobile services',
    hoverinfo: 'label+percent+name',
    hole: .45,
    type: 'pie'
  },
  {
    values: [4],
    labels: ['United Kingdom'],
    text: 'Department store',
    textposition: 'inside',
    domain: {column: 2, row: 1},
    name: 'Department<br>store',
    hoverinfo: 'label+percent+name',
    hole: .45,
    type: 'pie'
  }];


  var layout2 = {
    title: '</br>Oxford Street Type of Shops by Country',
    annotations: [
      {
        font: {
          size: 12
        },
        showarrow: false,
        text: 'Fashion wear',
        x: 0,
        y: 1.05
      },
      {
        font: {
          size: 12
        },
        showarrow: false,
        text: 'Health & Beauty',
        x: 0.50,
        y: 1.05
      },
      {
        font: {
          size: 12
        },
        showarrow: false,
        text: 'Jewellery & Accessories',
        x: 1,
        y: 1.05
      },
      {
        font: {
          size: 12
        },
        showarrow: false,
        text: 'Sports & Footwear',
        x: 0,
        y: 0.5
      },
      {
        font: {
          size: 12
        },
        showarrow: false,
        text: 'Electrical & Mobile services',
        x: 0.5,
        y: 0.5
      },
      {
        font: {
          size: 12
        },
        showarrow: false,
        text: 'Department store',
        x: 1,
        y: 0.5
      }
    ],
    height: 510,
    width: 680,
    showlegend: true,
    grid: {rows: 2, columns: 3}
  };

  Plotly.plot('graph2', data2, layout2);


  // On every scroll event, check which element is on screen
  window.onscroll = function() {
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
  var chapterName = chapterNames[i];
  if (isElementOnScreen(chapterName)) {
  setActiveChapter(chapterName);
  break;
  }
}
};

  var activeChapterName = 'TTM1';
  function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  map.easeTo(chapters[chapterName]);

  document.getElementById(chapterName).setAttribute('class', 'active');
  document.getElementById(activeChapterName).setAttribute('class', '');

  activeChapterName = chapterName;
  }

  function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}


// Overlay statistics event
function openNav() {
  document.getElementById("mybottomp").style.height = "550px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mybottomp").style.height = "0";
}

//Slide Show effect between Statistics
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
