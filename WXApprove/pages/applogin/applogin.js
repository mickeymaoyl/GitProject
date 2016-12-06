
var Util = require( '../../utils/util.js' );

Page({
  data:{
     imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    btnload:false,
    username:null,
    password:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
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
    
  },
  inputValue:function(event){
        console.log(event);
        var id =event.currentTarget.id;
        var inpvalue=event.detail.value;
        if(id =="username"){
             this.setData({username:inpvalue});
        }else{
             this.setData({password:inpvalue});
        }
  },
   btnLogin:function(event){
      wx.showToast({
        title: '登录中',
        icon: 'loading',
        duration: 100000
      });
      var that =this;
      wx.request({
        url: 'http://127.0.0.1:9090/service/CommonServlet',
        data: 
        {
          billtype:'login',
          usercode:that.data.username,
          password:that.data.password
        },
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
         header: {
          //  'Content-Type': 'application/x-www-form-urlencoded;'
         },
        success: function(res){
          // success
          console.log(res);
          // wx.hideToast();
        },
        fail: function() {
          // fail
          wx.hideToast();
          console.log("登录失败");
        },
        complete: function() {
          // complete
          // wx.hideToast()
          wx.hideToast()
        }
      });
      // this.setData({btnload:false});
         setTimeout(function(){
          wx.hideToast()
         },2000) 
  }
})