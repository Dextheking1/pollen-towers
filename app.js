"use strict";

/* ------------------------------------------------------------------ data */

const COMPANIES = [
  {
    floor: 1,
    id: "stackline",
    name: "Stackline Dev Studio",
    kind: "Software studio",
    agentName: "tower-stackline",
    agentId: "7f564f62-6995-468f-931c-4d4f921e20e7",
    model: "community/Dextheking1/tower-stackline",
    color: 0x4da3ff,
    css: "#4da3ff",
    blurb: "Small web tools, bug fixes and maintenance for existing codebases. The agent writes code and tests, then queues pull requests for the owner to review and merge.",
    done: [
      "Fixed the export bug in a client CSV tool, tests green",
      "Built a link checker for a docs site, 214 pages scanned",
      "Updated dependencies on two client repos, no breaking changes"
    ],
    waiting: [
      "Merge pull request 14 (the CSV fix), or hold it for the client release?",
      "Quote for the booking site rebuild: 2 weeks, or 3 with payments included?"
    ],
    demo: [
      "Today I fixed a CSV export bug and got the tests green. The pull request is waiting on the owner, merges are his call.",
      "We take small, well-scoped jobs: tools, fixes, maintenance. Send a repo link and I will scope it and bring the owner a quote.",
      "My rule is the smallest correct change, with tests. If a job needs a product decision, I stop and ask the owner instead of guessing."
    ],
    services: "Stackline builds small web tools, fixes bugs, and maintains existing codebases. The agent does the coding and testing; the owner reviews and merges."
  },
  {
    floor: 2,
    id: "forma",
    name: "Forma Design Studio",
    kind: "Design shop",
    agentName: "tower-forma",
    agentId: "8c80898f-ffa6-4dc5-87ab-7e3d347c165d",
    model: "community/Dextheking1/tower-forma",
    color: 0xff7ab6,
    css: "#ff7ab6",
    blurb: "Landing pages, brand basics and product UI polish. The agent drafts options and writes UI copy; the owner picks the direction and signs off the final look.",
    done: [
      "Drafted 3 landing page directions for a coffee subscription launch",
      "Wrote UI copy for a checkout flow, plain language pass done",
      "Built a starter brand board: two type pairings, one palette"
    ],
    waiting: [
      "Pick a landing direction: A (bold), B (calm) or C (playful)?",
      "Logo budget: keep the wordmark simple, or commission custom lettering?"
    ],
    demo: [
      "I drafted three landing directions for a client this morning. The owner picks one, I polish that one. Taste calls stay with the human.",
      "For a landing page I start with three questions: who is it for, what should they do, what should it feel like. Then I draft.",
      "I can show you the brand board format we use: two type pairings, one palette, and example headlines in the client's voice."
    ],
    services: "Forma designs landing pages, brand basics and product UI. The agent drafts options and copy; the owner makes the taste and budget calls."
  },
  {
    floor: 3,
    id: "plaintext",
    name: "Plaintext Writing Studio",
    kind: "Writing studio",
    agentName: "tower-plaintext",
    agentId: "6cf26e44-7019-48b1-82b3-ac995a62ea8e",
    model: "community/Dextheking1/tower-plaintext",
    color: 0xffd166,
    css: "#ffd166",
    blurb: "Documentation, changelogs and help pages in plain language. The agent drafts and edits; every text waits for the owner's edit pass before it ships.",
    done: [
      "Rewrote a help center intro, reading time cut from 6 to 3 minutes",
      "Drafted an October changelog for a client app, 14 entries",
      "Edited a 9 page onboarding guide into plain language"
    ],
    waiting: [
      "Approve the claim on page 2 of the guide, or soften it first?",
      "Publish the changelog Friday, or wait for the hotfix to land?"
    ],
    demo: [
      "My house rules: short sentences, common words, no filler, no hype. Headings should say what the section does.",
      "Today I cut a help page from 6 minutes of reading to 3. Same facts, half the words.",
      "I draft, the owner edits. Claims and tone calls are flagged for the owner, never guessed."
    ],
    services: "Plaintext writes product docs, changelogs and help pages, and does plain language edit passes on existing text."
  },
  {
    floor: 4,
    id: "meridian",
    name: "Meridian Research Lab",
    kind: "Research lab",
    agentName: "tower-meridian",
    agentId: "cc3320ed-db73-4de7-afb1-fcacab833243",
    model: "community/Dextheking1/tower-meridian",
    color: 0x6ee7a0,
    css: "#6ee7a0",
    blurb: "Literature reviews, tool comparisons and due diligence briefs. The agent reads and summarizes with sources; the owner checks the claims that matter.",
    done: [
      "Brief: vector databases compared, 6 tools, sources linked",
      "Read 4 papers on agent evaluation, summary sent to the owner",
      "Due diligence notes on a transcription vendor, pricing verified"
    ],
    waiting: [
      "Which brief goes to the client first: databases or agent evals?",
      "Renew the data source subscription at the higher tier?"
    ],
    demo: [
      "Every brief I write separates what the source says from what I infer. Unverified claims get flagged, not smoothed over.",
      "This week I compared 6 vector databases on price, limits and self-hosting. The full brief is with the owner for sign-off.",
      "Give me a question and I will bring back a short brief with sources, not a pile of links."
    ],
    services: "Meridian produces literature reviews, tool comparisons and technical due diligence briefs, all with sources."
  },
  {
    floor: 5,
    id: "rampart",
    name: "Rampart Audit Studio",
    kind: "Security audit studio",
    agentName: "tower-rampart",
    agentId: "dfb6a5ac-118c-4cd4-ae96-e31ada8919d2",
    model: "community/Dextheking1/tower-rampart",
    color: 0xb79cff,
    css: "#b79cff",
    blurb: "Code audits, dependency reviews and pre-launch security checks. The agent triages findings and drafts reports; publishing anything is always the owner's decision.",
    done: [
      "Triaged 23 findings on a client API, 2 critical, reports drafted",
      "Rechecked a fixed auth bypass, fix confirmed in the new build",
      "Dependency review: 4 packages with known issues, upgrade paths listed"
    ],
    waiting: [
      "Publish the audit report Friday, or wait for the last fix to land?",
      "Accept the rush job for next week at the higher rate?"
    ],
    demo: [
      "I triage by severity and write up what I actually checked. If I did not verify something, the report says so.",
      "Our checks: auth, input handling, dependency risk, and what an attacker gains from each finding. Reports stay private until the owner publishes.",
      "A typical audit takes days, not weeks. The agent does the reading and drafting; the owner makes the final severity calls."
    ],
    services: "Rampart does code audits, dependency reviews and pre-launch security checks for small teams."
  }
];

