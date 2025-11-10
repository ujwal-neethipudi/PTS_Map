import data from "../../data/map_data_demo.json" assert { type: "json" };

const poster = document.getElementById("poster");
const svg = document.getElementById("connections");

const buckets = [
  "Messaging & Media",
  "Engagement & Mobilisation",
  "Fundraising",
  "Research & Insights",
  "Data Analytics & Modeling",
  "GovTech / Civic Infrastructure",
  "Voting Tech",
  "Movement-Wide & Organisational Infrastructure"
];

// basic color palette per category (purple-vibrant variants)
const colors = [
  "bg-fuchsia-50", "bg-violet-50", "bg-purple-50", "bg-pink-50",
  "bg-purple-100", "bg-fuchsia-100", "bg-violet-100", "bg-pink-100"
];

// build 8 boxes
buckets.forEach((bucket, i) => {
  const box = document.createElement("section");
  box.className = `${colors[i]} border border-purple-200 rounded-2xl p-6 flex flex-col items-center justify-start shadow-md relative`;
  box.id = `box-${i}`;

  const title = document.createElement("h2");
  title.textContent = bucket;
  title.className = "text-xl font-semibold mb-4 text-center text-primary-dark";
  box.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "grid grid-cols-4 gap-3 items-center justify-items-center w-full";

  const entries = data[bucket] || [];
  const placeholder = "../logos/Pakflatt.jpeg";

  entries.slice(0, 8).forEach((e) => {
    const img = document.createElement("img");
    img.src = e.logo || placeholder;
    img.alt = e.name;
    img.className = "max-h-16 object-contain";
    grid.appendChild(img);
  });

  box.appendChild(grid);
  poster.appendChild(box);
});

// --- draw curved SVG arrows between category boxes ---
function curvedPath(x1, y1, x2, y2, offset = 120) {
  const cx1 = x1 + offset;
  const cx2 = x2 - offset;
  return `M${x1},${y1} C${cx1},${y1} ${cx2},${y2} ${x2},${y2}`;
}

// wait a moment for layout, then draw lines
setTimeout(() => {
  const boxes = [...poster.children];
  const lines = [
    [0, 1], [1, 2], [0, 4], [4, 1], [1, 5], [5, 6], [7, 1]
  ];
  const svgNS = "http://www.w3.org/2000/svg";
  lines.forEach(([from, to]) => {
    const b1 = boxes[from].getBoundingClientRect();
    const b2 = boxes[to].getBoundingClientRect();
    const x1 = b1.x + b1.width / 2 - poster.getBoundingClientRect().x;
    const y1 = b1.y + b1.height / 2 - poster.getBoundingClientRect().y;
    const x2 = b2.x + b2.width / 2 - poster.getBoundingClientRect().x;
    const y2 = b2.y + b2.height / 2 - poster.getBoundingClientRect().y;

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", curvedPath(x1, y1, x2, y2, 150));
    path.setAttribute("stroke", "rgba(168,85,247,0.25)");
    path.setAttribute("stroke-width", "4");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke-linecap", "round");
    svg.appendChild(path);
  });
}, 800);
