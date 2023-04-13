let input = prompt('true 혹은 false 값을 입력하시오!')
// let input1 = prompt('&& 혹은 || 값을 입력하시오!')
// let input2 = prompt('true 혹은 false 값을 입력하시오!')
let result1 = false
let result2 = true
let list = ''
    list += '<h1>논리연산자</h1>'
    list += `<h2>입력하신 <mark>${input}</mark>에 대한 결과를 표로 나타내면</h2>`
    list += '<table class="a">';
    list += `<tr><th>&& 연산</th><th>연산</th><th>값</th><th>결과</th></tr>`;
    list += `<tr><td><mark>${input}</mark></td><td>&&</td><td>${result1}</td><td>${result1&&input}</td></tr>`;
    list += `<tr><td><mark>${input}</mark></td><td>&&</td><td>${result2}</td><td>${result2&&input}</td></tr>`;
    list += `<tr><th>|| 연산</th><th>연산</th><th>값</th><th>결과</th></tr>`;
    list += `<tr><td><mark>${input}</mark></td><td>||</td><td>${result1}</td><td>${result1||input}</td></tr>`;
    list += `<tr><td><mark>${input}</mark></td><td>||</td><td>${result2}</td><td>${result2||input}</td></tr>`;
    // list += `<tr><th>|| 연산</th><th>연산</th><th>값</th><th>결과</th></tr>`;
    // list += `<tr><td><mark>${input}</mark></td><td>${input1}</td><td>${input2}</td><td>${input,input1,input2}</td></tr>`;
    list += '</table>'
    list += '<hr>';
    list += `<button type="button" onclick="location.href='../index.html'" class="design">돌아가기</button>`;
document.write(list)