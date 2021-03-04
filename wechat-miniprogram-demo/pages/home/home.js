Page({
    // data: {
    //     name: 'Jeff'
    // },
    // buttonHandler(event) {
    //     const that = this;
    //     wx.showModal({
    //         title: 'Need confirm',
    //         content: 'Are you sure the change?',
    //         success (res) {
    //             if (res.confirm) {
    //                 that.setData({
    //                     name: 'Tom'
    //                 }, function() {
    //                     wx.showToast({
    //                         title: 'complete',
    //                         duration: 700
    //                     });
    //                 });
    //             } else if (res.cancel) {
    //                 console.log('User canceled');
    //             }
    //         }
    //     })
    // }
    // data: {
    //     items: [],
    //     inputValue: ''
    // },
    // inputHandler(event) {
    //     this.setData({
    //         inputValue: event.detail.value || ''
    //     });
    // },
    // buttonHandler(event) {
    //     const newItem = this.data.inputValue.trim();
    //     if (!newItem) return;
    //     const itemArr = [...this.data.items, newItem];
    //     wx.setStorageSync('items', itemArr);
    //     this.setData({ items: itemArr });
    // },
    
    // onLoad() {
    //     const itemArr = wx.getStorageSync('items') || [];
    //     this.setData({ items: itemArr });
    // }
    data: { 
        items: [],
        inputValue: ''
     },
    inputHandler(event) {
        this.setData({
            inputValue: event.detail.value || ''
        });
    },
    buttonHandler(event) {
        const newItem = this.data.inputValue.trim();
        if (!newItem) return;
        var d = JSON.stringify(newItem);
        wx.request({
            url: 'http://localhost:80/items',
            method: 'POST',
            dataType: 'json',
            data: d,
            header: {'content-type': 'application/x-www-form-urlencoded'},
            success(res) {
                console.log(res);
            }
        });
    },
    buttonClearHandler(event) {
        console.log(this.data.items)
    },
    onLoad() {
        const that = this;
        wx.request({
            url: 'http://localhost:80/items',
            success(res) {
                that.setData({ items: res.data });
            }
        });
    }
});