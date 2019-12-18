function clear() {
  model.setOperationClicked("");
  model.setIsCheck(true);
  model.setIsResult(true);
  model.setIsResultCount(true);
  model.setCopyOfArgs({
    a: "",
    b: null,
    c: null
  });
}

let clickNumber = num => {
  if (model.getIsCheck()) {
    if (+model.getDisplayValue() == 0 && num == 0) return "false";
    model.setDisplayValue(num);
    model.setIsCheck(false);
  } else {
    if (model.getDisplayValue() == "0" && num == 0) return "false";
    if (model.getDisplayValue() == "0") {
      model.setDisplayValue(num);
    } else {
      model.setDisplayValue(logic.cutDisplay(model.getDisplayValue() + num));
    }
  }
  model.setIsResultCount(true);
};

function initElements() {
  model.setDubBtn(document.getElementById("dub"));
  model.setDisplay(document.getElementById("talo"));
  model.setAllBtns(document.querySelectorAll(".btn,.bigbuttonend_n"));
  model.setPlusBtn(document.getElementById("plusBtn"));
  model.setClearBtn(document.getElementById("del"));
  model.setMinusBtn(document.getElementById("minusBtn"));
  model.setDivideBtn(document.getElementById("divideBtn"));
  model.setResultBtn(document.getElementById("equally"));
  model.setMultiplyBtn(document.getElementById("multiplyBtn"));
}

function addListeners() {
  for (let i = 0; i < model.getAllBtns().length; i++) {
    let btn = model.getAllBtns()[i];
    btn.addEventListener("click", function(e) {
      clickNumber(e.target.textContent);
    });
  }
  model.getDubBtn().addEventListener("click", function() {
    for (let i = 0; i < model.getDisplayValue().length; i++) {
      if (model.getDisplayValue()[i] === ".") return;
    }
    model.setDisplayValue(model.getDisplayValue() + ".");
    model.setIsCheck(false);
  });
  model.getPlusBtn().addEventListener("click", function() {
    lastOperation();
    onOperationClick("+");
  });
  model.getMinusBtn().addEventListener("click", function() {
    lastOperation();
    onOperationClick("-");
  });
  model.getClearBtn().addEventListener("click", function() {
    model.setDisplayValue(0);
    model.setMemoryNumber(0);
    clear();
  });
  model.getDivideBtn().addEventListener("click", function() {
    lastOperation();
    onOperationClick("/");
  });
  model.getMultiplyBtn().addEventListener("click", function() {
    lastOperation();
    onOperationClick("*");
  });
  model.getResultBtn().addEventListener("click", function() {
    if (model.getOperationClicked() == "" && model.getCopyOfArgs().a == "") {
      //model.setIsResultCount(false);
      return;
    }
    if (model.getIsResult()) {
      model.setCountNumber(Number(model.getDisplayValue()));
      switchOperations(
        model.getOperationClicked(),
        model.getMemoryNumber(),
        model.getCountNumber()
      );

      if (model.getIsResultCount() == true)
        model.setCopyOfArgs(toDoCopyOfArgs());

      model.setIsCheck(true);
      model.setIsResult(false);

      model.setDisplayValue(logic.cutDisplay(model.getMemoryNumber()));
      model.setCountNumber(0);
      model.setMemoryNumber(0);
      model.setOperationClicked("");
    }
    if (model.getIsResultCount() == false) {
      switchOperations(
        model.getCopyOfArgs().a,
        Number(model.getDisplayValue()),
        model.getCopyOfArgs().c
      );
      model.setDisplayValue(logic.cutDisplay(model.getMemoryNumber()));
    }
    if (model.getDisplayValue() == "false") model.setDisplayValue("Error");
    model.setIsResultCount(false);
  });
}

function lastOperation() {
  if (model.getIsCheck()) {
    model.setMemoryNumber(model.getDisplayValue());
  } else
    switch (model.getOperationClicked()) {
      case "+":
        model.setMemoryNumber(
          logic.summ(model.getMemoryNumber(), Number(model.getDisplayValue()))
        );
        model.setDisplayValue(logic.cutDisplay(model.getMemoryNumber()));
        break;
      case "-":
        model.setMemoryNumber(
          logic.minus(model.getMemoryNumber(), Number(model.getDisplayValue()))
        );
        model.setDisplayValue(logic.cutDisplay(model.getMemoryNumber()));
        break;
      case "/":
        model.setMemoryNumber(
          logic.divide(model.getMemoryNumber(), Number(model.getDisplayValue()))
        );
        model.setDisplayValue(logic.cutDisplay(model.getMemoryNumber()));
        break;
      case "*":
        model.setMemoryNumber(
          logic.multiply(
            model.getMemoryNumber(),
            Number(model.getDisplayValue())
          )
        );
        model.setDisplayValue(logic.cutDisplay(model.getMemoryNumber()));
        break;
    }
  if (model.getDisplayValue() == "false") model.setDisplayValue("Error");
}

function toDoCopyOfArgs() {
  let copy = {
    a: model.getOperationClicked(),
    b: model.getMemoryNumber(),
    c: model.getCountNumber()
  };
  return copy;
}

function switchOperations(getOperationClicked, first, second) {
  switch (getOperationClicked) {
    case "+":
      model.setMemoryNumber(logic.summ(first, second));
      break;
    case "-":
      model.setMemoryNumber(logic.minus(first, second));
      break;
    case "/":
      model.setMemoryNumber(logic.divide(first, second));
      break;
    case "*":
      model.setMemoryNumber(logic.multiply(first, second));
      break;
  }
}

function onOperationClick(operand) {
  model.setMemoryNumber(+model.getDisplayValue());
  model.setOperationClicked(operand);
  model.setIsCheck(true);
  model.setIsResult(true);
}
