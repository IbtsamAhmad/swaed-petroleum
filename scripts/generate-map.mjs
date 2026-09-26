// Generates the dotted presence map used on Home and Contact Us
// (modelled on the "Organization" map, brochure page 40).
//
//   node scripts/generate-map.mjs
//
// Outputs:
//   public/images/map/presence-map.svg — land dots only
//   data/map-pins.json                  — pin positions as % of the SVG box
//
// Re-run after changing REGION or any coordinates in data/locations.json.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const DottedMap = require("dotted-map").default;

const root = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const locations = JSON.parse(fs.readFileSync(path.join(root, "data/locations.json"), "utf8"));

// Europe, Africa and the Middle East — the region SWAED operates in.
const REGION = { lat: { min: -8, max: 50 }, lng: { min: -20, max: 66 } };

const map = new DottedMap({ height: 72, grid: "diagonal", region: REGION });
const { width, height } = map.image;

// One stroked path with zero-length segments + round caps renders every dot;
// ~8x smaller than the <circle>-per-dot SVG dotted-map emits.
const PAD = 1;
const d = map
  .getPoints()
  .map((p) => `M${+p.x.toFixed(2)} ${+p.y.toFixed(2)}h0`)
  .join("");
const svg =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-PAD} ${-PAD} ${width + PAD * 2} ${height + PAD * 2}">` +
  `<path d="${d}" stroke="#6f8fc0" stroke-width="0.5" stroke-linecap="round" fill="none"/></svg>\n`;

fs.mkdirSync(path.join(root, "public/images/map"), { recursive: true });
fs.writeFileSync(path.join(root, "public/images/map/presence-map.svg"), svg);

const pins = {};
for (const loc of locations) {
  const pin = map.getPin({ lat: loc.lat, lng: loc.lng });
  pins[loc.key] = {
    x: +(((pin.x + PAD) / (width + PAD * 2)) * 100).toFixed(2),
    y: +(((pin.y + PAD) / (height + PAD * 2)) * 100).toFixed(2),
  };
}
fs.writeFileSync(
  path.join(root, "data/map-pins.json"),
  JSON.stringify({ aspect: +((width + PAD * 2) / (height + PAD * 2)).toFixed(4), pins }, null, 2) + "\n"
);

console.log(`map ${width}x${height}, ${Object.keys(pins).length} pins`);
