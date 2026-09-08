import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const WIDTH = 1200;
const HEIGHT = 630;
const AVATAR_SIZE = 340;

const root = resolve(process.cwd());
const profilePath = resolve(root, 'src/assets/profile.webp');
const outPath = resolve(root, 'public/og-image.png');

const bgSvg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="78%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#1dbf73" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#1dbf73" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#141414" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)" />
  <circle cx="70" cy="70" r="7" fill="#1dbf73" />
  <text x="96" y="82" font-family="Arial, sans-serif" font-size="22" letter-spacing="3" fill="#1dbf73" font-weight="600">AVAILABLE FOR WORK</text>

  <text x="70" y="290" font-family="Arial, sans-serif" font-size="76" font-weight="700" fill="#ffffff">Nagaraju Nali</text>
  <text x="70" y="360" font-family="Arial, sans-serif" font-size="44" font-weight="300" fill="#1dbf73">Frontend Engineer</text>
  <text x="70" y="420" font-family="Arial, sans-serif" font-size="26" fill="#b5b5b5">React &#183; Node.js &#183; MongoDB &#183; TypeScript</text>

  <text x="70" y="560" font-family="Arial, sans-serif" font-size="22" fill="#7a7a7a">nalin-portfolio.netlify.app</text>
</svg>
`;

const avatarMask = `
<svg width="${AVATAR_SIZE}" height="${AVATAR_SIZE}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${AVATAR_SIZE / 2}" cy="${AVATAR_SIZE / 2}" r="${AVATAR_SIZE / 2}" fill="#fff" />
</svg>
`;

const avatarRing = `
<svg width="${AVATAR_SIZE + 16}" height="${AVATAR_SIZE + 16}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${(AVATAR_SIZE + 16) / 2}" cy="${(AVATAR_SIZE + 16) / 2}" r="${(AVATAR_SIZE + 16) / 2 - 2}" fill="none" stroke="#1dbf73" stroke-width="3" opacity="0.6" />
</svg>
`;

const avatarBuffer = await sharp(profilePath)
  .resize(AVATAR_SIZE, AVATAR_SIZE, { fit: 'cover' })
  .composite([{ input: Buffer.from(avatarMask), blend: 'dest-in' }])
  .png()
  .toBuffer();

const ringBuffer = await sharp(Buffer.from(avatarRing)).png().toBuffer();

await sharp(Buffer.from(bgSvg))
  .composite([
    { input: avatarBuffer, left: WIDTH - AVATAR_SIZE - 130, top: (HEIGHT - AVATAR_SIZE) / 2 },
    { input: ringBuffer, left: WIDTH - AVATAR_SIZE - 138, top: (HEIGHT - AVATAR_SIZE) / 2 - 8 },
  ])
  .png()
  .toFile(outPath);

console.log('OG image written to', outPath);
