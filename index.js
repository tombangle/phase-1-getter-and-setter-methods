class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get circumference() {
        return 2 * Math.PI * this.radius;
    }

    set circumference(circumference) {
        this.radius = circumference / (2 * Math.PI);
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI);
    }

    get diameter() {
        return 2 * this.radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    set radius(radius) {
        if (radius < 0) {
            throw new Error('Radius must be a positive number');
        }
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }
}
