function Mover(points, duration = 60) {
    let timers = Array(points.length)
    return {
        move(...newPoints) {
            newPoints.forEach((point, i) => {
                timers[i] = new Timer({
                    start: points[i],
                    stop: point,
                    duration
                });
            })
        },
        shift(...newPoints) {
            this.move(...newPoints.map(vec => !Number.isFinite(vec) ? 0 : vec).map((vec, i) => points[i] + vec))
        },
        tick() {
            if (timers[0]) {
                timers.forEach((timer, i) => {
                    if (!timer.done()) {
                        points[i] = timer.tick();
                    }
                })
            }
        },
        reverseTick() {
            if (timers[0]) {
                timers.forEach((timer, i) => {
                    if (!timer.reverseDone()) {
                        points[i] = timer.reverseTick();
                    }
                })
            }
        },
        setStart(...args) {
            args.forEach((arg, i) => {
                timers[i].setStart(arg);
            })
        },
        setStop(...args) {
            args.forEach((arg, i) => {
                timers[i].setStop(arg);
            })
        },
        points
    }
}