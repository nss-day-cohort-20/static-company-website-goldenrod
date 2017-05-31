function makeProduct (name, description, price, image) {
	var product = {};

	product.name = name;
	product.description = description;
	product.price = price;
	product.image = image;

	return product;

}

  var stellarNebula = makeProduct("Stellar Nebula", "You will truly be a wonderous thing to behold!", 10000, "img/for_product-page/jar-of-star.jpg");
  var averageStar = makeProduct("Average Star", "Day-to-Day Star Needs", 10, "img/for_product-page/jar-of-star.jpg");
  var massiveStar = makeProduct("Massive Star", "Same as an Average Star- the Massive Star is your day-to-day star needs with extra bulk!", 100, "img/for_product-page/jar-of-star.jpg");
  var planetaryNebula = makeProduct("Planetary Nebula", "Expand your wisdom from Red Supergiant with Planetary-Nebula! Be the Einstein in your Galaxy!", 5000, "img/for_product-page/jar-of-star.jpg");
  var redSupergiant = makeProduct("Red Supergiant", "The Wisdom Effect: Aging Red Supergiant helps you age your brain and gain wisdom.", 9000, "img/for_product-page/jar-of-star.jpg");
  var supernova = makeProduct("SuperNova", "Become a Brilliant light BLAST!", 8000, "img/for_product-page/jar-of-star.jpg");
  var blackHole = makeProduct("Black Hole", "Need Solitude? Black Hole is your friend!", 1, "img/for_product-page/jar-of-star.jpge");
  var neutron = makeProduct("Neutron", "Jimmy?", 500, "img/for_product-page/jar-of-star.jpg");

  var eachProduct = [stellarNebula, averageStar, massiveStar, planetaryNebula, redSupergiant, supernova, blackHole, neutron];

  for (var i = 0; i <= eachProduct.length; i++) {
  	document.getElementById("products").innerHTML = <h3> ${`eachProduct[i].name`} </h3>;
  }