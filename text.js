function Text({
    x,
    y,
    color = [255, 255, 255],
    align = "center",
    txt,
    font = "Times New Roman",
    size,
}) {
    const fadeTimer = Timer({
        start: 0,
        duration: 60,
        stop: 255,
    });
    let becomeTimer;
    let becomeText;
    let fading = "";
    const mover = Mover([x, y]);
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
            noStroke();
            fill(255, 255, 255, fadeTimer.value());
            textAlign(align);
            textFont(font);
            textSize(size);
            text(txt, x, y);
            mover.tick();
            x = mover.points[0];
            y = mover.points[1];
            if (becomeTimer && !becomeTimer.done()) {
                let oldVal = becomeTimer.value();
                becomeTimer.tick();
                if (Math.round(oldVal) !== Math.round(becomeTimer.value())) {
                    txt = Text.handleBecomeText(txt, becomeText, becomeTimer.value());
                }
            }
        },
        become(bt) {
            becomeTimer = new Timer({
                start: -1,
                stop: bt.length > txt.length ? bt.length : txt.length,
                duration: 60
            });
            becomeText = bt;
        },
        fadeIn() {
            fading = "in";
        },
        fadeOut() {
            fading = "out";
        },
        move: mover.move,
        shift: mover.shift
    }
}
Text.handleBecomeText = (text, textToBe, idx) => {
    idx = Math.round(idx);
    if (text[idx] && (text[idx] !== textToBe[idx] && textToBe[idx])) {
        return text.slice(0, idx) + textToBe[idx] + text.slice(idx + 1);
    } else if (text[idx] === undefined && textToBe[idx] !== undefined) {
        return text + textToBe[idx];
    } else if (text.includes(textToBe) && text.length > textToBe.length) {
        return text.slice(0, -1);
    } else {
        return text;
    }
    /*if (text.length > textToBe.length) {
        return text.slice(0, -1);
    }*/
}