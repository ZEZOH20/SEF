

export function usecreateRGB() {
    let a = []
    for (let i = 0; i < 3; i++) {
        a.push(Math.floor(Math.random() * 255))
    }
    return `rgb(${a[0]},${a[1]},${a[2]})`
}
export function usecreateHEX() {
    let valuesHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    let resultHex = '#'
    for (let i = 0; i < 6; i++) {
        let pick = Math.floor(Math.random() * 15)
        resultHex += valuesHex[pick] //concate
    }
    return resultHex
}
