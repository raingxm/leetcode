var maxArea = function(height) {
  var maxWater = 0;

  var firstLineX = 1;
  var firstLineY = height[firstLineX-1];
  var sencondLineX = height.length;
  var sencondLineY = height[sencondLineX-1];

  while (firstLineX < sencondLineX) {
    if (calcArea(firstLineX, firstLineY, sencondLineX, sencondLineY) > maxWater) {
      maxWater = calcArea(firstLineX, firstLineY, sencondLineX, sencondLineY);
    }
    if (firstLineY > sencondLineY) {
      sencondLineX--;
      sencondLineY = height[sencondLineX-1];
    } else {
      firstLineX++;
      firstLineY = height[firstLineX-1];
    }
  }

  return maxWater;
};

function calcArea(x1, y1, x2, y2) {
  var width = x2 - x1;
  var height = y1 < y2 ? y1 : y2;
  return width * height
}

module.exports = maxArea;
