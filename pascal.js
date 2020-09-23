function Pascal({
    x,
    y,
    size
}) {
    let nums = [];
    let rows = [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1],
        [1, 6, 15, 20, 15, 6, 1],
        [1, 7, 21, 35, 35, 21, 7, 1]
    ];
    let lines = [];
    let rowNums = [];
    let rowIdx = 0;
    let lineInterval;
    return {
        show() {
            nums.forEach(num => {
                num.show();
            })
            lines.forEach(line => {
                line.show();
            })
        },
        showRow() {
            let row = rows[rowIdx];
            if (!row) {
                row = Pascal.genPascalRow(rows[rowIdx - 1]);
                rows[rowIdx] = Pascal.genPascalRow(rows[rowIdx - 1]);
            }
            rowNums[rowIdx] = [];
            let startX = x - (size * rowIdx);
            let startY = y + (size * 2 * rowIdx);
            row.forEach(r => {
                const t = Text({
                    x: startX,
                    y: startY,
                    txt: r,
                    size
                });
                t.fadeIn();
                nums.push(t);
                startX += size * 2;
                rowNums[rowIdx].push(t);
            });
            rowIdx += 1;
        },
        borderLines() {
            const top = rowNums[0][0];
            const left = rowNums[rowNums.length - 1][0];
            const right = rowNums[rowNums.length - 1][rowNums[rowNums.length - 1].length - 1];
            this.line(top.x - 50, top.y, left.x - 50, left.y)
            this.line(top.x + 50, top.y, right.x + 50, right.y)
        },
        sumLines() {
            let row = 2;
            let col = 1;
            lineInterval = setInterval(() => {
                if (rowNums[row]) {
                    const num = rowNums[row][col];
                    const prevNum1 = rowNums[row - 1][col - 1];
                    const prevNum2 = rowNums[row - 1][col];
                    this.line(prevNum1.x + 10, prevNum1.y + 10, num.x - 10, num.y - 10);
                    this.line(prevNum2.x - 10, prevNum2.y + 10, num.x + 10, num.y - 10);
                    col++;
                    if (col === row) {
                        row++;
                        col = 1;
                    }
                } else {
                    clearInterval(lineInterval)
                }
            }, 1000);
        },
        displayDegrees() {
            rowNums.forEach((_, i) => {
                const t = Text({
                    x: size * 4,
                    y: y + size * 2 * i,
                    txt: i + " degrees",
                    size
                });
                t.fadeIn();
                nums.push(t);
            })
        },
        line(x1, y1, x2, y2) {
            const line = Line({
                x1,
                y1,
                x2,
                y2
            });
            lines.push(line);
            line.fadeIn();
            setTimeout(() => {
                line.fadeOut();
            }, 1000);
        },
        fadeIn() {},
        fadeOut() {
            nums.forEach(num => num.fadeOut());
            if (lineInterval) {
                clearInterval(lineInterval);
            }
        },
        shift(_x, _y) {
            nums.forEach(num => num.shift(_x, _y));
            x += _x;
            y += _y;
        }
    }
}

Pascal.genPascalRow = (prevRow) => {
    const newRow = [1];
    prevRow.slice(1).forEach((num, i) => {
        newRow.push(num + prevRow[i]);
    })
    return newRow.concat(1);
}