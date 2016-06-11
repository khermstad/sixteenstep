// controller.js connects sixteenstep.js with ui.js --
// most elements in the HTML of the sequencer should use methods from this javascript file


// sequencer node toggles: logic + ui
function toggleNode4n(track, beat){

    toggleNodeState(track, beat);

    if (getNodeState(track, beat) == 1){
        UItrackNode4nON(track, beat);
    }
    else{
        UItrackNode4nOFF(track, beat);
    }
}

function toggleNode(track, beat){

    toggleNodeState(track, beat);

    if (getNodeState(track, beat) == 1){
        UItrackNodeON(track, beat);
    }
    else{
        UItrackNodeOFF(track, beat);

    }
}
