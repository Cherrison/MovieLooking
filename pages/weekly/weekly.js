/**注册空对象作为页面对象 */
/**跳转界面 <web-view src="https://mp.weixin.qq.com/s/XR8VQHHA9lzJhED7ey9LWg"> </web-view> */
Page({
  data:{
    weeklyMovieList:[
      {
        name:"泰坦尼克号",
        comment:"失去的才是永恒的 ",
        imagePath:"/images/titanic.png",
        isHighlyRecommended: false,
        id: 1292722
      },
      {
        name: "这个杀手不太冷",
        comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事 ",
        imagePath: "/images/leon.png",
        isHighlyRecommended: true,
        id: 1295644
      },
      {
        name: "老师好",
        comment: "快来看看,1985年的南苏一中又发生了那些新鲜事吧. ",
        imagePath: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551352209.jpg",
        isHighlyRecommended: true,
        id: 27663742
      },
     ],
    /**使用双大括号进行数据绑定 */
    count: 1,
    score: 66
  },

  onLoad: function(options){
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },
  goToTalkPage: function(param){
    wx.navigateTo({
      url: '/pages/passage/passage',
    })
  },
  tomore:function(){
    wx.navigateTo({
      url: '/pages/more/more',
    })
  },
  f0:function(event){
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
    /*this.setData({
      count: this.data.count+1,
      "weeklyMovieList[2].name": "jiaofu"
    })*/
  },
  f1:function(event){
    var movieId = event.currentTarget.dataset.movieId;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + movieId,
    })
  },

  onShareAppMessage: function(){
    return{
      title: "每周推荐"
    }
  }
})
/**
 * 4.1 组件的自定义数据属性
 * 需求:从weekly页上的电影卡片跳转到电影详情页
 * 新增detail页
 * wx.navigateTo()
 * {如何在逻辑层调用小程序的导航内api来实现页面跳转}
 * 参数化的page path
 * //组件的自定义数据属性:向逻辑层的业务数据传递
 */

/**
 * 4.2 电影详情页的基本框架
 * 页面初始化获取query参数:onLoad(options)
 * detail页的初始代码和基本流程
 * 上一节遗留问题:恢复weekly页上每个"返回本周"按钮的点击行为
 */

/**
 * 4.3 发起请求API-wx.request
 * 1)小程序网络相关API
 *    wx.request wx.uploadFile wx.downloadFile WebSocket相关API
 * 2)wx.request发起HTTP request, 调用Server端一个API来获取数据与操作数据
 *    基本参数:发起一个什么样的请求
 * 回调函数:收到response之后或者调用失败时如何处理
 * 3)异步调用
 * 4)服务器域名配置
 */

/**
 * 4.4 调用豆瓣电影API
 * 1.调用豆瓣API获取电影详情数据并展示
 * 2.豆瓣Restful API简介
 * 3.通过wx.request来调用豆瓣的获取电影条目信息API
 * 4.403 Forbidden 的问题
 *  1）原因
 *  2）解决办法
 * 5.detail页具体展示
 */
/**
 * 4.5 动态设置导航栏 loading状态和标题
 * wx.showNavigationBarLoading()
 * wx.hideNavigationBarLoading()
 * wx.setNavigationBarTitle()
 */
/**
 * 4.6 页面的事件处理函数与自定义页面转发
 * 1）页面事件处理函数
 *   onPullDownRefresh // 下拉刷新时被调用
 *   onReachBottom // 上划触底时被调用
 *   onPageScroll // 在页面滑动的时候被调用
 *   onShareAppMessage // 分享时被调用
 * 2）需求
 *   给weekly页自定义转发title: "每周推荐"
 *   给detail页自定义转发title: "向你推荐"：{{当前电影名称}}
 */