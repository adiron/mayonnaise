export interface Vector2D {
    x: number;
    y: number;
}

export function add(v1: Vector2D, v2: Vector2D): Vector2D {
    return {
        x: v1.x + v2.x,
        y: v1.y + v2.y,
    };
}

export function sub(v1: Vector2D, v2: Vector2D): Vector2D {
    return {
        x: v1.x - v2.x,
        y: v1.y - v2.y,
    };
}

export function mul(v: Vector2D, s: number): Vector2D {
    return {
        x: v.x * s,
        y: v.y * s,
    };
}

export function div(v: Vector2D, s: number): Vector2D {
    if (s === 0) {
        return { x: 0, y: 0 };
    }
    return {
        x: v.x / s,
        y: v.y / s,
    };
}

export function mag(v: Vector2D): number {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

export function normalize(v: Vector2D): Vector2D {
    return div(v, mag(v));
}

export function limit(v: Vector2D, max: number): Vector2D {
    if (mag(v) > max) {
        return mul(normalize(v), max);
    } else {
        return v;
    }
}

export function distance(v1: Vector2D, v2: Vector2D): number {
    return mag(sub(v1, v2));
}

export function heading(v: Vector2D): number {
    return Math.atan2(v.y, v.x);
}

export function rotate(v: Vector2D, angle: number): Vector2D {
    return {
        x: v.x * Math.cos(angle) - v.y * Math.sin(angle),
        y: v.x * Math.sin(angle) + v.y * Math.cos(angle),
    };
}

export function fromAngle(angle: number): Vector2D {
    return {
        x: Math.cos(angle),
        y: Math.sin(angle),
    };
}

export function dot(v1: Vector2D, v2: Vector2D): number {
    return v1.x * v2.x + v1.y * v2.y;
}

