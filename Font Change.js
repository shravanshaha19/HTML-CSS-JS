console.clear();

input=document.getElementById("input");
input.style.padding= "0 0 0 10px";
input.style.fontSize = "16px";
input.style.margin= "30px 0 0 1px";
input.style.border= "2px #000 soid";
input.style.height= "505px";
input.style.width= "500px";

input.desingMode="on";//to allow user to apply shortcut keys like ctrl+b(for BOLD) ctrl+i (for ITALIC)

//  to change font-family of the text

function chFont() {
	document.getElementById("input").style.fontFamily = document.getElementById("face").value;
}


size = document.getElementById("Size").value;
unit = document.getElementById("unit").value;	

// to change the font-size of the text

function chFnSize(value) {
//   {
     unit = document.getElementById("unit").value;
//     const size = document.getElementById("Size").value;
//     const inputArea = document.getElementById("input");
    
//     // Set the font size style for the input area
//     inputArea.style.fontSize = size + unit;
//   }
	console.log(size+unit);
  size=parseFloat(value);
	document.getElementById("input").style.fontSize = size + unit;
}
// function chFont(selectTag) {
//   var listValue = selectTag.options[selectTag.selectedIndex].value;
//   document.getElementById("input").style.fontSize = listValue;
// }
console.log(parseFloat(size));
function size_incr(){
  ++size;
  document.getElementById("input").style.fontSize= (++size) + unit;
  document.getElementById("Size").value = size;
  console.log(size);
}


function size_dicr(){
  --size;
  document.getElementById("input").style.fontSize= (--size) + unit;
  document.getElementById("Size").value = size;
  console.log(size);
}

function uppercase(){
  document.getElementById("input").style.textTransform= "uppercase";
}
function lowercase(){
  document.getElementById("input").style.textTransform= "lowercase";
}
function capitalize(){
  document.getElementById("input").style.textTransform= "capitalize";
}
