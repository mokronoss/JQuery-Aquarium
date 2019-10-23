import $ from 'jquery';

$('body').css('backgroundColor', '#75e6e2');
const imgGoldfish = $('<img src="./assets/images/goldfish.svg" alt: goldfish id=goldfish />');
imgGoldfish.css({ height: '4.5rem', width: '4.5rem', transform: 'translate(500px,500px)' });


$('body').append(imgGoldfish);

const imgGoldfish2 = imgGoldfish.clone();
imgGoldfish2.css({ transform: 'translateX(600px)rotate(-30deg)' });
$('body').append(imgGoldfish2);

const whale = $('<img src="./assets/images/whale.svg" alt: whale id=whale />');
whale.appendTo('body');
whale.css({ height: '15rem', width: '15rem', transform: 'translateX(300px)' });
