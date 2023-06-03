function make_html () {
    text = ''
    for (let i=0; i<(data.length); i+=1) {
        text += `<section style="hight: ${50*2**data.length}px">`
        for (let t=0; t<(data[i].length); t+=1) {
            for (let j=0; j<(2**i-1); j+=1) {
                text += '<aside></aside>'
            }
            if (data[i][t] != '') {
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
function set () {
    document.getElementById('body').innerHTML = make_html()
    document.getElementById
}
setInterval(set, 1);