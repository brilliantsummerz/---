//最小滚动距离137
const minDistance = 137;
var lastX = 0;
Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 50,
    nextMargin: 50
    , nCurrentView: 0 // 当前view值
    , startX: 0
    , EndX: 0
    , nViewHeight: 250
    , sDirection: 'left'
    , nChangeView: 1
    , bIsStop: true
    , nLastViewHeight: 250
    , nNextViewHeight: 250
    , nCurrentViewHeight: 300
  },
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  todos(event) {
    console.log(event);
    var currentView = event.detail.current;
    this.setData({
      nCurrentView: currentView
      , nCurrentViewHeight: 300
    })
  },
  touchStart(e) {
    // console.log('触摸开始');
    // console.log(e);
    var page = e.touches[0];
    var pageX = page.pageX;
    var pageY = page.pageY;
    // console.log('pageX', pageX);
    // console.log('pageY', pageY);
    this.setData({
      startX: pageX
    })
  },
  touchMove(e) {
    var that = this;
    // console.log('触摸中...');
    // console.log(e);
    var page = e.touches[0];
    var pageX = page.pageX;
    var pageY = page.pageY;
    var startX = that.data.startX;
    var nCurrentView = that.data.nCurrentView;
    if (startX - pageX > 0) {
      let pullDistance = (250 + (startX - pageX) / 3 >= 300) ? 300 : (250 + (startX - pageX) / 3);
      let nCurrentViewHeight = (300 - (startX - pageX) / 3 <= 250) ? 250 : (300 - (startX - pageX) / 3);
      console.log(nCurrentViewHeight);
      switch (nCurrentView) {
        case 0:
          that.setData({
            sDirection: 'left',
            nLastViewHeight: 250,
            nNextViewHeight: pullDistance,
            nCurrentViewHeight: nCurrentViewHeight,
            nChangeView: 1
          })
          break;
        case 1:
          that.setData({
            sDirection: 'left',
            nLastViewHeight: 250,
            nNextViewHeight: pullDistance,
            nCurrentViewHeight: nCurrentViewHeight,
            nChangeView: 2
          })
          break;
        case 2:
          that.setData({
            sDirection: 'left',
            nLastViewHeight: 250,
            nNextViewHeight: pullDistance,
            nCurrentViewHeight: nCurrentViewHeight,
            nChangeView: 0
          })
          break;
      }


    } else if (startX - pageX <= 0) {
      let pullDistance = (250 - (startX - pageX) / 3 >= 300) ? 300 : (250 - (startX - pageX) / 3);
      // console.log(pullDistance);
      // that.setData({
      //   sDirection: 'right',
      //   nViewHeight: pullDistance
      // })
    }
    console.log(that.data.sDirection);
    // console.log('pageX', pageX);
    // console.log('pageY', pageY);
  },
  touchEnd(e) {
    console.log('触摸结束');
    // console.log(e);
    // var page = e.touches[0];
    // var pageX = page.pageX;
    // var pageY = page.pageY;
    // console.log('pageX', pageX);
    // console.log('pageY', pageY);
  }
})
