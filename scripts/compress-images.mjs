import sharp from 'sharp';
import { statSync } from 'fs';

const jobs = [
  { in: 'src/assets/hero-image.png', out: 'src/assets/hero-image.webp', width: 800 },
  { in: 'src/assets/projects/netflix-gpt.png', out: 'src/assets/projects/netflix-gpt.webp', width: 1080 },
];

for (const job of jobs) {
  const before = statSync(job.in).size;
  await sharp(job.in).resize({ width: job.width }).webp({ quality: 82 }).toFile(job.out);
  const after = statSync(job.out).size;
  console.log(
    `${job.in} -> ${job.out}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (${Math.round(
      (1 - after / before) * 100
    )}% smaller)`
  );
}
