var Steez = require("steez"),
    util = require("util");

var esc = Buffer([0x1b, 0x5b]);

var Jetty = module.exports = function Jetty() {
  Steez.call(this);
};
util.inherits(Jetty, Steez);

Jetty.prototype.command = function command(char, args) {
  this.write(esc);
  this.write(args.join(";"));
  this.write(char);

  return this;
};

Jetty.prototype.moveUp    = function moveUp(n)    { return this.command("A", [n]); };
Jetty.prototype.moveDown  = function moveDown(n)  { return this.command("B", [n]); };
Jetty.prototype.moveLeft  = function moveLeft(n)  { return this.command("C", [n]); };
Jetty.prototype.moveRight = function moveRight(n) { return this.command("D", [n]); };

Jetty.prototype.lineUp   = function lineUp(n)   { return this.command("E", [n]); };
Jetty.prototype.lineDown = function lineDown(n) { return this.command("F", [n]); };

Jetty.prototype.moveTo = function moveTo(x, y) { return this.command("H", [y, x]); };

Jetty.prototype.clear = function clear() { return this.command("J", [2]); };
