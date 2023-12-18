let array = ["Du bist ein einfacher Verkäufer in einer Verkaufsstraße in der Edo-Epoche in Japan. Plötzlich hörst du zwei laute kampfschreie. Zwei Samurai stehen gegenüber einander. Ein Kampf wird ausbrechen wenn jemand nichts tut. Was machst du? (enthalten oder agieren)", "Für nichts machen entschieden.", "Die Samurai schreien sind abwechselnd an. Lauter als die Schmiede nebenan. Die Menschen im Umfeld suchen nach Schutz vor dem bevorstehenden Kampf. Es herrscht Windstille.", "Aufeinmal lachen beide Samurai herrlich laut zueinander. Sie waren beste Freunde.", "Lauften aber erschöpft hinweg.", "agieren", "Die Samurai schreien sind abwechselnd an. Lauter als die Schmiede nebenan. Die Menschen im Umfeld suchen nach Schutz vor dem bevorstehenden Kampf. Es herrscht Windstille.", "Du stellts dich hektisch zwischen den beiden Samurai im weg.", "Aufeinmal lachen beide Samurai herrlich laut zueinander.", "'Sie waren beste Freunde und Sie wollten neue Personen rekrutieren die Mutig genug sind sich vor einem Samurai zu stellen."];

let state = 0;

console.log(state);


const input = document.querySelector(".inputForm_field");
const output = document.getElementById("output");

const userInput = input.value

input.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        if (state === 0) {
            console.log(state);
            output.innerText = array[0];
            state = 1;
            console.log(state);
        }
    }
    if (state === 1 || userInput == "agieren") {
            agieren();
            console.log(state);
        }
        else if (state === 2 || userInput == "enthalten") {
                enthalten();
                console.log(state)
            }

        else {
            alert = "Falsche Eingabe";
            falsche_eingabe();
        }
});

function agieren() {
    output.innerText += "\n" + array[1];
    output.innerText += "\n" + array[2];
    output.innerText += "\n" + array[3];
    output.innerText += "\n" + array[4];
    state == 2;
}

function enthalten() {
    output.innerText += "\n" + array[5];
    output.innerText += "\n" + array[6];
    output.innerText += "\n" + array[7];
    output.innerText += "\n" + array[8];
    output.innerText += "\n" + array[9];
    state == 3;
}

function falsche_eingabe() {
    input.value = ''; //falls man nochmals spielen möchte im selben Fenster
}