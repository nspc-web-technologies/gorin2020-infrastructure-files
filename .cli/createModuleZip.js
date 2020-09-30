const path = require('path')
const rimraf = require('rimraf')
const zip = require('cross-zip')

// 引数を取得
const baseDir = path.join(__dirname, process.argv[2])
const targetName = process.argv[3]
const subname = process.argv[4] ? '-' + process.argv[4] : ''

// 古いzipを削除
rimraf.sync(`${baseDir}/${targetName}-*.zip`)

// モジュールを圧縮
const nowString = require('./version')
const input = `${baseDir}/${targetName}`
const output = `${baseDir}/${targetName}${subname}-${nowString}.zip`
zip.zipSync(input, output)
