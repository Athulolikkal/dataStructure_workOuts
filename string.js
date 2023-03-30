let x = "1234"
let y = "abcdefg"
let z = ""
for (let i = 0; i < Math.max(x.length, y.length); i++) {
    if (x.length > i)
        z += x[i]

    if (y.length > i)
        z += y[i]
}

console.log(z);