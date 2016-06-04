/**
 *
 * Sixteen Step Sequencer
 * @author: Kris Hermstad (krishermstad@gmail.com)
 *
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

var nodeState = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // track1: (0-15)
                 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // track2: (0-15) + 16
                 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // track3: (0-15) + 32
                 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // track4: (0-15) + 48
                 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // track5: (0-15) + 64
                 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // track6: (0-15) + 80
                 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // track7: (0-15) + 96
                 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];   // track8: (0-15) + 112

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////    MAIN LOOP ///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var masterLoop = new Tone.Loop(function(time) {

    console.log(currentBeat);
    updateCurrentBeat();

}, "16n").start(0);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////   SAMPLERS  ////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





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

function toggleNodeState(node){
    if (getNodeState(node) == 0){
        turnOnNode(node);
    }
    else {
        turnOffNode(node);
    }
}

function turnOnNode(node){
    setNodeState(node, 1);
}

function turnOffNode(node){
    setNodeState(node, 0);
}

function getNodeState(node){
    return nodeState[node];
}

function setNodeState(node, newNodeState){
    nodeState[node] = newNodeState;
}