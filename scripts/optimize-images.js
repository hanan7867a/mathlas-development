import sharp from 'sharp'

await sharp('public/assets/mathlas-technology-illustration.png')
  .resize({ width: 1400, withoutEnlargement: true })
  .webp({ quality: 78 })
  .toFile('public/assets/mathlas-technology-illustration.webp')

console.log('Generated optimized WebP image asset')
