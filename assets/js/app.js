const puzzle1 = ['magic kingdom','blizzard beach','theme parks','shows','florida','epcot','typhoon lagoon','fireworks','vacation','rides','resorts','attractions','souveniers','tickets','orlando','characters','ears','pins'];
const puzzle2 = ['lee kuan yew','merlion','esplanade','rapid transit','buses','golden jubilee','istana','war memorial','housing','jamban','durian','courtesy','padang','president','world war ii','raffles','politics','pap'];
const puzzle3 = ['tan tock seng','lee hsien loong','leekuan yew','merlion','padang','golden jubilee','president','buses','jamban','istana','water wally','pap','rapid transit','lim bo seng','housing','paya lebar','tony tan','politics','durian'];
const puzzle4 = ['ruby','diamond','emerald','pearl','aquamarine','sapphire','topaz','jade','opal','amethyst','citrine','garnet','jasper','kunzite','peridot','tanzanite','tourmaline','azurite','onyx'];
const puzzle5 = ['leonard','howard','penny','amy','theory','rajesh','sheldon','science','physics','comic book','ocd','scientist','pasadena','university','big bang','wolowitz','space','nebraska','caltech','stuart'];

var selectword = ''

var lastIndex = ''

var answer1 = []
var answer2 = []
var answer3 = []
var answer4 = []
var answer5 = []

var interval;

function checkAdjacent(currentIndex) {
    var last = lastIndex.split(",")
    var current = currentIndex.split(",")
    var lastrow = parseInt(last[0])
    var lastcol = parseInt(last[1])
    var currentrow = parseInt(current[0])
    var currentcol = parseInt(current[1])
    
    if(currentrow == lastrow) {
        if(currentcol == (lastcol-1) || currentcol == (lastcol+1)) {
            return true
        } else {
            return false
        }
    } else if (currentcol == lastcol) {
        if(currentrow == (lastrow-1) || currentrow == (lastrow+1)) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }


}

function countdown(puzzle) {
    clearInterval(interval);
    interval = setInterval( function() {
        var timer = $('#timer-puzzle'+puzzle).html();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

        $('#timer-puzzle'+puzzle).html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0) {
            clearInterval(interval)
            $('#complete-puzzle'+puzzle).click()
        };
    }, 1000);
}

// puzzle 1 start
$('#puzzle1-start').click(function(){
    // display word list
    html=''
    for(var i=0;i<puzzle1.length;i++) {
        html = html + puzzle1[i] + '<br>'
    }
    $('#puzzle1-words').html(html)
    // display first puzzle
    $('#rules').addClass('hidden')
    $('#puzzle-1').removeClass('hidden')
    // start counter
    countdown('1')
})

$('#puzzle1-table').on('click', 'td', function() {
    flag = 0
    indexflag = 0
    currentIndex = $(this).closest('tr').index() + ',' + $(this).index()
    if(lastIndex == ''){
        lastIndex = currentIndex
    } else {
        if(checkAdjacent(currentIndex)) {
            indexflag = 0
            lastIndex = currentIndex
        } else {
            indexflag = 1
            lastIndex = ''
            $('.temp-select').removeClass('temp-select')
            selectword = ''
        }
    }
    if(indexflag == 0) {
        selectword = selectword + $( this ).text()
        $(this).addClass('temp-select')
        for(var i=0;i<puzzle1.length;i++) {
            var str = puzzle1[i]
            check = str.replace(/\s/g, '')
            var n = check.startsWith(selectword.toLowerCase())
            if(n) {
                flag = 0
                if(check.localeCompare(selectword.toLowerCase()) == 0) {
                    answer1.push(str)
                    $('.temp-select').addClass('word-match')
                    $('.word-match').removeClass('temp-select')
                    selectword = ''
                    lastIndex = ''
                }
                break
            } else {
                flag = 1
            }
        }
        if(flag == 1) {
            $('.temp-select').removeClass('temp-select')
            selectword = ''
            lastIndex = ''
        }
    }
})

