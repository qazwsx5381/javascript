const dollar = prompt('달러를 입력하시오.')
const won = 1314
const jpy = 133
const cny = 7
let list = ''
    list += `<table class="a">`
    list += `<tr><th>입력하신 <span>${dollar}</span>달러를 환전하면</th></tr>`
    list += `<tr><td>한국 ${Number(dollar)*won}원</td></tr>`
    list += `<tr><td>일본 ${Number(dollar)*jpy}엔</td></tr>`
    list += `<tr><td>중국 ${Number(dollar)*cny}위안</td></tr>`
    list += `</table>`
document.write(list)