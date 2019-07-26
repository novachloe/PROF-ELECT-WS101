function light(sw) {
    var pic;
    if (sw == 0) {
      pic = "img/pic_off.gif"
    } else {
      pic = "img/pic_on.gif"
    }
    document.getElementById('myImage').src = pic;
  }