
const path = require('path')

const resolvePath = src => path.resolve(__dirname, src)
const isObject = target => Object.prototype.toString.call(target) === '[object Object]'

module.exports = {
    resolvePath,
    isObject
}
