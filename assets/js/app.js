const puzzle1 = ['magic kingdom','blizzard beach','theme parks','shows','florida','epcot','typhoon lagooi','fireworks','vacation','rides','resorts','attraactions','souveniers','tickets','orlando','characters','ears','pins'];
const puzzle2 = ['lee kuan yew','merlion','esplande','rapid transit','buses','golden jubilee','istana','war memorial','housing','jamban','durian','courtesy','padang','president','world war ii','raffles','politics','pap'];
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

function countdown() {
    clearInterval(interval);
    interval = setInterval( function() {
        var timer = $('#timer-puzzle1').html();
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

        $('#timer-puzzle1').html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0) {
            clearInterval(interval)
            $('#complete-puzzle1').click()
        };
    }, 1000);
}

$('#start').click(function(){
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
    countdown()
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
    $('#puzzle1-result').removeClass('hidden')
    $('#puzzle1-result #result').html(html)
    $('#puzzle1-result #score').text(answer1.length)
})