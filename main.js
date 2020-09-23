function setup() {
    createCanvas(1275, 600);
}
let startText = Text({
    txt: "Binomial Theorem",
    x: 1275 / 2,
    y: 300,
    size: 60
})
const degree0 = MathText({
    txt: "(a+b)^0",
    x: 1275 / 2 - 120,
    y: 270,
    size: 60
})
const degree1 = MathText({
    txt: "(a+b)^1",
    x: 1275 / 2 - 120,
    y: 270,
    size: 60
})
const degree2 = MathText({
    txt: "(a+b)^2",
    x: 1275 / 2 - 120,
    y: 270,
    size: 60
})
const degree3 = MathText({
    txt: "(a+b)^3",
    x: 1275 / 2 - 120,
    y: 270,
    size: 60
})
const degree4 = MathText({
    txt: "(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4",
    x: 10,
    y: 170,
    size: 30
})
const degree5 = MathText({
    txt: "(a+b)^5=a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5",
    x: 10,
    y: 210,
    size: 30
})
const degree8 = MathText({
    txt: "(a+b)^8",
    x: 10,
    y: 285,
    size: 30
})
const ninthRow = Text({
    txt: "1  8  28  56  70  56  28  8  1",
    x: 1275 / 2,
    y: 225,
    size: 30
})
const pascal = Pascal({
    x: 1275 / 2,
    y: 300,
    size: 30
})
let endText = Text({
    txt: "Binomial Theorem",
    x: 1275 / 2,
    y: 150,
    size: 60
});
let endMath = MathText({
    txt: "(a+b)^n=",
    x: 300,
    y: 270,
    size: 60
})
let scene = Scene([{
    add: [startText]
}, {
    start() {
        startText.become("From the Ground Up");
    }
}, {
    remove: [startText]
}, {
    add: [degree0]
}, {
    start() {
        degree0.become("(a+b)^0 = 1")
    }
}, {
    start() {
        degree0.move(10, 10);
        degree0.resize(30);
    }
}, {
    add: [degree1]
}, {
    start() {
        degree1.become("(a+b)^1=a+b")
    }
}, {
    start() {
        degree1.move(10, 50);
        degree1.resize(30);
    }
}, {
    add: [degree2]
}, {
    start() {
        degree2.become("(a+b)^2=(a+b)(a+b)")
        degree2.shift(-400);
    }
}, {
    start() {
        degree2.become("(a+b)^2=a(a+b)+b(a+b)")
    }
}, {
    start() {
        degree2.become("(a+b)^2=a^2+ab+ba+b^2")
    }
}, {
    start() {
        degree2.become("(a+b)^2=a^2+2ab+b^2")
    }
}, {
    start() {
        degree2.move(10, 90);
        degree2.resize(30);
    }
}, {
    add: [degree3]
}, {
    start() {
        degree3.become("(a+b)^3=(a+b)(a+b)^2")
        degree3.shift(-400);
    }
}, {
    start() {
        degree3.become("(a+b)^3=(a+b)(a^2+2ab+b^2)")
    }
}, {
    start() {
        degree3.become("(a+b)^3=a^2(a+b)+2ab(a+b)+b^2(a+b)")
    }
}, {
    start() {
        degree3.become("(a+b)^3=a^3+a^2b+2ab(a+b)+b^2(a+b)")
    }
}, {
    start() {
        degree3.become("(a+b)^3=a^3+a^2b+2a^2b+2ab^2+b^2(a+b)")
    }
}, {
    start() {
        degree3.become("(a+b)^3=a^3+a^2b+2a^2b+2ab^2+ab^2+b^3")
    }
}, {
    start() {
        degree3.become("(a+b)^3=a^3+3a^2b+3ab^2+b^3")
    }
}, {
    start() {
        degree3.move(10, 130);
        degree3.resize(30);
    }
}, {
    add: [degree4]
}, {
    add: [degree5]
}, {
    start() {
        degree1.become("(a+b)^1=1a+1b");
        degree2.become("(a+b)^2=1a^2+2ab+1b^2");
        degree3.become("(a+b)^3=1a^3+3a^2b+3ab^2+1b^3");
        degree4.become("(a+b)^4=1a^4+4a^3b+6a^2b^2+4ab^3+1b^4");
        degree5.become("(a+b)^5=1a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+1b^5");
    }
}, {
    add: [pascal],
    start() {
        pascal.showRow();
    }
}, {
    start() {
        pascal.showRow();
    }
}, {
    start() {
        pascal.showRow();
    }
}, {
    start() {
        pascal.showRow();
    }
}, {
    start() {
        pascal.showRow();
    }
}, {
    remove: [degree0, degree1, degree2, degree3, degree4, degree5],
    start() {
        pascal.showRow();
        pascal.shift(0, -262.5);
    }
}, {
    start() {
        pascal.borderLines();
    }
}, {
    start() {
        pascal.sumLines();
    }
}, {
    start() {
        pascal.showRow();
    }
}, {
    start() {
        pascal.showRow();
    }
}, {
    start() {
        pascal.showRow();
    }
}, {
    start() {
        pascal.showRow();
    }
}, {
    start() {
        pascal.displayDegrees();
    }
}, {
    remove: [pascal]
}, {
    add: [degree8]
}, {
    add: [ninthRow]
}, {
    start() {
        degree8.become("(a+b)^8=a^8")
    }
}, {
    start() {
        degree8.become("(a+b)^8=a^8+8a^7b")
    }
}, {
    start() {
        degree8.become("(a+b)^8=a^8+8a^7b+28a^6b^2")
    }
}, {
    start() {
        degree8.become("(a+b)^8=a^8+8a^7b+28a^6b^2+56a^5b^3")
    }
}, {
    start() {
        degree8.become("(a+b)^8=a^8+8a^7b+28a^6b^2+56a^5b^3+70a^4b^4")
    }
}, {
    start() {
        degree8.become("(a+b)^8=a^8+8a^7b+28a^6b^2+56a^5b^3+70a^4b^4+56a^3b^5")
    }
}, {
    start() {
        degree8.become("(a+b)^8=a^8+8a^7b+28a^6b^2+56a^5b^3+70a^4b^4+56a^3b^5+28a^2b^6")
    }
}, {
    start() {
        degree8.become("(a+b)^8=a^8+8a^7b+28a^6b^2+56a^5b^3+70a^4b^4+56a^3b^5+28a^2b^6+8ab^7")
    }
}, {
    start() {
        degree8.become("(a+b)^8=a^8+8a^7b+28a^6b^2+56a^5b^3+70a^4b^4+56a^3b^5+28a^2b^6+8ab^7+b^8")
    }
}, {
    remove: [degree8, ninthRow],
    add: [endText]
}, {
    add: [endMath]
}, {
    start() { endMath.become("(a+b)^n=\\displaystyle\\sum_{k=0}^{n}") }
}, {
    start() {
        endMath.become("(a+b)^n=\\displaystyle\\sum_{k=0}^{n}\\binom{n}{k}")
    }
}, {
    start() {
        endMath.become("(a+b)^n=\\displaystyle\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^k")
        endMath.shift(-75);
    }
}])

function draw() {
    background(0);
    scene.show();
}

function mousePressed() {
    scene.advance();
}