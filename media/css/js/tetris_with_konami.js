/*
 * Install the tetris Konami trigger :-). Enjoy!
 */
konami.action=function() {
  // Get the body
  var b=top.document.getElementsByTagName('body')[0];
  // create the target div
  var d=top.document.createElement('div');
  d.setAttribute("id", "tetris-div");
  b.appendChild(d);
  //load Ham Tetris JS
  var el=top.document.createElement('script');
  el.setAttribute("type", "text/javascript");
  el.setAttribute("src", "/media/css/js/tetris/tetris_logic.js");
  var el2=el.cloneNode(true);
  el2.setAttribute("src", "/media/css/js/tetris/tetris_gui.js");
  // tetris_gui load triggers the game
  el2.onload=function(){
    HT.install("tetris-div");
  };
  // tetris_logic load triggers tetris_gui load
  el.onload=(function(b,el) {
    return function(){
      HT.music="/media/css/js/tetris/tetris_A.ogg";
      b.appendChild(el); }
  })(b,el2);
  // Insert tetris_gui in the document
  b.appendChild(el);
  // We don't care much about the load time of this
  var c=top.document.createElement('link');
  c.setAttribute("type", "text/css");
  c.setAttribute("rel", "stylesheet");
  c.setAttribute("href", "/media/css/js/tetris/tetris_evilham.css");
  b.appendChild(c);
  konami.action=function() {
    top.document.getElementById('tetris-music').play();
  };
};
