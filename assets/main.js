/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le carousel
 * 
 *********************************************************************************/
var index = 0;
slide();

document.querySelector('.arrow_left').onclick = function () {
    slideindex(-1);
    console.log("fleche left=", slideindex);
};

document.querySelector('.arrow_right').onclick = function () {
    console.log("fleche right=", slideindex);
    slideindex(1);
};
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
    dot.onclick = function () {
        showimg(index);
    };
});

function slideindex(i) {
    index += i;
    console.log("valeur actuelle de l'index :", index);
    showimg(index);
    showtxt(index);
}



function showimg(index) {
    var x = document.getElementsByClassName("banner-slide");
    var y = document.getElementsByClassName("dot");
    var len = x.length;
    if (index >= x.length) {
        index %= len;
    }
    else if (index < 0) {
        index = len - 1;
    }
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.background = "";
    }
    x[index].style.display = "block";
    y[index].style.background = "#fff";
}

function slide() {
    setInterval(function () {
        slideindex(1);
    }, 3000);
}


/*voici une explication technique détaillée du fonctionnement du programme :

1. **Initialisation :** Au démarrage, le programme initialise la variable `index` à zéro, représentant l'index de l'image actuellement affichée.

2. **Fonction Slide :** Une fonction appelée `slide()` est définie pour démarrer le défilement automatique du diaporama. Elle utilise `setInterval()` 
pour appeler la fonction `slideindex(1)` toutes les 3000 millisecondes.

3. **Fonction Slideindex :** La fonction `slideindex(i)` est appelée lorsque l'utilisateur clique sur les flèches gauche ou droite. 
Elle ajuste l'index de l'image en ajoutant ou en soustrayant la valeur de `i`, puis appelle `showimg(index)` pour afficher l'image correspondante. 
Elle affiche également le texte associé en appelant `showtxt(index)`.

4. **Gestion des flèches :** Les clics sur les flèches gauche et droite sont détectés à l'aide de `document.querySelector()` 
pour sélectionner les éléments HTML correspondants, puis des fonctions anonymes sont attachées à ces événements 
pour appeler `slideindex(-1)` et `slideindex(1)` respectivement.

5. **Fonction Showimg :** Cette fonction affiche l'image correspondant à l'index spécifié en ajustant 
les classes CSS pour masquer ou afficher l'image et en mettant à jour l'apparence des indicateurs de position. 
Elle prend en compte les cas où l'index dépasse les limites du nombre d'images disponibles.

6. **Gestion des points :** Les clics sur les points de position sont gérés en bouclant à travers chaque point avec 
`forEach()` et en attachant un gestionnaire d'événements à chacun pour appeler `showimg(index)` avec l'index correspondant.

7. **Fonction Showtxt :** Cette fonction affiche le texte associé à l'image actuellement affichée en sélectionnant l'élément HTML 
approprié et en mettant à jour son contenu.

En résumé, le programme utilise des fonctions JavaScript pour gérer l'interaction utilisateur, 
afficher les images et leur texte associé, et contrôler le défilement automatique du diaporama. */