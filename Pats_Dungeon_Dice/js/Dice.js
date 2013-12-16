/*
D&D Dice Generator Script by Patrick Deno

Programming Fund with JavaScript Spring 2013
Brian Hogan - Instructor
Patrick Deno - May 3rd, 2013
    
isNaN info from
https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/isNaN

Math.random info from:
http://www.w3schools.com/jsref/jsref_random.asp

refresh button info from:
http://www.mediacollege.com/internet/javascript/page/reload.html
*/

// Inputs

  // Variable declarations
  var diceRoll;
  var diceTimes;
  var diceType;
  var rollTotal;

  // Variable Assignment
  diceTimes = prompt("Please tell me how many dice you would like to roll " +
                     "this round.", "2");
  diceType = prompt("Please tell me the type of dice to roll. " + 
                    "(How many sides?)", "20");

                     
  // Variable type corrections
  diceType = Number(diceType);
  diceTimes = Number(diceTimes);
  rollTotal = 0; // reset the roll total each round.
  
// Processes

  // Dice generator with downward rounding error correction and total
  function rollTheBones(){
    
    // Loop engine
    for (var roll = 1; roll <= diceTimes; roll++){
      diceRoll = Math.floor((Math.random() * diceType) + 1);
      rollTotal += diceRoll;
      document.write("Roll #" + roll + ") = <SPAN class=\"blue\">" + diceRoll +
                     "</SPAN>\n");
    }    
    
  }
  
  // Decision engine
  
  // No one or less sided die, or less than one roll
  if ((diceType < 2) || (diceTimes < 1)){ 
  
    document.write("<H3>I'm sorry, I need\nbetter parameters " +
                   "to work with.\n\nPlease pick a die\nwith at least two " +
                   "sides\n" +
                   "and direct me to roll\nit at least once.</H3>\n" + 
                   "<input type=\"button\" value=\"Please Try Again\" " +
                   "onClick=\"document.location.reload(true)\">"); 
  
  // No inputs like "Carrot"
  } else if ((isNaN(diceType)) || (isNaN(diceTimes))){
    
    document.write("<H3>I'm sorry, I didn't understand\none or both of your " +
                   "criteria.</H3>" + "\n" + 
                   "<input type=\"button\" value=\"Please Try Again\" " +
                   "onClick=\"document.location.reload(true)\">"); 
                
  // Everything cool? Then, roll them bones!                 
  } else {
    
    document.write("<H1>The bones have spoken!\nHere are the results.</H1>");
    document.write("<H2>Roll algorithm: <SPAN class=\"red\">" + diceTimes +
                   "d" + diceType + "</SPAN></H2>");
    
    document.write("<H3 id=\"bones\">");
    rollTheBones();
    document.write("</H3>");  
    document.write("<DIV id=\"total\">Your roll total: <SPAN class=\"red\">" +
                   rollTotal + "</SPAN></DIV>");
    document.write("<DIV id=\"possible\">Total possible: <SPAN class=\"blue\">" +
                  (diceTimes * diceType) + "</SPAN></DIV>");
    
    // Another roll?
    document.write("<input type=\"button\" value=\"Roll Again\" " +
                   "onClick=\"document.location.reload(true)\">");             
  }