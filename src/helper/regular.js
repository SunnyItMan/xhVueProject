/**
 * element表单--校验手机号
 * 使用场景：
 *    1.合作方管理--客户管理：添加 || 修改 客户信息
 */
export const validateMobile = (rule, value, callback) => {
  let reg = /^1\d{10}$/
  if (value && !reg.test(value)) {
    callback(new Error('请输入正确的手机号码'))
  } else {
    callback()
  }
}
/**
 * element表单--校验电话号码（大陆）
 * 使用场景：
 *    1.合作方管理--客户管理：添加 || 修改 客户信息
 */
export const validateTelephone = (rule, value, callback) => {
  let reg = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/
  if (value && !reg.test(value)) {
    callback(new Error('请输入正确的电话号码'))
  } else {
    callback()
  }
}
/**
 * element表单--校验身份证号
 * 使用场景：
 *    1.合作方管理--客户管理：添加 || 修改 客户信息
 */
export const validateIdcard = (rule, value, callback) => {
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (value && !reg.test(value)) {
    callback(new Error('请输入正确的身份证号码'))
  } else {
    callback()
  }
}
/**
 * element表单--校验电子邮箱
 * 使用场景：
 *    1.合作方管理--客户管理：添加 || 修改 客户信息
 */
export const validatEmail = (rule, value, callback) => {
  let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/g
  if (value && !reg.test(value)) {
    callback(new Error('请输入正确的电子邮箱'))
  } else {
    callback()
  }
}
/**
 * element表单--校验银行卡号，首位非0、15到19位
 * 使用场景：
 *    1.合作方管理--客户管理：添加 || 修改 企业账户
 *      有一个格式化银行卡号的方法，有时间提取出来validateNum
 */
export const validateBankcard = (rule, value, callback) => {
  let val = value ? value.replace(/\s+/g, '') : ''
  let reg = /^([1-9]{1})(\d{14}|\d{15}|\d{16}|\d{17}|\d{18})$/
  if (val && !reg.test(val)) { // 替换了输入中的空格，注意传参数时后端的需求
    callback(new Error('请输入正确的银行卡号码'))
  } else {
    callback()
  }
}
/**
 * element表单--校验正整数
 * 使用场景：
 *    1.产品管理--套餐管理--添加新套餐：套餐大小
 */
export const validatePositiveInteger = (rule, value, callback) => {
  let reg = /^[1-9]\d*$/
  if (value && !reg.test(value)) {
    callback(new Error('请输入大于0的整数'))
  } else {
    callback()
  }
}
/**
 * element表单--校验正整数并且大于1
 * 使用场景：
 *    1.采购--卡片信息：卡片数量
 */
export const validatePositiveIntegerMoreThan1 = (rule, value, callback) => {
  let reg = /^[1-9]\d*$/
  if ((value && !reg.test(value)) || (value && reg.test(value) && Number(value) < 2)) {
    callback(new Error('请输入大于1的整数'))
  } else {
    callback()
  }
}
/**
 * element表单--校验非负数且保留两位小数
 * 使用场景：
 *    1.产品管理--套餐管理--添加新套餐：套内资费
 */
export const validatePositiveNumber = (rule, value, callback) => {
  let reg = /^[0-9]+([.]{1}[0-9]{1,2})?$/
  if (value && !reg.test(value)) {
    callback(new Error('请输入大于等于0的数字，最多支持两位小数'))
  } else {
    callback()
  }
}
/**
 * element表单--校验正数，大于0并且小于100
 * 使用场景：
 *    1.采购--流量套餐：套内折扣、套外折扣
 */
export const validatePositiveNumberBetween0And100 = (rule, value, callback) => {
  let reg = /^[0-9]+([.]{1}[0-9]{1,2})?$/
  if (value && !reg.test(value)) {
    callback(new Error('最多只能有两位小数'))
  } else if (value && (Number(value) < 0 || Number(value) > 100)) {
    callback(new Error('请输入0-100之间的数'))
  } else {
    callback()
  }
}
