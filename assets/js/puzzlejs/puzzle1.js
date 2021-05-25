$('#puzzle1-table').on('mousedown', 'td',function(e){
    selectword = selectword + $( this ).text()
    $(this).addClass('temp-select')
    if(e.which === 1) leftButtonDown = true;
});

$('#puzzle1-start').click(function(){
    html=''
    for(var i=0;i<puzzle1.length;i++) {
        html = html + puzzle1[i] + '<br>'
    }
    $('#puzzle1-words').html(html)
    $('#rules').addClass('hidden')
    $('#puzzle-1').removeClass('hidden')
    timer(1)
})

$('#puzzle1-table').on('mouseup','td', function() {
    leftButtonDown = false
    flag = 0
    for(var i=0;i<puzzle1.length;i++) {
        var str = puzzle1[i]
        check = str.replace(/\s/g, '')
        var n = check.startsWith(selectword.toLowerCase())
        if(n) {
            if(check.localeCompare(selectword.toLowerCase()) == 0) {
                answer1.push(str)
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

$('#puzzle1-table').on('mouseenter', 'td', function() {
    if(leftButtonDown){
        selectword = selectword + $( this ).text()
        $(this).addClass('temp-select')
    } else {
        selectword = ''
    }
})

$('#puzzle1-table').on('mouseleave', function() {
    selectword = ''
    leftButtonDown = false
    $('.temp-select').removeClass('temp-select')
})

$('#complete-puzzle1').on('click', function(){
    var timetaken = $('#timer-puzzle1').text()
    $('#puzzle1').addClass('hidden')
    html=''
    for(var i=0;i<puzzle1.length;i++) {
        html = html + '<tr><td>' + puzzle1[i] + '</td><td>'
        if(answer1.includes(puzzle1[i])) {
            html = html + '<i style="color:green" class="fas fa-check-circle"></i>'
        } else {
            html = html + '<i style="color:red" class="fas fa-times-circle"></i>'
        }
        html = html + '</td></tr>'
    }
    lastIndex = ''
    $('#puzzle1-result').removeClass('hidden')
    $('#puzzle1-result #result').html(html)
    $('#puzzle1-result #score').text(answer1.length)
    $('#puzzle1-result #timetaken').text(timetaken)
})

$('#puzzle1-thankyou').click(function() {
    $('#thankyou-1').removeClass('hidden')
    $('#puzzle-1').addClass('hidden')
})