###安装
npm i @js-v1/excel

### 使用
import Xlsx from '@js-v1/excel'

const e = new Xlsx() //创建实例
e.SetMultiHeader([]) // 设置多级表头
e.SetHeader([]) // 设置表头
e.SetData([[]]) // 设置数据 二维数组
e.SetFilename('') // 设置表名
e.SetMerges([]) // 设置合并项
e.SetData([[]]) // 设置数据 二维数组


