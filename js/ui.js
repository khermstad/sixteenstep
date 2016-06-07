// METRONOME UI

// declare all colors here, so refactoring style will be easier.
// ie. metronomeNodeON = "red"; metronomeNodeOFF = "lightpink";
var metronomeNodeON = "#FF0000"; // 'red'
var metronomeNodeOFF = "#FFB6C1"; // 'lightpink'

// setMetronome()
// gets currentBeat to update metronome state.
function setMetronome() {
    if (currentBeat == 0) {
        document.getElementById("m15").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m0").style.backgroundColor = metronomeNodeON;
    }
    if (currentBeat == 1) {
        document.getElementById("m0").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m1").style.backgroundColor = metronomeNodeON;
    }
    if (currentBeat == 2) {
        document.getElementById("m1").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m2").style.backgroundColor = metronomeNodeON;
    }
    if(currentBeat == 3) {
        document.getElementById("m2").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m3").style.backgroundColor = metronomeNodeON;
    }
    if (currentBeat == 4) {
        document.getElementById("m3").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m4").style.backgroundColor = metronomeNodeON;
    }
    if (currentBeat == 5){
        document.getElementById("m4").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m5").style.backgroundColor = metronomeNodeON;
    }
    if (currentBeat == 6){
        document.getElementById("m5").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m6").style.backgroundColor = metronomeNodeON;
    }
    if (currentBeat == 7){
        document.getElementById("m6").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m7").style.backgroundColor = metronomeNodeON;
    }
    if (currentBeat == 8){
        document.getElementById("m7").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m8").style.backgroundColor = metronomeNodeON;
    }
    if (currentBeat == 9){
        document.getElementById("m8").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m9").style.backgroundColor = metronomeNodeON;
    }
    if (currentBeat == 10){
        document.getElementById("m9").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m10").style.backgroundColor = metronomeNodeON;
    }
    if (currentBeat == 11){
        document.getElementById("m10").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m11").style.backgroundColor = metronomeNodeON;
    }
    if (currentBeat == 12){
        document.getElementById("m11").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m12").style.backgroundColor = metronomeNodeON;
    }
    if (currentBeat == 13){
        document.getElementById("m12").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m13").style.backgroundColor = metronomeNodeON;
    }
    if (currentBeat == 14){
        document.getElementById("m13").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m14").style.backgroundColor = metronomeNodeON;
    }
    if (currentBeat == 15){
        document.getElementById("m14").style.backgroundColor = metronomeNodeOFF;
        document.getElementById("m15").style.backgroundColor = metronomeNodeON;
    }
}

