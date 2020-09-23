function Point({
    x,
    y,
    color,
    radius = 5,
    duration = 30
}) {
    let fading = "";
    let fadeTimer = new Timer({
        start: 0,
        stop: radius,
        duration
    });
    return {
        show() {
            fill(color);
            noStroke();
            if (fadeTimer.value() > 0.1) {
                ellipse(x, y, fadeTimer.value(), fadeTimer.value());
            }
            if (fading === "in") {
                fadeTimer.tick()
            } else if (fading === "out") {
                fadeTimer.reverseTick();
            }
        },
        fadeIn() {
            fading = "in";
        },
        fadeOut() {
            fading = "out";
        }
    }
}