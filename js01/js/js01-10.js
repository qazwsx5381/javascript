let list = ''
    list += '<ul>';
    list += '<li>Hello 반갑다는 뜻이야!</li>';
    list += '<li>Javascript 로 작성되었어.</li>';
    list += '</ul>';
    list += '<h2>&& and </h2>';
    list += '<table class="a">';
    list += '<tr><th>A</th><th>B</th><th>A && B</th></tr>';
    list += '<tr><td>false</td><td>false</td><td>false</td></tr>';
    list += '<tr><td>true</td><td>false</td><td>false</td></tr>';
    list += '<tr><td>false</td><td>true</td><td>false</td></tr>';
    list += '<tr><td>true</td><td>true</td><td>true</td></tr>';
    list += '</table>';
    list += '<h2>|| or </h2>';
    list += '<table class="a">';
    list += '<tr><th>A</th><th>B</th><th>A || B</th></tr>';
    list += '<tr><td>false</td><td>false</td><td>false</td></tr>';
    list += '<tr><td>true</td><td>false</td><td>true</td></tr>';
    list += '<tr><td>false</td><td>true</td><td>true</td></tr>';
    list += '<tr><td>true</td><td>true</td><td>true</td></tr>';
    list += '</table>';
    list += '<hr>';
    list += `<button type="button" onclick="location.href='../index.html'" class="design">돌아가기</button>`;
document.write(list)