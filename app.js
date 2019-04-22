/**
 * 数据绑定-从视图中抽离出数据
 * 1.基于DOM API手动更新视图的缺点--引入data binding
 * 2.pageObject的注册
 * 3.pageObject的data属性
 * 4.运算表达式的数据绑定
 * 5.使用开发者工具查看喝修改页面状态数据
 */
/**
 * 动态的从服务端获取,然后在渲染输出到视图中显示
 * 传统方式:在页面加载的过程中, 通过一个ajax调用来请求erver返回本周推荐电影信息
 */
/**
 * wx:if 与 hidden
 */

/**
 * 3.5 swipper元素
 */

/**
 * 页面的生命周期函数
 * 需求1: swipper 中如何默认切换到最后一页幻灯片
 * 需求2: 非本周幻灯片页添加"返回本周"按钮
 * 页面状态数据如何初始化. onLoad(options)
 * onShow,onReady
 * onHide,onUnload
 */
/**
 * 3.8 事件机制
 * 冒泡事件:当一个组件上的事件被触发后,该事件会向父节点传递
 * 非冒泡事件: 当一个组件上的时间被触发后,该事件不会向父节点传递
 * catchtap(不会向上传递) bindtap
 */

//app.js
App({
  globalData: {
    userInfo: null,
    HeadUrl: "https://douban.uieee.com/v2/movie/" //豆瓣api
  }
})