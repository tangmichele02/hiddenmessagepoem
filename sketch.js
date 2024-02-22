// please click on the poem and draw after reading!
var black = [0, 0, 0];
var gray = [135, 141, 150];

let txt1 =
  "I open my eyes to the sunrise. I break from sleep after dawn. I wake from last night's slumber. I open the window.";
let txt2 =
  "the memories of summers past. the dreams of future lives. the scars of memories past. the sunlight beaming down on me.";
let txt3 =
  "went to the seaside. danced across the shore. wandered around the lake. explored beyond the sealine. ventured across the forest.";
let txt4 =
  "to the open I went. to the daylight I sought. to the darkness I felt. to the lightness of air. to the ocean I swam.";
let txt5 =
  "rich with salty air. filled with warmth. decorated with sorrow. welded by god's hands. grown from earth's gifts.";

function setup() {
  background('white');
  createCanvas(windowWidth, windowHeight);
  textSize(16);
  textAlign(LEFT);
  textStyle(ITALIC);
  noStroke();

  rm1 = RiTa.markov(2);
  rm1.addText(txt1);
  rm2 = RiTa.markov(2);
  rm2.addText(txt2);
  rm3 = RiTa.markov(2);
  rm3.addText(txt3);
  rm4 = RiTa.markov(2);
  rm4.addText(txt4);
  rm5 = RiTa.markov(2);
  rm5.addText(txt5);

  sentence1 = rm1.generate();
  sentence1 = sentence1.slice(0, -1) + " ";
  sentence2 = rm2.generate();
  sentence2 = sentence2.slice(0, -1) + " ";
  sentence3 = rm3.generate();
  sentence3 = sentence3.slice(0, -1) + " ";
  sentence4 = rm4.generate();
  sentence4 = sentence4.slice(0, -1) + " ";
  sentence5 = rm5.generate();
  sentence5 = sentence5.slice(0, -1) + " ";
}

function draw() {
  textAlign(LEFT);

  let lines = [
    [
      ["when ", gray],
      [sentence1, black],
    ],
    [
      ["when ", black],
      [sentence1, black],
    ],
    [
      ["I think of ", gray],
      [sentence2, black],
    ],
    [
      ["I think of ", black],
      [sentence2, black],
    ],
    [
      ["remember when ", black],
      ["you and me ", gray],
      [sentence3, black],
    ],
    [
      ["remember when ", black],
      ["you and me ", black],
      [sentence3, black],
    ],
    [
      [sentence5, black],
      ["the stars ", gray],
      ["seemed to glow", black],
    ],
    [
      [sentence5, black],
      ["the stars ", black],
      ["seemed to glow", black],
    ],
    [
      ["the ", black],
      ["light ", gray],
      ["from the houses twinkled", black],
    ],
    [
      ["the ", black],
      ["light ", black],
      ["from the houses twinkled", black],
    ],
    [
      ["looking ", black],
      ["up ", gray],
      [sentence4, black],
    ],
    [
      ["looking ", black],
      ["up ", black],
      [sentence4, black],
    ],
    [
      ["I could see ", black],
      ["my ", gray],
      ["reflection", black],
    ],
    [
      ["I could see ", black],
      ["my ", black],
      ["reflection", black],
    ],
    [
      ["above, ", black],
      ["glowing in the ", black],
      ["midnight sky", gray],
    ],
    [
      ["above, ", black],
      ["glowing in the ", black],
      ["midnight sky", black],
    ],
  ];

  text("A letter for you", 50, 30);
  for (let i = 0; i < lines.length; i += 2) {
    drawtext(50, 80 + i * 17, lines[i]);
    drawtext(50, 80 + i * 17, lines[i + 1]);
  }

  if (mouseIsPressed) {
    blendMode(LIGHTEST);
    fill(0, 0, 0);
    ellipse(mouseX, mouseY, 100, 100);
  } else {
    blendMode(BLEND);
  }
}

// taken from https://stackoverflow.com/questions/52614829/p5-js-change-text-color-in-for-a-single-word-in-a-sentence
function drawtext(x, y, text_array) {
  var pos_x = x;
  for (var i = 0; i < text_array.length; ++i) {
    var part = text_array[i];
    var t = part[0];
    var c = part[1];
    var w = textWidth(t);
    fill(c);
    text(t, pos_x, y);
    pos_x += w;
  }
}
