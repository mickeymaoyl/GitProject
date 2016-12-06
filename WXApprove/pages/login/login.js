Page({
  data:{
    // text:"这是一个页面"
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    wwidth:null,
    jzcolor:"black",
    username:null,
    password:null,
    isjz:false,
    btnload:false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    wx.getSystemInfo({
       success: function(res) {
       console.log(res.model)
       console.log(res.pixelRatio)
       console.log(res.windowWidth)
       that.setData({wwidth:""+res.windowWidth+"px"});
       console.log(res.windowHeight)
       console.log(res.language)
       console.log(res.version)
  }
})
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
  switchChange:function(event){
    var change=event.detail.value;
    if(change){
      this.data.jzcolor="red";
      this.setData({jzcolor:"red",isjz:change});
      console.log(this.data.jzcolor);
    }else{
      this.setData({jzcolor:"black",isjz:change});
    }
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
        duration: 2000
      });
      wx.request({
        url: 'http://127.0.0.1:8080/uip/testwl',
        data: {},
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          // success
          console.log(res);
          // wx.hideToast();
        },
        fail: function() {
          // fail
          // wx.hideToast()
        },
        complete: function() {
          // complete
          // wx.hideToast()
        }
      });
      // this.setData({btnload:false});
         setTimeout(function(){
          wx.hideToast()
         },200) 
  }
})