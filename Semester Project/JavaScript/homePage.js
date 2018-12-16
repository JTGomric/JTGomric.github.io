var arrow1 = document.getElementById("arrow1");
var arrow2 = document.getElementById("arrow2");
var arrow3 = document.getElementById("arrow3");

var text1 = document.getElementById("introText");
var text2 = document.getElementById("sierpinskiText");
var text3 = document.getElementById("mandelbrotText");

var defaultText1 = "In Geometry, a Fractal is a set which possesses detail, is self similar, and which is generated recursively. They have been observed by humanity in nature for thousands of years and have also been thought of by mathemeticians dating back to the 17th century. Some examples of fractal patterns found in nature are trees and snowflakes. While trees are usually never self similar, snowflakes are much closer to being true fractals. For this project, I chose to examine two fractal patterns: The Sierpinski Triangle and the Mandelbrot Set.";
var defaultText2 = "The Sierpinski Triangle was officially described by Wacław Sierpiński in 1915, but it had appeared in artwork centuries earlier. While it can be generated numerous ways, the easiest way to imagine it is to think of dividing an equilateral into four even sections and then removing the middle section, repeating that same process for the three remaining quarters infinitely. I used a different method of generation which involves a simple process known as the Chaos Game. The game begins by starting at one of the three vertices of an equilateral triangle, then choose one of the other two vertices and mark the point at half the distance between the two vertices. You then continue from the point you ended at and choose one of the three vertices to move halway to. While one may think that this process would simply fill the triangle, it remarkably generates the Sierpinski Triangle! For my generator, I have also allowed the user to change the number of vertices and the distance moved per iteration which allows for even more fractal generation. By Allowing the user to change the number of points added per iteration, the idea is that they would be able to see how the Sierpinski triangle and other fractals come into existence.";
var defaultText3 = "The Mandelbrot Set is a more recently conceived fractal which involves a recursive function with complex number inputs. It was first described by Robert W. Brooks and Peter Matelski in 1978 but was not properly visualized until Benoit Mandelbrot did so using computers provided by IBM in 1980. The set works by considering the complex number plane and applying a recursive test to certain values. The set is compiled by testing if each complex number C can be added to Z<sup>2</sup> in the function: f(Z) = Z<sup>2</sup> + C, where Z begins at 0 and the result of the first iteration of the function is placed into Z. If the result of the function approaches infinity, it is not considered to be within the set, but if it remains bounded to a certain value, it is within the Mandelbrot Set. For example, the complex number -1 + 0i starts by resulting in -1 (-1 = 0<sup>2</sup> + (-1)) and continually oscillates between -1 and 0, as the next iteration produces 0 (0 = (-1)<sup>2</sup> + (-1)) which returns the function to the original input. For my generator, I allowed the user to change the ranges of complex numbers they wish to view, the number of iterations the computer goes through before declaring that complex number part of the set, and the level of zoom with which they want to zoom in on the image. The colors within my program work by setting any complex number that is within the set to be black and any complex number which is not within the set to be a certain intensity of red based on the number of iterations it takes before conclusively approaching infinity. While the click to zoom functionality may result in some errors, the manual range input should always function as intended.";

arrow1.style.cursor = "pointer";
arrow2.style.cursor = "pointer";
arrow3.style.cursor = "pointer";

arrow1.addEventListener('click',truncate1,false);
arrow2.addEventListener('click',truncate2,false);
arrow3.addEventListener('click',truncate3,false);

var flipped1 = false;
var flipped2 = false;
var flipped3 = false;

function truncate1(){

  if(flipped1 == false){
    arrow1.setAttribute('src',"Images/upArrow.png");
    flipped1 = true;
    text1.innerHTML = null;
  }
  else {
    arrow1.setAttribute('src',"Images/downArrow.png");
    flipped1 = false;
    text1.innerHTML = defaultText1;
  }
}
function truncate2(){
  if(flipped2 == false){
    arrow2.setAttribute('src',"Images/upArrow.png");
    flipped2 = true;
    text2.innerHTML = null;
  }
  else {
    arrow2.setAttribute('src',"Images/downArrow.png");
    flipped2 = false;
    text2.innerHTML = defaultText2;
  }
}
function truncate3(){
  if(flipped3 == false){
    arrow3.setAttribute('src',"Images/upArrow.png");
    flipped3 = true;
    text3.innerHTML = null;
  }
  else {
    arrow3.setAttribute('src',"Images/downArrow.png");
    flipped3 = false;
    text3.innerHTML = defaultText3;
  }
}
