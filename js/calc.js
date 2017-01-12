/**
 * Created by Tony on 16/11/2.
 */
function num1() {
    course(true, "1");
}
function num2() {
    course(true, "2");
}
function num3() {
    course(true, "3");
}
function num4() {
    course(true, "4");
}
function num5() {
    course(true, "5");
}
function num6() {
    course(true, "6");
}
function num7() {
    course(true, "7");
}
function num8() {
    course(true, "8");
}
function num9() {
    course(true, "9");
}
function num0() {
    course(true, "0");
}

function point() {
    course(true, ".");
}
function multiply() {
    course(false, "*");
}
function minus() {
    course(false, "-");
}
function add() {
    course(false, "+");
}
function divider() {
    course(false, "/");
}
function calcClear() {
    document.getElementById("course").innerText = "";
    document.getElementById("result").innerText = "";
    temp="";
    isNumCount = 0;
}
var temp = "";
var isNumCount = 0;
/**
 * 计算的过程
 * @param isNum
 * @param i
 */
function course(isNum, i) {
    if (document.getElementById("result").innerText !== "") {
        document.getElementById("result").innerText = "";
        document.getElementById("course").innerText = "";
        temp = "";
        isNumCount = 0;
    }
    //判断是数字还是运算符
    if (isNum) {
        temp += i;
        var temp1 = temp;
        //判断第一位是不是.如果是.就在前面加个0
        var frist = temp1.substring(0, 1);
        if (frist === ".") {
            temp = temp.replace(".", "0.");
        }
        //判断是否有两个.
        var list = temp.split("");
        var point = 0;
        for (var i = 0; i < list.length; i++) {
            if ("." === list[i]) {
                point++;
            }
        }
        if (point > 1) {
            temp = temp.substring(0, temp.length - 1);
        }
    } else {
        //TODO 使用正则处理 最后一位不能连续为运算符
        isNumCount++;
        var part1 = /[+-/]/;
        if (isNumCount > 1) {
            isNumCount--;
            alert("不好意思，让你失望了，这是一个很low的计算器，请按等号得到结果！")
            return;
            // var list=temp.split("");
            // var last=list[temp.length-1];
            // if (part1.test(last)) {
            //
            //     temp = temp.substring(0, temp.length - 1);
            // }
        }
        temp += i;
    }
    document.getElementById("course").innerText = temp;
}
/**
 * 得到普通运算的结果
 */
function getResult() {

    var patt1 = /[\+\-\/\*/]/;
    var list = temp.split(patt1);
    var fristNum = parseFloat(list[0]);
    var secondNum = parseFloat(list[1]);
    var operator = patt1.exec(temp);
    operator = operator[0];
    var result;
    if (operator === "+") {
        result = fristNum + secondNum;
    } else if (operator === "-") {
        result = fristNum - secondNum;
    } else if (operator === "*") {

        result = fristNum * secondNum;
    } else if(operator==="/"){
        if(secondNum===0){
            alert("除数不能为0");
            return;
        }
        result = fristNum / secondNum;
    }else{
        alert("计算错误，请重新计算");
        calcClear();
    }
    document.getElementById("result").innerText = Math.round(result * 1000) * 0.001;;


}

function getSinResult() {
    if (!isNaN(parseFloat(temp))) {
        var result = Math.sin(parseFloat(temp) * Math.PI / 180);
        document.getElementById("result").innerText = Math.round(result * 1000) * 0.001;
    } else {
        alert("请输入数字");
        calcClear();
    }
}
function getCosResult() {
    if (!isNaN(parseFloat(temp))) {
        var result = Math.cos(parseFloat(temp) * Math.PI / 180);
        document.getElementById("result").innerText = Math.round(result * 1000) * 0.001;
    } else {
        alert("请输入数字");
        calcClear();
    }
}
function getTanResult() {
    if (!isNaN(parseFloat(temp))) {
        var result = Math.tan(parseFloat(temp) * Math.PI / 180);
        document.getElementById("result").innerText = Math.round(result * 1000) * 0.001;
    } else {
        alert("请输入数字");
        calcClear();
    }
}