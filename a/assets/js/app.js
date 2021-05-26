const puzzle1 = ['magic kingdom','blizzard beach','theme parks','shows','florida'];
const puzzle2 = ['lee kuan yew','merlion','esplanade','rapid transit','buses'];
const puzzle3 = ['tan tock seng','lee hsien loong','leekuan yew','merlion','padang'];

var selectword = ''

var lastIndex = ''

var answer1 = []
var answer2 = []
var answer3 = []

var leftButtonDown = false;

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

function timer(id) {
    interval = setInterval( function() {
        var timer = $('#timer-puzzle'+id).html();
        timer = timer.split(':');
        var minutes = parseInt(timer[0]);
        var seconds = parseInt(timer[1]);
        seconds += 01;
        
        if(seconds > 59) {
            minutes +=1
            seconds = 00
        }
        if(seconds<10){
            seconds = '0'+seconds
        }
        $('#timer-puzzle'+id).html(minutes + ':' + seconds);
    }, 1000);
}

// end puzzle

$('#puzzle-end').click(function() {
    $('#puzzle-3').addClass('hidden')
    $('#endscreen').removeClass('hidden')
})

$('#review').click(function() {
    window.location.href = 'reviews'
})
$('#welcome-screen').click(function() {
    $('#rules').addClass('hidden')
    $('#welcome').removeClass('hidden')
})