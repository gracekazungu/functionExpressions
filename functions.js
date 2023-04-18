// You manage a grocery store and need to keep track of the inventory of various items.
//  You will use arrays to store the data and various functions to manipulate and analyze the data. 

// Create an array containing the names of all items in the inventory maximum of 10.
let InventoryItems=["apples","mangoes","bananas","watermelon","pears","oranges","guava","vegetables","pineapple"];
console.log(InventoryItems)

// Create a separate array with the corresponding stock quantities of each item maximum of 10.
let InventoryQuantities = [24, 15, 10, 5,10,23,21,45,56];
console.log(InventoryQuantities)

// Write a function to add a new item to the inventory, updating both arrays.
function addItem(name, quantity) {
  if (InventoryItems.length >=10) {
   console.log("Maximum inventory size reached");
  }else{
  
InventoryItems.push(name);
InventoryQuantities.push(quantity);
}
}
addItem("ovacado",8)
console.log(InventoryItems)
console.log(InventoryQuantities)



// Write a function to update the stock quantity of an existing item.
function updateQuantity(name, newQuantity) {
  const index = InventoryItems.indexOf(name);
  if (index === -1) {
    console.log("Item not found in inventory");
  
  }else{
  
  InventoryQuantities[index] = newQuantity;
  }
}
updateQuantity("bananas",20);
console.log(InventoryItems)
console.log(InventoryQuantities)


// Write a function to calculate the total number of items in the inventory.
function totalInventory() {
  let total = 0;
  for (let i = 0; i < InventoryQuantities.length; i++) {
    total += InventoryQuantities[i];
  }
  console.log(total);
}
totalInventory()

// Write a function to find the item with the lowest stock quantity.
function findLowestStock() {
  let lowest = Infinity;
  let lowestIndex = -1;
  for (let i = 0; i < InventoryQuantities.length; i++) {
    if (InventoryQuantities[i] < lowest) {
      lowest = InventoryQuantities[i];
      lowestIndex = i;
    }
  }
  return InventoryItems[lowestIndex];
}
const lowestStock=findLowestStock();
console.log("Item with lowest stock:", lowestStock);