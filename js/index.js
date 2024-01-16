// Función para animar el texto dinámico en la carga de la página
document.addEventListener("DOMContentLoaded", () => {
	var dynamicText = document.getElementById("dynamic-text");
	var welcomeMessage = "Encuentra los muebles perfectos para tu hogar, tu jardín y tu oficina";
	dynamicText.innerHTML = "";
	animateText(welcomeMessage, dynamicText);

	var goToTopButton = document.getElementById("goToTop");

	window.addEventListener("scroll", function () {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			goToTopButton.style.display = "block";
		} else {
			goToTopButton.style.display = "none";
		}
	});

	goToTopButton.addEventListener("click", function (event) {
		event.preventDefault();

		document.documentElement.style.scrollBehavior = "smooth";
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});

		setTimeout(function () {
			document.documentElement.style.scrollBehavior = "auto";
		}, 1000);
	});
});


// Obtener todos los enlaces del navbar y agregar evento de clic
var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
navbarLinks.forEach(link => {
	link.addEventListener('click', function () {
		navbarLinks.forEach(link => {
			link.parentNode.classList.remove('is-active');
		});

		this.parentNode.classList.add('is-active');
	});
});


// Función para verificar qué sección es visible durante el desplazamiento
const checkVisibleSection = () => {
	var sections = document.querySelectorAll('.section');
	var scrollPosition = window.scrollY;

	sections.forEach(section => {
		var sectionTop = section.offsetTop - window.innerHeight * 0.5;
		var sectionBottom = sectionTop + section.clientHeight;

		if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
			navbarLinks.forEach(link => {
				link.parentNode.classList.remove('is-active');
			});

			var link;
			if (section.id === 'category') {
				link = document.querySelector('.navbar-nav .nav-link[href="#category"]');
			} else {
				link = document.querySelector('.navbar-nav .nav-link[href="#' + section.id + '"]');
			}

			if (link) {
				link.parentNode.classList.add('is-active');
			}
		}
	});
}


// Agregar evento de scroll para llamar a la función checkVisibleSection
window.addEventListener('scroll', checkVisibleSection);
checkVisibleSection();


// Función para validar el formulario y agregar estilos
const validateForm = () => {
	var nameInput = document.getElementById('name');
	var emailInput = document.getElementById('email');
	var subjectInput = document.getElementById('subject');
	var messageInput = document.getElementById('message');

	var name = nameInput.value;
	var email = emailInput.value;
	var subject = subjectInput.value;
	var message = messageInput.value;

	resetStyles();

	if (name !== '') {
		setValidStyle(nameInput);
	} else {
		setInvalidStyle(nameInput);
		shakeInput();
	}

	if (email !== '') {
		if (isValidEmail(email)) {
			setValidStyle(emailInput);
		} else {
			setInvalidStyle(emailInput);
			shakeInput();
		}
	} else {
		setInvalidStyle(emailInput);
		shakeInput();
	}

	if (subject !== '') {
		setValidStyle(subjectInput);
	} else {
		setInvalidStyle(subjectInput);
		shakeInput();
	}

	if (message !== '') {
		setValidStyle(messageInput);
	} else {
		setInvalidStyle(messageInput);
		shakeInput();
	}

	if (name === '' || email === '' || subject === '' || message === '') {
		document.getElementById('status').style.display = 'block';
	} else {
		document.getElementById('status').style.display = 'none';
		alertify.notify(`Hola ${name} tu correo fue enviado. <br /><br />Recibirás una respuesta pronto a tu correo: ${email}.`, 'success', 5);
	
		
		// document.getElementById('contact-form').submit();
	}
};


// Función para resetear los estilos de los campos del formulario
const resetStyles = () => {
	var inputs = document.querySelectorAll('#name, #email, #subject, #message');
	inputs.forEach(input => {
		resetStyle(input);
	});
};


// Función para verificar si una dirección de correo electrónico es válida
const isValidEmail = email => {
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};


// Función para agregar la clase 'shake' a los campos del formulario vacíos
const shakeInput = () => {
	var formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');

	formInputs.forEach(input => {
		if (input.value.trim() === '') {
			input.classList.add('shake');
			input.addEventListener('animationend', () => {
				input.classList.remove('shake');
			});
		}
	});
};


// Función para establecer estilos válidos
const setValidStyle = input => {
	input.style.borderColor = 'green';
	input.insertAdjacentHTML('afterend', '<span class="ok">&#10004;</span>');
};


// Función para establecer estilos inválidos
const setInvalidStyle = input => {
	input.style.borderColor = 'red';
};


// Función para resetear los estilos
const resetStyle = input => {
	input.style.borderColor = '';
	var okSpan = input.nextElementSibling;
	if (okSpan && okSpan.classList.contains('ok')) {
		okSpan.remove();
	}
};