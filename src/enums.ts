enum Direction {
  Down,
  Up,
  Left,
  Right
}

function a(type: Direction): void {
  console.log(type)
}

a(Direction.Down)
a(Direction.Up)
a(Direction.Left)
a(Direction.Right)