const byFloor = {};
COMPANIES.forEach(c => { byFloor[c.floor] = c; });

let selectedFloor = 5;
const chatHistory = {};   // company id -> [{role, text, demo}]
const demoIndex = {};     // company id -> rotation counter

/* ------------------------------------------------------------------ views */

const tabs = document.querySelectorAll(".tab");
tabs.forEach(t => t.addEventListener("click", () => {
  tabs.forEach(x => x.classList.toggle("active", x === t));
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById("view-" + t.dataset.view).classList.add("active");
  if (t.dataset.view === "tower") resizeScene();
}));

function goToCompany(floor) {
  selectFloor(floor);
  document.querySelector('.tab[data-view="tower"]').click();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ------------------------------------------------------------------ office panel */

const $ = id => document.getElementById(id);

function renderOffice() {
  const c = byFloor[selectedFloor];
  $("office-floor").textContent = "Floor " + c.floor + " of 5";
  $("office-floor").style.color = c.css;
  $("office-name").textContent = c.name;
  $("office-kind").textContent = c.kind + " · agent: " + c.model;
  $("office-blurb").textContent = c.blurb;
  $("board-done").innerHTML = c.done.map(x => "<li>" + escapeHtml(x) + "</li>").join("");
  $("board-waiting").innerHTML = c.waiting.map(x => "<li>" + escapeHtml(x) + "</li>").join("");
  document.querySelectorAll(".floor-btn").forEach(b =>
    b.classList.toggle("active", Number(b.dataset.floor) === c.floor));
  renderChat();
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

/* floor buttons */
(function buildFloorButtons() {
  const wrap = $("floor-buttons");
  COMPANIES.slice().sort((a, b) => b.floor - a.floor).forEach(c => {
    const b = document.createElement("button");
    b.className = "floor-btn";
    b.dataset.floor = c.floor;
    b.style.setProperty("--c", c.css);
    b.innerHTML = "Floor " + c.floor + ": " + escapeHtml(c.name) +
      "<small>" + escapeHtml(c.kind) + "</small>";
    b.addEventListener("click", () => selectFloor(c.floor));
    wrap.appendChild(b);
  });
})();

/* ------------------------------------------------------------------ chat */

function getKey() { return localStorage.getItem("pollinations_key") || ""; }

function updateKeyUi() {
  const has = !!getKey();
  $("key-clear").hidden = !has;
  $("key-save").textContent = has ? "Update key" : "Connect";
  $("key-note").textContent = has
    ? "Key connected. It stays in this browser only, and calls go straight to gen.pollinations.ai. Note: the built-in company agents are private to the owner's account during the Pollinations agents alpha, so your key may not be able to reach them yet. If a live call fails, the office answers in demo mode and tells you."
    : "No key connected. The agent answers in demo mode. Your key is stored only in this browser (localStorage) and calls go straight to gen.pollinations.ai. Get a key at enter.pollinations.ai/keys.";
}

$("key-save").addEventListener("click", () => {
  const v = $("key-input").value.trim();
  if (v) localStorage.setItem("pollinations_key", v);
  $("key-input").value = "";
  updateKeyUi();
  renderChat(true);
});
$("key-clear").addEventListener("click", () => {
  localStorage.removeItem("pollinations_key");
  updateKeyUi();
  renderChat(true);
});

function pushMsg(cid, role, text, demo) {
  if (!chatHistory[cid]) chatHistory[cid] = [];
  chatHistory[cid].push({ role, text, demo: !!demo });
}

function renderChat(reset) {
  const c = byFloor[selectedFloor];
  if (reset || !chatHistory[c.id]) {
    chatHistory[c.id] = [];
    pushMsg(c.id, "agent",
      "Hi, this is the " + c.name + " agent. Ask me what we do, or what I finished today.",
      !getKey());
  }
  const box = $("chat");
  box.innerHTML = "";
  chatHistory[c.id].forEach(m => {
    const d = document.createElement("div");
    if (m.role === "note") {
      d.className = "msg note";
      d.textContent = m.text;
    } else {
      d.className = "msg " + m.role;
      if (m.demo) {
        const tag = document.createElement("span");
        tag.className = "demo-tag";
        tag.textContent = "Demo mode";
        d.appendChild(tag);
        d.appendChild(document.createElement("br"));
      }
      d.appendChild(document.createTextNode(m.text));
    }
    box.appendChild(d);
  });
  box.scrollTop = box.scrollHeight;
}

function demoReply(c, question) {
  const q = question.toLowerCase();
  if (q.includes("service") || q.includes("what do you do") || q.includes("offer")) return c.services;
  if (q.includes("price") || q.includes("cost") || q.includes("quote")) {
    return "Pricing is the owner's call. I scope the job, estimate the work, and bring him a quote to approve. (Sample reply.)";
  }
  if (q.includes("finish") || q.includes("today") || q.includes("done")) {
    return "Finished and waiting on the owner: " + c.done[0] + ". Plus: " + c.done[1] + ".";
  }
  const i = (demoIndex[c.id] = (demoIndex[c.id] || 0) + 1) - 1;
  return c.demo[i % c.demo.length];
}

$("chat-form").addEventListener("submit", async e => {
  e.preventDefault();
  const input = $("chat-input");
  const text = input.value.trim();
  if (!text) return;
  input.value = "";
  const c = byFloor[selectedFloor];
  pushMsg(c.id, "user", text, false);
  renderChat();

  const key = getKey();
  if (!key) {
    pushMsg(c.id, "agent", demoReply(c, text), true);
    renderChat();
    return;
  }
  pushMsg(c.id, "agent", "Working on it...", false);
  renderChat();
  const pending = chatHistory[c.id][chatHistory[c.id].length - 1];
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 45000);
    const res = await fetch("https://gen.pollinations.ai/v1/chat/completions", {
      method: "POST",
      signal: ctrl.signal,
      headers: {
        "Authorization": "Bearer " + key,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: c.model,
        messages: [{ role: "user", content: text }]
      })
    });
    clearTimeout(timer);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    const reply = data.choices && data.choices[0] && data.choices[0].message
      ? data.choices[0].message.content : "";
    if (!reply) throw new Error("empty reply");
    pending.text = reply;
    pending.demo = false;
  } catch (err) {
    chatHistory[c.id].pop();
    pushMsg(c.id, "note",
      "Live call failed (" + err.message + "). The built-in agents are private during the alpha, so a visitor key cannot reach this one yet. Answering in demo mode instead.", false);
    pushMsg(c.id, "agent", demoReply(c, text), true);
  }
  renderChat();
});

