// 16タイプのドット絵キャラ(03: キャラクター資産)。8ボディ×深夜/白昼の世界観。
// SVGに完全インライン化できるため、GitHub README内のカード(camo proxy経由)でも確実に描画される。
// 文字コード: .=透過 o=輪郭/目 s=肌 d=肌影/口 w=白 その他はスプライト毎のcolorsで定義

export type SpriteDef = { grid: string[]; colors: Record<string, string> };

const BASE: Record<string, string> = { o: "#221d3f", s: "#f3c89d", d: "#d99e6a", w: "#ffffff" };

// キーはtaxonomyのbodyKey(rhythm-domain-style)
export const SPRITES: Record<string, SpriteDef> = {
  "steady-deep-builder": {
    // 職人: 鉢巻+鑿
    colors: { h: "#2c2a3a", c: "#534AB7", C: "#3e3791", t: "#b9c2cf", u: "#8a5a2e" },
    grid: [
      "................",
      "....oooooo......",
      "...ohhhhhho.....",
      "..ohhhhhhhho....",
      "..owwwwwwwwo....",
      "..osssssssso....",
      "..ossossosso....",
      "..osssddssso....",
      "...osssssso.....",
      "...occcccco.....",
      "..occccccccou...",
      "..ocsccccscou...",
      "..os.cccc.sot...",
      "....occcco..t...",
      "...oCCo.oCCo....",
      "....oo...oo.....",
    ],
  },
  "sprint-deep-builder": {
    // 鍛冶屋: バンダナ+大ハンマー+エプロン
    colors: { h: "#33303b", c: "#993C1D", C: "#6f2a13", t: "#9aa3b2", u: "#8a5a2e" },
    grid: [
      "..........tttt..",
      "....oooooo.tttt.",
      "...ohhhhhho.u...",
      "..ohhhhhhhhou...",
      "..ohhhhhhhhou...",
      "..ossssssssou...",
      "..ossossossou...",
      "..osssddsssou...",
      "...ossssssou....",
      "...occccccou....",
      "..ocwwwwcccsu...",
      "..ocwwwwcco.....",
      "..os.wwww.so....",
      "....occcco......",
      "...oCCo.oCCo....",
      "....oo...oo.....",
    ],
  },
  "steady-deep-refiner": {
    // 研磨師: 光る眼鏡+宝石
    colors: { h: "#3a3430", c: "#0F6E56", C: "#0a4f3e", g: "#58d6c9", G: "#2fa89b" },
    grid: [
      "................",
      "....oooooo......",
      "...ohhhhhho.....",
      "..ohhhhhhhho....",
      "..ohhhhhhhho....",
      "..osssssssso....",
      "..oswwsswwso....",
      "..osssddssso....",
      "...osssssso.....",
      "...occcccco.w...",
      "..occcccccco....",
      "..ocsggGsco.....",
      "..os.cccc.so....",
      "....occcco......",
      "...oCCo.oCCo....",
      "....oo...oo.....",
    ],
  },
  "sprint-deep-refiner": {
    // 整備士: キャップ+レンチ
    colors: { h: "#12477c", c: "#185FA5", C: "#104070", t: "#9aa3b2" },
    grid: [
      "................",
      "....oooooo......",
      "...ohhhhhho.....",
      "..ohhhhhhhho....",
      "..ohhhhhhhhhoo..",
      "..osssssssso....",
      "..ossossosso....",
      "..osssddssso....",
      "...osssssso.....",
      "...occccccot.t..",
      "..occcwwccco.t..",
      "..ocsccccscot...",
      "..os.cccc.sot...",
      "....occcco......",
      "...oCCo.oCCo....",
      "....oo...oo.....",
    ],
  },
  "steady-versatile-builder": {
    // 発明家: ゴーグル+白衣+電球
    colors: { h: "#4a2b36", c: "#993556", C: "#702640", g: "#f5c542", G: "#e09b22" },
    grid: [
      ".............g..",
      "....oooooo..ggg.",
      "...ohhhhhho..g..",
      "..ohhhhhhhho....",
      "..ogwogwoggo....",
      "..osssssssso....",
      "..ossossosso....",
      "..osssddssso....",
      "...osssssso.....",
      "...owccccwo.....",
      "..owwccccwwo....",
      "..owsccccswo....",
      "..os.wccw.so....",
      "....owccwo......",
      "...oCCo.oCCo....",
      "....oo...oo.....",
    ],
  },
  "sprint-versatile-builder": {
    // 冒険者: フード+旗
    colors: { h: "#8a5410", c: "#BA7517", C: "#8a5410", r: "#7a4a2a", f: "#e0533d", t: "#8a5a2e" },
    grid: [
      "................",
      "....oooooo..t...",
      "...ohhhhhho.tff.",
      "..ohhhhhhhhotff.",
      "..ohssssssho.t..",
      "..ohssssssho.t..",
      "..ossossosso.t..",
      "..osssddssso.t..",
      "...osssssso..t..",
      "...orccccro.....",
      "..ocrccccrco....",
      "..ocsccccsco....",
      "..os.cccc.so....",
      "....occcco......",
      "...oCCo.oCCo....",
      "....oo...oo.....",
    ],
  },
  "steady-versatile-refiner": {
    // 庭師: 麦わら帽+双葉
    colors: { h: "#e5c164", H: "#c9a13f", c: "#3B6D11", C: "#2a4e0b", g: "#5fae3a" },
    grid: [
      "................",
      ".....oooooo.....",
      "....ohhhhhho....",
      "...ohhhhhhhho...",
      ".oHHHHHHHHHHHHo.",
      "..osssssssso....",
      "..ossossosso....",
      "..osssddssso....",
      "...osssssso.....",
      "...occcccco.....",
      "..occccccccogg..",
      "..ocsccccscog...",
      "..os.cccc.sog...",
      "....occcco......",
      "...oCCo.oCCo....",
      "....oo...oo.....",
    ],
  },
  "sprint-versatile-refiner": {
    // 流しの修理屋: ニット帽+マフラー+工具箱
    colors: { h: "#434f63", c: "#5F5E5A", C: "#46453f", r: "#b8493a", t: "#8a5a2e", y: "#f5c542" },
    grid: [
      "................",
      "....oooooo......",
      "...ohhhhhho.....",
      "..ohhhhhhhho....",
      "..ohhhhhhhho....",
      "..osssssssso....",
      "..ossossosso....",
      "..osssddssso....",
      "..orrrrrrrro....",
      "...orrcccco.r...",
      "..occcccccco.r..",
      "..ocsccccsco....",
      "..os.cccc.so.tt.",
      "....occcco..tyt.",
      "...oCCo.oCCottt.",
      "....oo...oo.....",
    ],
  },
};

