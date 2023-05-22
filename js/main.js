//RegExp

let inp = document.getElementById('inp')
let but = document.getElementById('but')

but.onclick = f1

function f1(){
    console.log('==========================')
    let str = inp.value
    let t1 = /[A-Z0-9]/
    console.log(t1.test(str))
    let t2 = /^[A-Z]/
    console.log(t2.test(str))
    let t3 = /[0-9]$/
    console.log(t3.test(str))
    let t4 = /[a-z]{4}/
    console.log(t4.test(str))
    let t5 = /[a-z]{1,}/
    console.log(t5.test(str))
    let t6 = /yes|Yes|YES/
    console.log(t6.test(str))
    let t7 = /^[A-Z].*[0-9]{3}.*[a-z]$/
    console.log(t7.test(str))
    let t8 = /^\d.*\s$/
    console.log(t8.test(str))
}

//События мыши

let d1 = document.getElementById('d1')
let d2 = document.getElementById('d2')
let d3 = document.getElementById('d3')
let num = 0

d1.onclick = function (event){
    console.log(event)
    console.log(event.target)
    console.log(event.type)
    this.style.backgroundColor = 'pink'
}

d1.ondblclick = function (){
    this.style.backgroundColor = 'green'
}

d1.oncontextmenu = function (){
    this.style.backgroundColor = 'black'
    return false
}

d2.onclick = function (){
    d1.style.backgroundColor = 'red'
}

d2.oncontextmenu = function (){
    d1.style.backgroundColor = 'green'
    return false
}


but.onclick = function (){
    switch (num){
        case 0: {
            d1.style.backgroundColor = 'red'
            d2.style.backgroundColor = 'white'
            d3.style.backgroundColor = 'white'
            num = 1
            break
            }
        case 1: {
            d1.style.backgroundColor = 'white'
            d2.style.backgroundColor = 'yellow'
            d3.style.backgroundColor = 'white'
            num = 2
            break
            }
        case 2: {
            d1.style.backgroundColor = 'white'
            d2.style.backgroundColor = 'white'
            d3.style.backgroundColor = 'green'
            num = 0
            break
            }

        }

    }
