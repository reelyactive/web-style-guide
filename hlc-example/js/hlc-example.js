/**
 * Copyright reelyActive 2021
 * We believe in an open Internet of Things
 */


// Constant definitions
const COSE_LAYOUT_OPTIONS = {
    name: "cose",
    animate: false,
    randomize: false,
    initialTemp: 40
};
const CONCENTRIC_LAYOUT_OPTIONS = {
    name: "concentric",
    startAngle: 0,
    sweep: Math.PI
};
const BREADTHFIRST_LAYOUT_OPTIONS = {
    name: "breadthfirst"
};
const GRAPH_STYLE = [
    { selector: "node[type='transmitter']",
      style: { "background-color": "#83b7d0" } },
    { selector: "node[type='receiver']",
      style: { "background-color": "#aec844", label: "data(name)" } },
    { selector: "node[image]",
      style: { "background-image": "data(image)", "border-color": "#aec844",
               "background-fit": "cover cover", "border-width": "2px" } },
    { selector: "edge", style: { "curve-style": "haystack",
                                 "line-color": "#ddd" } },
];
const EXAMPLE_GRAPH = [
    { transmitterSignature: "111111111111/3",
      rssiSignature: [ { receiverSignature: "aaaaaaaaaaaa/2" },
                       { receiverSignature: "bbbbbbbbbbbb/2" } ] },
    { transmitterSignature: "222222222222/3",
      rssiSignature: [ { receiverSignature: "bbbbbbbbbbbb/2" },
                       { receiverSignature: "aaaaaaaaaaaa/2" } ] },
    { transmitterSignature: "333333333333/3",
      rssiSignature: [ { receiverSignature: "aaaaaaaaaaaa/2" } ] },
    { transmitterSignature: "444444444444/3",
      rssiSignature: [ { receiverSignature: "aaaaaaaaaaaa/2" } ] },
    { transmitterSignature: "555555555555/3",
      rssiSignature: [ { receiverSignature: "bbbbbbbbbbbb/2" } ] },
    { transmitterSignature: "666666666666/3",
      rssiSignature: [ { receiverSignature: "bbbbbbbbbbbb/2" } ] }
];


// Other variables
let layoutOptions = COSE_LAYOUT_OPTIONS;
let selectedReceiverId;
let selectedTransmitterId;


// Initialise Cytoscape
let cy = cytoscape({
    container: document.getElementById('cy-full'),
    layout: COSE_LAYOUT_OPTIONS,
    style: GRAPH_STYLE
});
let layout = cy.layout({ name: "cose", cy: cy });
cy.on("tap", "node[type='receiver']", handleReceiverTap);
cy.on("tap", "node[type='transmitter']", handleTransmitterTap);


// Create the layout
EXAMPLE_GRAPH.forEach(addTransmitter);
updateLayout();


// Add a transmitter for the given raddec
function addTransmitter(raddec) {
  cy.add({ group: "nodes", renderedPosition: { x: 0, y: 0 },
           data: { id: raddec.transmitterSignature, type: "transmitter" } });
  addReceiverEdges(raddec);
}


// Add the edges, and, if necessary, receiver node, for the given raddec
function addReceiverEdges(raddec) {
  raddec.rssiSignature.forEach(function(entry) {
    let edgeSignature = raddec.transmitterSignature + '@' +
                        entry.receiverSignature;
    isExistingNode = (cy.getElementById(entry.receiverSignature).size() > 0);
    isExistingEdge = (cy.getElementById(edgeSignature).size() > 0);

    if(!isExistingNode) {
      cy.add({ group: "nodes", data: { id: entry.receiverSignature,
                                       type: "receiver" } });
    }
    if(!isExistingEdge) {
      cy.add({ group: "edges", data: { id: edgeSignature,
                                       source: raddec.transmitterSignature,
                                       target: entry.receiverSignature } });
    }
  });
}


// Handle the tap of a transmitter node
function handleTransmitterTap(evt) {
  let node = evt.target;

  let isNewSelectedTransmitter = (node.id() !== selectedTransmitterId);
  let breadthfirstLayoutOptions = Object.assign({ roots: node },
                                                BREADTHFIRST_LAYOUT_OPTIONS);

  if(isNewSelectedTransmitter) {
    selectedTransmitterId = node.id();
    updateLayout(breadthfirstLayoutOptions);
  }
  else if(layoutOptions.name === 'breadthfirst') {
    updateLayout(COSE_LAYOUT_OPTIONS);
  }
  else {
    updateLayout(breadthfirstLayoutOptions);
  }
}


// Handle the tap of a receiver node
function handleReceiverTap(evt) {
  let node = evt.target;

  let isNewSelectedReceiver = (node.id() !== selectedReceiverId);

  if(isNewSelectedReceiver) {
    selectedReceiverId = node.id();
    updateLayout(CONCENTRIC_LAYOUT_OPTIONS);
  }
  else if(layoutOptions.name === 'concentric') {
    updateLayout(COSE_LAYOUT_OPTIONS);
  }
  else {
    updateLayout(CONCENTRIC_LAYOUT_OPTIONS);
  }
}


// Update the layout and set a timeout for the next update
function updateLayout(newLayoutOptions) {
  if(newLayoutOptions) {
    layoutOptions = newLayoutOptions;
  }

  layout.stop();
  layout = cy.elements().makeLayout(layoutOptions);
  layout.run();
}