$('#complete-puzzle1').on('click', function(){
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
})

// puzzle 2 js

$('#puzzle2-start').click(function() {
    html=''
    for(var i=0;i<puzzle2.length;i++) {
        html = html + puzzle2[i] + '<br>'
    }
    $('#puzzle2-words').html(html)
    // display first puzzle
    $('#puzzle-1').addClass('hidden')
    $('#puzzle-2').removeClass('hidden')
    // start counter
    countdown('2')
})

$('#puzzle2-table').on('click', 'td', function() {
    flag = 0
    indexflag = 0
    currentIndex = $(this).closest('tr').index() + ',' + $(this).index()
    if(lastIndex == ''){
        lastIndex = currentIndex
    } else {
        if(checkAdjacent(currentIndex)) {
            indexflag = 0
            lastIndex = currentIndex
        } else {
            indexflag = 1
            lastIndex = ''
            $('.temp-select').removeClass('temp-select')
            selectword = ''
        }
    }
    if(indexflag == 0) {
        selectword = selectword + $( this ).text()
        $(this).addClass('temp-select')
        for(var i=0;i<puzzle2.length;i++) {
            var str = puzzle2[i]
            check = str.replace(/\s/g, '')
            var n = check.startsWith(selectword.toLowerCase())
            if(n) {
                flag = 0
                if(check.localeCompare(selectword.toLowerCase()) == 0) {
                    answer2.push(str)
                    $('.temp-select').addClass('word-match')
                    $('.word-match').removeClass('temp-select')
                    selectword = ''
                    lastIndex = ''
                }
                break
            } else {
                flag = 1
            }
        }
        if(flag == 1) {
            $('.temp-select').removeClass('temp-select')
            selectword = ''
            lastIndex = ''
        }
    }
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

// puzzle 3 js

$('#puzzle3-start').click(function() {
    html=''
    for(var i=0;i<puzzle3.length;i++) {
        html = html + puzzle3[i] + '<br>'
    }
    $('#puzzle3-words').html(html)
    $('#puzzle-2').addClass('hidden')
    $('#puzzle-3').removeClass('hidden')
    countdown('3')
})

$('#puzzle3-table').on('click', 'td', function() {
    flag = 0
    indexflag = 0
    currentIndex = $(this).closest('tr').index() + ',' + $(this).index()
    if(lastIndex == ''){
        lastIndex = currentIndex
    } else {
        if(checkAdjacent(currentIndex)) {
            indexflag = 0
            lastIndex = currentIndex
        } else {
            indexflag = 1
            lastIndex = ''
            $('.temp-select').removeClass('temp-select')
            selectword = ''
        }
    }
    if(indexflag == 0) {
        selectword = selectword + $( this ).text()
        $(this).addClass('temp-select')
        for(var i=0;i<puzzle3.length;i++) {
            var str = puzzle3[i]
            check = str.replace(/\s/g, '')
            var n = check.startsWith(selectword.toLowerCase())
            if(n) {
                flag = 0
                if(check.localeCompare(selectword.toLowerCase()) == 0) {
                    answer3.push(str)
                    $('.temp-select').addClass('word-match')
                    $('.word-match').removeClass('temp-select')
                    selectword = ''
                    lastIndex = ''
                }
                break
            } else {
                flag = 1
            }
        }
        if(flag == 1) {
            $('.temp-select').removeClass('temp-select')
            selectword = ''
            lastIndex = ''
        }
    }
})

$('#complete-puzzle3').on('click', function(){
    $('#puzzle3').addClass('hidden')
    html=''
    for(var i=0;i<puzzle1.length;i++) {
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
    $('#puzzle3-result #score').text(answer1.length)
})

// puzzle 4 js
$('#puzzle4-start').click(function() {
    html=''
    for(var i=0;i<puzzle4.length;i++) {
        html = html + puzzle4[i] + '<br>'
    }
    $('#puzzle4-words').html(html)
    $('#puzzle-3').addClass('hidden')
    $('#puzzle-4').removeClass('hidden')
    // start counter
    countdown('4')
})

$('#puzzle4-table').on('click', 'td', function() {
    flag = 0
    indexflag = 0
    currentIndex = $(this).closest('tr').index() + ',' + $(this).index()
    if(lastIndex == ''){
        lastIndex = currentIndex
    } else {
        if(checkAdjacent(currentIndex)) {
            indexflag = 0
            lastIndex = currentIndex
        } else {
            indexflag = 1
            lastIndex = ''
            $('.temp-select').removeClass('temp-select')
            selectword = ''
        }
    }
    if(indexflag == 0) {
        selectword = selectword + $( this ).text()
        $(this).addClass('temp-select')
        for(var i=0;i<puzzle4.length;i++) {
            var str = puzzle4[i]
            check = str.replace(/\s/g, '')
            var n = check.startsWith(selectword.toLowerCase())
            if(n) {
                flag = 0
                if(check.localeCompare(selectword.toLowerCase()) == 0) {
                    answer4.push(str)
                    $('.temp-select').addClass('word-match')
                    $('.word-match').removeClass('temp-select')
                    selectword = ''
                    lastIndex = ''
                }
                break
            } else {
                flag = 1
            }
        }
        if(flag == 1) {
            $('.temp-select').removeClass('temp-select')
            selectword = ''
            lastIndex = ''
        }
    }
})

$('#complete-puzzle4').on('click', function(){
    $('#puzzle4').addClass('hidden')
    html=''
    for(var i=0;i<puzzle1.length;i++) {
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
    $('#puzzle4-result #score').text(answer1.length)
})

// puzzle 5 js
$('#puzzle5-start').click(function() {
    html=''
    for(var i=0;i<puzzle5.length;i++) {
        html = html + puzzle5[i] + '<br>'
    }
    $('#puzzle5-words').html(html)
    $('#puzzle-4').addClass('hidden')
    $('#puzzle-5').removeClass('hidden')
    // start counter
    countdown('5')
})

$('#puzzle5-table').on('click', 'td', function() {
    flag = 0
    indexflag = 0
    currentIndex = $(this).closest('tr').index() + ',' + $(this).index()
    if(lastIndex == ''){
        lastIndex = currentIndex
    } else {
        if(checkAdjacent(currentIndex)) {
            indexflag = 0
            lastIndex = currentIndex
        } else {
            indexflag = 1
            lastIndex = ''
            $('.temp-select').removeClass('temp-select')
            selectword = ''
        }
    }
    if(indexflag == 0) {
        selectword = selectword + $( this ).text()
        $(this).addClass('temp-select')
        for(var i=0;i<puzzle5.length;i++) {
            var str = puzzle5[i]
            check = str.replace(/\s/g, '')
            var n = check.startsWith(selectword.toLowerCase())
            if(n) {
                flag = 0
                if(check.localeCompare(selectword.toLowerCase()) == 0) {
                    answer5.push(str)
                    $('.temp-select').addClass('word-match')
                    $('.word-match').removeClass('temp-select')
                    selectword = ''
                    lastIndex = ''
                }
                break
            } else {
                flag = 1
            }
        }
        if(flag == 1) {
            $('.temp-select').removeClass('temp-select')
            selectword = ''
            lastIndex = ''
        }
    }
})

$('#complete-puzzle5').on('click', function(){
    $('#puzzle5').addClass('hidden')
    html=''
    for(var i=0;i<puzzle1.length;i++) {
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
    $('#puzzle5-result #score').text(answer1.length)
})

// end puzzle

$('#puzzle-end').click(function() {
    $('#puzzle-5').addClass('hidden')
    $('#endscreen').removeClass('hidden')
})

$('#review').click(function() {
    window.location.href = 'reviews'
})