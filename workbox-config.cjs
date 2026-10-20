module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,css,html,json,webmanifest,svg,png,ico,woff,woff2,ttf}'],
  globIgnores: ['**/firebase/**', '**/firestore/**'],
  swDest: 'dist/sw.js',
  skipWaiting: true,
  clientsClaim: true,
  cleanupOutdatedCaches: true,
  navigateFallback: '/index.html',
  runtimeCaching: [],
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
};
