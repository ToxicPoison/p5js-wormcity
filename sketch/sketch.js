var numBuildings = 100;
var windowPercent = 0.1;
var maxSize = 0.26;


function drawBuildings() {
  baseCol = color(0, 0, 0);
  var windowColor = color(150, 2, 100);
  
  noStroke();

  // BUILDINGS
  for (var i = 0; i < numBuildings; i++)
  {
    fill(baseCol);
    

    
    var scaleX = width * Math.random() * maxSize;
    var scaleY = height * Math.random() * maxSize;
    var posX = width * Math.random() - .5*scaleX;
    var posY = height * Math.random() - .5*scaleY;

    rect(
      posX,
      posY,
      scaleX,
      scaleY
    );

    fill(color(((i * 2)/ numBuildings) * 5, ((i * 2)/ numBuildings) * 30, ((i * 2)/ numBuildings) * 50));

    rect(
      posX,
      posY,
      scaleX * 0.1,
      scaleY * 1
    );
    
    // WINDOWS
    var winWid = max(Math.random() * 5, 2);
    var winHi = max(Math.random() * 5, 1);


    for (var x1 = 0; x1 < (scaleX - winWid); x1 += 10)
    {
      for (var y1 = 0; y1 < (scaleY - winHi); y1 += 10)
      {
        
        fill(windowColor);
        if (Math.random() > windowPercent)
        {
          fill("black");
        }
        rect(x1 + posX, y1 + posY, winWid, winHi);
      }
    }

    baseCol = color((i / numBuildings) * 5, (i / numBuildings) * 30, (i / numBuildings) * 50);

    
  }
}
function setup() {
  createCanvas(400, 400);
  background("#001437");
  
  drawBuildings();
}

function draw() {
  background("rgba(25,25,25,0.01)")

  //stroke("black");
  fill("red");
  var t = millis() / 5000;
  var mag = 100
  ellipse(
    sin(t*10)*mag + 0.3*sin(t*92)*mag + width/2,
    cos(t*10)*mag + 0.2*cos(t*88)*mag + width/2,
    10,
    10
  );
  
}
