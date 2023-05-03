// How to Create Zip files with node.js

const fs = require('fs');
const zlib = require('zlib');
const archiver = require('archiver');

const output = fs.createWriteStream(__dirname + '/example.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// add a file to the zip
const file1 = __dirname + '/file1.txt';
archive.file(file1, { name: 'file1.txt' });

// add a directory to the zip
const dir1 = __dirname + '/dir1';
archive.directory(dir1, 'dir1');

archive.finalize();