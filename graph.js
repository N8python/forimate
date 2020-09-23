function Graph({
    x,
    y,
    width,
    height,
    xScale,
    yScale
}) {
    let posMover = new Mover([x, y, width, height]);
    let pixelXRep = xScale / width;
    let pixelYRep = yScale / height;
    let xAxis = Line({
        x1: x,
        x2: x + width,
        y1: y + height / 2,
        y2: y + height / 2
    })
    let yAxis = Line({
        x1: x + width / 2,
        x2: x + width / 2,
        y1: y,
        y2: y + height
    });
    let funcs = [];
    let points = [];
    let fading = "";
    return {
        show() {
            [x, y, width, height] = posMover.points;
            pixelXRep = xScale / width;
            pixelYRep = yScale / height;
            posMover.tick();
            xAxis.show();
            yAxis.show();
            funcs.forEach(({ points, info, timer, fadingOut }) => {
                let prevPoint;
                points.slice(0, Math.round(timer.value())).forEach(([x_, y_]) => {
                    const plotY = y_ / pixelYRep;
                    const scale = (yScale / 2) / pixelYRep;
                    if (Math.abs(plotY) < scale && prevPoint && prevPoint.plotY < scale) {
                        strokeWeight(info.weight)
                        stroke(info.color);
                        line(prevPoint[0], prevPoint[1], x + width / 2 + x_ / pixelXRep, y + height / 2 - y_ / pixelYRep);
                    }
                    prevPoint = [x + width / 2 + x_ / pixelXRep, y + height / 2 - y_ / pixelYRep];
                    prevPoint.plotY = plotY;
                });
                if (fading === "out" || fadingOut) {
                    timer.reverseTick();
                } else {
                    timer.tick();
                }
            });
            points.forEach(point => {
                point.show();
            });
        },
        graph(f, {
            weight = 1,
            leftBound = -Infinity,
            rightBound = Infinity,
            color = "white",
            duration = 60,
            name
        } = {}) {
            if (f.toString() === "x => x") {
                f = x => x + 0.001;
            }
            let points = [];
            let currX = -(xScale / 2);
            let state = 0;
            let prevPoint;
            let outsidePoints = 0;
            while (currX <= (xScale / 2)) {
                const trueY = f(currX);
                const plotY = trueY / pixelYRep;
                const plotX = currX / pixelXRep;
                /*if (state === 0) {
                    if (Math.abs(plotY) <= (yScale / 2) / pixelYRep && currX > leftBound) {
                        state = 1;
                        if (prevPoint) {
                            points.push(prevPoint);
                        }
                    }
                }
                if (state === 1) {
                    points.push([currX, trueY] [x + width / 2 + plotX, y + height / 2 - plotY]);
                    if (Math.abs(plotY) >= (yScale / 2) / pixelYRep || currX > rightBound) {
                        state = 2;
                    }
                }
                prevPoint = [currX, trueY];*/
                if (Math.abs(plotY) >= (yScale / 2) / pixelYRep) {
                    outsidePoints++;
                }
                if (currX >= leftBound && currX <= rightBound) {
                    points.push([currX, trueY]);
                } else {
                    outsidePoints++;
                }
                currX += pixelXRep;
            }
            funcs.push({
                points,
                info: {
                    weight,
                    leftBound,
                    rightBound,
                    color
                },
                name,
                timer: Timer({
                    start: 0,
                    stop: points.length,
                    duration: duration * points.length / (points.length - outsidePoints)
                })
            });
        },
        ungraph(name2) {
            funcs.find(({ name }) => name === name2).fadingOut = true;
        },
        graphIntercepts(axis, name2, {
            group
        } = {}) {
            const func = funcs.find(({ name }) => name === name2);
            const ps = [];
            //let near = 0;
            if (func) {
                func.points.forEach(([x, y], i) => {
                    const prevX = func.points[i - 1] && func.points[i - 1][0];
                    const nextX = func.points[i + 1] && func.points[i + 1][0];
                    const prevY = func.points[i - 1] && func.points[i - 1][1];
                    const nextY = func.points[i + 1] && func.points[i + 1][1];
                    if (((prevY > 0 && nextY < 0) || (prevY < 0 && nextY > 0) || y === 0) && axis === "x") {
                        const p = graph.point(x, 0);
                        p.group = group;
                        ps.push(p);
                        //near = 10;
                    } else if (((prevX > 0 && nextX < 0) || (prevX < 0 && nextX > 0) || x === 0) && axis === "y") {
                        const p = graph.point(0, y);
                        p.group = group;
                        ps.push(p);
                        //near = 10;
                    }
                    //near--;
                });
            }
            return ps;
        },
        graphRelative(type, name2, {
            group
        } = {}) {
            const func = funcs.find(({ name }) => name === name2);
            const ps = [];
            func.points.forEach(([x, y], i) => {
                const prevY = func.points[i - 1] && func.points[i - 1][1];
                const nextY = func.points[i + 1] && func.points[i + 1][1];
                if (prevY && nextY) {
                    if (type === "maximums") {
                        if (y > prevY && y > nextY) {
                            const p = graph.point(x, y);
                            p.group = group;
                            ps.push(p);
                        }
                    } else if (type === "minimums") {
                        if (y < prevY && y < nextY) {
                            const p = graph.point(x, y);
                            p.group = group;
                            ps.push(p);

                        }
                    }
                }
            });
            return ps;
        },
        point(x_, y_, {
            color = "white",
            radius = 5,
            duration = 30,
            name
        } = {}) {
            let point = Point({
                x: x + width / 2 + x_ / pixelXRep,
                y: y + height / 2 - y_ / pixelYRep,
                color,
                duration,
                radius
            });
            if (name) {
                point.name = name;
            }
            points.push(point);
            point.fadeIn();
            return point;
        },
        line(x1, y1, x2, y2, {
            color = "white",
            name
        } = {}) {
            const m = (y2 - y1) / (x2 - x1);
            const b = y1 - m * x1;
            let leftBound = x1 < x2 ? x1 : x2;
            let rightBound = x1 > x2 ? x1 : x2;
            this.graph(x => m * x + b, {
                leftBound,
                rightBound,
                color,
                name
            })
        },
        removePoint(name) {
            points.find(point => point.name === name).fadeOut();
        },
        removePoints(group) {
            points.filter(point => point.group === group).forEach(point => {
                point.fadeOut();
            })
        },
        fadeIn() {
            xAxis.fadeIn();
            yAxis.fadeIn();
            fading = "in";
        },
        fadeOut() {
            xAxis.fadeOut();
            yAxis.fadeOut();
            points.forEach(point => {
                point.fadeOut();
            })
            fading = "out";
        },
        move: (x_, y_, width_, height_) => {
            xAxis.move(x_, y_ + height_ / 2, x_ + width_, y_ + height_ / 2);
            yAxis.move(x_ + width_ / 2, y_, x_ + width_ / 2, y_ + height_)
            posMover.move(x_, y_, width_, height_);
        }
    }
}