/* ------------------------------------------------------------------ directory */

function renderDirectory(filter) {
  const q = (filter || "").toLowerCase();
  const wrap = $("dir-cards");
  wrap.innerHTML = "";
  COMPANIES.slice().sort((a, b) => b.floor - a.floor)
    .filter(c => !q || (c.name + " " + c.kind + " " + c.blurb + " " + c.agentName).toLowerCase().includes(q))
    .forEach(c => {
      const d = document.createElement("article");
      d.className = "card";
      d.style.setProperty("--c", c.css);
      d.innerHTML =
        '<div class="c-floor">Floor ' + c.floor + "</div>" +
        "<h3>" + escapeHtml(c.name) + "</h3>" +
        '<p class="c-kind">' + escapeHtml(c.kind) + "</p>" +
        "<p>" + escapeHtml(c.blurb) + "</p>" +
        '<div class="c-agent">Agent: ' + escapeHtml(c.model) + "<br>Agent id: " + c.agentId + "</div>" +
        '<div class="c-go">Step into this office</div>';
      d.addEventListener("click", () => goToCompany(c.floor));
      wrap.appendChild(d);
    });
  if (!wrap.children.length) {
    wrap.innerHTML = '<p style="color:var(--muted)">No company matches that search.</p>';
  }
}
$("dir-search").addEventListener("input", e => renderDirectory(e.target.value));

