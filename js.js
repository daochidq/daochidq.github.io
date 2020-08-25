var i = 0;
var txt = 'Hi, I\'m Daoqi.\n' +
    '                        A passionate and self-motivated Robotics Engineering graduate.' +
    'I received my Master degree in Robotics from the University of Pennsylvania.' +
    'I love buliding robots and enjoy programming the robots to make them automatic.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById('demo').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter()

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