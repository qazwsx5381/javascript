const korean = (prompt(`국어점수를 입력하시오.`)*1)
const math = (prompt('수학점수를 입력하시오')*1)
const science = (prompt('과학점수를 입력하시오')*1)
let abc
let ab = `${(korean>=70)&&(math>50)&&(science>=80)}`
if(korean>=70){
    if(math>50){
        if(science>=80){
            alert('합격입니다!')
            abc = "true"
        }   else {
            abc = "false"
        }
    }   else {
        abc = "false"
    }
}   else {
    abc = "false"
}
console.log(typeof abc)
console.log(typeof ab)
let list = ''
    list += `<table>`
    list += `<tr><th>국어점수</th><th>수학점수</th><th>과학점수</th><th>평균점수</th><th>합격여부</th></tr>`
    list += `<tr><td>${korean}</td><td>${math}</td><td>${science}</td><td>${((korean+math+science)/3).toFixed(2)}</td><td>${abc}</td></tr>`
    list += `</table>`
document.write(list)