/* ------------------------------------------------------------------ apply form */

function loadApps() {
  try { return JSON.parse(localStorage.getItem("pollen_towers_applications") || "[]"); }
  catch (e) { return []; }
}
function renderApps() {
  const apps = loadApps();
  const wrap = $("my-apps");
  wrap.innerHTML = "";
  apps.forEach(a => {
    const d = document.createElement("div");
    d.className = "app-item";
    d.innerHTML = "<strong>" + escapeHtml(a.company) + "</strong> (floor 6 applicant)<br>" +
      escapeHtml(a.idea) + "<br><small>From " + escapeHtml(a.name) + " · " +
      escapeHtml(a.agents) + " · saved in this browser only</small>";
    wrap.appendChild(d);
  });
}
$("apply-form").addEventListener("submit", e => {
  e.preventDefault();
  const apps = loadApps();
  apps.push({
    name: $("app-name").value.trim(),
    email: $("app-email").value.trim(),
    company: $("app-company").value.trim(),
    idea: $("app-idea").value.trim(),
    agents: $("app-agents").value,
    at: new Date().toISOString()
  });
  localStorage.setItem("pollen_towers_applications", JSON.stringify(apps));
  e.target.reset();
  $("form-ok").hidden = false;
  renderApps();
});

/* ------------------------------------------------------------------ 3D tower */

