// Fonctionnalité 1 : lorsque tu vas cliquer sur le footer, le mot "clique" s'affiche en console ! //

document.querySelector('footer').addEventListener("click", showConsole);

function showConsole() {
    console.log("clique");
}

// Fonctionnalité 1-bis : lorsque tu vas cliquer sur le footer, il va s'afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic ! //

document.querySelector('footer').addEventListener("click", countClique);

var inc=0;
 function countClique() {
    inc+=1;
    console.log("clique numero " + inc);    
 }

// Fonctionnalité 2 : Si quelqu'un clique sur l'hamburger menu, l'élément HTML portant l'Id navbarHeader perde sa classe collapse, si on clique à nouveau dessus, la classe collapse est rajoutée à nouveau à l'élément portant l'Id navbarHeader //

(function(){
	let header = document.querySelector('header');
	let btn_menu = header.querySelector('.navbar-toggler');
    let div = document.querySelector('div[class*="collapse"]');
    function showMenu(){
        div.classList.toggle("collapse");
    };
	btn_menu.addEventListener('click', showMenu);
})();

// Fonctionnalité 3 : Si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible //

(function(){
	let edit = document.querySelectorAll('.btn.btn-sm.btn-outline-secondary')[0];
    let card_text = document.querySelectorAll('.card-text')[0];
    function swapColor(){
		card_text.style.color = "red";
	};
    edit.addEventListener('click', swapColor);
})();

// Fonctionnalité 4 : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! //

(function(){
    let edit = document.querySelectorAll('.btn-outline-secondary')[1];

    function colorSwap(){
        let card_text = document.querySelectorAll('.card-text')[1];
        if (card_text.style.color === 'green'){ 
            card_text.style.color = '' ;
        } else {
            card_text.style.color = 'green';}
    };
    
    edit.addEventListener('click', colorSwap);

})();

// Fonctionnalité 5 : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS //
(function(){
	let edit = document.querySelector('.navbar');
	let link_tag = document.querySelector("link[rel='stylesheet']");
    
    function disableLink(){
		if(link_tag.disabled == true){
			link_tag.disabled = false;
		}
		else{
			link_tag.disabled = true;
		}
    }
    edit.addEventListener('dblclick', disableLink );
})();