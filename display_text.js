var tree_list = [{eng: 'European red pine', swe: 'Tall', latin: 'Pinus sylvestris', pic: 'tall.jpg'},
             {eng: 'Norway spruce', swe: 'Gran', latin: 'Picea abies', pic: 'gran.jpg'},
             {eng: 'European beech', swe: 'Bok', latin: 'Fagus sylvatica', pic: 'bok.jpg'}];

var counter = 0;
var init = false;

function show_image(src, width, height, id, name) {
  var img = document.createElement(name);
  img.src = src;
  img.id = id;
  img.style.maxHeight = '400px';
  img.style.maxWidth = '400px';

  document.getElementById('maindiv').appendChild(img);
}

function do_round() {
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
  if (tree.eng == in_text) {
    response = "Correct";
  } else {
    response = "Wrong: " + tree.eng;
  }
  document.getElementById('textviewerdiv').innerHTML = response;
  const element = document.getElementById('nexttree');
  if (element)
    element.remove();
  counter = (counter + 1) % tree_list.length;
}

function display_next() {
  tree = tree_list[counter];
  if (!tree)
    return;
  console.log(tree.eng)
  show_image('media/' + tree.pic, 500, 500, 'nexttree', 'img');
  init = true;
}
