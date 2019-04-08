const Mock = require('mockjs')
const Random = Mock.Random
const produceData = opt => {
  console.log('request--->', opt)
  let articles = []
  for (let i = 0; i < 3; i++) {
    let newArticleObject = {
      // 定义假数据生成规则
      title: Random.csentence(5, 30),
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'),
      author_name: Random.cname(),
      date: Random.date() + '' + Random.time(),
      email: Random.email(),
      name: Random.cname()
    }
    articles.push(newArticleObject)
  }
  console.log('response--->', { data: articles })
  return {
    arr: articles
  }
}
// const menuData = opt => {
//   console.log('request--->', opt)
//   const content = [
//     {
//       id: 11,
//       name: '合作方管理',
//       url: '#',
//       sequence: 11,
//       subMenu: [
//         {
//           id: 12,
//           name: '客户管理',
//           url: 'client',
//           sequence: 1,
//           subMenu: null
//         }
//       ]
//     },
//     {
//       id: 20,
//       name: '账户管理',
//       url: '#',
//       sequence: 20,
//       subMenu: [
//         {
//           id: 22,
//           name: '代理商账户',
//           url: 'proxy',
//           sequence: 1,
//           subMenu: null
//         },
//         {
//           id: 23,
//           name: '渠道商账户',
//           url: 'distributor',
//           sequence: 2,
//           subMenu: null
//         }
//       ]
//     },
//     {
//       id: 30,
//       name: '订单管理',
//       url: '#',
//       sequence: 30,
//       subMenu: [
//         {
//           id: 9,
//           name: '渠道商订单',
//           url: 'distributorOrder',
//           sequence: 1,
//           subMenu: null
//         }
//       ]
//     }
//   ]
//   console.log('response--->', { data: content })
//   return {
//     content: content
//   }
// }
// Mock.mock(url, 'post/get', 返回的数据)
Mock.mock('../json/user.json', /post|get/i, produceData)
Mock.mock('../json/menu.json', /post|get/i, require('./../json/menu.json'))
