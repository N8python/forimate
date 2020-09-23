function Ellipse({
    x,
    y,
    width,
    height,
    color: fillColor = "white",
    useStroke = false,
    weight = 1,
    opacity = 255
}) {
    const fadeTimer = Timer({
        start: 0.0001,
        duration: 60,
        stop: Math.PI * 2,
    });
    let fading = "";
    const mover = Mover([x, y, width, height])
    return {
        show() {
            fillColor = color(fillColor);
            fillColor.setAlpha(opacity);
            if (!useStroke) {
                noStroke();
                fill(fillColor);
                arc(x, y, width, height, 0, fadeTimer.value());
            } else {
                noFill();
                stroke(fillColor);
                strokeWeight(weight);
                arc(x, y, width, height, 0, fadeTimer.value());
            }
            [x, y, width, height] = mover.points;
            if (fading === "in") {
                fadeTimer.tick();
            } else if (fading === "out") {
                fadeTimer.reverseTick();
            }
            mover.tick();
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