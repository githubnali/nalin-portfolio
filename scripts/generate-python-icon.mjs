import sharp from 'sharp';
import { resolve } from 'path';

const SIZE = 128;

// Simplified two-tone Python logo mark (blue + yellow interlocking snakes).
const svg = `
<svg width="${SIZE}" height="${SIZE}" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <path d="M63.4 8c-6.3 0-11.6.6-16.3 1.7-14.4 3-17 9.3-17 20.9v15.3h34.3v4.3H15.9C4.3 50.2-6 57.3-9.1 70.6c-3.6 15.3-3.7 24.9 0 40.8 2.8 11.9 9.4 20.4 20.9 20.4h13.5V113c0-13.1 11.3-24.6 24.9-24.6h34.2c11.1 0 20-9.1 20-20.2V30.6c0-10.8-9.1-18.9-20-20.9C77.5 8.6 69.7 8 63.4 8z" fill="#3776AB"/>
  <path d="M64.6 120c6.3 0 11.6-.6 16.3-1.7 14.4-3 17-9.3 17-20.9V82.1H62.6v-4.3h64.5c11.6 0 21.9-7.1 25-20.4 3.6-15.3 3.7-24.9 0-40.8-2.8-11.9-9.4-20.4-20.9-20.4h-13.5v15.8c0 13.1-11.3 24.6-24.9 24.6H58.6c-11.1 0-20 9.1-20 20.2v37.6c0 10.8 9.1 18.9 20 20.9 4.9 1 12.7 1.6 19 1.6z" fill="#FFD43B"/>
  <circle cx="41" cy="24" r="5.5" fill="#fff"/>
  <circle cx="87" cy="104" r="5.5" fill="#fff"/>
</svg>
`;

const outPath = resolve(process.cwd(), 'src/assets/projects/skills/python.png');
await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log('Python icon written to', outPath);
