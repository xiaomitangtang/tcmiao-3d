
// import render from './test/start'
// import './style/index.less'
import { DigitalGauge } from 't-digital-gauge2'
// render()

setTimeout(() => {
  var g = new DigitalGauge(document.getElementById('gauge'), { value: 40 })

  idbTest()
})

function idbTest() {
  const request = window.indexedDB.open('base2', '1')
  console.log(request)
  request.onerror = function (e) {
    console.log('数据库打开出错', e)
  }
  request.onsuccess = function (e) {
    // console.log('数据库打开成功', e, request.result) 
    console.log('数据库打开成功')
    idbTableTest(request.result)
  }
  // 数据库升级  如果版本号比较大，会发生数据库升级事件
  request.onupgradeneeded = function (e) {
    console.log('onupgradeneeded', e)
  }
}

function idbTableTest(db) {
  console.log(db)
  const personStore = db.createObjectStore('person', { keyPath: "id" })
}

