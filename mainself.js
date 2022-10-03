
var restart=document.querySelector("#b");

var squares=document.querySelectorAll('td');

function clearBoard() {
  for (var i=0; i< squares.length;i=i+1){
  squares[i].textContent=' ';
  }
}
restart.addEventListener('click',clearBoard);



function markerBoard(){
  if(this.textContent===' '){
    this.textContent='X';
  } else if(this.textContent==='X'){
    this.textContent='O';
  }else{
    this.textContent=' ';
  }
}
for (var i=0; i<squares.length; i=i+1){
  squares[i].addEventListener('click',markerBoard);
}
