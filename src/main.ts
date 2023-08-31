console.log(isPalindrome("kayakf"));

// function isPalindrome(maChaine: string): boolean {
//   for (let index = 0; index < maChaine.length; index++) {
//     const elementGauche = maChaine[index];
//     const elementDroite = maChaine[maChaine.length-1-index] ;
//     if (elementGauche != elementDroite) {
//       return false;
//     }
    
//   }  
//   return true;
// }

function isPalindrome(maChaine: string): boolean {
  const lengthMaChaine = maChaine.length;
  let index = 0 ;
  
  while (index < lengthMaChaine-1-index) {
    if (maChaine[index] != maChaine[lengthMaChaine-1-index]) {
      return false
    }
    index++;
  }
  return true 
}