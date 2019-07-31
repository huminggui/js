 /**
         * @param:tem 输入的模板{0}{1}{2}{3}{4}{5}表示日期的年月日时分秒的格式
         * @param:str 表示的是需要原来的日期数字
         * 注意：日期数组的值必须是6位长度才行。
        */
       function getDateFormat(str,tem="{0}年{1}月{2}日 {3}时{4}分{5}秒"){
        let reg=/\d+/g;
        let arrData=str.match(reg);
       //如果获取到的日期数字中有小于10的则加上0
       arrData=arrData.map(item=>item<10?"0"+item:item);
       //根据用户的输入的格式输出不同的日期格式如下：
       //替换模板中{内容}的正则
       let temReg=/\{(\d+)\}/g;
       
       let formData=tem.replace(temReg,(...arg)=>{
         let [,index,]=arg;
         //获取分组的数字内容，把从分组得到的数字作为索引，再从存放日期的数字中获取相对应的日期数字。再替换字符串中默认的数字表示。
         
         return arrData[index]===undefined?"00":arrData[index];
        })
        return formData;
    }
    let getDate=getDateFormat("2018-7-31","{1}.{2} {4}:{5}");
    console.log(getDate);