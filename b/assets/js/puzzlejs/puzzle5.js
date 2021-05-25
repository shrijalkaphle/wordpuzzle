$('#puzzle5-table').on('mousedown', 'td',function(e){
    selectword = selectword + $( this ).text()
    $(this).addClass('temp-select')
    if(e.which === 1) leftButtonDown = true;
});

$('#puzzle5-start').click(function(){
    html=''
    for(var i=0;i<puzzle5.length;i++) {
        html = html + puzzle5[i] + '<br>'
    }
    $('#puzzle5-words').html(html)
    $('#puzzle-4').addClass('hidden')
    $('#puzzle-5').removeClass('hidden')
})

$('#puzzle5-table').on('mouseup','td', function() {
    leftButtonDown = false
    flag = 0
    for(var i=0;i<puzzle5.length;i++) {
        var str = puzzle5[i]
        check = str.replace(/\s/g, '')
        var n = check.startsWith(selectword.toLowerCase())
        if(n) {
            if(check.localeCompare(selectword.toLowerCase()) == 0) {
                answer5.push(str)
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

$('#puzzle5-table').on('mouseenter', 'td', function() {
    if(leftButtonDown){
        selectword = selectword + $( this ).text()
        $(this).addClass('temp-select')
    } else {
        selectword = ''
    }
})

$('#puzzle5-table').on('mouseleave', function() {
    selectword = ''
    leftButtonDown = false
    $('.temp-select').removeClass('temp-select')
})

$('#complete-puzzle5').on('click', function(){
    $('#puzzle5').addClass('hidden')
    html=''
    for(var i=0;i<puzzle5.length;i++) {
        html = html + '<tr><td>' + puzzle5[i] + '</td><td>'
        if(answer5.includes(puzzle5[i])) {
            html = html + '<i style="color:green" class="fas fa-check-circle"></i>'
        } else {
            html = html + '<i style="color:red" class="fas fa-times-circle"></i>'
        }
        html = html + '</td></tr>'
    }
    lastIndex = ''
    $('#puzzle5-result').removeClass('hidden')
    $('#puzzle5-result #result').html(html)
    $('#puzzle5-result #score').text(answer5.length)
})