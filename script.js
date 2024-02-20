const awan = document.getElementById("awan");
const gunung1 = document.getElementById("mount1");
const gunung2 = document.getElementById("gunung2");
const snow = document.getElementById("saljuuu");
const pohon1 = document.getElementById("pohon1");
const pohon2 = document.getElementById("pohon2");
const text = document.querySelector(".text");


window.addEventListener("scroll", function () {
    let value = window.scrollY
   
    text.style.marginTop = value * 2 + "px"
    gunung1.style.left = value * 2.5 + "px"
    gunung2.style.left = value * -2.5 + "px"
    pohon1.style.left = value * -1.5 + "px"
    pohon2.style.left = value * 1.5 + "px"
    snow.style.left = value * -2.5 + "px"
})

const awanSpring = document.getElementById("awan-spring")
const awanSpring2 = document.getElementById("awan2-spring")
const mountSpring1 = document.getElementById("mount1-spring")
const mountSpring2 = document.getElementById("mount2-spring")
const bungaSpring1 = document.getElementById("bunga1-spring")
const bungaSpring2 = document.getElementById("bunga2-spring")
const sunSpring = document.getElementById("sun-spring")

window.addEventListener("scroll", function() {
    let nilai = window.scrollY

    awanSpring.style.left = -nilai + "px"
    awanSpring2.style.left = nilai + "px"
    mountSpring1.style.left = nilai * 1.5 + "px"
    mountSpring2.style.left = nilai * -1.5 + "px"
    bungaSpring1.style.left = nilai * 2 + "px"
    bungaSpring2.style.left = nilai * -2 + "px"
    sunSpring.style.left = -nilai + "px"

})

const sunSummer = document.getElementById("sun-summer")
const leafSummer = document.getElementById("leaf-summer")
const awanSummer = document.getElementById("awan-summer")
const birdSummer = document.getElementById("bird-summer")


window.addEventListener("scroll", function() {
    let angka = window.scrollY

    sunSummer.style.left = -angka + "px"
    leafSummer.style.left = angka * -1.5 + "px"
    awanSummer.style.left = angka + "px"
    birdSummer.style.left = angka * 2 + "px"
})

const awanFall = document.getElementById("awan-fall")