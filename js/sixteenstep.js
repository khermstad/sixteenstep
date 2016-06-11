/**
 *
 * Sixteen Step Sequencer
 * @author: Kris Hermstad (krishermstad@gmail.com)
 * @dateStarted: 6/3/2016
 *
 */

Tone.Transport.timeSignature = [4, 4];
Tone.Transport.bpm.value = 120;
var currentBeat = 0;
var beatLimit = 15;
var currentSampleSet = "A.1";
var currentlyPlaying = false;

// Each button on the sequencer is called a "node."
// nodeState holds the current state (0 for off, 1 for on) of each node on the sequencer.
// nodeState[track: 0-9][beat: 0-15] - 10 tracks, 16 nodes each - 1 node for each 16th note in a single 4/4 measure.

var nodeState = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track0: nodeState[0][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track1: nodeState[1][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track2: nodeState[2][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track3: nodeState[3][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track4: nodeState[4][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track5: nodeState[5][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track6: nodeState[6][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track7: nodeState[7][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track8: nodeState[8][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];   // track9: nodeState[9][0-15]

function toggleNodeState(track, beat){
    if (getNodeState(track, beat) == 0){
        turnOnNode(track, beat);
    }
    else {
        turnOffNode(track, beat);
    }
}

function turnOnNode(track, beat){
    setNodeState(track, beat, 1);
}

function turnOffNode(track, beat){
    setNodeState(track, beat, 0);
}

function getNodeState(track, beat){
    return nodeState[track][beat];
}

function setNodeState(track, beat, newNodeState){
    nodeState[track][beat] = newNodeState;
}

// triggerActiveNodes():
// loops through all samplers in samplerArray and checks if node at beat is ON. (nodeState[track][beat] == 1) -> on
// if node is ON, the sample is triggered.
function triggerActiveNodes() {
    for (i = 0; i < samplerArray.length; i++){
        if (nodeState[i][currentBeat] == 1) {
            samplerArray[i].triggerAttack(currentSampleSet);
        }
    }
}

/**
 * masterLoop: main loop for the sixteen step sequencer.
 * loop interval = "16n" - the loop iterates through each 16th note of 4/4 bar.
 * at each interval, the code inside the loop is executed.
 * @type {Tone.Loop}
 */

var masterLoop = new Tone.Loop(function(time) {
    setMetronome();
    triggerActiveNodes();
    console.log(currentBeat);
    updateCurrentBeat();

}, "16n").start(0);

// toggleLoopState():
// play/pause for mainLoop
function startLoop(){
    Tone.Transport.start();
    currentlyPlaying = true;
}

function stopLoop(){
    Tone.Transport.stop();
    currentlyPlaying = false;
}

/**
 * Samplers:
 * Each sampler holds "sets" of drum samples.  A.1 = first set, A.2 = second set, etc;
 *
 * A.1: Roland TR 808 - samplebank/roland_TR_808/
 *
 * @type {Tone}
 */

var t0 = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Bassdrum-01.wav",
    }
}).toMaster();

var t1 = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Clap.wav"
    }
}).toMaster();

var t2 = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Snaredrum.wav"
    }
}).toMaster();

var t3 = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/HatOpen.wav"
    }
}).toMaster();

var t4 = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/HatClosed.wav",
    }
}).toMaster();

var t5 = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/TomH.wav"
    }
}).toMaster();

var t6 = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/TomL.wav"
    }
}).toMaster();

var t7 = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Cowbell.wav"
    }
}).toMaster();

var t8 = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Crash-01.wav"
    }
}).toMaster();

var t9 = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Crash-02.wav"
    }
}).toMaster();

// samplerArray holds all samplers being used.  this allows for easy iteration through each sampler
// to determine which nodes are on. To add a new track to the sampler, simply add the sampler to this array.
// The only code that should be changed when adding a sampler is in this section.  Code should be modular.

samplerArray = [t0, t1, t2, t3, t4, t5, t6, t7, t8, t9];

// default currentSampleSet == "A.1"
function setCurrentSampleSet(newSampleSet){
    currentSampleSet = newSampleSet;
}

// updateCurrentBeat():
function updateCurrentBeat(){
    if (currentBeat < beatLimit){
        currentBeat++;
    }
    else {
        currentBeat = 0;
    }
}

function increaseBpm(){
    Tone.Transport.bpm.value += 5;
}

function decreaseBpm(){
    Tone.Transport.bpm.value -= 5;
    if (Tone.Transport.bpm.value < 5){
        Tone.Transport.bpm.value = 5;
    }
}

function increaseVolume(){
    Tone.Master.volume.value += 5;
}

function decreaseVolume(){
    Tone.Master.volume.value -= 5;
}

function reset(){
    location.reload();
}



