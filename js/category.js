/*
category.js - Script para la página de categoría
*/

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
	// Obtener la URL actual
	const currentUrl = new URL(window.location.href);
	
	// Obtener el parámetro 'name' de la URL que representa la categoría
	const category = currentUrl.searchParams.get('name');
	
	// Obtener referencias a elementos HTML relevantes
	const dynamicText = document.getElementById("dynamic-text");
	const welcomeMessage = `Encuentra todo lo que necesites para tu ${category}`;
	const categoryHead = document.getElementById('category-header');
	
	// Configurar el título de la página y el encabezado de la categoría
	document.title = `Muebles Zúñiga | Categoría ${category}`;
	categoryHead.innerText = `Bienvenido al área ${category}`;
	categoryHead.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
	
	// Limpiar el contenido dinámico y aplicar sombras al texto
	dynamicText.innerHTML = "";
	dynamicText.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
	
	// Animar el texto de bienvenida
	animateText(welcomeMessage, dynamicText);
  
	// Obtener referencia a la imagen
	const image = document.getElementById("categoria-imagen");
  
	// Definir el directorio y el nombre base de las imágenes
	const imageDirectory = "../../img/";
	const baseImageName = "principal.jpg";
  
	// Cambiar el nombre de la imagen según la categoría
	let imageName = baseImageName; // Imagen predeterminada
  
	if (category === "Cocina") {
	  imageName = "principal-cocina-2.png";
	} else if (category === "Jardin") {
	  imageName = "principal-jardin-2.jpg";
	} else if (category === "Cochera") {
	  imageName = "principal-cochera.jpg";
	} else if (category === "Dormitorios") {
	  imageName = "principal-dormitorio.jpg";
	}
  
	// Construir la ruta completa de la imagen
	const imagePath = imageDirectory + imageName;
  
	// Cambiar la fuente de la imagen
	image.src = imagePath;
  });
  