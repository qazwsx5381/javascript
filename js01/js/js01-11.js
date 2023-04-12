let input = prompt('값을 입력하세요!')
let list = ''
    list += '<table class="a">';
    list += `<tr><th>증감연산자</th><th>설명</th><th>예)let number = ${input}</th><th>순서</th></tr>`;
    list += `<tr><td class='b'>변수++</td><td>기존의 변수 값에 1을 더합니다.(후위)</td><td>alert(number++) 답 : ${input++}</td><td class='b'>1</td></tr>`;
    list += `<tr><td class='b'>++변수</td><td>기존의 변수 값에 1을 더합니다.(전위)</td><td>alert(++number) 답 : ${++input}</td><td class='b'>2</td></tr>`;
    list += `<tr><td class='b'>변수--</td><td>기존의 변수 값에 1을 뺍니다.(후위)</td><td>alert(number--) 답 : ${input--}</td><td class='b'>3</td></tr>`;
    list += `<tr><td class='b'>변수--</td><td>기존의 변수 값에 1을 뺍니다.(전위)</td><td>alert(--number) 답 : ${--input}</td><td class='b'>4</td></tr>`;
    list += '</table>'
    list += '<hr>';
    list += `<button type="button" onclick="location.href='../index.html'" class="design">돌아가기</button>`;
document.write(list)