var num = 0;

imgShow = [
  ['images/space_01.jpg'],
  ['images/great_wall_of_china_01.jpg'],
  ['images/kaiteur_falls_01.jpg'],
  ['images/space_2_0.jpg']
]

function sliderUp() {
  num++;
  num = num % imgShow.length;
  document.getElementById('mine').src=imgShow[num];
}

function sliderBack() {
  num--;
  if (num < 0) {num=imgShow.length-1;}
  num = num % imgShow.length;
  document.getElementById('mine').src=imgShow[num];
}