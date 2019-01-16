const slug = require('./index')
const marker = require('@ajar/marker')

var input1 = "hello"
var input2 = "my"
var input3 = "friend"

marker.info("input1: ",input1)
marker.info("input2: ",input2)
marker.info("input2: ",input3)

var slugs = slug.slugger(input1,input2,input3)
marker.info("result: ",slugs)