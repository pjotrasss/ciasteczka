//z jakiegoś powodu błędnie działające dodanie onclicka na buttony o którym rozmawiałem z P. Wytykiem na lekcji wrzuciłem zakomentowane na koniec tego pliku

let liczba = 0
const p_suma = document.querySelector('p[name="suma"]')
const p_liczba = document.querySelector('p[name="liczba"]')



function losuj() {
    console.log("losowanie")
    let wyniki = []
    let suma = 0
    for (let i = 0; i<6; i++) {
        wyniki[i] = Math.floor(Math.random()*6)+1
        document.querySelector(`img[name="wylosowana_liczba${i}"]`).src=`images/${wyniki[i]}.png`
        suma += wyniki[i]
    }
    liczba += 1
    p_suma.innerHTML = `SUMA: ${suma}`
    p_liczba.innerHTML = `LICZBA: ${liczba}`
}



function zeruj() {
    console.log("zerowanie")
    liczba = 0
    p_liczba.innerHTML = `LICZBA: ${liczba}`
    p_suma.innerHTML = `SUMA`
}










//document.addEventListener("DOMContentLoaded", function() {
//    document.querySelector('input[name="losuj"]').onclick = losuj()
//})