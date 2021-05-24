$('#puzzle4-table').on('mousedown', 'td',function(e){
    selectword = selectword + $( this ).text()
    $(this).addClass('temp-select')
    if(e.which === 1) leftButtonDown = true;
});

$('#puzzle4-start').click(function(){
    html=''
    for(var i=0;i<puzzle4.length;i++) {
        html = html + puzzle4[i] + '<br>'
    }
    $('#puzzle4-words').html(html)
    $('#puzzle-3').addClass('hidden')
    $('#puzzle-4').removeClass('hidden')
    countdown('4')
})

$('#puzzle4-table').on('mouseup','td', function() {
    leftButtonDown = false
    flag = 0
    for(var i=0;i<puzzle4.length;i++) {
        var str = puzzle4[i]
        check = str.replace(/\s/g, '')
        var n = check.startsWith(selectword.toLowerCase())
        if(n) {
            if(check.localeCompare(selectword.toLowerCase()) == 0) {
                answer4.push(str)
                $('.temp-select').addClass('word-match')
                $('.word-match').removeClass('temp-select')
                selectword = ''
                flag = 0
                break;
            } else {
                flag = 1
            }
        } else{
            flag = 1
        }
    }
    if(flag == 1) {
        selectword = ''
        $('.temp-select').removeClass('temp-select')
    }
})

$('#puzzle4-table').on('mouseenter', 'td', function() {
    if(leftButtonDown){
        selectword = selectword + $( this ).text()
        $(this).addClass('temp-select')
    } else {
        selectword = ''
    }
})

$('#puzzle4-table').on('mouseleave', function() {
    selectword = ''
    leftButtonDown = false
    $('.temp-select').removeClass('temp-select')
})

$('#complete-puzzle4').on('click', function(){
    $('#puzzle4').addClass('hidden')
    html=''
    for(var i=0;i<puzzle4.length;i++) {
        html = html + '<tr><td>' + puzzle4[i] + '</td><td>'
        if(answer4.includes(puzzle4[i])) {
            html = html + '<i style="color:green" class="fas fa-check-circle"></i>'
        } else {
            html = html + '<i style="color:red" class="fas fa-times-circle"></i>'
        }
        html = html + '</td></tr>'
    }
    lastIndex = ''
    $('#puzzle4-result').removeClass('hidden')
    $('#puzzle4-result #result').html(html)
    $('#puzzle4-result #score').text(answer4.length)
})