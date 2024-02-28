var index = 0;// Déclaration de la variable index qui représente l'index de l'image actuellement affichée
startup(); // Appel de la fonction startup() lors du chargement de la page pour démarrer le défilement automatique du diaporama


// Ajout du code pour gérer les clics sur les flèches
document.querySelector('.arrow_left').onclick = function () {
	slideindex(-1);
	console.log("fleche left=", slideindex);
};

document.querySelector('.arrow_right').onclick = function () {
	console.log("fleche right=", slideindex);
	slideindex(1);
};
// Ajout du code pour gérer les clics sur les points
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
	dot.onclick = function () {
		showimg(index);
	};
});
/**
 * afficher la prochaine vignette en fonction du pas defini en parametre.
 * @param {*} step valeur du pas de decalage changer de vignette. cette valeur peut etre positive ou negative. 
 */
function slideindex(step) {
	index += step;// Incrémente ou décrémente l'index en fonction de la valeur de step
	console.log("valeur actuelle de l'index :", index); // Afficher la valeur de l'index
	showimg(index);// Appelle la fonction showimg() pour afficher l'image correspondant au nouvel index
	showtxt(index);// appelle de la fonction showtxt pour afficher le texte des images.
}
function showtxt(index) {
	console.log("position dans showtxt:", index); // Afficher la valeur de l'index
	let bannerImages = document.getElementsByClassName("banner-slide");
	let textOverlay = bannerImages[index].getElementsByClassName("text-overlay")[0];
	textOverlay.innerHTML = txt[index].tagLine;
}
function showimg(index) {// Fonction pour afficher une image spécifique du diaporama en fonction de son index
	var x = document.getElementsByClassName("banner-slide");// Sélectionne toutes les images du diaporama par leur classe "banner-slide" et les stocke dans la variable x
	var y = document.getElementsByClassName("dot");// Sélectionne tous les indicateurs de position par leur classe "dot" et les stocke dans la variable y
	var len = x.length;// Stocke la longueur de la collection d'images dans la variable len
	if (index >= x.length) {// Si l'index est supérieur ou égal au nombre total d'images, ajuste l'index pour rester dans les limites
		index %= len; // Modulo pour revenir au début du diaporama si nécessaire
	}
	else if (index < 0) {
		index = len - 1;// Si l'index est négatif, ajuste l'index pour afficher la dernière image du diaporama
	}
	for (var i = 0; i < x.length; i++) {// Masque toutes les images du diaporama et réinitialise l'apparence des indicateurs de position
		x[i].style.display = "none"; // Masque l'image
		y[i].style.background = ""; // Réinitialise l'arrière-plan de l'indicateur de position
	}
	// Affiche l'image correspondant à l'index "index"
	x[index].style.display = "block"; // Affiche l'image
	y[index].style.background = "#fff"; // Met en surbrillance l'indicateur de position correspondant
}


function startup() {// Fonction pour démarrer le défilement automatique du diaporama
	slideindex(0)
	setInterval(function () {
		slideindex(1);
	}, 3000);// Appelle la fonction slideindex(1) toutes les 3000 millisecondes (3 secondes) pour faire défiler le diaporama automatiquement
}
