const puzzle1 = ['magic kingdom','blizzard beach','theme parks','shows','florida','epcot','typhoon lagooi','fireworks','vacation','rides','resorts','attraactions','souveniers','tickets','orlando','characters','ears','pins'];
const puzzle2 = ['lee kuan yew','merlion','esplande','rapid transit','buses','golden jubilee','istana','war memorial','housing','jamban','durian','courtesy','padang','president','world war ii','raffles','politics','pap'];
const puzzle3 = ['tan tock seng','lee hsien loong','leekuan yew','merlion','padang','golden jubilee','president','buses','jamban','istana','water wally','pap','rapid transit','lim bo seng','housing','paya lebar','tony tan','politics','durian'];
const puzzle4 = ['ruby','diamond','emerald','pearl','aquamarine','sapphire','topaz','jade','opal','amethyst','citrine','garnet','jasper','kunzite','peridot','tanzanite','tourmaline','azurite','onyx'];
const puzzle5 = ['leonard','howard','penny','amy','theory','rajesh','sheldon','science','physics','comic book','ocd','scientist','pasadena','university','big bang','wolowitz','space','nebraska','caltech','stuart'];

var selectword = ''

var answer1 = []
var answer2 = []
var answer3 = []
var answer4 = []
var answer5 = []

var interval;

function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = $('.js-timeout').html();
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

      $('#timer').html(minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0) clearInterval(interval);
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

$('#puzzle1-scramble').on('click', 'td', function() {
    selectword = selectword + $( this ).text()
    $(this).css('background-color','red')
    alert(selectword)
})