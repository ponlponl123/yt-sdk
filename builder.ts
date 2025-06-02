(async ()=>{
  // Build chrome extension background process to bundle
  await Bun.build({
    entrypoints: ['src/injector/background/index.ts'],
    format: 'cjs',
    packages: 'bundle',
    naming: 'bundle.js',
    outdir: './build/chrome-extension/background',
    minify: true,
    target: 'browser',
  });
})();