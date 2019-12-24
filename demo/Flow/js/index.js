jQuery(function ($) {
    let pages = 0,
        imgData = null,
        flag = false;

    let queryData = () => {
        pages++;
        $.ajax({
            url: `json/data.json?pages=${pages}`,
            type: 'GET',
            async: false,
            success: res => {
                imgData = res;
            }
        })
    }
    queryData();

    let bindHTML = () => {
        for (let i = 0; i < imgData.length; i += 3) {
            $('.flowBox>li').sort((a, b) => {
                return $(a).outerHeight() - $(b).outerHeight();
            }).each((index, item) => {
                if (!imgData[index + i]) return;
                let {
                    pic,
                    title,
                    link
                } = imgData[i + index];
                $(`<a href=${link}>
                <div class='imgBox'><img src=${pic} alt=""></div>
                <span>${title}</span>`).appendTo(item)
            })
        }
        flag = false;
    }
    bindHTML();

    $(window).on('scroll', () => {
        let pageH = document.documentElement.scrollHeight,
            screenH = $(window).outerHeight(),
            scrollT = $(window).scrollTop();
        if (scrollT + 100 >= pageH - screenH) {
            if (flag) return;
            flag = true;
            if (pages > 2) {
                alert('No more data!');
                return;
            }
            queryData();
            bindHTML();
        }
    })
})