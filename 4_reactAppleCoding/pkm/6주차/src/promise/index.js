'use strict';
var promiseCount = 0;

function testPromise(){
    const thisPromiseCount = ++promiseCount;

    const log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend',thisPromiseCount +
    ') 시작 (<small>동기적 코드 시작</small><br/>');

    const p1 = new Promise(
        function(resolve, reject){
            log.insertAdjacentHTML('beforeend',thisPromiseCount +
            ')프로미스 시작 (<small>비동기적 코드 시작</small><br/>');

            window.setTimeout(
                function(){

                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    p1.then(

        function(val){
            log.insertAdjacentHTML('beforeend', val +
            ') 프로미스 이행 (<small>비동기적 코드 종료</small><br/>')
        })
    .catch(

        function(reason){
            console.log('여기서 거부된 프로미스 ('+reson+')를 처리하세요.');
        });
        log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') 프로미스 생성 (<small>동기적 코드 종료</small><br/>');
}


if("Promise" in window){
    var btn = document.getElementById("btn");
    btn.addEventListener("click",testPromise);
}else{
    log = document.getElementById('log');
    log.innerHTML = "Live example not available as your browser doesn't support the <code>Promise</code> interface.";
}
