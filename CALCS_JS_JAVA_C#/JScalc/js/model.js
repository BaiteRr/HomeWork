let countNumber = 0;
let memoryNumber = 0;
let copyOfArgs = {};

let isCheck = true;
let isResult = true;
let isrResultCount = true;


let dubBtn;
let display;
let allBtns;
let plusBtn;
let clearBtn;
let minusBtn;
let divideBtn;
let resultBtn;
let multiplyBtn ;


let operationClicked = "";

 const model = {
   setCountNumber : function(value){
      countNumber =  value;
    },
   getCountNumber : function(){
     return countNumber;
   },

   setMemoryNumber : function(value){
     memoryNumber =  value;
   },
   getMemoryNumber : function(){
     return memoryNumber;
   },

   setIsCheck : function(value){
     isCheck =  value;
   },
   getIsCheck : function(){
     return isCheck;
   },

   setIsResult : function(value){
     isResult =  value;
   },
   getIsResult : function(){
     return isResult;
   },

   setOperationClicked : function(value){
     operationClicked =  value;
   },
   getOperationClicked : function(){
     return operationClicked;
   },

   setDubBtn : function(value){
     dubBtn =  value;
   },
   getDubBtn : function(){
     return dubBtn;
   },

   setDisplay : function(value){
     display =  value;
   },
   getDisplay : function(){
     return display;
   },

   setDisplayValue : function(value){
     display.value =  value;
   },
   getDisplayValue : function(){
     return display.value;
   },

   setAllBtns : function(value){
     allBtns =  value;
   },
   getAllBtns : function(){
     return allBtns;
   },

   setPlusBtn : function(value){
     plusBtn =  value;
   },
   getPlusBtn : function(){
     return plusBtn;
   },

   setClearBtn : function(value){
     clearBtn =  value;
   },
   getClearBtn : function(){
     return clearBtn;
   },

   setMinusBtn : function(value){
     minusBtn =  value;
   },
   getMinusBtn : function(){
     return minusBtn;
   },

   setDivideBtn : function(value){
     divideBtn =  value;
   },
   getDivideBtn : function(){
     return divideBtn;
   },

   setResultBtn : function(value){
     resultBtn =  value;
   },
   getResultBtn : function(){
     return resultBtn;
   },

   setMultiplyBtn : function(value){
     multiplyBtn =  value;
   },
   getMultiplyBtn : function(){
     return multiplyBtn;
   },

   setIsResultCount : function(value){
     isrResultCount =  value;
   },
   getIsResultCount : function(){
     return isrResultCount;
   },
   setCopyOfArgs : function(value){
     copyOfArgs =  value;
   },
   getCopyOfArgs : function(){
     return copyOfArgs;
   },

 }



