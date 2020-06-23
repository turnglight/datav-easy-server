const upload = require('../utils/upload')

const Router = require('koa-router')
// const path = require('path')

const router = new Router()
router.prefix('/api')
router.post('/uploadfile', async (ctx, next) => {
  let filePath = upload.uploadFile(ctx);
  if (filePath) {
    ctx.body = {
      url: filePath,
      message: '文件上传成功',
      code: '0',
    }
  } else {
    ctx.body = {
      url: filePath,
      message: '文件上传失败',
      code: '1',
    }
  }
  return ctx.body
})

module.exports = router
