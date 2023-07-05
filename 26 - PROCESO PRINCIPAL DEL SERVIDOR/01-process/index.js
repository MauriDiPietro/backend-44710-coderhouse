console.log('cwd: ', process.cwd());
console.log('pid: ', process.pid);
console.log('version: ', process.version);
console.log('title: ', process.title);
console.log('platform: ', process.platform);
console.log('memory: ', JSON.stringify(process.memoryUsage()));

process.exit(0)

console.log('hola');