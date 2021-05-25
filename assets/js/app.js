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

function timer() {
    interval = setInterval( function() {
        var timer = $('#timer-puzzle1').html();
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
        $('#timer-puzzle1').html(minutes + ':' + seconds);
        $('#timer-puzzle2').html(minutes + ':' + seconds);
        $('#timer-puzzle3').html(minutes + ':' + seconds);
        $('#timer-puzzle4').html(minutes + ':' + seconds);
        $('#timer-puzzle5').html(minutes + ':' + seconds);
    }, 1000);
}

// end puzzle

$('#puzzle-end').click(function() {
    $('#puzzle-5').addClass('hidden')
    $('#endscreen').removeClass('hidden')
})

$('#review').click(function() {
    window.location.href = 'reviews'
})