Page({
    getMyInfo: function(event){
        let info = event.detail.userInfo;
        this.setData({
            src: info.avatarUrl,
            name: info.nickName
        })
    },
    data: {
        src: '/images/logo.png',
        name: 'Hello World'
    }
});