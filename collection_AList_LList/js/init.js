const arrayList = {
    length: function () {
        if(arguments.length > 0){
            return false
        }

        let index = 0;

        for (let i = 0 ; this[i] !== undefined ; i++){
            index = i + 1;
        }

        return index;
    },
    clearArray: function(){
        for(let i = this.length(); i >= 0; i--){
            delete this[i];
        }
    },
    push: function (value){
        if(arguments.length > 1 || arguments.length < 1){
            return false
        }

        let tmp = this.length();

        return this[tmp] = value;
    },
    pop: function () {
        if(this[0] === undefined){
            return false
        }

        if(arguments.length > 0){
            return false
        }

        let tmp = this.length() - 1;
        return delete this[tmp];
    },
    unshift: function(value) {
        if(arguments.length > 1 || arguments.length < 1){
            return false
        }

        let tmpArray = {};

        for (let i = 0 ; this[i] !== undefined ; i++){
            tmpArray[i + 1] = this[i]
        }

        tmpArray[0] = value;

        for (let i = 0 ; tmpArray[i] !== undefined ; i++){
            this[i] = tmpArray[i];
        }
    },
    shift: function () {
        if(this[0] === undefined){
            return  false
        }

        if(arguments.length > 0){
            return false
        }

        let tmpArray = {};
        delete this[0];

        for (let i = 1 ; this[i] !== undefined ; i++){
            tmpArray[i - 1] = this[i]
        }

        let i;
        for (i = 0 ; tmpArray[i] !== undefined ; i++){
            this[i] = tmpArray[i];
        }
        delete this[i];
    },
    toString: function () {
        if(arguments.length > 0){
            return false
        }

        let string = '';
        let tmpArray = {};
        tmpArray = this;

        for(let i = 0; this[i] !==undefined; i++){
            tmpArray[i] = '' + tmpArray[i]
        }

        for(let i = 0; this[i] !==undefined; i++){
            string += `${tmpArray[i]} `
        }
        return string;
    },
    sort: function (commit) {
        if (commit) {
            if (typeof commit == "function") {
                for (let i = 0; i < this.length(); i++) {
                    for (let j = 0; j < this.length(); j++) {
                        if (j === this.length() - 1)
                            break;
                        if (commit(this[j], this[j + 1]) > 0) {
                            let tmp = this[j + 1];
                            this[j + 1] = this[j];
                            this[j] = tmp;
                        }
                    }
                }
            }
            else {
                return false
            }
        }
        else {
            for (let i = 0; i < this.length(); i++) {
                for (let j = 0; j < this.length(); j++) {
                    if (j === this.length() - 1)
                        break;
                    if (String(this[j]) > String(this[j + 1])) {
                        let tmp = this[j + 1];
                        this[j + 1] = this[j];
                        this[j] = tmp;
                    }
                }
            }
        }
    },
    toLinkedList: function () {
        if(arguments.length > 0 ||this[0] === undefined){
            return false;
        }
        
        let LinkedList = this.linkedList;
        
        for(let i = 0; i <= this.length(); ++i){
            if(this[i] !== undefined){
                LinkedList.push(this[i])
            }
        }
        this.LinkedList = LinkedList;
        return LinkedList;
    },
    linkedList: {
        root:{
            nextNoda: null,
            prevNoda: null,
            length: 0,
        },
        length: function(){
            if(arguments.length > 0){
                return false
            }

            return this.root.length
        },
        clearList:function(){
            this.root.nextNoda = null;
            this.root.prevNoda = null;
            this.root.length = 0;
        },
        createNoda: function(el){
            return {
                el: el ? el : null,
                nextNoda: null,
                prevNoda: null,
                index: this.root.length
            }
        },
        push: function (el) {
            if(arguments.length < 1 || arguments.length > 1){
                return false;
            }

            const newNoda = this.createNoda(el);

            let tmpNoda = this.root;

            while (tmpNoda.nextNoda && (tmpNoda.nextNoda !== this.root) ){
                tmpNoda.nextNoda.prevNoda = tmpNoda;
                tmpNoda = tmpNoda.nextNoda;
                newNoda.prevNoda = tmpNoda
            }

            tmpNoda.nextNoda = newNoda;

            this.root.prevNoda = newNoda;

            this.root.length++
        },
        unshift: function (el) {
            if(arguments.length < 1 || arguments.length > 1){
                return false;
            }

            const newNoda = this.createNoda(el);

            let tmpPrev = this.root;

            if ( this.root.nextNoda !== null){
                this.root.nextNoda.prevNoda = newNoda;
            }

            let tmpNoda = this.root.nextNoda;

            this.root.nextNoda = newNoda;

            this.root.nextNoda.nextNoda = tmpNoda;

            this.root.length++
        },
        /*reverse: function(){
            this.root.length = 0
            let length = 0;
            let tmpList = this.root
            let tmpNoda = this.root/!*.nextNoda.el;*!/
            while(tmpNoda.nextNoda !== null){
            /!*if()*!/
                tmpNoda = tmpNoda.nextNoda
                tmpList = this.unshift(tmpNoda.el)
                console.log(tmpList)

            }
            console.log(linkedList)
            /!*this.root = tmpList*!/

        },*/
        pop: function () {
            if(this.root.length === 0){
                return false
            }

            if(arguments.length > 0){
                return false;
            }

            let tmpNoda = this.root;

            while(tmpNoda.nextNoda !== null){
                tmpNoda = tmpNoda.nextNoda;

                if(tmpNoda.index === (this.root.length-2)){
                    tmpNoda.nextNoda = null;
                }
            }

            this.root.length --
        },
        shift: function () {
            if(arguments.length > 0){
                return false;
            }

            if(this.root.length === 0){
                return false
            }

            const tmpNoda = this.root.nextNoda.nextNoda;
            this.root.nextNoda = null;
            this.root.nextNoda = tmpNoda;
            this.root.length--
        },
    },
};

