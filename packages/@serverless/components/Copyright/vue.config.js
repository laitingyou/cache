const metaJson = require('./meta.json')
const materialJson = require('../../material.json')
const outputDir = `dist${metaJson.hash}`
const ossPath = `http://serverless-platform.deepexi.top/materials/${materialJson.materialId}/${outputDir}`
module.exports = {
  // 打包资源路径应修改为oss上的东西
  publicPath: process.env.NODE_ENV === 'production' ? ossPath : '/',
  // 打包文件夹名  dist+物料hash
  outputDir,
  // 添加ui规范基础变量
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['./src/assets/variables.scss']
        })
        .end()
    })
  }
}
