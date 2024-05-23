document.addEventListener('DOMContentLoaded', function () {
    const data = [
        { url: './images/it1.png' },
        { url: './images/it2.png' },
        { url: './images/it3.png' },
        { url: './images/it4.png' }
    ];

    const banner = document.querySelector('.banner');
    const img = document.querySelector('.banner img');
    //自动播放
    let i = 0;
    let timerId = setInterval(function () {
        img.src = data[i].url;
        i++;
        i = i > data.length - 1 ? 0 : i;

    }, 2000)

    //关闭定时器
    banner.addEventListener('mouseenter', function (event) {
        event.preventDefault();
        clearInterval(timerId);
    })
    //开启定时器
    banner.addEventListener('mouseleave', function (event) {
        event.preventDefault();
        //每一次开始前先关闭定时器
        clearInterval(timerId);
        //开启定时器
        timerId = setInterval(function () {
            img.src = data[i].url;
            i++;
            i = i > data.length - 1 ? 0 : i;

        }, 2000)

    })

    const boxes = document.querySelectorAll('.center .right .box1');
    //console.log(boxes);

    const list = document.querySelectorAll('.center .left .nav ul li');
    //console.log(list);
    for (let i = 0; i < list.length; i++) {
        const li = list[i];
        //console.log(li);
        li.addEventListener('mouseenter', function () {
            boxes.forEach(box => box.classList.remove('active'));
            boxes[i].classList.add('active');
        })

    }

    function getCountTime() {
        const spans = document.querySelectorAll('.slider_time .left #p2 span');
        const localDate = new Date();
        //现在的时间戳
        const now = +new Date();
        // 夜晚12:00:00的时间戳
        const last = new Date();
        // 设置为今晚的24:00
        last.setHours(24, 0, 0, 0);
        var timestamp = last.getTime();

        let count = (timestamp - now) / 1000;

        let h = parseInt(count / 3600);
        console.log(h);
        h = h < 10 ? '0' + h : h;
        let m = parseInt(count % 3600 / 60);
        m = m < 10 ? '0' + m : m;
        let s = parseInt(count % 60);
        s = s < 10 ? '0' + s : s;

        spans[0].innerHTML = h;
        spans[1].innerHTML = m;
        spans[2].innerHTML = s;
    }


    getCountTime();
    setInterval(getCountTime, 1000)

})
