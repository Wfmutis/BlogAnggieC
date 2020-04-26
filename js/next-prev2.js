$(document).ready(main);

var images=[
  'img/R1.jpg',
  'img/R2.jpg',
  'img/R3.jpg',
  'img/R4.jpg',
  'img/R5.jpg',
  'img/R6.jpg'
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
