$('#puzzle3-table').on('mousedown', 'td',function(e){
    selectword = selectword + $( this ).text()
    $(this).addClass('temp-select')
    if(e.which === 1) leftButtonDown = true;
});

$('#puzzle3-start').click(function(){
    html=''
    for(var i=0;i<puzzle3.length;i++) {
        html = html + puzzle3[i] + '<br>'
    }
    $('#puzzle3-words').html(html)
    $('#puzzle-2').addClass('hidden')
    $('#puzzle-3').removeClass('hidden')
    countdown('3')
})

$('#puzzle3-table').on('mouseup','td', function() {
    leftButtonDown = false
    flag = 0
    for(var i=0;i<puzzle3.length;i++) {
        var str = puzzle3[i]
        check = str.replace(/\s/g, '')
        var n = check.startsWith(selectword.toLowerCase())
        if(n) {
            if(check.localeCompare(selectword.toLowerCase()) == 0) {
                answer3.push(str)
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

$('#puzzle3-table').on('mouseenter', 'td', function() {
    if(leftButtonDown){
        selectword = selectword + $( this ).text()
        $(this).addClass('temp-select')
    } else {
        selectword = ''
    }
})

$('#puzzle3-table').on('mouseleave', function() {
    selectword = ''
    leftButtonDown = false
    $('.temp-select').removeClass('temp-select')
})

$('#complete-puzzle3').on('click', function(){
    $('#puzzle3').addClass('hidden')
    html=''
    for(var i=0;i<puzzle3.length;i++) {
        html = html + '<tr><td>' + puzzle3[i] + '</td><td>'
        if(answer3.includes(puzzle3[i])) {
            html = html + '<i style="color:green" class="fas fa-check-circle"></i>'
        } else {
            html = html + '<i style="color:red" class="fas fa-times-circle"></i>'
        }
        html = html + '</td></tr>'
    }
    lastIndex = ''
    $('#puzzle3-result').removeClass('hidden')
    $('#puzzle3-result #result').html(html)
    $('#puzzle3-result #score').text(answer3.length)
})