const path = require('path')
const fs = require('fs-extra')
const rimraf = require('rimraf')

// 引数
const baseDir = path.join(__dirname, process.argv[2])
const outDir = path.join(__dirname, process.argv[3])

// 除外
ignorePackages = [ "core-js" ]

// packages
const packages = require(baseDir + '/package.json').dependencies

// 元のライブラリを削除
rimraf.sync(outDir + '/*')

// 各ライブラリをコピー
Object.entries(packages).forEach(package => {
  const name = package[0]
  if (ignorePackages.indexOf(name) !== -1) return

  const packageDir = baseDir + '/node_modules/' + package[0]
  const formatedName = name.replace(/\/.*/g, '').replace(/\@/g, '')

  // ディレクトリをコピー
  if (fs.existsSync(packageDir + '/dist')) {
    console.log(name)
    fs.copySync(packageDir + '/dist', outDir + '/' + formatedName)
    /*
    if (fs.existsSync(packageDir + '/README.md')) {
      console.log('  README: ○')
      fs.copySync(packageDir + '/README.md', outDir + '/' + formatedName + '/README.md');
    }
    */
  } else {
    console.log(name + ' *')
    fs.copySync(packageDir, outDir + '/' + formatedName)
  }
})

console.log('\n' + outDir)
