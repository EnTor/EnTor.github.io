var tree_list = [{eng: 'Aspen', latin: 'Populus tremula'},
  {eng: 'Austrian Pine', latin: 'Pinus nigra'},
  {eng: 'Bird Cherry', latin: 'Prunus padus'},
  {eng: 'Blackthorn', latin: 'Prunus spinosa'},
  {eng: 'Broad-leaved Lime', latin: 'Tilia platyphyllos'},
  {eng: 'Canadian Poplar', latin: " Populus x canadensis \'Robusta\'"},
  {eng: 'Common Alder', latin: 'Alnus glutinosa'},
  {eng: 'Common Ash', latin: 'Fraxinus excelsior'},
  {eng: 'Common Beech', latin: 'Fagus sylvatica'},
  {eng: 'Common Dogwood', latin: 'Cornus sanguinea'},
  {eng: 'Common Hawthorn', latin: 'Crataegus monogyna'},
  {eng: 'Common Hazel', latin: 'Corylus avellana'},
  {eng: 'Common Hornbeam', latin: 'Carpinus betulus'},
  {eng: 'Common Juniper', latin: 'Juniperus communis'},
  {eng: 'Common Lime', latin: 'Tilia x europaea'},
  {eng: 'Common Pear', latin: 'Pyrus communis'},
  {eng: 'Common Rowan', latin: 'Sorbus aucuparia'},
  {eng: 'Common Walnut', latin: 'Juglans regia'},
  {eng: 'Common Yew', latin: 'Taxus baccata'},
  {eng: 'Cornelian Cherry', latin: 'Cornus mas'},
  {eng: 'Douglas Fir', latin: 'Pseudotsuga menziesii'},
  {eng: 'Downy Birch', latin: 'Betula pubescens'},
  {eng: 'Dunkeld Larch', latin: 'Larix x marschlinsii (eurolepis)'},
  {eng: 'Eastern Hemlock', latin: 'Tsuga canadensis'},
  {eng: 'Eastern White Cedar', latin: 'Thuja occidentalis'},
  {eng: 'English Oak', latin: 'Quercus robur'},
  {eng: 'European Elder', latin: 'Sambucus nigra'},
  {eng: 'European Fly Honeysuckle', latin: 'Lonicera xylosteum'},
  {eng: 'European Larch', latin: 'Larix decidua'},
  {eng: 'European Red Elder', latin: 'Sambucus racemosa'},
  {eng: 'European Red Pine', latin: 'Pinus sylvestris'},
  {eng: 'Field Maple', latin: 'Acer campestre'},
  {eng: 'Goat Willow', latin: 'Salix caprea'},
  {eng: 'Grand Fir', latin: 'Abies grandis'},
  {eng: 'Grey Alder', latin: 'Alnus incana'},
  {eng: 'Guelder Rose', latin: 'Viburnum opulus'},
  {eng: 'Horse Chestnut', latin: 'Aesculus hippocastanum'},
  {eng: 'Hybrid Aspen', latin: ' Populus x wettsteinii'},
  {eng: 'Japanese Larch', latin: 'Larix kaempferi'},
  {eng: 'Lodgepole Pine', latin: 'Pinus contorta'},
  {eng: 'London Plane', latin: 'Platanus x hispanica'},
  {eng: 'Maidenhair Tree', latin: 'Ginkgo biloba'},
  {eng: 'Mountain Currant', latin: 'Ribes alpinum'},
  {eng: 'Mountain Pine', latin: 'Pinus mugo'},
  {eng: 'Norway Maple', latin: 'Acer platanoides'},
  {eng: 'Norway Spruce', latin: 'Picea abies'},
  {eng: 'Ponderosa Pine', latin: 'Pinus ponderosa'},
  {eng: 'Red Oak', latin: 'Quercus rubra'},
  {eng: 'Sessile Oak', latin: 'Quercus petraea'},
  {eng: 'Silver Birch', latin: 'Betula pendula'},
  {eng: 'Sitka Spruce', latin: 'Picea sitchensis'},
  {eng: 'Small-leaved Lime', latin: 'Tilia cordata'},
  {eng: 'Sugar Maple', latin: 'Acer saccharum'},
  {eng: 'Swedish Whitebeam', latin: 'Sorbus intermedia'},
  {eng: 'Sycamore Maple', latin: 'Acer pseudoplatanus'},
  {eng: 'Western Red Cedar', latin: 'Thuja plicata'},
  {eng: 'Weymouth Pine', latin: 'Pinus strobus'},
  {eng: 'White Willow', latin: 'Salix alba var. Sericea'},
  {eng: 'Wild Cherry', latin: 'Prunus avium'},
  {eng: 'Wild Crab', latin: 'Malus sylvestris'},
  {eng: 'Wynch Elm', latin: 'Ulmus glabra'}];

var counter = 0;
var init = false;
var rand = false;
var random_ids = [];
var nbr_rounds = 0;
var nbr_correct = 0;
resp = false;
id_counter_rand = 0;

function show_image(src, width, height, id, name) {
  var img = document.createElement(name);
  img.src = src;
  img.id = id;
  img.style.maxHeight = '650px';
  img.style.maxWidth = '1000px';

  document.getElementById('maindiv').appendChild(img);
}

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

function do_round() {
  const element1 = document.getElementById('startbutton');
  if (element1)
    element1.remove();
  if (resp)
    response();
  else
    display_next();
  resp = !resp;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function start_rand() {
  const numbers = Array.from({ length: 61 }, (_, i) => i);
  random_ids = shuffle(numbers);
  console.log(random_ids);
  do_round();
}

function response() {
  if (!init)
    return;
  in_text = document.getElementById("texteditor").value
  tree = tree_list[counter];
  if (!tree)
    return;
  var response = document.getElementById('texteditor').value;
  nbr_rounds++;
  if (tree.latin.toLowerCase() == in_text.toLowerCase()) {
    response = "Correct";
    document.getElementById('textviewerdiv').style.color = 'green'
    nbr_correct++;
  } else {
    response = "Wrong: " + tree.latin;
    document.getElementById('textviewerdiv').style.color = 'red'
  }
  document.getElementById('textviewerdiv').innerHTML = response;
  document.getElementById('texteditor').value = '';
  document.getElementById('score').innerText = nbr_correct.toString() + '/' + nbr_rounds.toString() + ' (61)';
}

function display_next() {
  const element = document.getElementById('nexttree');
  if (element)
    element.remove();
  document.getElementById('textviewerdiv').innerHTML = '';
  counter = random_ids[id_counter_rand];
  id_counter_rand = (id_counter_rand + 1) % tree_list.length;
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
