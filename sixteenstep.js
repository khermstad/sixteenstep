/**
 *
 * Sixteen Step Sequencer
 * @author: Kris Hermstad (krishermstad@gmail.com)
 * @dateStarted: 6/3/2016
 *
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////   GLOBAL VARIABLES  ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Tone.Transport.timeSignature = [4, 4];
Tone.Transport.bpm.value = 120;
var currentBeat = 0;
var beatLimit = 15;
var currentlyPlaying = false;

// each button on the sequencer is called a "node."
// nodeState holds the current state (0 for off, 1 for on) of each node on the sequencer.
// [0-127] - 8 tracks, 16 nodes each - 1 node for each 16th note in a single 4/4 measure.

var nodeState = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track0: nodeState[0][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track1: nodeState[1][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track2: nodeState[2][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track3: nodeState[3][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track4: nodeState[4][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track5: nodeState[5][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],    // track6: nodeState[6][0-15]
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];   // track7: nodeState[7][0-15]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////    MAIN LOOP ///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * masterLoop: main loop for the sixteen step sequencer.
 * loop interval = "16n" - the loop iterates through each 16th note of 4/4 bar.
 * at each interval, the code inside the loop is executed.
 * @type {Tone.Loop}
 */

var masterLoop = new Tone.Loop(function(time) {


    console.log(currentBeat);
    updateCurrentBeat();

}, "16n").start(0);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////   SAMPLERS  ////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Samplers:
 * Each sampler holds "sets" of drum samples.  A.1 = first set, A.2 = second set, etc;
 * A.1: Roland TR 808 - samplebank/roland_TR_808/
 * @type {Tone}
 */

var t1sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Bassdrum-01.wav",
    }
}).toMaster();

var t2sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Clap.wav"
    }
}).toMaster();

var t3sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/Snaredrum.wav"
    }
}).toMaster();

var t4sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/HatOpen.wav"
    }
}).toMaster();

var t5sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/HatClosed.wav",
    }
}).toMaster();

var t6sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/TomH.wav"
    }
}).toMaster();

var t7sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/TomL.wav"
    }
}).toMaster();

var t8sampler = new Tone.Sampler({
    A : {
        1 : "./samplebank/roland_TR_808/TomM.wav"
    }
}).toMaster();

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

function togglePlayState(){
    if (currentlyPlaying == false) {
        Tone.Transport.start();
        currentlyPlaying = true;
    }
    else{
        Tone.Transport.stop();
        currentlyPlaying = false;
    }
}

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
    console.log(nodeState[track][beat]);
    return nodeState[track][beat];
}

function setNodeState(track, beat, newNodeState){
    nodeState[track][beat] = newNodeState;
}