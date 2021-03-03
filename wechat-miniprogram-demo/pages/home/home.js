Page({
    data: {
        name: 'Jeff'
    },
    buttonHandler(event) {
        const that = this;
        wx.showModal({
            title: 'Need confirm',
            content: 'Are you sure the change?',
            success (res) {
                if (res.confirm) {
                    that.setData({
                        name: 'Tom'
                    }, function() {
                        wx.showToast({
                            title: 'complete',
                            duration: 700
                        });
                    });
                } else if (res.cancel) {
                    console.log('User canceled');
                }
            }
        })
    }
});