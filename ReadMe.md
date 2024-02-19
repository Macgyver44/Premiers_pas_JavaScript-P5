# Print-It WebSite v.1
Programmer en utilisant les fondamentaux de JavaScript

Afin de pouvoir avoir un carrousel dynamique, vous allez commencer par ajouter les flèches en mode statique. Elles vous permettront de gérer la navigation entre les images du carrousel.

Analysez le code HTML et CSS à la recherche des éléments déjà présents sur le site.
Ajoutez les images des flèches pour pouvoir naviguer dans le carrousel.

Vous avez les flèches présentes dans la bannière ? C’est un bon début ! Rendez vos flèches interactives afin de pouvoir gérer le changement des images de notre carrousel.

Mettre un event listener sur chacune des flèches. Ajouter un console.log ou une alert() pour tester le fonctionnement des event listeners. S’assurer qu’on peut différencier le clic sur le bouton gauche du clic sur le bouton droit.

Maintenant que nous écoutons le clic sur les flèches, passons à un autre élément de l’interface : les bullets points. Ils permettront à l’utilisateur de savoir sur quelle slide il se trouve.

Ajouter les bullet points sur la partie basse du slider. Il nous faut un point par image contenue dans le slider. Une fois les points affichés, différencier le point qui signale la diapositive en cours de visionnage : ce sera la première. Dans le CSS, le point en cours a une classe spécifique.

Vous avez maintenant tous les éléments nécessaires à la navigation dans notre carrousel, félicitations. Il est grand temps d’ajouter nos images !

Au clic sur la flèche droite : on change le bullet point actif au suivant ; on change l’image ; on change le texte correspondant à l’image. Au clic sur la flèche gauche, nous faisons la même chose mais pour les éléments précédents.

À ce stade, les images du carrousel défilent, nous sommes presque arrivés au bout ! Il est temps maintenant de corriger nos derniers bugs, et de faire en sorte que notre carrousel tourne en boucle indéfiniment. Nous allons donc ajouter des conditions.

Si on est à la dernière image et que l’on clique à droite : on affiche la première image ; le point sélectionné est le premier. Si on est à la première image et qu’on clique à gauche : on affiche la dernière image ; le point sélectionné est le dernier. Dans tous les cas, le texte change en accord avec l’image montrée.