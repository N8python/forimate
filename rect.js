function Rect({
    x,
    y,
    width,
    height,
    color: fillColor = "white",
    align = "corner",
    fadeTarget = "width",
    useStroke = false,
    weight = 1,
    opacity = 255
}) {
    const fadeTimer = Timer({
        start: 0,
        duration: 60,
        stop: fadeTarget === "width" ? width : height,
    });
    let fading = "";
    const mover = Mover([x, y, width, height]);
    return {
        show() {
            fillColor = color(fillColor);
            fillColor.setAlpha(opacity);
            if (fading === "in") {
                fadeTimer.tick();
            } else if (fading === "out") {
                fadeTimer.reverseTick();
            }
            mover.tick();
            x = mover.points[0];
            y = mover.points[1];
            width = mover.points[2];
            height = mover.points[3];
            rectMode(align);
            if (!useStroke) {
                fill(fillColor);
                noStroke();
                rect(x, y, (fadeTarget === "width" && !fadeTimer.done()) ? fadeTimer.value() : width, (fadeTarget === "height" && !fadeTimer.done()) ? fadeTimer.value() : height);
            } else {
                noFill();
                strokeWeight(weight);
                stroke(fillColor);
                rect(x, y, (fadeTarget === "width" && !fadeTimer.done()) ? fadeTimer.value() : width, (fadeTarget === "height" && !fadeTimer.done()) ? fadeTimer.value() : height);
            }
        },
        fadeIn() {
            fading = "in";
        },
        fadeOut() {
            fading = "out";
        },
        move: (...args) => {
            if (fadeTarget === "width") {
                fadeTimer.setStop(args[2]);
            } else if (fadeTarget === "height") {
                fadeTimer.setStop(args[3]);
            }
            mover.move(...args);
        },
        shift: (...args) => {
            if (fadeTarget === "width") {
                fadeTimer.setStop(width + args[2]);
            } else if (fadeTarget === "height") {
                fadeTimer.setStop(height + args[3]);
            }
            mover.shift(...args);
        }
    }
}