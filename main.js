function makeProduct (name, description, price, image) {
	var product = {};

	product.name = name;
	product.description = description;
	product.price = price;
	product.image = image;

	return product;

}


  var stellarNebula = makeProduct("Stellar Nebula", "You will truly be a wondrous thing to behold!", 10000, "img/for_product-page/jar-of-star.jpg");
  var averageStar = makeProduct("Average Star", "Day-to-Day Star Needs", 10, "img/for_product-page/jar-of-star.jpg");
  var massiveStar = makeProduct("Massive Star", "Same as an Average Star- the Massive Star is your day-to-day star needs with extra bulk!", 100, "img/for_product-page/jar-of-star.jpg");
  var planetaryNebula = makeProduct("Planetary Nebula", "Expand your wisdom from Red Supergiant with Planetary-Nebula! Be the Einstein in your Galaxy!", 5000, "img/for_product-page/jar-of-star.jpg");
  var redSupergiant = makeProduct("Red Supergiant", "The Wisdom Effect: Aging Red Supergiant helps you age your brain and gain wisdom!", 9000, "img/for_product-page/jar-of-star.jpg");
  var supernova = makeProduct("SuperNova", "Become a brilliant light BLAST!!", 8000, "img/for_product-page/jar-of-star.jpg");
  var blackHole = makeProduct("Black Hole", "Need Solitude? Black Hole is your friend! FINAL SALE", 1, "img/for_product-page/jar-of-star.jpg");

  var neutron = makeProduct("Neutron", "Jimmy?", 500, "img/for_product-page/jar-of-star.jpg");

  var eachProduct = [stellarNebula, averageStar, massiveStar, planetaryNebula, redSupergiant, supernova, blackHole, neutron];


  for (var i=0; i<=eachProduct.length; i++) {
  	if (i <=3) {
  	document.getElementById("row_left").innerHTML += 
	  	`<div class="eachProduct">
	  		<div class="picture">
	  			<img src="${eachProduct[i].image}" width="180px" height="220px" alt="stellar nebula">
	  		</div>
	  		<div class="info">
		  		<h3>${eachProduct[i].name}</h3>
		  		<p>${eachProduct[i].description}</p>
		  		<button>$${eachProduct[i].price}.00</button>
		  	</div>
		  </div>`;
	} else {
		 document.getElementById("row_right").innerHTML += 
	  	`<div class="eachProduct">
	  		<div class="picture">
	  			<img src="${eachProduct[i].image}" width="180px" height="220px" alt="stellar nebula">
	  		</div>
	  		<div class="info">
		  		<h3>${eachProduct[i].name}</h3>
		  		<p>${eachProduct[i].description}</p>
		  		<button>$${eachProduct[i].price}.00</button>
		  	</div>
		  </div>`;

	  }
  }
















