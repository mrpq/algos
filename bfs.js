// put your javascript (node.js) code here
process.stdin.setEncoding("utf-8");
process.stdin.on("data", data => {
  const inputLines = data.split("\n");
  let [numV, numE] = inputLines[0].split(" ");
  numV = Number(numV);
  numE = Number(numE);
  const edges = inputLines
    .slice(1, inputLines.length - 1)
    .map(line => line.split(" ").map(e => Number(e)));
  //init verts
  const verts = [];
  const pathLengths = [];
  for (let i = 1; i <= numV; i += 1) {
    verts.push(i);
    // pathLengths[i-1] = 0;
  }
  const redVerts = [];
  const queue = [];

  const bfs = currentDepth => {
    while (queue.length) {
      const vert = queue.pop();
      const children = edges
        .filter(e => e[0] === vert || e[1] === vert)
        .map(e => (e[0] === vert ? e[1] : e[0]))
        .filter(child => redVerts.indexOf(child) === -1);
      children.forEach(ch => {
        pathLengths[ch] = currentDepth;
        redVerts.push(ch);
        queue.unshift(ch);
      });
    }
  };

  pathLengths[0] = 0;
  queue.push(0);
  redVerts.push(0);
  bfs(1);
  const res = pathLengths.join(" ");
  process.stdout.write(res);
});

const pathLengths = [];
const matrix = new Map();
for (let i = 0; i < numV; i += 1) {
  matrix.set(i, new Set());
}

const redVerts = new Set();
const queue = [];
const tree = [];

const bfs = currentDepth => {
  while (queue.length) {
    const vert = queue.pop();
    const incVerts = matrix.get(vert);
    Array.from(incVerts).forEach(iv => {
      const white = !redVerts.has(iv);
      if (white) {
        tree.push([vert, iv]);
        redVerts.add(iv);
        queue.unshift(iv);
      }
    });
  }
};

pathLengths[0] = 0;
queue.push(0);
redVerts.add(0);
edges.forEach(e => {
  matrix.get(e[0]).add(e[1]);
  matrix.get(e[1]).add(e[0]);
});
bfs(1);
tree.forEach(e => {
  pathLengths[e[1]] = pathLengths[e[0]] + 1;
});
pathLengths;
