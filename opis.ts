let pasazerowie = document.getElementsByTagName('li');

function pasazerNajwiekszyNumer() {
    var nr = pasazerowie[0].getAttribute('data-numer');
    for (var i=0; i<pasazerowie.length; i++) {
        if (pasazerowie[i].getAttribute('data-numer') > nr)
        nr = pasazerowie[i].getAttribute('data-numer');
    }
    console.log(nr);
}


pasazerNajwiekszyNumer();