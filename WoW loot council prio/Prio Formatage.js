function exportp1(){
    let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('prios P1');
    let sb = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('test');
    let y = 0
    for (let k = 7; k <= 332; k = k + 1){
      let x = 1
      if (ss.getRange(k, 1).isBlank() || ss.getRange(k, 1).getBackgrounds() != "#ffffff" || ss.getRange(k, 2).isBlank()){
      }else{
        y = y + 1
        for (i = 1; i <= 12; i = i + 1){
          if(ss.getRange(k, i).isBlank()){
            break;
          }
          if( ss.getRange(k,i).getBackgrounds() == "#ffffff"){
            let value = ss.getRange(k, i).getValue();
            sb.getRange(y,x).setValue(value)
            x = x + 1
            }
        }
        if (sb.getRange(y, 2).isBlank()){
            sb.deleteRows(y);
            y = y - 1
        }
      }
    }
  }
  
  
  function exportp2(){
  
  // NOMBRE DE LIGNES
    let n = 55
  
  
  // Sheet 
    let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('prios P2');
    let sb = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('P2 export');
  
  // Nom variable colonnes
    sb.getRange(1,1).setValue("Item")
    sb.getRange(1,2).setValue("ItemId")
    sb.getRange(1,3).setValue("Name")
    sb.getRange(1,4).setValue("Prio")
    sb.getRange(1,5).setValue("Class")
    sb.getRange(1,6).setValue("Boss")
  // Classe
    let mage = {
      name: "mage",
      truc: ["Coyf", "Joelacrapule", "Patrikrachid"]
    }
    let warrior = {
      name: "warrior",
      truc: ["Northan", "Hansaplasst", "Myryne"]
    }
    let paladin = {
      name: "paladin",
      truc: ["Jeanmoulin", "Brindillou", "Rouxcamadour", "Tylion", "Bagui"]
    }
    let demoniste = {
      name: "demoniste",
      truc: ["Vandelune", "Kessel", "Shadocc", "Eigyrielle"]
    }
    let voleur = {
      name: "voleur",
      truc: ["Kimboslice", "Klaytos", "Sahana"]
    }
    let pretre = {
      name: "pretre",
      truc: ["Chrysès", "Metelia", "Lepirepriest", "Ocah", "Penthélia"]
    }
    let chamane = {
      name: "chamane",
      truc: ["Pelipa", "Thirdya", "cheat'os"]
    }
    let dk = {
      name: "dk",
      truc: ["Sugardaddy", "Dkape"]
    }
    let druide = {
      name: "druide",
      truc: ["Babylonica", "Choumarine", "Petronille"]
    }
    let hunt = {
      name: "hunt",
      truc: ["Zounetti", "Miketamine"]
    }
    let classe = [mage, warrior, paladin, demoniste, voleur, pretre, chamane, dk, druide, hunt]
  
  // Boss
    let boss = {
      name: [],
      row: []
    }
    let i = 0
    for (let y = 1; y <= 300; y++){
      if( ss.getRange(y,1).getBackgrounds() == "#d9d9d9"){
        boss.name[i] = ss.getRange(y, 1).getValue();
        boss.row[i] = y
        i ++
      }
    }
  
    let y = 2
    for (let k = 1; k <= n; k ++){
      let prio = 1
      let x = 3
      if (ss.getRange(k, 1).isBlank() || ss.getRange(k, 1).getBackgrounds() != "#ffffff" || ss.getRange(k, 3).isBlank()){
      }else{
        
        for (i = 3; i <= 12; i ++){
          if(ss.getRange(k, i).isBlank()){
            break;
          }
          if( ss.getRange(k,i).getBackgrounds() == "#ffffff"){
            let value1 = ss.getRange(k, 1).getValue();
            let value2 = ss.getRange(k, 2).getValue();
            let value = ss.getRange(k, i).getValue();
            let prioname = value.concat(prio)
            sb.getRange(y,1).setValue(value1)
            sb.getRange(y,2).setValue(value2)
            sb.getRange(y,x).setValue(prioname)
            sb.getRange(y,4).setValue(prio)
            sb.getRange(y,6).setValue(boss.name[bosstest(boss.row,k)])
  
            for (g = 0; g < classe.length; g ++){
              for (h = 0; h < classe[g].truc.length; h ++){
                if (sb.getRange(y, 3).getValue() == classe[g].truc[h]){
                  sb.getRange(y, 5).setValue(classe[g].name);
                  break; // Sortir de la boucle g
                }
              }
            }
            prio ++
            y ++
            }
        }
      }
    }
  }
  
  
  function bosstest(liste,k){
    let fi = (element) => element < k;
    f = liste.findLastIndex(fi);
    return f;
  }
  
  function exportp2_2(){
  
  // NOMBRE DE LIGNES
    let n = 333
  
  
  // Sheet 
    let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('prios P2');
    let sb = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('P2 export');
  
  // Nom variable colonnes
    sb.getRange(1,1).setValue("Item")
    sb.getRange(1,2).setValue("ItemId")
    sb.getRange(1,3).setValue("Name")
    //sb.getRange(1,4).setValue("Prio")
    //sb.getRange(1,5).setValue("Class")
    sb.getRange(1,4).setValue("Boss")
  // Classe
    let mage = {
      name: "mage",
      truc: ["Coyf", "Joelacrapule", "Patrikrachid"]
    }
    let warrior = {
      name: "warrior",
      truc: ["Northan", "Hansaplasst", "Myryne"]
    }
    let paladin = {
      name: "paladin",
      truc: ["Jeanmoulin", "Brindillou", "Rouxcamadour", "Tylion", "Bagui"]
    }
    let demoniste = {
      name: "demoniste",
      truc: ["Vandelune", "Kessel", "Shadocc", "Eigyrielle"]
    }
    let voleur = {
      name: "voleur",
      truc: ["Kimboslice", "Klaytos", "Sahana"]
    }
    let pretre = {
      name: "pretre",
      truc: ["Chrysès", "Metelia", "Lepirepriest", "Ocah", "Penthélia"]
    }
    let chamane = {
      name: "chamane",
      truc: ["Pelipa", "Thirdya", "cheat'os"]
    }
    let dk = {
      name: "dk",
      truc: ["Sugardaddy", "Dkape"]
    }
    let druide = {
      name: "druide",
      truc: ["Babylonica", "Choumarine", "Petronille"]
    }
    let hunt = {
      name: "hunt",
      truc: ["Zounetti", "Miketamine"]
    }
    let classe = [mage, warrior, paladin, demoniste, voleur, pretre, chamane, dk, druide, hunt]
  
  // Boss
    let boss = {
      name: [],
      row: []
    }
    let i = 0
    for (let y = 1; y <= n; y++){
      if( ss.getRange(y,1).getBackgrounds() == "#d9d9d9"){
        boss.name[i] = ss.getRange(y, 1).getValue();
        boss.row[i] = y
        i ++
      }
    }
  
    let y = 2
    for (let k = 1; k <= n; k ++){
      let prio = 1
      let x = 3
      if (ss.getRange(k, 1).isBlank() || ss.getRange(k, 1).getBackgrounds() != "#ffffff" || ss.getRange(k, 3).isBlank()){
      }else{
        
        for (i = 3; i <= 12; i ++){
          if(ss.getRange(k, i).isBlank()){
            break;
          }
          if( ss.getRange(k,i).getBackgrounds() == "#ffffff"){
            let value1 = ss.getRange(k, 1).getValue();
            let value2 = ss.getRange(k, 2).getValue();
            let value = ss.getRange(k, i).getValue();
            let prioname = `${prio}.${value}`
            sb.getRange(y,1).setValue(value1)
            sb.getRange(y,2).setValue(value2)
            sb.getRange(y,x).setValue(prioname)
            //sb.getRange(y,4).setValue(prio)
            sb.getRange(y,4).setValue(boss.name[bosstest(boss.row,k)])
  
            for (g = 0; g < classe.length; g ++){
              for (h = 0; h < classe[g].truc.length; h ++){
                if (sb.getRange(y, 3).getValue() == classe[g].truc[h]){
                  //sb.getRange(y, 5).setValue(classe[g].name);
                  break; // Sortir de la boucle g
                }
              }
            }
            prio ++
            y ++
            }
        }
      }
    }
  }
  
  