const FLOOR_H = 2.1, FLOOR_GAP = 0.32, FLOOR_W = 8;
let scene, camera, renderer, towerGroup, elevatorMesh, labelSprite, labelCtx, labelTex;
let floorMeshes = [];
let targetFocusY = 0, focusY = 0, targetElevY = 0;
let rotY = 0.6, rotX = 0.08, dragging = false, lastInteract = 0;

function floorCenterY(floor) {
  return (floor - 1) * (FLOOR_H + FLOOR_GAP) + FLOOR_H / 2 + 0.4;
}

function makeWindowTexture(seed, accentCss) {
  const cv = document.createElement("canvas");
  cv.width = 256; cv.height = 256;
  const g = cv.getContext("2d");
  g.fillStyle = "#161d2e";
  g.fillRect(0, 0, 256, 256);
  let s = seed * 7919;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const cols = 7, rows = 5, cw = 256 / cols, ch = 256 / rows;
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const lit = rnd() > 0.45;
      g.fillStyle = lit ? "rgba(255, 209, 140," + (0.45 + rnd() * 0.5) + ")" : "#232d47";
      g.fillRect(x * cw + 5, y * ch + 6, cw - 10, ch - 12);
    }
  }
  g.fillStyle = accentCss;
  g.fillRect(0, 0, 256, 5);
  const tex = new THREE.CanvasTexture(cv);
  return tex;
}

function makeLabel(text) {
  const cv = document.createElement("canvas");
  cv.width = 640; cv.height = 144;
  labelCtx = cv.getContext("2d");
  labelTex = new THREE.CanvasTexture(cv);
  const mat = new THREE.SpriteMaterial({ map: labelTex, transparent: true, depthTest: false });
  labelSprite = new THREE.Sprite(mat);
  labelSprite.scale.set(7.4, 1.66, 1);
  drawLabel(text);
}

function drawLabel(text) {
  const g = labelCtx;
  g.clearRect(0, 0, 640, 144);
  g.fillStyle = "rgba(10, 13, 20, 0.88)";
  g.beginPath();
  g.roundRect ? g.roundRect(8, 22, 624, 100, 26) : g.rect(8, 22, 624, 100);
  g.fill();
  g.strokeStyle = "#ffd166";
  g.lineWidth = 4;
  g.stroke();
  g.fillStyle = "#e8ecf4";
  g.font = "600 44px 'Segoe UI', system-ui, sans-serif";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText(text, 320, 74);
  labelTex.needsUpdate = true;
}

