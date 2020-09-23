function Line({
    x1,
    y1,
    x2,
    y2,
    color = "white",
    weight = 1
}) {
    let mover = Mover([x1, y1]);
    mover.move(x2, y2);
    let fading = "";
    let posMover = Mover([x1, y1, x2, y2]);
    return {
        show() {
            stroke(color);
            strokeWeight(weight);
            if (Math.round(x1) !== Math.round(mover.points[0]) || Math.round(y1) !== Math.round(mover.points[1])) {
                line(x1, y1, mover.points[0], mover.points[1]);
            }
            x1 = posMover.points[0];
            y1 = posMover.points[1];
            x2 = posMover.points[2];
            y2 = posMover.points[3];
            posMover.tick();
            if (fading === "in") {
                mover.tick();
            } else if (fading === "out") {
                mover.tick();
            }
        },
        fadeIn() {
            fading = "in";
        },
        fadeOut() {
            mover = Mover([x1, y1]);
            mover.move(x2, y2);
            posMover = Mover([x2, y2, x1, y1]);
            [x1, y1, x2, y2] = [x2, y2, x1, y1];
            fading = "out";
        },
        move(x1_, y1_, x2_, y2_) {
            mover.setStart(x1_, y1_);
            mover = Mover([x2, y2]);
            mover.move(x2_, y2_);
            posMover.move(x1_, y1_, x2_, y2_)
        },
        shift(x = 0, y = 0) {
            this.move(x1 + x, y1 + y, x2 + x, y2 + y);
        }
    }
}