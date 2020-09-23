function Scene(parts) {
    let i = 0;
    let objects = [];
    const state = {};
    return {
        show() {
            objects.forEach(object => {
                object.show();
            })
        },
        advance() {
            if (parts[i] !== undefined) {
                const { add, remove, start } = parts[i];
                i++;
                if (add) {
                    objects.push(...add);
                    add.forEach(object => {
                        object.fadeIn();
                    })
                }
                if (remove) {
                    remove.forEach(object => {
                        if (objects.includes(object)) {
                            object.fadeOut();
                        }
                    })
                }
                if (start) {
                    start(state);
                }
            } else {
                objects.forEach(object => {
                    object.fadeOut();
                })
            }
        }
    }
}