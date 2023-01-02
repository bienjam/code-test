const fs = require('fs');
const path = require('path');

async function main() {
  // Declare data and result objects
  const data = {};
  const result = {};

  // Read and execute .js files in folder_name1
  const folder1Path = path.join(__dirname, 'folder_name1');
  const folder1Files = fs.readdirSync(folder1Path);
  for (const file of folder1Files) {
    if (path.extname(file) === '.js') {
      const modulePath = path.join(folder1Path, file);
      const moduleFunc = require(modulePath);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay execution by 1 second
      await moduleFunc(data, result);
    }
  }

  // Read and execute .js files in folder_name2
  const folder2Path = path.join(__dirname, 'folder_name2');
  const folder2Files = fs.readdirSync(folder2Path);
  for (const file of folder2Files) {
    if (path.extname(file) === '.js') {
      const modulePath = path.join(folder2Path, file);
      const moduleFunc = require(modulePath);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay execution by 1 second
      await moduleFunc(data, result);
    }
  }

  // Read and execute .js files in folder_name3
  const folder3Path = path.join(__dirname, 'folder_name3');
  const folder3Files = fs.readdirSync(folder3Path);
  for (const file of folder3Files) {
    if (path.extname(file) === '.js') {
      const modulePath = path.join(folder3Path, file);
      const moduleFunc = require(modulePath);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay execution by 1 second
      await moduleFunc(data, result);
    }
  }

  // Execute final function
  finalFunction(data, result);
}

main();

