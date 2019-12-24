jQuery(function ($) {
    let $menuBox = $('.menuBox');

    $menuBox.click(ev => {
        let target = ev.target,
            $target = $(target),
            tarTag = target.tagName;

        if(tarTag==='EM'){
            $target = $target.next();
            target = $target[0];
            tarTag = target.tagName;
        }

        if(tarTag === 'SPAN'){
            let $ul = $target.next(),
                $em = $target.prev();
            $ul.stop().toggle(200,()=>{
                $ul.find('ul').hide();
                $ul.find('em').removeClass('minus').addClass('plus')
            });
            if($em.hasClass('plus')){
                $em.addClass('minus').removeClass('plus');                
            }else{
                $em.removeClass('minus').addClass('plus'); 
            }
        }
    })
})