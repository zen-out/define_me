const define_me = require('./dist/index.js')

let getThis = define_me.containsThis(".git", define_me.git);
let checkDate = define_me.containsThis("March 20 2012", define_me.stringDate)
let output3 = define_me.containsThis("22:44", define_me.hhmm)
let output10 = define_me.containsThis("01/12/2022", define_me.dashDDMMYYYY)
let output11 = define_me.containsThis("2022/02/02", define_me.dashYYYYMMDD)
let output6 = define_me.containsThis("14-1-2022", define_me.hyphenDDMMYYYY)
let output7 = define_me.containsThis("13-01-2018", define_me.hyphenDDMMYYYY)
let output5 = define_me.containsThis("2019-2-10", define_me.hyphenYYYYMMDD)
let output4 = define_me.containsThis("2020-02-22", define_me.hyphenYYYYMMDD)
let output12 = define_me.containsThis("Mar 2 2019", define_me.stringDate)
let output14 = define_me.containsThis("Mar 2 2022", define_me.stringDate)
let trueThis = define_me.containsThis("digital", define_me.hhmmss)