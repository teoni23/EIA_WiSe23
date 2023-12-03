let budget = prompt('Was ist dein Budget? (0€-1200€)')

if (budget > '200') {
    let budget = prompt('Wie viel Geld bist du bereit aus dem Fenster zu werfen? (0€-500€)')
}
else {
    prompt('falsche eingabe. Kein Geld? komm in meine Whatsappgruppe!')
}

if (budget > '500') {
    let budget = prompt('Hier sind PC-PARTS von einem Pc unter 500€ (500€-1200€)')
    prompt('')
}

else {
    prompt('falsche eingabe. Kein Geld? komm in meine Whatsappgruppe!')
}