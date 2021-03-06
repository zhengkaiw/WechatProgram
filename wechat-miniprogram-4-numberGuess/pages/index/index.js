Page({
    goToGame(){
        wx.navigateTo({
            url: '../game/game'
        })
    },
    goToRules(){
        wx.navigateTo({
            url: '../rules/rules'
        })
    },
    goToAbout(){
        wx.navigateTo({
            url: '../about/about'
        })
    }
});