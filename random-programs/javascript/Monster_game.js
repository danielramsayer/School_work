var answer = prompt("You are walking into a room, when you hear a noise: what do you do? TURN, WALK, FLAIL.").toLowerCase();

switch(answer) {
    case 'turn':
        var slow = prompt("Are you slow? Y/N");
        var afraid = prompt("Are you afraid? Y/N");
        if (slow === 'Y' && afraid === 'Y') {
            console.log("You TURN, and find a monster! Oh no! You die!");
        } else if (slow === 'N' || afraid === 'N') {
            console.log("You TURN, and find only darkness.");
        } else {
            console.log("You fool! You are devoured by darkness.");
		}
        break;
    case 'walk':
        console.log("You continue to walk, feeling an unsettling presence behind you.");
        var look = prompt("You walk another few feet, and feel breath on your neck. Do you RUN or FIGHT?").toLowerCase();
        if (look === "fight") {
            console.log("You fight the monster, unfortunately, you are killed. Then eaten. Only a smear of blood remains.")
        } else  {
            console.log("You run! I running, you hear it run after you. As you run, you find yourself in a long corridor. Just when you think it is upon you, from in front you hear a shout to 'get down', you fall and a shot gun blast rings over your head.")
        }
        break;
    case 'flail':
        console.log("You flail! You smack a monster in the face and it flails itself, falling down a flight of stairs.");
        break;
    default:
        console.log("Oh no, you", answer + ", a monster eats you!")
}
