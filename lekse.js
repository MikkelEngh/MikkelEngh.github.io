const myPokemonHpE1 = document.getElementById("myHP");
const myPokemonAttack1 = document.getElementById("attack1");
const myPokemonAttack2 = document.getElementById("attack2");
const myPokemonDodge = document.getElementById("dodgeid")

const myEnemyPokemonHpE1 = document.getElementById("enemyHP");
const myEnemyPokemonNameE1 = document.getElementById("enemyName");
const messageElement = document.getElementById("message");
const comboButton = document.getElementById("combo");

let isComboing = false; //* Boleehan
let canCombo = true;
let isDodgeing = false;
let isWindingUp = false;

let myHP = 200;
let enemyHP = 300;

myPokemonHpE1.innerHTML = myHP + " HP"; //*  henter teksten og legger til java variablen
myEnemyPokemonHpE1.innerHTML = enemyHP + " HP";

myPokemonAttack1.addEventListener("click", attack1);  //* knapper
myPokemonAttack2.addEventListener("click", attack2);
myPokemonDodge.addEventListener("click", dodge);
comboButton.addEventListener("click", comboAttack);

let comboCounter = 0; //Stater kombo på 0 

function comboAttack() {
    if (canCombo) {
        comboCounter++;
        if (comboCounter < 3) { //* stopper kombo på 3
            
            displayMessage("Combo in progress (" + comboCounter + " / 3). No damage on this round.");
        } else {
            
            enemyHP -= 100; //* skade når combo treffer
            if (enemyHP < 0) enemyHP = 0; 
            displayMessage("Combo completed! Pekka hits for 100 damage.");
            myEnemyPokemonHpE1.innerHTML = enemyHP + " HP";
        }
        if (comboCounter === 3) {
            
            comboCounter = 0;
            canCombo = false;     //* denne "gjemmer" knappen når combo er brukt opp, slik at man bare får 1 combo per match
            isComboing = false;
            comboButton.hidden = true;
        }
        
        setTimeout(() => { //* setter i gang enemy attack 
            enemyAttack();
        }, 1500);
    } else {
        displayMessage("Can't initiate a combo at the moment.");
    }
}

function attack1() {
   
    if (Math.random() > 0.35) {
        enemyHP -= 38;
        if (enemyHP < 0) enemyHP = 0; //* gjør sånn at hp blir på 0 og ikek går i minus
        displayMessage("Pekka landed blade chop 38 damage");
    } else {
        displayMessage("Pekka missed")
    }
    myEnemyPokemonHpE1.innerHTML = enemyHP + " HP";

    if (enemyHP === 0) {
        displayMessage("You defeated " + myEnemyPokemonNameE1.innerHTML + "!");
    } else {
        setTimeout(() => {
            enemyAttack();
        }, 1500);;
    }
}

function attack2() {
    if (Math.random() > 0.30) {
        enemyHP -= 23;
        if (enemyHP < 0) enemyHP = 0; 
        displayMessage("Pekka stomped electro G and hit him 23 damage")
    } else {
        displayMessage("Pekka slipped and missed")
    }
    myEnemyPokemonHpE1.innerHTML = enemyHP + " HP";

    if (enemyHP === 0) {
        displayMessage("You defeated " + myEnemyPokemonNameE1.innerHTML + "!");
    } else {
        setTimeout(() => {
            enemyAttack();
        }, 1500);;
    }
}

function dodge() {
    if (isWindingUp) {
        if (Math.random() < 0.45) {
            displayMessage("Pekka dodged Electro G's massive electro shock!");
            isWindingUp = false;
        } else {
            displayMessage("Pekka tried to dodge but was hit by Electro G's massive electro shock!");
        }
    } else {
        displayMessage("We are dodging!");
    }

    setTimeout(() => {
        enemyAttack();
    }, 1500);
}

function enemyAttack() {
    let r = Math.random();
    if (r < 0.3 || isWindingUp) { //*  sjekker om tallet er under 0.3 eller om e giant allerede winder opp 
        if (isWindingUp) {
            displayMessage("Electro G used a massive electro shock and Pekka dealt 50 damage");
            myHP -= 50;
            if (myHP < 0) myHP = 0; 
            
            isWindingUp = false; // Set isWindingUp to false to prevent another winding up attack.
        } else {
            isWindingUp = true; // If the enemy is not already winding up, set it to true and display a message.
            displayMessage("Electro G is winding up for a massive attack");
        }
    } else if (r > 0.4) {
        myHP -= 15;
        if (myHP < 0) myHP = 0; 
        displayMessage("Electro G used punch and dealt 15 damage");
    } else {
        myHP -= 5;
        if (myHP < 0) myHP = 0; 
        displayMessage("Electro G zapped Pekka and Pekka dealt 5 damage");
    }

    myPokemonHpE1.innerHTML = myHP + " HP";

    if (myHP === 0) {
        displayMessage("You lose! LOL");
    }
}

function displayMessage(message) {
    messageElement.innerHTML = message + "<br>";
    messageElement.style.display = "block";
}
