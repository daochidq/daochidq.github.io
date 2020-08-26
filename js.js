var i = 0;
var k =0;
// var txt = 'Hi, I\'m Daoqi.\n' +
//     '                        A passionate and self-motivated Robotics Engineering graduate.' +
//     'I received my Master degree in Robotics from the University of Pennsylvania.' +
//     'I love buliding robots and enjoy programming the robots to make them automatic.'; /* The text */
var txt = 'Hi, I am Daoqi Zhang.'
var txt2 = 'And I\'m a Software Engineer.'
var speed = 80; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById('demo1').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter()

function typeWriter_1() {
    if (k < txt2.length) {
        document.getElementById('demo2').innerHTML += txt2.charAt(k);
        k++;
        setTimeout(typeWriter_1, speed);
    }
}
typeWriter_1()
// var app = document.getElementById('about');
//
// var typewriter = new Typewriter(app, {
//     loop: true
// });
//
// typewriter.typeString('Hello, my name is Daoqi. ')
//     .pauseFor(2500)
//     .typeString('A passionate and self-motivated Robotics Engineering graduate.I received my Master degree in Robotics from the University of Pennsylvania')
//     .pauseFor(2500)
//     .typeString('I love buliding robots and enjoy programming the robots to make them automatic. I would like to focus more on robots path planning in the furture.')
//     .pauseFor(2500)
//     .start();