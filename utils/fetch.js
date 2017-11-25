module.exports=(url,data)=>{
  return new Promise((resolve,reject)=>{
     wx.request({
       url: `http://localhost:16688/${url}`,
       data:data,
       success: resolve,
       fail: reject
     })
  })
}