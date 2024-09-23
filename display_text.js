var tree_list = [{eng: 'European red pine', swe: 'Tall', latin: 'Pinus sylvestris', pic: 'tall.jpg'},
             {eng: 'Norway spruce', swe: 'Gran', latin: 'Picea abies', pic: 'gran.jpg'},
             {eng: 'European beech', swe: 'Bok', latin: 'Fagus sylvatica', pic: 'bok.jpg'},
             {eng: 'Grand Fir', latin: 'Abies grandis'},
             {eng: 'Field Maple', latin: 'Acer campestre'},
             {eng: 'Norway Maple', latin: 'Acer platanoides'},
             {eng: 'Sycamore Maple', latin: 'Acer pseudoplatanus'},
             {eng: 'Sugar Maple', latin: 'Acer saccharum'},
             {eng: 'Horse Chestnut', latin: 'Aesculus hippocastanum'},
             {eng: 'Common Alder', latin: 'Alnus glutinosa'},
             {eng: 'Grey Alder', latin: 'Alnus incana'},
             {eng: 'Silver Birch', latin: 'Betula pendula'},
             {eng: 'Downy Birch', latin: 'Betula pubescens'},
             {eng: 'Common Hornbeam', latin: 'Carpinus betulus'},
             {eng: 'Cornelian Cherry', latin: 'Cornus mas'},
             {eng: 'Common Dogwood', latin: 'Cornus sanguinea'},
             {eng: 'Common Hazel', latin: 'Corylus avellana'},
             {eng: 'Common Hawthorn', latin: 'Crataegus monogyna'},
             {eng: 'Common Beech', latin: 'Fagus sylvatica'},
             {eng: 'Common Ash', latin: 'Fraxinus excelsior'},
             {eng: 'Maidenhair Tree', latin: 'Ginkgo biloba'},
             {eng: 'Common Walnut', latin: 'Juglans regia'},
             {eng: 'Common Juniper', latin: 'Juniperus communis'},
             {eng: 'European Larch', latin: 'Larix decidua'},
             {eng: 'Japanese Larch', latin: 'Larix kaempferi'},
             {eng: 'Wild Crab', latin: 'Malus sylvestris'},
             {eng: 'Norway Spruce', latin: 'Picea abies'},
             {eng: 'Sitka Spruce', latin: 'Picea sitchensis'},
             {eng: 'Lodgepole Pine', latin: 'Pinus contorta'},
             {eng: 'Mountain Pine', latin: 'Pinus mugo'},
             {eng: 'Austrian Pine', latin: 'Pinus nigra'},
             {eng: 'Ponderosa Pine', latin: 'Pinus ponderosa'},
             {eng: 'Weymouth Pine', latin: 'Pinus strobus'},
             {eng: 'Scots Pine', latin: 'Pinus sylvestris'},
             {eng: 'Wild Cherry', latin: 'Prunus avium'},
             {eng: 'Bird Cherry', latin: 'Prunus padus'},
             {eng: 'Douglas Fir', latin: 'Pseudotsuga menziesii'},
             {eng: 'Common Pear', latin: 'Pyrus communis'},
             {eng: 'Sessile Oak', latin: 'Quercus petraea'},
             {eng: 'English Oak', latin: 'Quercus robur'},
             {eng: 'Red Oak', latin: 'Quercus rubra'},
             {eng: 'Goat Willow', latin: 'Salix caprea'},
             {eng: 'European Elder', latin: 'Sambucus nigra'},
             {eng: 'Common Rowan', latin: 'Sorbus aucuparia'},
             {eng: 'Swedish Whitebeam', latin: 'Sorbus intermedia'},
             {eng: 'Common Yew', latin: 'Taxus baccata'},
             {eng: 'Small-leaved Lime', latin: 'Tilia cordata'},
             {eng: 'Broad-leaved Lime', latin: 'Tilia platyphyllos'},
             {eng: 'Eastern Hemlock', latin: 'Tsuga canadensis'},
             {eng: 'Wynch Elm', latin: 'Ulmus glabra'},
             {latin: 'Tilia × europaea', eng: 'Common Lime'},
             {latin: 'Platanus × hispanica', eng: 'London Plane'},
             {latin: ' Populus × canadensis \'Robusta\'', eng: 'Canadian Poplar'},
             {eng: 'Hybrid Aspen', latin: ' Populus × wettsteinii'},
             {eng: 'Aspen', latin: 'Populus tremula'},
             {eng: 'Dunkeld Larch', latin: 'Larix x marschlinsii (eurolepis)'},
             {eng: 'European Fly Honeysuckle', latin: 'Lonicera xylosteum'},
             {eng: 'Blackthorn', latin: 'Prunus spinosa'},
             {eng: 'Mountain Currant, Alpine Currant', latin: 'Ribes alpinum'},
             {eng: 'White Willow', latin: 'Salix alba var. Sericea'},
             {eng: 'European Red Elder', latin: 'Sambucus racemosa'},
             {eng: 'Eastern White Cedar', latin: 'Thuja occidentalis'},
             {eng: 'Western Red Cedar', latin: 'Thuja plicata'},
             {eng: 'Guelder Rose', latin: 'Viburnum opulus'},
            ];

var counter = 0;
var init = false;

function show_image(src, width, height, id, name) {
  var img = document.createElement(name);
  img.src = src;
  img.id = id;
  img.style.maxHeight = '650px';
  img.style.maxWidth = '1000px';

  document.getElementById('maindiv').appendChild(img);
}

function do_round() {
  const element = document.getElementById('startbutton');
  if (element)
    element.remove();
  response();
  display_next();
}

function response() {
  if (!init)
    return;
  in_text = document.getElementById("texteditor").value
  tree = tree_list[counter];
  if (!tree)
    return;
  var response = document.getElementById('texteditor').value;
  
  if (tree.eng.toLowerCase() == in_text.toLowerCase()) {
    response = "Correct";
  } else {
    response = "Wrong: " + tree.eng;
  }
  document.getElementById('textviewerdiv').innerHTML = response;
  const element = document.getElementById('nexttree');
  if (element)
    element.remove();
  counter = (counter + 1) % tree_list.length;
  document.getElementById('texteditor').value = '';
}

function display_next() {
  tree = tree_list[counter];
  if (!tree)
    return;
  console.log(tree.eng)
  if (tree.pic) {
    show_image('media/' + tree.pic, 500, 500, 'nexttree', 'img');
  } else {
    show_image('media/' + tree.eng + '.jpg', 500, 500, 'nexttree', 'img');
  }

  init = true;

  //document.addEventListener('keyup', (e) => {
  //  if (e.code === 'Enter') {
  //    document.removeEventListener('keyup')
  //    do_round();
  //  } 
  //});
}
