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

// loops through all samplers in samplerArray and checks if node at beat is ON. (nodeState[track][beat] == 1) -> on
// if node is ON, the sample is triggered.
function triggerActiveNodes() {
    for (i = 0; i < samplerArray.length; i++){
        if (nodeState[i][currentBeat] == 1) {
            samplerArray[i].triggerAttack(currentSet);
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////    MAIN LOOP ///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * masterLoop: main loop for the sixteen step sequencer.
 * loop interval = "16n" - the loop iterates through each 16th note of 4/4 bar.
 * at each interval, the code inside the loop is executed.
 * @type {Tone.Loop}
 */

var currentlyPlaying = false;

var masterLoop = new Tone.Loop(function(time) {

    triggerActiveNodes();
    console.log(currentBeat);
    updateCurrentBeat();

}, "16n").start(0);


function toggleLoopState(){
    if (currentlyPlaying == false) {
        Tone.Transport.start();
        currentlyPlaying = true;
    }
    else{
        Tone.Transport.stop();
        currentlyPlaying = false;
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////   SAMPLERS  ////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Samplers:
 * Each sampler holds "sets" of drum samples.  A.1 = first set, A.2 = second set, etc;
 *
 * A.1: Roland TR 808 - samplebank/roland_TR_808/
 *
 * @type {Tone}
 */


var currentSet = "A.1";

function setCurrentSet(newSet){
    currentSet = newSet;
}

var t0sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Bassdrum-01.wav",
    }
}).toMaster();

var t1sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Clap.wav"
    }
}).toMaster();

var t2sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Snaredrum.wav"
    }
}).toMaster();

var t3sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/HatOpen.wav"
    }
}).toMaster();

var t4sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/HatClosed.wav",
    }
}).toMaster();

var t5sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/TomH.wav"
    }
}).toMaster();

var t6sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/TomL.wav"
    }
}).toMaster();

var t7sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Cowbell.wav"
    }
}).toMaster();

var t8sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Crash-01.wav"
    }
}).toMaster();

var t9sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Crash-02.wav"
    }
}).toMaster();

// samplerArray holds all samplers being used.  this allows for easy iteration through each sampler
// to determine which nodes are on. To add a new track to the sampler, simply add the sampler to this array.
// The only code that should be changed when adding a sampler is in this section.  Code should be modular.

samplerArray = [t0sampler, t1sampler, t2sampler, t3sampler,
                t4sampler, t5sampler, t6sampler, t7sampler,
                t8sampler, t9sampler];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////   METHODS  /////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function updateCurrentBeat(){
    if (currentBeat < beatLimit){
        currentBeat++;
    }
    else {
        currentBeat = 0;
    }
}