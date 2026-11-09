const config = {
  ateliers: [
    { id: 1, titre: "Créer une affiche avec Figma", places: 8 },
    { id: 2, titre: "Découvrir les raccourcis VS Code", places: 0 },
    { id: 3, titre: "Construire un quiz en JavaScript", places: 5 },
    { id: 4, titre: "Créer une page responsive avec Tailwind CSS", places: 12 },
    { id: 6, titre: "Animer une interface avec CSS", places: 0 },
  ],
  modes: {
    presentiel: "En présentiel",
    distance: "À distance",
  },
  campus: ["Youssoufia", "Asfi", "Nador"],
};

const selectedConfig = {
  atelierId: null,
  mode: "",
  campus: "",
  email: "",
};

const listeatelier=document.querySelector("#liste-ateliers")
const choixgrille=document.querySelector("#liste-modes")
const listecompus=document.querySelector("#liste-campus")
 

function  afficheatelier(){

  const  cartechoix=document.createElement("label")
  cartechoix.className="carte-choix"
  
  const  atelier=document.createElement("input")
  atelier.type="radio"
  atelier.name="atelier"
  atelier.value=""
  atelier.required=true
  

cartechoix.append(atelier)

  listeatelier.append(cartechoix)


  






  }
afficheatelier()




function  affichemodes(){


  const  cartechoix2=document.createElement("label")
  cartechoix2.className="carte-choix"
  const  mode=document.createElement("input")
  mode.type="radio"
  mode.name="mode"
  mode.value=""
  mode.required=true


  cartechoix2.append(mode)
  choixgrille.append(cartechoix2)

}
affichemodes()



function  affichecampus(){

 const  cartechoix3=document.createElement("label")
  cartechoix3.className="carte-choix"
  const  compus=document.createElement("input")
  compus.type="radio"
  compus.name="campus"
  compus.value=""
  compus.required=true


cartechoix3.append(compus)
  listecompus.append(cartechoix3)


}





function afficheresume(){
  afficheatelier()
  
  affichemodes()
affichecampus()


}
afficheresume()

