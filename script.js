class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getPerimeter() {
    return this._width * 4;
  }
}

// ✅ Expose to window for Cypress to access
window.Rectangle = Rectangle;
window.Square = Square;
