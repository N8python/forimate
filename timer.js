function Timer({
    start = 0,
    stop = 1,
    duration = 60,
    easing = Timer.easeInOut
}) {
    let distance = stop - start;
    let progress = 0;
    let step = 1 / duration;
    return {
        setStart(newStart) {
            start = newStart;
            distance = stop - start;
        },
        setStop(newStop) {
            stop = newStop;
            distance = stop - start;
        },
        tick() {
            if (progress < 1) {
                progress += step;
            } else {
                progress = 1;
            }
            return start + distance * easing(progress);
        },
        value() {
            return start + distance * easing(progress);
        },
        reverseTick() {
            if (progress > 0) {
                progress -= step;
            } else {
                progress = 0;
            }
            return start + distance * easing(progress);
        },
        done() {
            return progress === 1;
        },
        reverseDone() {
            return progress === 0;
        }
    }
}
Timer.linear = x => x;
Timer.easeInOut = x => x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;