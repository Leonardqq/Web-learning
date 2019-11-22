let list = document.getElementById('list');
let productList = list.getElementsByTagName('li');
let header = document.getElementById('header');
let aList = header.getElementsByTagName('a');


let productData = null;
let xhr = new XMLHttpRequest();
xhr.open('GET', 'json/product.json', false);
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        productData = xhr.responseText;
    }
}
xhr.send(null);
productData = JSON.parse(productData);

~ function () {
    let str = ``;
    for (let i = 0; i < productData.length; i++) {
        let {
            title,
            price,
            img,
            hot,
            time
        } = productData[i];
        str += `<li data-price=${price} data-hot=${hot} data-time=${time}><a href="javascript:;">
                    <img src="${img}" alt="">
                    <p>${title}</p>
                    <span>￥${price}</span><br/>
                    <span>时间：${time}</span><br/>
                    <span>热度：${hot}</span>
                </a></li>`;
    }
    list.innerHTML = str;
}()

~ function () {
    function sortList() {
        let {
            flag,
            index
        } = this;
        let productArr = [].slice.call(productList);
        productArr.sort((a, b) => {
            let arr = ['data-time', 'data-price', 'data-hot'];
            let pre = a.getAttribute(arr[index]),
                post = b.getAttribute(arr[index]);
            if (index === 0) {
                pre = pre.replace(/-/g, '');
                post = post.replace(/-/g, '')
            }
            return (pre - post) * flag;
        })
        for (let i = 0; i < productArr.length; i++) {
            list.appendChild(productArr[i])
        }
    }

    for (let i = 0; i < aList.length; i++) {
        let curA = aList[i];
        curA.flag = -1;
        curA.index = i;
        aList[i].onclick = function () {
            for (let j = 0; j < aList.length; j++) {
                j !== this.index ? aList[j].flag = -1 : null;
            }
            curA.flag *= -1;
            sortList.call(this);
        }
    }
}()