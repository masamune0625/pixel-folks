# pixel-folks

**16×16 pixel-art engineer characters for React, SVG and canvas. Zero dependencies, one file.**

Eight characters (Craftsman, Blacksmith, Polisher, Mechanic, Inventor, Adventurer, Gardener, Wandering Fixer), each available as a React component, an SVG string, or raw pixels for canvas.

![preview](./assets/preview.png)

- **Same character in 3 formats**: React / SVG string / canvas pixels
- **Fully inlined SVG**, so it renders reliably in GitHub READMEs (through GitHub's camo image proxy) and in server-side OGP images
- **No install**: copy `src/sprites.tsx` into your project
- MIT License — modify and use commercially

## Usage

```tsx
// React
import { TypeSprite } from "./sprites";
<TypeSprite archetypeKey="steady-deep-builder-day" size={64} />

// SVG string (README cards, OGP images, any server-side rendering)
import { spriteSvg } from "./sprites";
const rects = spriteSvg("sprint-deep-builder", 6.5, 10, 10);

// canvas
import { spritePixels } from "./sprites";
for (const p of spritePixels("steady-versatile-refiner")) {
  ctx.fillStyle = p.color;
  ctx.fillRect(p.x * cell, p.y * cell, cell, cell);
}
```

## Characters

| key | Character | Motif |
|---|---|---|
| steady-deep-builder | Craftsman (職人) | headband and chisel |
| sprint-deep-builder | Blacksmith (鍛冶屋) | big hammer and apron |
| steady-deep-refiner | Polisher (研磨師) | shiny glasses and a gem |
| sprint-deep-refiner | Mechanic (整備士) | cap and wrench |
| steady-versatile-builder | Inventor (発明家) | goggles, lab coat and light bulb |
| sprint-versatile-builder | Adventurer (冒険者) | hood and flag |
| steady-versatile-refiner | Gardener (庭師) | straw hat and sprout |
| sprint-versatile-refiner | Wandering Fixer (流しの修理屋) | beanie and toolbox |

Append `-night` / `-day` to a key for the 16 variants (the drawing is the same; the theme is up to your UI).

## Where they come from

These are the type characters of **[Folio](https://folio.akima-inc.co.jp)**, a free service that turns a GitHub profile into a sales page clients can understand (Japanese). The classification logic that picks a character from GitHub activity lives in **[dev-archetype](https://github.com/masamune0625/dev-archetype)**. See all 16 types: [folio.akima-inc.co.jp/types](https://folio.akima-inc.co.jp/types)

---

<details>
<summary>日本語</summary>


エンジニアのための16×16ドット絵キャラクター集。職人・鍛冶屋・研磨師・整備士・発明家・冒険者・庭師・流しの修理屋の8キャラを、**依存ゼロの単一ファイル**で提供します。

- **React / SVG文字列 / canvasピクセル** の3形態で同じキャラが使える
- SVGに完全インライン化されるため、**GitHubのREADME(camoプロキシ経由)でも確実に描画**される
- MIT License。改変・商用利用OK

![preview](./assets/preview.png)

## 使い方

`src/sprites.tsx` をプロジェクトにコピーしてください(npm installは不要の思想です)。

```tsx
// React
import { TypeSprite } from "./sprites";
<TypeSprite archetypeKey="steady-deep-builder-day" size={64} />

// SVG文字列(README用カード・OGP画像などサーバー側生成に)
import { spriteSvg } from "./sprites";
const rects = spriteSvg("sprint-deep-builder", 6.5, 10, 10);

// canvas
import { spritePixels } from "./sprites";
for (const p of spritePixels("steady-versatile-refiner")) {
  ctx.fillStyle = p.color;
  ctx.fillRect(p.x * cell, p.y * cell, cell, cell);
}
```

## キャラクター

| key | 名前 | モチーフ |
|---|---|---|
| steady-deep-builder | 職人 | 鉢巻と鑿 |
| sprint-deep-builder | 鍛冶屋 | 大ハンマーとエプロン |
| steady-deep-refiner | 研磨師 | 光る眼鏡と宝石 |
| sprint-deep-refiner | 整備士 | キャップとレンチ |
| steady-versatile-builder | 発明家 | ゴーグルと白衣と電球 |
| sprint-versatile-builder | 冒険者 | フードと旗 |
| steady-versatile-refiner | 庭師 | 麦わら帽と双葉 |
| sprint-versatile-refiner | 流しの修理屋 | ニット帽と工具箱 |

キー末尾に `-night` / `-day` を付けた16バリアントで参照できます(描画は同一、文脈側でテーマを変える想定)。

## 誕生の経緯

[Folio](https://folio.akima-inc.co.jp) — GitHubをエンジニアの営業ページに変える無料サービス — の16タイプ判定キャラとして生まれました。タイプ判定ロジックは [dev-archetype](https://github.com/masamune0625/dev-archetype) にあります。

</details>