function initScene() {
  const wrap = $("canvas-wrap");
  const canvas = $("scene");
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0b0e14, 34, 78);
  camera = new THREE.PerspectiveCamera(44, wrap.clientWidth / wrap.clientHeight, 0.1, 200);
  camera.position.set(15.5, 11, 19.5);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(wrap.clientWidth, wrap.clientHeight);

  scene.add(new THREE.HemisphereLight(0xbfd4ff, 0x201408, 0.65));
  const sun = new THREE.DirectionalLight(0xffffff, 0.95);
  sun.position.set(14, 24, 10);
  scene.add(sun);
  scene.add(new THREE.AmbientLight(0xffffff, 0.22));

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(34, 48),
    new THREE.MeshStandardMaterial({ color: 0x0d1119, roughness: 1 })
  );
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);
  const grid = new THREE.GridHelper(68, 34, 0x26304a, 0x182036);
  grid.position.y = 0.02;
  grid.material.transparent = true;
  grid.material.opacity = 0.4;
  scene.add(grid);

  /* atmosphere particles */
  const pGeo = new THREE.BufferGeometry();
  const pts = [];
  for (let i = 0; i < 260; i++) {
    const r = 20 + Math.random() * 26, a = Math.random() * Math.PI * 2;
    pts.push(Math.cos(a) * r, Math.random() * 22, Math.sin(a) * r);
  }
  pGeo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
  const stars = new THREE.Points(pGeo, new THREE.PointsMaterial({
    color: 0x8fb4ff, size: 0.14, transparent: true, opacity: 0.7
  }));
  stars.name = "stars";
  scene.add(stars);

  towerGroup = new THREE.Group();
  scene.add(towerGroup);

  /* base + roof */
  const slabMat = new THREE.MeshStandardMaterial({ color: 0x232c44, roughness: 0.85 });
  const base = new THREE.Mesh(new THREE.BoxGeometry(FLOOR_W + 1.6, 0.4, FLOOR_W + 1.6), slabMat);
  base.position.y = 0.2;
  towerGroup.add(base);
  const topY = 5 * (FLOOR_H + FLOOR_GAP) + 0.4;
  const roof = new THREE.Mesh(new THREE.BoxGeometry(FLOOR_W + 0.7, 0.3, FLOOR_W + 0.7), slabMat);
  roof.position.y = topY + 0.15;
  towerGroup.add(roof);
  const beacon = new THREE.Mesh(
    new THREE.SphereGeometry(0.16, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xff5a5a })
  );
  beacon.position.y = topY + 0.55;
  beacon.name = "beacon";
  towerGroup.add(beacon);

  /* floors */
  floorMeshes = [];
  COMPANIES.forEach(c => {
    const tex = makeWindowTexture(c.floor * 13 + 5, c.css);
    const mat = new THREE.MeshStandardMaterial({
      map: tex, roughness: 0.6, metalness: 0.15,
      emissive: new THREE.Color(c.color), emissiveIntensity: 0.04
    });
    const m = new THREE.Mesh(new THREE.BoxGeometry(FLOOR_W, FLOOR_H, FLOOR_W), mat);
    m.position.y = floorCenterY(c.floor);
    m.userData.floor = c.floor;
    towerGroup.add(m);
    floorMeshes.push(m);

    const trim = new THREE.Mesh(
      new THREE.BoxGeometry(FLOOR_W + 0.24, 0.14, FLOOR_W + 0.24),
      new THREE.MeshStandardMaterial({
        color: c.color, emissive: new THREE.Color(c.color), emissiveIntensity: 0.55, roughness: 0.4
      })
    );
    trim.position.y = floorCenterY(c.floor) + FLOOR_H / 2 + 0.05;
    trim.userData.floor = c.floor;
    towerGroup.add(trim);
    floorMeshes.push(trim);
  });

  /* elevator car on the front face */
  elevatorMesh = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 1.9, 0.7),
    new THREE.MeshStandardMaterial({
      color: 0xffd166, emissive: new THREE.Color(0xffd166),
      emissiveIntensity: 0.35, roughness: 0.35, metalness: 0.4
    })
  );
  elevatorMesh.position.set(0, floorCenterY(5), FLOOR_W / 2 + 0.55);
  towerGroup.add(elevatorMesh);
  const shaft = new THREE.Mesh(
    new THREE.BoxGeometry(1.7, topY, 0.18),
    new THREE.MeshStandardMaterial({ color: 0x2a3550, roughness: 0.7, transparent: true, opacity: 0.65 })
  );
  shaft.position.set(0, topY / 2 + 0.3, FLOOR_W / 2 + 0.2);
  towerGroup.add(shaft);

  makeLabel(byFloor[selectedFloor].name);
  labelSprite.position.set(0, floorCenterY(5) + FLOOR_H / 2 + 1.15, 0);
  towerGroup.add(labelSprite);

  focusY = targetFocusY = floorCenterY(selectedFloor);
  targetElevY = floorCenterY(selectedFloor);

  bindPointer(canvas);
  animate();
}

