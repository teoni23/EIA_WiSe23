let fight = prompt('Du bist ein einfacher Verkäufer in einer Verkaufsstraße in der Edo-Epoche in Japan. Plötzlich hörst du zwei laute kampfschreie. Zwei Samurai stehen gegenüber einander. Ein Kampf wird ausbrechen wenn jemand nichts tut. Was machst du? (enthalten oder agieren)')
if (fight == 'enthalten') {
    alert('Für nichts machen entschieden.')
    alert('Die Samurai schreien sind abwechselnd an. Lauter als die Schmiede nebenan. Die Menschen im Umfeld suchen nach Schutz vor dem bevorstehenden Kampf. Es herrscht Windstille.')
    alert('Aufeinmal lachen beide Samurai herrlich laut zueinander. Sie waren beste Freunde.')
    alert('Lauften aber erschöpft hinweg.')
}
else if (fight == 'agieren') {
    alert('Für agieren entschieden.')
    alert('Die Samurai schreien sind abwechselnd an. Lauter als die Schmiede nebenan. Die Menschen im Umfeld suchen nach Schutz vor dem bevorstehenden Kampf. Es herrscht Windstille.')
    alert('Du stellts dich hektisch zwischen den beiden Samurai im weg.')
    alert('Aufeinmal lachen beide Samurai herrlich laut zueinander.')
    alert('Sie waren beste Freunde und Sie wollten neue Personen rekrutieren die Mutig genug sind sich vor einem Samurai zu stellen.')
}
else {
    alert('flasche eingabe')
}