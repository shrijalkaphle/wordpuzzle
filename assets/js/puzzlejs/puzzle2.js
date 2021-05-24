$('#puzzle2-table').on('mousedown', 'td',function(e){
    selectword = selectword + $( this ).text()
    $(this).addClass('temp-select')
    if(e.which === 1) leftButtonDown = true;
});

$('#puzzle2-start').click(function(){
    html=''
    for(var i=0;i<puzzle2.length;i++) {
        html = html + puzzle2[i] + '<br>'
    }
    $('#puzzle2-words').html(html)
    $('#puzzle-1').addClass('hidden')
    $('#puzzle-2').removeClass('hidden')
    countdown('2')
})

$('#puzzle2-table').on('mouseup','td', function() {
    leftButtonDown = false
    flag = 0
    for(var i=0;i<puzzle2.length;i++) {
        var str = puzzle2[i]
        check = str.replace(/\s/g, '')
        var n = check.startsWith(selectword.toLowerCase())
        if(n) {
            if(check.localeCompare(selectword.toLowerCase()) == 0) {
                answer2.push(str)
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

$('#puzzle2-table').on('mouseenter', 'td', function() {
    if(leftButtonDown){
        selectword = selectword + $( this ).text()
        $(this).addClass('temp-select')
    } else {
        selectword = ''
    }
})

$('#puzzle2-table').on('mouseleave', function() {
    selectword = ''
    leftButtonDown = false
    $('.temp-select').removeClass('temp-select')
})

$('#complete-puzzle2').on('click', function(){
    $('#puzzle2').addClass('hidden')
    html=''
    for(var i=0;i<puzzle2.length;i++) {
        html = html + '<tr><td>' + puzzle2[i] + '</td><td>'
        if(answer2.includes(puzzle2[i])) {
            html = html + '<i style="color:green" class="fas fa-check-circle"></i>'
        } else {
            html = html + '<i style="color:red" class="fas fa-times-circle"></i>'
        }
        html = html + '</td></tr>'
    }
    lastIndex = ''
    $('#puzzle2-result').removeClass('hidden')
    $('#puzzle2-result #result').html(html)
    $('#puzzle2-result #score').text(answer2.length)
})