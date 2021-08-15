const intervalo = 3000

function slide1() {
    document.getElementById('banner').src = 'img/banner1.jpg'
    document.querySelector('p').innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ' +
        'sollicitudin erat ut magna auctor sollicitudin. Vivamus eu odio neque. In luctus, nulla eget consequat tincidunt'
    setTimeout('slide2()', intervalo)
}
function slide2() {
    document.getElementById('banner').src = 'img/banner2.jpg'
    document.querySelector('p').innerText = 'O samba da minha terra deixa a gente mole, quando se dança todo' +
        'mundo bole'
    setTimeout('slide3()', intervalo)
}
function slide3() {
    document.getElementById('banner').src = 'img/banner3.jpg'
    document.querySelector('p').innerText = 'Eu não sou besta pra tirar onde de herói, sou vacinado eu sou ' +
        'cawboy, cawboy fora da lei'
    setTimeout('slide1()', intervalo)
}