// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// my solution: 

function getSize(width, height, depth) {
  
  let surfaceArea = ((width * height) + (width * depth) + (height * depth)) * 2
  let volume = width * height * depth
  
  return [surfaceArea, volume]
  
}