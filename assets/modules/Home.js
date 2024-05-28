class Home{
    constructor(){
        console.log('HOME');
            this.descriptionHTML = document.querySelector('.js-home-description');
            this.profilHTML = document.querySelector('.js-home-profil-url');
            this.avatarHTML = document.querySelector('.js-home-avatar');
   
            this.init();
    }

    init(){
        this.getUSerInformations();
    }

    getUserInormations(){
        //API façon #1  Récupérer le contenu avec un fetch
        fetch('https://api.github.com/users/nicolasAniort')
            .then(response => response.json())
            .then(data => {                
                this.updateHTML(data);
            })
            .catch((error)=> {
                console.log("ERREUR lors de l'appel API:", error);
            } ); 
    }

    updateHMTL(){
        // Afficher la description de profil Github
        this.descriptionHTML.textContent = this.APIdata.bio;
        // Afficher l'url de mon profil Github
        this.profilHTML.setAttribute("href", APIdata.html_url);
        // Afficher mon avatar
        this.avatarHTML.setAttribute("src", APIdata.avatar_url);
    }
}
export { Home };