function generateTable()
{
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");
 
  for (var i = 1; i < 5; i++) {
   
    var row = document.createElement("tr");
 
    for (var j = 1; j < 5; j++) {
    
      if (i==1)
      {
      var cell = document.createElement("th");
      cell.textContent = "Header " + j;
      }
      else
      {
      cell = document.createElement("td");
      cell.textContent = j + "," + (i -1)
      }
        
 
      row.appendChild(cell);
    }
 
    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);

  document.body.appendChild(tbl);

  tbl.setAttribute("border", "2");
  }
  
  function generateButtons()
  {
  var buttontext = [ 'UP', "RIGHT", "DOWN", "LEFT" , "MARKCELL" ];
  for (var k=0;k<5;k++)
  {
  var button = document.createElement("button");
  button.textContent= buttontext[k];
  document.body.appendChild(button);
  if (k==0)
  {
  button.addEventListener("click", moveUp);
  }
  else if(k==1)
  {
  button.addEventListener("click", moveRight);
  }
  else if(k==2)
  {
  button.addEventListener("click", moveDown);
  }
  else if (k==3)
  {
  button.addEventListener("click", moveLeft);
  }
	else
  {
  button.addEventListener("click", markCell);
  }
  }
	
  
  }
  
  function moveUp()
  {
  if (currentCell !=0 && currentCell !=1 && currentCell !=2 && currentCell !=3)
  {
  bold.style.borderWidth = "2px";
  currentCell-=4; 
  bold = document.getElementsByTagName("td")[currentCell];
  bold.style.borderWidth = "4px";
  }
  }
  
  
   function moveRight()
  {
  if (currentCell !=3 && currentCell !=7 && currentCell !=11)
  {
  bold.style.borderWidth = "2px";
  currentCell+=1
  bold = document.getElementsByTagName("td")[currentCell];
  bold.style.borderWidth = "4px";
  }
  }
   function moveDown()
  {
  if (currentCell !=8 && currentCell !=9 && currentCell !=10 && currentCell !=11)
  {
  bold.style.borderWidth = "2px";
  currentCell+=4
  bold = document.getElementsByTagName("td")[currentCell];
  bold.style.borderWidth = "4px";
  }
  }
   function moveLeft()
  {
   if (currentCell !=0 && currentCell !=4 && currentCell !=8)
   {
  bold.style.borderWidth = "2px";
  currentCell-=1;
  bold = document.getElementsByTagName("td")[currentCell];
  bold.style.borderWidth = "4px";
  }
  }
  
  function markCell()
  {
  bold.style.backgroundColor = "yellow";
  }

function isValidMove()
{
 return (currentCell<0 || currentCell>4)
 
}
generateTable();
var currentCell=0;
var bold = document.getElementsByTagName("td")[currentCell];
bold.style.borderWidth = "4px";
generateButtons();

