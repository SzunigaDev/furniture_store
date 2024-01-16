/*
core.js - Script principal para funcionalidades generales
*/

// Función para animar texto letra por letra
const animateText = (text, element) => {
	var index = 0;
  
	const addLetter = () => {
	  if (index < text.length) {
		element.innerHTML += text.charAt(index);
		index++;
		setTimeout(addLetter, 75);
	  }
	}
  
	addLetter();
  }
  
  // Cambiar estilos del navbar al hacer scroll
  window.onscroll = () => {
	var navbar = document.getElementById("navbar");
  
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	  navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
	  changeTextColor("white");
	} else {
	  navbar.style.backgroundColor = "transparent";
	  changeTextColor("black");
	}
  };
  
  // Cambiar color del texto del navbar
  const changeTextColor = (color) => {
	var links = document.getElementsByClassName("nav-link");
	var brand = document.getElementById("brand");
  
	for (var i = 0; i < links.length; i++) {
	  links[i].style.color = color;
	}
  
	brand.style.color = color;
  }
  
  // Navegación a la página de categoría al hacer clic en enlaces de categoría
  var categoryLinks = document.querySelectorAll('.category-link');
  
  categoryLinks.forEach(function (link) {
	link.addEventListener('click', function () {
	  var categoryName = this.getAttribute('data-name');
	  window.location.href = '/templates/category/category.html?name=' + categoryName;
	});
  });
  