function myFunction() {
    let si = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Initial');
    let sr = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Randomize');
  
    sr.clear();
  
    let a = 10  // Nombre de lignes
    let b = 10 // Nombre de colonnes
  
    nb = a * b  // variable désignant le nombre de possibilité
  
    
    var listes;
    listes = tirerListeNombres(nb);  // variable contenant toutes les listes
  
  
  
  let k = 0; // Variable pour naviguer dans la variable listes
  
  for (let xr = 1; xr <= b; xr++) { // Colonnes
    for (let yr = 1; yr <= a; yr++) { // Lignes
      let li = listes[k]; // Prend la liste k
      let celluleSource = si.getRange(li[0], li[1]);
      let celluleDestination = sr.getRange(yr, xr);
  
      celluleSource.copyTo(celluleDestination, {contentsOnly: false});
      //celluleDestination.setFontColor(celluleSource.getFontColor());
  
      k++;
    }
  }
  
  
  
  }
  
  
  function tirerListeNombres(xc) {
    var listeNombres = [];
    
    for (var i = 0; i < xc; i++) {
      var nombre1 = Math.floor(Math.random() * 7) + 1; // Génère le premier nombre aléatoire entre 1 et 10
      var nombre2 = Math.floor(Math.random() * 10) + 2; // Génère le deuxième nombre aléatoire entre 1 et 10
      
      var listeNombresCourante = [nombre1, nombre2];
      
      if (!existeDansListe(listeNombres, listeNombresCourante)) {
        listeNombres.push(listeNombresCourante);
      } else {
        i--; // Réduit la valeur de i pour générer une nouvelle liste unique
      }
    }
    
    return listeNombres; // Retourne la liste de nombres
  }
  
  function existeDansListe(liste, element) {
    for (var i = 0; i < liste.length; i++) {
      var listeExistante = liste[i];
      
      if (listeExistante[0] === element[0] && listeExistante[1] === element[1]) {
        return true;
      }
    }
  
  
  
    
    return false;
  }
  
  
  
  
  function datachat() {
    let si = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Initial');
    let sd = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('data');
  
    sd.clear();
  
    let a = 10  // Nombre de lignes
    let b = 10 // Nombre de colonnes
  
   let = yd = 1
  
  for (let xr = 2; xr <= b+1; xr++) { // Colonnes
    for (let yr = 1; yr <= a; yr++) { // Lignes
      
      let celluleSource = si.getRange(yr, xr).getValue();
      sd.getRange(yd, 1).setValue(celluleSource);
  
      yd++;
    }
  }
    
  }