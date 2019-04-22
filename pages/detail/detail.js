const app = getApp();
Page({
  data:{
    headurl: app.globalData.HeadUrl
  },
  onLoad:function(options){
    console.log(options)
    this.setData({
      mid: options.id
    })
    var that = this

    wx.request({
      url: that.data.headurl+'subject/'+options.id,
      header: {
        "content-Type": "json"
      },
      success:function(res){
        console.log(res)
        if(res.statusCode==200){
          that.setData({
            movie: res.data
          })

          wx.setNavigationBarTitle({
            title: res.data.rating.average + "分: "+
            res.data.title,
          })

          wx.hideNavigationBarLoading()
        }
        
      }

    })
    wx.showNavigationBarLoading()
  },
  onUnload:function(options){
    wx.setNavigationBarTitle({
      title: "每周简报",
    })
  },

  onShareAppMessage:function(){
    return{
      title: "向你推荐：" + this.data.movie.title
    }
  }

})