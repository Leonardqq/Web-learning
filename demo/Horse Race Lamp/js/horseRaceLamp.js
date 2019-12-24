let wrapper = document.querySelector('.wrapper');
wrapper.innerHTML += wrapper.innerHTML;
utils.css(wrapper, 'width', wrapper.offsetWidth * 2);
setInterval(() => {
    let curLeft = utils.css(wrapper, 'left');
    curLeft -= 2;
    utils.css(wrapper, 'left', curLeft);
    if (Math.abs(utils.css(wrapper, 'left')) >= wrapper.offsetWidth / 2){
        utils.css(wrapper,'left',0)
    }
}, 16);