function setup() {
    createCanvas(1275, 600);
}
let frame = 0;
const introText = Text({
    txt: "Pythagorean Theorem",
    x: 1275 / 2,
    y: 300,
    size: 60
})
const rightTriangle1 = Triangle({
    x1: 1275 / 2 - 200,
    y1: 450,
    x2: 1275 / 2 + 200,
    y2: 450,
    x3: 1275 / 2 + 200,
    y3: 150,
    color: "yellow"
})
const rightTriangle2 = Triangle({
    x1: 1275 / 2 + 200,
    y1: 250,
    x2: 1275 / 2 + 200,
    y2: 150,
    x3: 1275 / 2,
    y3: 150,
    color: "yellow"
})
const rightTriangle3 = Triangle({
    x1: 1275 / 2,
    y1: 150,
    x2: 1275 / 2 - 100,
    y2: 150,
    x3: 1275 / 2 - 100,
    y3: 350,
    color: "yellow"
})
const rightTriangle4 = Triangle({
    x1: 1275 / 2 - 100,
    y1: 350,
    x2: 1275 / 2 - 100,
    y2: 450,
    x3: 1275 / 2 + 100,
    y3: 450,
    color: "yellow"
})
const blueSquare = Quad({
    x1: 1275 / 2 + 200,
    y1: 250,
    x2: 1275 / 2,
    y2: 150,
    x3: 1275 / 2 - 100,
    y3: 350,
    x4: 1275 / 2 + 100,
    y4: 450,
    color: "blue"
});
const a = MathText({
    txt: "a",
    x: 1275 / 2,
    y: 450,
    size: 40
})
const a2 = MathText({
    txt: "a",
    x: 1275 / 2 + 220,
    y: 175,
    size: 40
})
const b = MathText({
    txt: "b",
    x: 1275 / 2 + 220,
    y: 300,
    size: 40
})
const b2 = MathText({
    txt: "b",
    x: 1275 / 2 + 100,
    y: 90,
    size: 40
})
const b3 = MathText({
    txt: "b",
    x: 1275 / 2 - 140,
    y: 210,
    size: 40
})
const b4 = MathText({
    txt: "b",
    x: 1275 / 2 - 20,
    y: 450,
    size: 40
})
const a3 = MathText({
    txt: "a",
    x: 1275 / 2 - 62.5,
    y: 90,
    size: 40
})
const a4 = MathText({
    txt: "a",
    x: 1275 / 2 - 140,
    y: 370,
    size: 40
})
const c = MathText({
    txt: "c",
    x: 1275 / 2 - 30,
    y: 275 - 30,
    size: 40
})
const c2 = MathText({
    txt: "c",
    x: 1275 / 2 + 85,
    y: 190,
    size: 40
})
const c3 = MathText({
    txt: "c",
    x: 1275 / 2 - 45 + 5,
    y: 220 + 5,
    size: 40
})
const c4 = MathText({
    txt: "c",
    x: 1275 / 2,
    y: 345,
    size: 40
})
const c_2 = MathText({
    txt: "c^2",
    x: 1275 / 2 - 100 + 130,
    y: 150 + 130,
    size: 40
})
const hypotenuseText = Text({
    txt: "?",
    x: 1275 / 2,
    y: 275,
    size: 40
});
const step1 = MathText({
    txt: "\\frac{ab}{2}",
    x: 30,
    y: 280,
    size: 40
})
const step2 = MathText({
    txt: "\\frac{4ab}{2}",
    x: 30,
    y: 280,
    size: 40
})
const step3 = MathText({
    txt: "2ab",
    x: 30,
    y: 280,
    size: 40
})
const step4 = MathText({
    txt: "2ab+c^2",
    x: 30,
    y: 280,
    size: 40
})
const step5 = MathText({
    txt: "2ab+c^2=(a+b)^2",
    x: 30,
    y: 280,
    size: 40
})
const helper = MathText({
    txt: "(a+b)^2=a^2+2ab+b^2",
    x: 25,
    y: 445,
    size: 30
})
const step6 = MathText({
    txt: "2ab+c^2=a^2+2ab+b^2",
    x: 30,
    y: 280,
    size: 40
})
const step7 = MathText({
    txt: "c^2=a^2+b^2",
    x: 30,
    y: 280,
    size: 40
})
const finalStep = MathText({
    txt: "a^2+b^2=c^2",
    x: 30,
    y: 280,
    size: 40
})
const exampleTri = Triangle({
    x1: 1275 / 2 - 200,
    y1: 450,
    x2: 1275 / 2 + 200,
    y2: 450,
    x3: 1275 / 2 + 200,
    y3: 150,
    color: "yellow"
});
const aex = MathText({
    txt: "4",
    x: 1275 / 2,
    y: 455,
    size: 40
})
const bex = MathText({
    txt: "3",
    x: 1275 / 2 + 220,
    y: 300,
    size: 40
})
const cres = MathText({
    txt: "5",
    x: 1275 / 2 - 30,
    y: 275 - 30,
    size: 40
})
const ex1 = MathText({
    txt: "a^2+b^2=c^2",
    x: 1275 / 2 + 300,
    y: 300,
    size: 40
})
const ex2 = MathText({
    txt: "4^2+3^2=c^2",
    x: 1275 / 2 + 300,
    y: 300,
    size: 40
})
const ex3 = MathText({
    txt: "16+9=c^2",
    x: 1275 / 2 + 300,
    y: 300,
    size: 40
})
const ex4 = MathText({
    txt: "c^2=25",
    x: 1275 / 2 + 300,
    y: 300,
    size: 40
})
const ex5 = MathText({
    txt: "c=5",
    x: 1275 / 2 + 300,
    y: 300,
    size: 40
})
const endText = Text({
    txt: "Pythagorean Theorem",
    x: 1275 / 2,
    y: 300,
    size: 60
});
const exampleGraph = Graph({
    x: 100,
    y: 200,
    width: 200,
    height: 200,
    xScale: 12,
    yScale: 12
})
const trigIdent = MathText({
    txt: "\\sin^{2}(\\theta)+\\cos^{2}(\\theta)=1",
    x: 1275 - 400,
    y: 280,
    size: 20
});
let scene = Scene([{
    add: [introText]
}, {
    start() {
        introText.become("An Intuitive Explanation")
    }
}, {
    add: [rightTriangle1],
    remove: [introText]
}, {
    add: [a, b]
}, {
    add: [hypotenuseText]
}, {
    start() {
        hypotenuseText.become("Hypotenuse");
        hypotenuseText.shift(-100);
    }
}, {
    add: [c],
    remove: [hypotenuseText]
}, {
    start() {
        rightTriangle1.move(1275 / 2 + 100,
            450,
            1275 / 2 + 200,
            450,
            1275 / 2 + 200,
            250)
        a.shift(125);
        b.shift(0, 25);
        c.move(1275 / 2 + 120, 295)
    }
}, {
    add: [rightTriangle2, rightTriangle3, rightTriangle4]
}, {
    add: [c2, c3, c4, a2, a3, b2, b3, b4, a4]
}, {
    add: [blueSquare]
}, {
    add: [c_2]
}, {
    add: [step1]
}, {
    add: [step2],
    remove: [step1]
}, {
    add: [step3],
    remove: [step2]
}, {
    add: [step4],
    remove: [step3]
}, {
    add: [step5],
    remove: [step4]
}, {
    add: [helper]
}, {
    add: [step6],
    remove: [step5]
}, {
    remove: [helper]
}, {
    add: [step7],
    remove: [step6]
}, {
    add: [finalStep],
    remove: [step7],
    start() {
        finalStep.shift(100);
    }
}, {
    remove: [a, a2, a3, a4, b, b2, b3, b4, c, c2, c3, c4, rightTriangle1, rightTriangle2, rightTriangle3, rightTriangle4, c_2, blueSquare]
}, {
    add: [exampleTri]
}, {
    add: [aex, bex]
}, {
    add: [ex1]
}, {
    add: [ex2],
    remove: [ex1]
}, {
    add: [ex3],
    remove: [ex2]
}, {
    add: [ex4],
    remove: [ex3]
}, {
    add: [ex5],
    remove: [ex4]
}, {
    add: [cres],
    remove: [ex5]
}, {
    add: [endText],
    remove: [exampleTri, aex, bex, cres],
    start() {
        finalStep.shift(350)
        endText.shift(0, -150)
    }
}, {
    add: [exampleGraph]
}, {
    start() {
        exampleGraph.point(1, 1);
        exampleGraph.point(4, 5);
    }
}, {
    start() {
        exampleGraph.line(1, 1, 4, 5);
    }
}, {
    add: [trigIdent]
}, {
    remove: [exampleGraph, trigIdent]
}])

function draw() {
    background(0);
    scene.show();
}

function mousePressed() {
    scene.advance();
}