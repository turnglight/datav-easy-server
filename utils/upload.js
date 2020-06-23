const path = require('path')
const fs = require('fs')

const uploadFile = (ctx) =>{
    console.log(JSON.stringify(ctx.request, null, ' '));
    let remotefilePath = null;
    if (ctx.request.files['file']) {
        // 创建可读流
        const reader = fs.createReadStream(ctx.request.files['file']['path']);
        let filePath = `/usr/share/nginx/html/datav-easy/upload/${ctx.request.files['file']['name']}`;
        remotefilePath = `http://121.196.122.186/datav-easy/upload/${ctx.request.files['file']['name']}`;
        // 创建可写流
        const upStream = fs.createWriteStream(filePath);
        // 可读流通过管道写入可写流
        reader.pipe(upStream);
    }
    return remotefilePath;
}

module.exports = {uploadFile}
