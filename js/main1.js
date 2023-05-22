let d1 = document.getElementById('d1')
let pic = document.getElementById('pic')
let d2 = document.getElementById('d2')

d1.onmouseenter = function (){
    this.style.backgroundColor = 'purple'
}

d1.onmouseleave = function (){
    this.style.backgroundColor = 'white'
    a = 150
    this.style.width = a + 'px'
    pic.setAttribute('src','img/1.jpg')
}


let a = 150
d1.onmousemove = function (){
    a += 2
    this.style.width = a + 'px'
    if (a >= 792){
        pic.setAttribute('src','img/2.jpg')
    }
}


d2.ondragstart = start
d2.ondragend = end
let ofx = 0
let ofy = 0
function start(event){
    console.log(event.pageX,event.pageY)
    console.log(event.offsetX,event.offsetY)
    ofx = event.offsetX
    ofy = event.offsetY
}
function end(event){
    let x = event.pageX
    let y = event.pageY
    this.style.left = (x - ofx) + 'px'
    this.style.top = (y - ofy) + 'px'
}