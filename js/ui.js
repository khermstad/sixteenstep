// sequencer trackNode UI:
// trackNode represents each node on the sequencer.
// trackNode4n is the node that is on every quarter note downbeat. all others are regular track nodes.
// color styles for trackNode

// non quarter(4n) nodes
var trackNodeOFFColor = "#D3D3D3"; /* lightgray */
var trackNodeONColor = "#32CD32"; /* limegreen */

// quarter(4n) nodes
var trackNode4nOFFColor = "#696969"; /* dim grey */
var trackNode4nONColor = "#663399"; /* rebeccapurple */

function UItrackNode4nON(track, beat){
    var nodeId = track.toString() + beat.toString();
    document.getElementById(nodeId).style.backgroundColor = trackNode4nONColor;
}

function UItrackNode4nOFF(track, beat){
    var nodeId = track.toString() + beat.toString();
    document.getElementById(nodeId).style.backgroundColor = trackNode4nOFFColor;
}

function UItrackNodeON(track, beat){
    var nodeId = track.toString() + beat.toString();
    document.getElementById(nodeId).style.backgroundColor = trackNodeONColor;
}

function UItrackNodeOFF(track, beat){
    var nodeId = track.toString() + beat.toString();
    document.getElementById(nodeId).style.backgroundColor = trackNodeOFFColor;
}

// METRONOME UI
// declare all colors here, so refactoring style will be easier.
// ie. metronomeNodeONColor = "red"; metronomeNodeOFFColor = "lightpink";
var metronomeNodeONColor = "#FF0000"; // 'red'
var metronomeNodeOFFColor = "#FFB6C1"; // 'lightpink'

// setMetronome()
// gets currentBeat to update metronome state.
function setMetronome() {
    if (currentBeat == 0) {
        document.getElementById("m15").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m0").style.backgroundColor = metronomeNodeONColor;
    }
    if (currentBeat == 1) {
        document.getElementById("m0").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m1").style.backgroundColor = metronomeNodeONColor;
    }
    if (currentBeat == 2) {
        document.getElementById("m1").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m2").style.backgroundColor = metronomeNodeONColor;
    }
    if(currentBeat == 3) {
        document.getElementById("m2").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m3").style.backgroundColor = metronomeNodeONColor;
    }
    if (currentBeat == 4) {
        document.getElementById("m3").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m4").style.backgroundColor = metronomeNodeONColor;
    }
    if (currentBeat == 5){
        document.getElementById("m4").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m5").style.backgroundColor = metronomeNodeONColor;
    }
    if (currentBeat == 6){
        document.getElementById("m5").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m6").style.backgroundColor = metronomeNodeONColor;
    }
    if (currentBeat == 7){
        document.getElementById("m6").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m7").style.backgroundColor = metronomeNodeONColor;
    }
    if (currentBeat == 8){
        document.getElementById("m7").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m8").style.backgroundColor = metronomeNodeONColor;
    }
    if (currentBeat == 9){
        document.getElementById("m8").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m9").style.backgroundColor = metronomeNodeONColor;
    }
    if (currentBeat == 10){
        document.getElementById("m9").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m10").style.backgroundColor = metronomeNodeONColor;
    }
    if (currentBeat == 11){
        document.getElementById("m10").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m11").style.backgroundColor = metronomeNodeONColor;
    }
    if (currentBeat == 12){
        document.getElementById("m11").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m12").style.backgroundColor = metronomeNodeONColor;
    }
    if (currentBeat == 13){
        document.getElementById("m12").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m13").style.backgroundColor = metronomeNodeONColor;
    }
    if (currentBeat == 14){
        document.getElementById("m13").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m14").style.backgroundColor = metronomeNodeONColor;
    }
    if (currentBeat == 15){
        document.getElementById("m14").style.backgroundColor = metronomeNodeOFFColor;
        document.getElementById("m15").style.backgroundColor = metronomeNodeONColor;
    }
}