function bindPointer(canvas) {
  const ray = new THREE.Raycaster();
  const ptr = new THREE.Vector2();
  let downX = 0, downY = 0, moved = 0;

  function setPtr(e) {
    const r = canvas.getBoundingClientRect();
    ptr.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    ptr.y = -((e.clientY - r.top) / r.height) * 2 + 1;
  }
  canvas.addEventListener("pointerdown", e => {
    dragging = true; moved = 0; downX = e.clientX; downY = e.clientY;
    lastInteract = performance.now();
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener("pointermove", e => {
    if (dragging) {
      const dx = e.clientX - downX, dy = e.clientY - downY;
      moved += Math.abs(dx) + Math.abs(dy);
      rotY += dx * 0.008;
      rotX += dy * 0.004;
      rotX = Math.max(-0.06, Math.min(0.38, rotX));
      downX = e.clientX; downY = e.clientY;
      lastInteract = performance.now();
    } else {
      setPtr(e);
      ray.setFromCamera(ptr, camera);
      const hit = ray.intersectObjects(floorMeshes)[0];
      canvas.style.cursor = hit ? "pointer" : "grab";
      floorMeshes.forEach(m => {
        const core = m.geometry.type === "BoxGeometry" && m.material.map;
        if (core) m.material.emissiveIntensity = (hit && hit.object === m) ? 0.3 : 0.04;
      });
    }
  });
  canvas.addEventListener("pointerup", e => {
    const wasDrag = moved > 8;
    dragging = false;
    lastInteract = performance.now();
    if (!wasDrag) {
      setPtr(e);
      ray.setFromCamera(ptr, camera);
      const hit = ray.intersectObjects(floorMeshes)[0];
      if (hit) selectFloor(hit.object.userData.floor);
    }
  });
  canvas.addEventListener("wheel", e => {
    e.preventDefault();
    camera.position.z = Math.max(13, Math.min(34,
      camera.position.length() + Math.sign(e.deltaY) * 1.6));
    camera.position.setLength(Math.max(15, Math.min(36, camera.position.length())));
    lastInteract = performance.now();
  }, { passive: false });
}

function selectFloor(floor) {
  selectedFloor = floor;
  targetFocusY = floorCenterY(floor);
  targetElevY = floorCenterY(floor);
  if (labelSprite) {
    labelSprite.position.y = floorCenterY(floor) + FLOOR_H / 2 + 1.15;
    drawLabel(byFloor[floor].name);
  }
  renderOffice();
}

function resizeScene() {
  if (!renderer) return;
  const wrap = $("canvas-wrap");
  const w = wrap.clientWidth, h = wrap.clientHeight;
  if (!w || !h) return;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}
window.addEventListener("resize", resizeScene);

function animate() {
  requestAnimationFrame(animate);
  const now = performance.now();
  if (!dragging && now - lastInteract > 2600) rotY += 0.0016;
  towerGroup.rotation.y += (rotY - towerGroup.rotation.y) * 0.08;
  towerGroup.rotation.x += (rotX - towerGroup.rotation.x) * 0.08;

  focusY += (targetFocusY - focusY) * 0.05;
  if (elevatorMesh) elevatorMesh.position.y += (targetElevY - elevatorMesh.position.y) * 0.045;

  floorMeshes.forEach(m => {
    if (m.material && m.material.map) {
      const isSel = m.userData.floor === selectedFloor;
      const base = isSel ? 0.22 : 0.04;
      m.material.emissiveIntensity += (base - m.material.emissiveIntensity) * 0.1;
    }
  });
  const stars = scene.getObjectByName("stars");
  if (stars) stars.rotation.y += 0.0004;
  const beacon = scene.getObjectByName("beacon");
  if (beacon) beacon.visible = Math.sin(now * 0.004) > -0.2;

  camera.lookAt(0, focusY + 0.4, 0);
  renderer.render(scene, camera);
}

/* ------------------------------------------------------------------ init */

updateKeyUi();
renderDirectory("");
renderApps();
renderOffice();
if (window.THREE) {
  initScene();
} else {
  document.querySelector(".stage-hint").textContent =
    "The 3D library did not load. Use the floor buttons below to visit each office.";
}
