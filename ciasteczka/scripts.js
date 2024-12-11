//z jakiegoś powodu błędnie działające dodanie onclicka na buttony o którym rozmawiałem z P. Wytykiem na lekcji wrzuciłem zakomentowane na koniec tego pliku

let liczba = 0
let cookie_number = 0
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
    console.log(wyniki)
    liczba += 1
    p_suma.innerHTML = `SUMA: ${suma}`
    p_liczba.innerHTML = `LICZBA: ${liczba}`
    add_cookie(`losowanie ${cookie_number}`,wyniki,1)
    cookie_number++
}



function zeruj() {
    console.log("zerowanie")
    liczba = 0
    p_liczba.innerHTML = `LICZBA: ${liczba}`
    p_suma.innerHTML = `SUMA`
}



function add_cookie(name,value,expiry_time) {
    let date = new Date()
    date.setTime(date.getTime()+(expiry_time*24*60*60*1000))
    let expires = "expires="+date.toUTCString()
    document.cookie = name+"="+value+";"+expires+";path=/"
}



//document.addEventListener("DOMContentLoaded", function() {
//    document.querySelector('input[name="losuj"]').onclick = losuj()
//})