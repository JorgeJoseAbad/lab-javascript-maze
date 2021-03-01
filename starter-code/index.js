var Maze = require('./maze.js');

var T = true, F = false;
var map = [
  [ T,  F , T,  T,  T,  F],
  [ T,  F,  T,  F,  T,  F],
  [ T,  T,  T,  F,  T,  F],
  [ F,  F,  F,  F,  T,  F],
  [ T,  T,  T,  T,  T,  F],
  [ T,  F,  F,  F,  F,  T],
  [ T,  T,  T,  T,  T,  T]];
var exit= {row:5, col:5};

var maze = new Maze(map,exit);
console.log(maze); //pruebas
// https://blockly-games.appspot.com/maze?lang=en
console.log("minero es: ",maze._miner)


while (!maze.notDone()) {
  if (maze.isPathLeft()) {
    maze.turnLeft();
    maze.moveForward();
  } else {
    if (maze.isPathForward()) {
      maze.moveForward();
    } else {
      if (maze.isPathRight()) {
        maze.turnRight();
        maze.moveForward();
      } else {
        maze.turnLeft();
      }
    }
  }
  console.log(maze._miner);
}

if (maze === exit ) console.log("hemos llegado");
