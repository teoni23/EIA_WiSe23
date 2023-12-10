let array = ["Du bist ein einfacher Verkäufer in einer Verkaufsstraße in der Edo-Epoche in Japan. Plötzlich hörst du zwei laute kampfschreie. Zwei Samurai stehen gegenüber einander. Ein Kampf wird ausbrechen wenn jemand nichts tut. Was machst du? (enthalten oder agieren)", "Für nichts machen entschieden.", "Die Samurai schreien sind abwechselnd an. Lauter als die Schmiede nebenan. Die Menschen im Umfeld suchen nach Schutz vor dem bevorstehenden Kampf. Es herrscht Windstille.", "Aufeinmal lachen beide Samurai herrlich laut zueinander. Sie waren beste Freunde.", "Lauften aber erschöpft hinweg.", "agieren", "Die Samurai schreien sind abwechselnd an. Lauter als die Schmiede nebenan. Die Menschen im Umfeld suchen nach Schutz vor dem bevorstehenden Kampf. Es herrscht Windstille.", "Du stellts dich hektisch zwischen den beiden Samurai im weg.", "Aufeinmal lachen beide Samurai herrlich laut zueinander.", "'Sie waren beste Freunde und Sie wollten neue Personen rekrutieren die Mutig genug sind sich vor einem Samurai zu stellen."];

function agiern_enthalten(decision) {
    switch (decision) {
        case 'enthalten':
            return [array[1], array[2], array[3], array[4]];
        case 'agieren':
            return [array[5], array[6], array[7], array[8], array[9]];
        default:
            return ['falsche eingabe'];
    }
}

let fight = prompt(array[0]);
let result = agiern_enthalten(fight);

for (let text of result) {
    alert(text);
}