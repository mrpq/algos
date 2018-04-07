const mat = num => {
  const sq = num * num;
  let indexes = [];
  let phase = 1;
  let xMin = 0;
  let xMax = num - 1;
  let yMin = 0;
  let yMax = num - 1;
  while (indexes.length < sq) {
    if (phase > 4) {
      phase = 1;
    }
    if (phase === 1) {
      let y = yMin;
      for (let x = xMin; x <= xMax; x += 1) {
        indexes.push([x, y]);
      }
      yMin += 1;
      phase += 1;
    } else if (phase === 2) {
      let x = xMax;
      for (let y = yMin; y <= yMax; y += 1) {
        indexes.push([x, y]);
      }
      xMax -= 1;
      phase += 1;
    } else if (phase === 3) {
      let y = yMax;
      for (let x = xMax; x >= xMin; x -= 1) {
        indexes.push([x, y]);
      }
      yMax -= 1;
      phase += 1;
    } else {
      let x = xMin;
      for (let y = yMax; y >= yMin; y -= 1) {
        indexes.push([x, y]);
      }
      xMin += 1;
      phase += 1;
    }
  }

  let mat = [];
  for (let x = 0; x < num; x += 1) {
    mat.push([]);
  }
  for (let i = 0; i < indexes.length; i += 1) {
    const idx = indexes[i];
    mat[idx[1]][idx[0]] = i + 1;
  }
  return mat;
};

const input = document.getElementById("num");
const div = document.getElementById("mat");
const btn = document.getElementById("sub");

const makeTableRow = row => {
  let tr = document.createElement("tr");
  row.forEach(num => {
    const td = document.createElement("td");
    td.innerHTML = num;
    tr.appendChild(td);
  });
  return tr;
};

btn.addEventListener("click", e => {
  e.preventDefault();
  const num = parseInt(input.value, 10);
  const res = mat(num);
  const table = document.createElement("table");
  res.forEach(row => {
    table.appendChild(makeTableRow(row));
  });
  div.innerHTML = "";
  div.appendChild(table);
});
