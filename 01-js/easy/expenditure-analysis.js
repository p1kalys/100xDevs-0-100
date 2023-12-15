/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let cat_map = {};

  transactions.forEach(transaction => {
    const {category, price} = transaction;

    if(!cat_map[category]){
      cat_map[category]=price;
    }
    else{
      cat_map[category]+=price;
    }
  });

  let keys = Object.keys(cat_map);
  let res = [];
  for(let i=0; i<keys.length; i++){
    const category = keys[i];
    let obj = {
      category: category,
      totalSpent: cat_map[category]
    };
    res.push(obj);
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
