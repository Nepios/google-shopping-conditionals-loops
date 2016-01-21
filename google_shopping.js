var data = require("./products.json")

// Write your solutions below

shoppingproductArray = [];
backorderArray = [];
multiimageArray = [];
canonproductsArray = [];
ebaycanonArray= [];
for (var i = 0; i < data['items'].length; i++){
	if (data['items'][i].kind === 'shopping#product'){
		shoppingproductArray.push("item "+ [i]);
	}
	if (data['items'][i].product.inventories[0].availability === 'backorder'){
		backorderArray.push("item "+ [i]);
	}
	if (data['items'][i].product.images.length > 1){
		multiimageArray.push("item "+ [i]);
	}
	if (data['items'][i].product.brand === 'Canon'){
		canonproductsArray.push("item "+ [i]);
		if (data['items'][i].product.author.name.includes('eBay')){
		ebaycanonArray.push("item "+ [i]);
	}
	}
	
	console.log(data['items'][i].product.brand);
	console.log(data['items'][i].product.inventories[0].price);
	console.log(data['items'][i].product.images[0].link);

}
console.log("There are " +shoppingproductArray.length+ " products that have a kind of shopping#product.");
console.log("This number is also on the page as currentItemCount. ");
console.log(shoppingproductArray);
console.log("There are " +backorderArray.length+ " items on backorder in inventories.");
console.log(backorderArray);
console.log("There are " +multiimageArray.length+ " items with more than one image.");
console.log(multiimageArray);
console.log("There are " +canonproductsArray.length+ " canon products.");
console.log(canonproductsArray);
console.log("There are " +ebaycanonArray.length+ " canon ebay products.");
console.log(ebaycanonArray);

//console.log(data["items"]);