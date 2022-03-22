function calculerIMC(poids, taille){

    let tailleEnMettres = taille / 100; 
    let tailleCalculee  = Math.pow(tailleEnMettres, 2);
    let resultat        = poids / tailleCaluculee;
    
    return resultat;

}
let poids  = prompt("Quel est votre poids ? (en kg)");
let taille = prompt("Quelle est votre taille (en cm)");

alert(calculerIMC(poids, taille));
