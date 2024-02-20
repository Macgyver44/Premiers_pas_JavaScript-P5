// Déclaration de la variable index qui représente l'index de l'image actuellement affichée
var index = 0;

// Appel de la fonction showimg() lors du chargement de la page pour afficher la première image
showimg(index);

// Fonction pour changer l'index de l'image et afficher la nouvelle image
function slideindex(i) {
	// Incrémente ou décrémente l'index en fonction de la valeur de i
	index += i;

	// Appelle la fonction showimg() pour afficher l'image correspondant au nouvel index
	showimg(index);
}

// Fonction pour afficher une image spécifique du diaporama en fonction de son index
function showimg(n) {

	// Sélectionne toutes les images du diaporama par leur classe "banner-img" et les stocke dans la variable x
	var x = document.getElementsByClassName("banner-img");
	// Sélectionne tous les indicateurs de position par leur classe "dot" et les stocke dans la variable y
	var y = document.getElementsByClassName("dot");
	// Stocke la longueur de la collection d'images dans la variable len
	var len = x.length;

	// Si l'index est supérieur ou égal au nombre total d'images, ajuste l'index pour rester dans les limites
	if (n >= x.length) {
		n %= len; // Modulo pour revenir au début du diaporama si nécessaire
	}
	// Si l'index est négatif, ajuste l'index pour afficher la dernière image du diaporama
	else if (n < 0) {
		n = len - 1;
	}

	// Masque toutes les images du diaporama et réinitialise l'apparence des indicateurs de position
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none"; // Masque l'image

		y[i].style.background = ""; // Réinitialise l'arrière-plan de l'indicateur de position
	}

	// Affiche l'image correspondant à l'index n
	x[n].style.display = "block"; // Affiche l'image
	y[n].style.background = "#fff"; // Met en surbrillance l'indicateur de position correspondant

	// Met à jour la variable index avec le nouvel index
	index = n;
}

// Fonction pour démarrer le défilement automatique du diaporama
function slide() {
	// Appelle la fonction slideindex(1) toutes les 3000 millisecondes (3 secondes) pour faire défiler le diaporama automatiquement
	setInterval(function () {
		slideindex(1);
	}, 3000);
}
