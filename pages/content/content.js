Page({
  data:{
    // text:"这是一个页面"
    content : "",
    duanluo: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.request({
        url:'https://api.getweapp.com/thirdparty/yhq1913?page='+options.data,
        success:function(res){
            that.setData({content:res.data,
            duanluo: res.data.split('\n')});
        }
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})