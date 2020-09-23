function Triangle({
    x1,
    y1,
    x2,
    y2,
    x3,
    y3,
    color: fillColor = "white",
    useStroke = false,
    weight = 1,
    opacity = 255,
}) {
    let mover = Mover([x1, y1, x1, y1]);
    mover.move(x2, y2, x3, y3);
    let posMover = Mover([x1, y1, x2, y2, x3, y3]);
    let fading = "";
    return {
        show() {
            fillColor = color(fillColor);
            fillColor.setAlpha(opacity);
            if (!useStroke) {
                noStroke();
                fill(fillColor);
                triangle(x1, y1, ...mover.points);
            } else {
                noFill();
                stroke(fillColor);
                strokeWeight(weight);
                triangle(x1, y1, ...mover.points);
            }
            posMover.tick();
            /*x1 = posMover.points[0];
            y1 = posMover.points[1];
            x2 = posMover.points[2];
            y2 = posMover.points[3];*/
            [x1, y1, x2, y2, x3, y3] = posMover.points;
            if (fading === "in") {
                mover.tick();
            } else if (fading === "out") {
                mover.reverseTick();
            }
        },
        fadeIn() {
            fading = "in";
        },
        fadeOut() {
            mover.setStart(x1, y1, x1, y1);
            fading = "out";
        },
        move(x1_, y1_, x2_, y2_, x3_, y3_) {
            //mover.setStart(x1_, y1_);
            mover = Mover([x2, y2, x3, y3]);
            mover.move(x2_, y2_, x3_, y3_);
            posMover.move(x1_, y1_, x2_, y2_, x3_, y3_);
        },
        shift(x = 0, y = 0) {
            this.move(x1 + x, y1 + y, x2 + x, y2 + y, x3 + x, y3 + y);
        }
    }
}