// archetype.key("steady-deep-builder-night")→bodyKey
export function bodyKeyOf(archetypeKey: string): string {
  return archetypeKey.replace(/-(night|day)$/, "");
}

function colorOf(ch: string, def: SpriteDef): string | null {
  if (ch === ".") return null;
  return def.colors[ch] ?? BASE[ch] ?? null;
}

// ピクセル列挙(canvas描画用)
export function spritePixels(bodyKey: string): { x: number; y: number; color: string }[] {
  const def = SPRITES[bodyKey];
  if (!def) return [];
  const out: { x: number; y: number; color: string }[] = [];
  def.grid.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      const color = colorOf(ch, def);
      if (color) out.push({ x, y, color });
    });
  });
  return out;
}

// SVG rect文字列(READMEカード用、依存なしで埋め込み可能)
export function spriteSvg(bodyKey: string, cell: number, x0 = 0, y0 = 0): string {
  return spritePixels(bodyKey)
    .map((p) => `<rect x="${x0 + p.x * cell}" y="${y0 + p.y * cell}" width="${cell}" height="${cell}" fill="${p.color}"/>`)
    .join("");
}

// Reactコンポーネント(server/client両用)
export function TypeSprite({ archetypeKey, size, className }: { archetypeKey: string; size: number; className?: string }) {
  const body = bodyKeyOf(archetypeKey);
  const pixels = spritePixels(body);
  if (pixels.length === 0) return null;
  const cell = size / 16;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} shapeRendering="crispEdges" className={className} aria-hidden="true">
      {pixels.map((p, i) => (
        <rect key={i} x={p.x * cell} y={p.y * cell} width={cell} height={cell} fill={p.color} />
      ))}
    </svg>
  );
}
