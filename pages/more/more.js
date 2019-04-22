const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    headurl: app.globalData.HeadUrl
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    wx.request({
      url: that.data.headurl+'top250',
      header: {
        "content-Type": "json"
      },
      success: function (res) {
        console.log(res)
        if (res.statusCode == 200) {
          that.setData({
            movie: res.data
          })

          wx.setNavigationBarTitle({
            title: res.data.title
          })

          wx.hideNavigationBarLoading()
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  douban: function (event) {
    var movieId = event.currentTarget.dataset.movieId;

    wx.navigateTo({
      url: '/pages/detail/detail?id=' + movieId,
    })

  }
})