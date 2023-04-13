let input = prompt('숫자를 입력하세요')
let list = ''
    list += `<div>입력하신 ${input} 값은 ${typeof input} 타입입니다.</div>`
    list += `<div>이 타입을 Number()를 사용하여 숫자로 변환 하겠습니다.</div>`
    list += `<h3><mark>변환 완료 : ${input*1} <small>(타입 : ${typeof (input*1)})</small></mark></h3>`
    list += `<div>이제 위 숫자 타입을 Boolean()를 사용하여 불리언으로 변환 하겠습니다.</div>`
    list += `<div>위 값 ${input*1}(타입 : ${typeof (input*1)})을 불리언 타입으로 변환하면 이렇게 됩니다.</div>`
    list += `<h3><mark>변환 완료 : ${!!input} <small>(타입 : ${typeof !!input})</small></mark></h3>`
document.write(list)