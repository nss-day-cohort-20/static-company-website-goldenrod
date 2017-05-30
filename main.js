function makeProduct (name, description, price, image) {
	var product = {};

	product.name = name;
	product.description = description;
	product.price = price;
	product.image = image;

	return product;

}

  var stellarNebula = makeProduct("Stellar Nebula", "Very stellar", 10000, "here's an image");
  var averageStar = makeProduct("Average Star", "Average", 10, "here's an image");
  var massiveStar = makeProduct("Massive Star", "massive", 100, "here's an image");
  var planetaryNebula = makeProduct("Planetary Nebula", "planetary", 5000, "here's an image");
  var redSupergiant = makeProduct("Red Supergiant", "red", 9000, "here's an image");
  var supernova = makeProduct("SuperNova", "super", 8000, "here's an image");
  var blackHole = makeProduct("Black Hole", "dangerous", 1, "here's an image");
  var neutron = makeProduct("Neutron", "jimmy", 500, "here's an image");

  var eachProduct = [stellarNebula, averageStar, massiveStar, planetaryNebula, redSupergiant, supernova, blackHole, neutron];

  for (i=0, i<=7, i++) {
  	
  }



