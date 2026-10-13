// Builds architecture diagrams in the same visual style as the hand-drawn SVGs in projects.ts.
// Each row is a horizontal lane of boxes connected left-to-right; lanes are connected top-to-bottom.

type Box = { label: string; sub?: string; accent?: boolean };

export function flowDiagram(title: string, rows: Box[][]): string {
  const W = 800;
  const boxH = 58;
  const rowGap = 46;
  const top = 64;
  const H = top + rows.length * (boxH + rowGap) - rowGap + 30;

  const parts: string[] = [
    `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">`,
    `<defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#5FA8A0"/></marker></defs>`,
    `<rect width="${W}" height="${H}" fill="#1C1A17" rx="12"/>`,
    `<text x="${W / 2}" y="36" fill="#F5F1EA" font-family="monospace" font-size="14" text-anchor="middle" font-weight="bold">${title}</text>`,
  ];

  const centers: { x: number; y: number; w: number }[][] = [];

  rows.forEach((row, r) => {
    const gap = 26;
    const boxW = Math.min(200, (W - 60 - gap * (row.length - 1)) / row.length);
    const totalW = row.length * boxW + (row.length - 1) * gap;
    let x = (W - totalW) / 2;
    const y = top + r * (boxH + rowGap);
    centers[r] = [];
    row.forEach((b, i) => {
      const stroke = b.accent ? "#E8734A" : "#5FA8A0";
      parts.push(
        `<rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="8" fill="#252220" stroke="${stroke}" stroke-width="1.5"/>`,
        `<text x="${x + boxW / 2}" y="${y + (b.sub ? 25 : 34)}" fill="#F5F1EA" font-family="monospace" font-size="12" text-anchor="middle">${b.label}</text>`
      );
      if (b.sub)
        parts.push(
          `<text x="${x + boxW / 2}" y="${y + 43}" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">${b.sub}</text>`
        );
      if (i > 0) {
        const prev = centers[r][i - 1];
        parts.push(
          `<line x1="${prev.x + prev.w / 2}" y1="${y + boxH / 2}" x2="${x - 2}" y2="${y + boxH / 2}" stroke="#5FA8A0" stroke-width="1.2" marker-end="url(#arr)"/>`
        );
      }
      centers[r].push({ x: x + boxW / 2, y, w: boxW });
      x += boxW + gap;
    });
    if (r > 0) {
      const from = centers[r - 1];
      const fx = from.reduce((a, c) => a + c.x, 0) / from.length;
      const tx = centers[r].reduce((a, c) => a + c.x, 0) / centers[r].length;
      parts.push(
        `<path d="M${fx} ${from[0].y + boxH} C ${fx} ${y - rowGap / 2}, ${tx} ${y - rowGap / 2}, ${tx} ${y - 2}" fill="none" stroke="#5FA8A0" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arr)"/>`
      );
    }
  });

  parts.push(`</svg>`);
  return parts.join("\n");
}
