## @js-v1/date

### 安装 npm i @js-v1/date

### 使用

 ```
import date from '@js-v1/date'
 
 date.YYYY(new Date()) 2022
 date.YYYYMM(new Date(),'/') 2022/09
 date.YYYYMMDD(new Date(),'/') 2022/09/22
 date.YYYYMMDDHH(new Date(),'/') 2022/09/22 17
 date.YYYYMMDDHHMM(new Date(),'/') 2022/09/22 17:35
 date.YYYYMMDDHHMMSS(new Date(),'/','|') 2022/09/22 17|35|56
 date.AddYears(new Date(), 10)  当前时间 加 10 年
 date.AddMonths(new Date(), 10)  当前时间 加 10月
 date.AddDays(new Date(), 10)  当前时间 加 10日
 date.AddHours(new Date(), 10)  当前时间 加 10小时
 date.AddMinutes(new Date(), 10)  当前时间 加 10分钟
 date.AddSeconds(new Date(), 10)  当前时间 加 10秒
 date.AddMilliseconds(new Date(), 10)  当前时间 加 10毫秒
 date.AddWeeks(new Date(), 10)  当前时间 加 10周
 ```

## @js-v1/excel

### 安装 npm i @js-v1/excel

### 使用

```
import Xlsx from '@js-v1/excel'

导出
const x = new Xlsx()
x.SetHeader(['a'， 'b']) // 表头
x.SetData([[1,6],[2,6]]) // 数据二维数组
x.SetMerges(["A2:A3"]) // 合并 A是列号后面的数字是行号
x.Export()


导入
const x = new Xlsx()

x.Ixport([file,file]).then(res => {
	console.log(res);
})

性能优化 第二个参数，不计算表头
x.Ixport([file,file], false).then(res => {
	console.log(res);
})

性能优化 第三个参数，不计算数据
x.Ixport([file,file], false,false).then(res => {
	console.log(res);
})
```
