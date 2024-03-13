let index = 0;// Déclaration de la variable index qui représente l'index de l'image actuellement affichée
startup(); // Appel de la fonction startup() lors du chargement de la page pour démarrer le défilement automatique du diaporama
// Ajout du code pour gérer les clics sur les flèches
document.querySelector('.arrow_left').onclick = function () {
	slideindex(-1);
	console.log("fleche left=", slideindex);
};

document.querySelector('.arrow_right').onclick = function () {
	slideindex(1);
	console.log("fleche right=", slideindex);
};
// Ajout du code pour gérer les clics sur les points
const dots = document.querySelectorAll('.dot');
console.log("Valeur de la variable DOTS =", dots);

dots.forEach((dot, index) => {//Pour chacun d'eux, je vais les appeler "dot" et "index".

	dot.onclick = function () {
		showimg(index); //appel la fonction showimg a l'index actuel.
	};

});
/**
 * afficher la prochaine vignette en fonction du pas defini en parametre.
 * @param {*} step valeur du pas de decalage changer de vignette. cette valeur peut etre positive ou negative. 
 */
function slideindex(step) {
	index += step;// Incrémente ou décrémente l'index en fonction de la valeur de step
	console.log("valeur actuelle de STEP :", step)
	console.log("valeur actuelle de l'index :", index);
	if (index > 3) { index = 0; }
	else if (index < 0) { index = 3; }
	console.log("index apres délimitation", index)
	showimg(index);// Appelle la fonction showimg() pour afficher l'image correspondant au nouvel index
	showtxt(index);// appelle de la fonction showtxt pour afficher le texte des images.
}
function showtxt(index) {

	let bannerImages = document.getElementsByClassName("banner-slide");

	console.log("valeur actuelle de bannerimages :", bannerImages);

	let textOverlay = bannerImages[index].getElementsByClassName("text-overlay")[0];
	// Cette ligne sélectionne le premier élément avec la classe "text-overlay" à l'intérieur de l'élément bannerImages[index] 
	//(basé sur la valeur de l'index fournie) et stocke cette référence dans la variable textOverlay.

	console.log("valeur actuelle de texteoverlay :", textOverlay);

	textOverlay.innerHTML = txt[index].tagLine;


}
function showimg(index) {
	let x = document.getElementsByClassName("banner-slide");
	let y = document.getElementsByClassName("dot");
	console.log("valeur actuelle de X et Y :", x, y);


	for (let i = 0; i < x.length; i++) {
		x[i].style.display = "none";
		y[i].style.background = "";
		console.log("valeur actuelle de I :", i)
	}

	x[index].style.display = "block"; // Affiche l'image correspondant à l'index "index"
	y[index].style.background = "#fff"; // Met en surbrillance l'indicateur de position correspondant
}


function startup() {// Fonction pour démarrer le défilement automatique du diaporama
	slideindex(0)

	setInterval(function () {
		slideindex(1);
	}, 10000);// Appelle la fonction slideindex(1) toutes les 3000 millisecondes (3 secondes) pour faire défiler le diaporama automatiquement
}
