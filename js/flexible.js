function setRootFontSize() {
    /*获取屏幕的宽度*/
    let width = document.documentElement.clientWidth || document.body.clientWidth
    /*屏幕小于414px会改变基础像素，大于等于414px的屏幕基础像素为13px不变*/
    if (width < 414) {
        document.documentElement.style.fontSize = width / 375 * 13 + 'px'
    } else {
        document.documentElement.style.fontSize = '13px'
    }
}
setRootFontSize()