Page({
    initial: function() {
        this.setData({
            answer: Math.round(Math.random() * 100),
            count: 0,
            tip: '',
            x: -1,
            isGameStart: true
        });
    },
    
    getNumber: function(e) {
        this.setData({ x:e.detail.value })
    },

    guess: function() {
        let x = this.data.x;
        this.setData({ x: -1 });

        if (x < 0) {
            wx.showToast({
                title: '不能小于0',
            });
        } else if (x > 100) {
            wx.showToast({
                title: '不能大于100',
            });
        } else {
            let count = this.data.count + 1;
            let tip = this.data.tip;

            let answer = this.data.answer;

            if (x == answer) {
                tip += '\n第' + count + '回合： ' + x + ', 猜对了！';
                this.setData({ isGameStart: false });
            } else if (x > answer) {
                tip += '\n第' + count + '回合： ' + x + ', 大了！';
            } else {
                tip += '\n第' + count + '回合： ' + x + ', 小了！';
            }

            if (count == 8) {
                tip += '\n游戏结束';
                this.setData({  isGameStart:false });
            }

            this.setData({
                tip: tip,
                count: count
            });
        }
    },

    restartGame: function() {
        this.initial();
    },

    onLoad: function(options) {
        this.initial();
    }
});