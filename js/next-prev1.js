$(document).ready(main);

var images=[
  'img/I4.jpg',
  'img/I7.jpg',
  'img/I2.jpg',
  'img/I3.jpg',
  'img/I6.jpg',
  'img/I5.jpg'
];

var num=0;

function main() {

  $(".boton2").click(function(){
    num++;
    if (num >= images.length) {
      num=0;
    }
    $("#slider").attr("src", images[num]);
  });

  $(".boton1").click(function(){
    num--;
    if (num < 0) {
      num=images.length-1;
    }
    $("#slider").attr("src", images[num]);
  });
}
