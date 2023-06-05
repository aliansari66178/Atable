function make_html (name) {
    function filter (i) {
        return i == name
    }
    data = sport_v[sport_n.findIndex(filter)]
    text = ''
    for (let i=0; i<(data.length); i+=1) {
        text += `<section style="hight: ${50*2**data.length}px">`
        for (let t=0; t<(data[i].length); t+=1) {
            for (let j=0; j<(2**i-1); j+=1) {
                text += '<aside></aside>'
            }
            if (data[i][t] != '' || i > 0) {
                text += '<article>'
                text += data[i][t]
                text += '</article>'
            } else {
                text += '<aside></aside><aside></aside>'
            }
            for (let j=0; j<(2**i-1); j+=1) {
                text += '<aside></aside>'
            }
        }
        text += '</section>'
    }
    return text
}
function set (input) {
    document.getElementById('body').innerHTML += `<div id="${input}"></div>`
    document.getElementById(input).innerHTML = make_html(input)
    document.getElementById
}
for (let i=0; i<(sport_n.length); i+=1) {
    set(sport_n[i])
}
document.getElementById('body').innerHTML += `<img src="img.png" style="max-width: 100vw; max-height: calc(100vh - 100px);"></img>`