class Classes {

    private classes: string[] = [];

    constructor(c: string[]) {
        this.classes.push(...c);
    }

    public build(): string {
        return this.classes.join(" ");
    }

    public is(toAdd: string, on: boolean): Classes {
        if (on) {
            this.classes.push(toAdd);
        }
        return this;
    }
}

export default Classes;