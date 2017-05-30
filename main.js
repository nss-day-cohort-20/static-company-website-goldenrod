function makeProduct (name, description, price, image) {
	var product = {};

	product.name = name;
	product.description = description;
	product.price = price;
	product.image = image;

	return product;

}

  var stellarNebula = makeProduct("Stellar Nebula", "Very stellar", 10000, "img/for_product-page/jar-of-star.jpg");
  var averageStar = makeProduct("Average Star", "Average", 10, "img/for_product-page/jar-of-star.jpg");
  var massiveStar = makeProduct("Massive Star", "massive", 100, "img/for_product-page/jar-of-star.jpg");
  var planetaryNebula = makeProduct("Planetary Nebula", "planetary", 5000, "img/for_product-page/jar-of-star.jpg");
  var redSupergiant = makeProduct("Red Supergiant", "red", 9000, "img/for_product-page/jar-of-star.jpg");
  var supernova = makeProduct("SuperNova", "super", 8000, "img/for_product-page/jar-of-star.jpg");
  var blackHole = makeProduct("Black Hole", "dangerous", 1, "img/for_product-page/jar-of-star.jpg");
  var neutron = makeProduct("Neutron", "jimmy", 500, "img/for_product-page/jar-of-star.jpg");

  var eachProduct = [stellarNebula, averageStar, massiveStar, planetaryNebula, redSupergiant, supernova, blackHole, neutron];

  for (var i=0; i<=eachProduct.length; i++) {
  	if (i <=3) {
  	document.getElementById("row_left").innerHTML += 
	  	`<div class="eachProduct">
	  		<div class="picture">
	  			<img src="${eachProduct[i].image}" width="200px" height="200px" alt="stellar nebula">
	  		</div>
	  		<div class="info">
		  		<h3>${eachProduct[i].name}</h3>
		  		<p>${eachProduct[i].description}</p>
		  		<button>Buy</button>
		  	</div>
		  </div>`;
	} else {
		 document.getElementById("row_right").innerHTML += 
	  	`<div class="eachProduct">
	  		<div class="picture">
	  			<img src="${eachProduct[i].image}" width="200px" height="200px" alt="stellar nebula">
	  		</div>
	  		<div class="info">
		  		<h3>${eachProduct[i].name}</h3>
		  		<p>${eachProduct[i].description}</p>
		  		<button>Buy</button>
		  	</div>
		  </div>`;

	}
  }