const linkedList = {
    root:{
      nextNoda: null,
      prevNoda: null,
        length: 0,
    },
    length: function(){
        if(arguments.length > 0){
            return false
        }
        return this.root.length
    },
    clearList:function(){
        this.root.nextNoda = null;
        this.root.prevNoda = null;
        this.root.length = 0;
    },
    createNoda: function(el){
        return {
            el: el ? el : null,
            nextNoda: null,
            prevNoda: null,
            index: this.root.length
        }
    },
    push: function (el) {
        if(arguments.length < 1 || arguments.length > 1){
            return false;
        }

        const newNoda = this.createNoda(el);
        let tmpNoda = this.root;

        while (tmpNoda.nextNoda && (tmpNoda.nextNoda !== this.root) ){
            tmpNoda.nextNoda.prevNoda = tmpNoda;
            tmpNoda = tmpNoda.nextNoda;
            newNoda.prevNoda = tmpNoda
        }

        tmpNoda.nextNoda = newNoda;
        this.root.prevNoda = newNoda;
        this.root.length++
    },
    unshift: function (el) {
        if(arguments.length < 1 || arguments.length > 1){
            return false;
        }

        const newNoda = this.createNoda(el);

        if ( this.root.nextNoda !== null){
            this.root.nextNoda.prevNoda = newNoda;
        }

        let tmpNoda = this.root.nextNoda;
        this.root.nextNoda = newNoda;
        this.root.nextNoda.nextNoda = tmpNoda;
        this.root.length++
    },
    /*reverse: function(){
        this.root.length = 0
        let length = 0;
        let tmpList = this.root
        let tmpNoda = this.root/!*.nextNoda.el;*!/
        while(tmpNoda.nextNoda !== null){
        /!*if()*!/
            tmpNoda = tmpNoda.nextNoda
            tmpList = this.unshift(tmpNoda.el)
            console.log(tmpList)

        }
        console.log(linkedList)
        /!*this.root = tmpList*!/

    },*/
    pop: function () {
        if(this.root.length === 0 || arguments.length > 0){
            return false
        }

        let tmpNoda = this.root;

        while(tmpNoda.nextNoda !== null){
            tmpNoda = tmpNoda.nextNoda;

            if(tmpNoda.index === (this.root.length-2)){
                tmpNoda.nextNoda = null;
            }
        }
        this.root.length --
    },
    shift: function () {
        if(arguments.length > 0 || this.root.length === 0){
            return false;
        }

        const tmpNoda = this.root.nextNoda.nextNoda;
        this.root.nextNoda = null;
        this.root.nextNoda = tmpNoda;
        this.root.length--
    },
    toArrayList: function () {
        if(arguments.length > 0 || this.root.length === 0){
            return false;
        }

        let tmptNoda = this.root;
        let ArrayList = this.arrayList;

        while(tmptNoda.nextNoda !== null){
            ArrayList.push(tmptNoda.el);
            tmptNoda = tmptNoda.nextNoda
        }
        ArrayList.push(tmptNoda.el);
        this.ArrayList = ArrayList;
        return ArrayList
    },
    sort: function(commit){
        if (commit) {
            if (typeof commit == "function") {

                for (let i = 0; i < this.root.length; i++) {

                    let tmpNoda = this.root.nextNoda;
                    for (let j = 0; j < this.root.length; j++) {

                        if (tmpNoda.nextNoda === null) break;
                        if (commit(tmpNoda.el, tmpNoda.nextNoda.el) > 0) {
                            let tmp = tmpNoda.el;
                            tmpNoda.el = tmpNoda.nextNoda.el;
                            tmpNoda.nextNoda.el = tmp;
                        }
                        tmpNoda = tmpNoda.nextNoda
                    }
                }
            }
            else {
                return false
            }
        } else {
            for (let i = 0; i < this.root.length; i++) {

                let tmpNoda = this.root.nextNoda;
                for (let j = 0; j < this.root.length; j++) {

                    if (tmpNoda.nextNoda === null) break;

                        if (String(tmpNoda.el) > String(tmpNoda.nextNoda.el)) {
                            let tmp = tmpNoda.el;
                            tmpNoda.el = tmpNoda.nextNoda.el;
                            tmpNoda.nextNoda.el = tmp;
                        }
                    tmpNoda = tmpNoda.nextNoda
                }
            }
        }
    },
    arrayList: {
        length: function () {
            if(arguments.length > 0){
                return false
            }

            let index = 0;

            for (let i = 0 ; this[i] !== undefined ; i++){
                index = i + 1;
            }

            return index;
        },
        clearArray: function(){
            for(let i = this.length(); i >= 0; i--){
                delete this[i];
            }
        },
        push: function (value){
            if(arguments.length > 1 || arguments.length < 1){
                return false
            }

            let tmp = this.length();

            return this[tmp] = value;
        },
        pop: function () {
            if(this[0] === undefined){
                return false
            }

            if(arguments.length > 0){
                return false
            }

            let tmp = this.length() - 1;

            return delete this[tmp];
        },
        unshift: function(value) {
            if(arguments.length > 1 || arguments.length < 1){
                return false
            }

            let tmpArray = {};

            for (let i = 0 ; this[i] !== undefined ; i++){
                tmpArray[i + 1] = this[i]
            }

            tmpArray[0] = value;

            for (let i = 0 ; tmpArray[i] !== undefined ; i++){
                this[i] = tmpArray[i];
            }
        },
        shift: function () {
            if(this[0] === undefined){
                return  false
            }

            if(arguments.length > 0){
                return false
            }

            let tmpArray = {};

            delete this[0];

            for (let i = 1 ; this[i] !== undefined ; i++){
                tmpArray[i - 1] = this[i]
            }

            let i;
            for (i = 0 ; tmpArray[i] !== undefined ; i++){
                this[i] = tmpArray[i];
            }
            delete this[i];
        },
        toString: function () {
            if(arguments.length > 0){
                return false
            }

            let string = '';
            let tmpArray = {};
            tmpArray = this;

            for(let i = 0; this[i] !==undefined; i++){
                tmpArray[i] = '' + tmpArray[i]
            }

            for(let i = 0; this[i] !==undefined; i++){
                string += `${tmpArray[i]} `
            }
            return string;
        },
        sort: function () {
            if (commit) {
                if (typeof commit == "function") {
                    for (let i = 0; i < this.length; i++) {
                        for (let j = 0; j < this.length; j++) {
                            if (j === this.length - 1)
                                break;
                            if (commit(this[j], this[j + 1]) > 0) {
                                let tmp = this[j + 1];
                                this[j + 1] = this[j];
                                this[j] = tmp;
                            }
                        }
                    }
                }
            } else {
                for (let i = 0; i < this.length; i++) {
                    for (let j = 0; j < this.length; j++) {
                        if (j === this.length - 1)
                            break;
                        if (String(this[j]) > String(this[j + 1])) {
                            let tmp = this[j + 1];
                            this[j + 1] = this[j];
                            this[j] = tmp;
                        }
                    }
                }
            }
        },
        toLinkedList: function () {
            if(arguments.length > 0 ||this[0] === undefined){
                return false;
            }

            let LinkedList = this.linkedList;

            for(let i = 0; i <= this.length(); ++i){
                if(this[i] !== undefined){
                    LinkedList.push(this[i])
                }
            }
            arrayList.linkedList = LinkedList;
            return arrayList.linkedList = LinkedList;
        },
    },
};