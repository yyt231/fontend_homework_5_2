/**
 * Created by Tony on 16/10/19.
 */
/**
 * Created by Tony on 16/10/19.
 */
    //第一个数字，第二个数字，计算结果，运算符
var fristNum, secondNum, resutltNum, calcType;
//用于拼接数字的临时变量
var stringFristNum = new String("");
var stringSecondNum = new String("");

//计算结果
function calc(innerFristNum, innerSecondNum, calcType) {


    innerFristNum = parseInt(innerFristNum);
    innerSecondNum = parseInt(innerSecondNum);

    if (calcType === undefined) {
        alert("请重新计算");
        document.getElementById("fristnum").innerText = "";
        document.getElementById("resultnum").innerText = "";
        return;
    }
    if (isNaN(innerSecondNum)) {
        innerSecondNum = 0;
        document.getElementById("secondnum").innerText = new String(innerSecondNum);
    }
    if (calcType === ("/")) {
        if (innerSecondNum != 0) {
            fristNum = innerFristNum / innerSecondNum;
            return fristNum;
        } else {
            alert("除数不能为0，请重新输入");
            return;
        }
    } else if (calcType === ("+")) {
        fristNum = innerFristNum + innerSecondNum;
        return fristNum;
    } else if (calcType === ("-")) {
        fristNum = innerFristNum - innerSecondNum;
        return fristNum;
    } else if (calcType === ("*")) {
        fristNum = innerFristNum * innerSecondNum;
        return fristNum
    }
}


//获取输入的数字
function getNum(number) {
    //document.getElementById("calc-type").innerText="";
    document.getElementById("secondnum").innerText = "";
    document.getElementById("resultnum").innerText = "";


    //判断一个数是否存在，如果不存在，则输入的字符为第一个数字
    if (isNaN(parseInt(stringFristNum))) {
        stringFristNum += new String(number);
        document.getElementById("fristnum").innerText = stringFristNum;
        console.log("1----stringFristNum=" + stringFristNum);
    } else {
        //如果第一个数字存在，则判断是否存在运算符，这个运算符可能是上一回计算留下的，也有可能是这回输入的

        //如果运算符不存在，那么就是一个新的运算，输入的值为第一个数字
        if (calcType === undefined) {
            stringFristNum += new String(number);
            document.getElementById("fristnum").innerText = stringFristNum;
            console.log("2---stringFristNum=" + stringFristNum);
        } else {
            //如果运算符存在，即有上一个计算的运算符，
            //如果是否存在上一回计算的结果，如果存在，判断
            if (isNaN(parseInt(resutltNum))) {
                if (calcType === undefined) {
                    stringFristNum += new String(number);
                    document.getElementById("fristnum").innerText = stringFristNum;
                    console.log("3---stringFristNum=" + stringFristNum);
                } else {
                    stringSecondNum += new String(number);
                    document.getElementById("secondnum").innerText = stringSecondNum;
                    console.log("1---stringSecondNum=" + stringSecondNum);
                }

            } else {
                //如果不存在，则输入的数字为第二个数字的
                stringSecondNum += new String(number);
                document.getElementById("secondnum").innerText = stringSecondNum;
                console.log("2---stringSecondNum=" + stringSecondNum);
            }
        }
    }

}


document.getElementById("zero").onclick = function () {
    getNum(document.getElementById("zero").value);
}
document.getElementById("one").onclick = function () {
    getNum(document.getElementById("one").value);
}

document.getElementById("two").onclick = function () {
    getNum(document.getElementById("two").value);
}
document.getElementById("three").onclick = function () {
    getNum(document.getElementById("three").value);
}
document.getElementById("four").onclick = function () {
    getNum(document.getElementById("four").value);
}
document.getElementById("five").onclick = function () {
    getNum(document.getElementById("five").value);
}
document.getElementById("six").onclick = function () {
    getNum(document.getElementById("six").value);
}
document.getElementById("seven").onclick = function () {
    getNum(document.getElementById("seven").value);
}
document.getElementById("eight").onclick = function () {
    getNum(document.getElementById("eight").value);
}
document.getElementById("nine").onclick = function () {
    getNum(document.getElementById("nine").value);
}

//定义运算符
function defineCalcType(innerCalcType) {
    calcType = innerCalcType;
    document.getElementById("calc-type").innerText = calcType;
    console.log(calcType);
}
document.getElementById("plus").onclick = function () {
    defineCalcType(document.getElementById("plus").value);
}
document.getElementById("reduce").onclick = function () {
    defineCalcType(document.getElementById("reduce").value);
}
document.getElementById("ride").onclick = function () {
    defineCalcType(document.getElementById("ride").value);
}
document.getElementById("divide").onclick = function () {
    defineCalcType(document.getElementById("divide").value);
}


document.getElementById("equal-to").onclick = function () {

    fristNum = parseInt(stringFristNum);
    secondNum = parseInt(stringSecondNum);
    if(isNaN(fristNum) || isNaN(secondNum)){
        document.getElementById("calc-type").innerText = "";
        return;
    }
    if(fristNum===undefined || secondNum===undefined || calcType===undefined){
        return;
    }

    if (calcType === undefined) {
        document.getElementById("resultnum").innerText = "";
    } else {
        resutltNum = parseInt(calc(fristNum, secondNum, calcType));
        document.getElementById("resultnum").innerText = resutltNum;
    }



    stringFristNum = ""
    stringSecondNum = "";
    calcType = undefined;
    fristNum = 0;
    secondNum = 0;

    // alert(resutltNum);
}

document.getElementById("reset").onclick = function () {

    reset();
}

function reset() {
    fristNum = undefined;
    secondNum = undefined;
    calcType = undefined;
    resutltNum = undefined;
    stringFristNum = "";
    stringSecondNum = "";
    if (!(document.getElementById("fristnum").innerText === "")) {
        document.getElementById("fristnum").innerText = "";
        document.getElementById("calc-type").innerText = "";
        document.getElementById("secondnum").innerText = "";
        document.getElementById("resultnum").innerText = "";

    }
}