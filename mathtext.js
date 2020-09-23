function MathText({
    txt,
    color = "white",
    x,
    y,
    size
}) {
    txt = `\\textcolor{${color}}{${txt}}`;
    let latex = document.createElement("div");
    latex.style.position = "absolute";
    x = x + 8;
    y = y + 8;
    latex.style.left = `${x}px`;
    latex.style.top = `${y}px`;
    latex.style.fontSize = `${size}px`;
    latex.style.opacity = "0";
    document.body.appendChild(latex);
    latex.setAttribute("hidden", "true");
    katex.render(txt, latex, {
        throwOnError: false
    });
    let fadeTimer = Timer({
        start: 0,
        duration: 60,
        stop: 1,
    });
    const mover = Mover([x, y]);
    const scaleMover = Mover([size]);
    let fading = "";
    let fadeOutCallback;
    return {
        get x() {
            return x;
        },
        get y() {
            return y;
        },
        show() {
            if (fading === "in") {
                fadeTimer.tick();
            } else if (fading === "out") {
                fadeTimer.reverseTick();
            }
            if (fadeTimer.reverseDone() && fadeOutCallback) {
                fadeOutCallback();
            }
            latex.style.opacity = fadeTimer.value();
            latex.removeAttribute("hidden");
            mover.tick();
            scaleMover.tick();
            x = mover.points[0];
            y = mover.points[1];
            size = scaleMover.points[0];
            latex.style.left = `${x}px`;
            latex.style.top = `${y}px`;
            latex.style.fontSize = `${size}px`;
        },
        hide() {
            latex.setAttribute("hidden", "true");
        },
        fadeIn() {
            fading = "in";
        },
        fadeOut() {
            fading = "out";
        },
        become(txt2) {
            this.fadeOut();
            fadeOutCallback = () => {
                txt = txt2;
                txt = `\\textcolor{${color}}{${txt}}`
                katex.render(txt, latex, {
                    throwOnError: true
                });
                fadeOutCallback = undefined;
                this.fadeIn();
            }
        },
        move: (...args) => mover.move(...args.map(x => x + 8)),
        shift: (...args) => mover.shift(...args.map(x => x + 8)),
        resize: scaleMover.move
    }
}