jQuery(function ($) {
    let $smallBox = $('.smallBox'),
        $bigImg = $('.bigBox>img'),
        $mark = $('.mark');

    let markMove = (ev) => {
        let mWidth = $mark.outerWidth(),
        mHeight = $mark.outerHeight(),
        { top, left } = $smallBox.offset(),
        minL = 0,
        minT = 0,
        maxL = $smallBox.outerWidth() - mWidth,
        maxT = $smallBox.outerHeight() - mHeight,
        newL = ev.pageX - mWidth / 2 - left,
        newT = ev.pageY - mHeight / 2 - top;
        newL = minL > newL ? minL : (maxL > newL ? newL : maxL);
        newT = minT > newT ? minL : (maxT > newT ? newT : maxT);
        $mark.css({
            left: newL,
            top: newT
        })

        rateL = $bigImg.outerWidth() / $smallBox.outerWidth();
        rateT = $bigImg.outerHeight() / $smallBox.outerHeight();
        $bigImg.css({
            left: - newL * rateL,
            top: - newT * rateT
        })
    }

    let showUp = () => {
        $smallBox.on('mouseenter', ev => {
            $bigImg.add($mark).css({
                display: 'block'
            })
            markMove(ev);
        }).on('mouseleave', () => {
            $bigImg.add($mark).css({
                display: 'none'
            })
        }).on('mousemove', markMove)
    }
    showUp();
})