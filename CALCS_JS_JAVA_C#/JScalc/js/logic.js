const logic = {
    summ(a, b) {
        if (typeof a != "number" || typeof b != "number") return "false";
        a += b;
        if (!this.isNice(a)) return "false";
        return this.checkLenght(a);
    },
    minus(a, b) {
        if (typeof a != "number" || typeof b != "number") return "false";
        a -= b;
        if (!this.isNice(a)) return "false";
        return this.checkLenght(a);
    },
    isNice(a) {
        let c = parseInt(a);
        if (c > 999999999 || isNaN(a)) {
            model.setDisplayValue("Error");
            return false;
        }
        return true;
    },
    divide(a, b) {
        if (typeof a == "number" && typeof b == "number") {
            if (a == 0 || b == 0) {
                return 0;
            }
            a /= b;
            if (!this.isNice(a)) return "false";
            return this.checkLenght(a);
        } else {
            return "false";
        }
    },
    multiply(a, b) {
        if (typeof a != "number" || typeof b != "number") return "false";
        a *= b;
        if (!this.isNice(a)) return "false";
        return this.checkLenght(a);
    },
    cutDisplay(a) {
        if (a == null) return "false";
        if (a.length > 9)
            a = a.slice(0, 9);
        return a;
    },
    checkLenght(a) {
        return parseFloat(this.cutDisplay(String(a)));
    }
}