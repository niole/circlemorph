const d3 = require('d3');
const $ = require('jquery');
const Util = require('./Util');

module.exports =
(() => {
  "use strict";

  class Circles {
    constructor(margins) {
      let diam = $(window).width();
      this.svgCanvas = Util.getCanvas(diam, diam);
      this.data = Util.initCircles(margins, diam, diam);
    }

    drawCircles() {
      this.circles = this.svgCanvas.selectAll("circle")
                                      .data(this.data);

      this.circles
          .enter()
          .append("circle");

     this.circles
        .select("circle");

      this.circles
          .attr("cx", d => { return d.cx;})
          .attr("cy", d => { return d.cy;})
          .attr("r", d => { return d.r; })
          .on("mouseenter", (e) => {
              setTimeout(this.updateCircles.bind(this,e), 100);
          });

    this.circles
      .exit()
      .remove();
    }

    updateCircles(oldData) {
      //remove old data, make and add new data
      for (let index=0; index<this.data.length; index ++) {
        if (Util.objectsEqual(this.data[index], oldData)) {
          this.data = this.data.slice(0,index)
                        .concat(this.data.slice(index + 1, this.data.length))
                        .concat(Util.getLittleCircles(oldData.r, oldData.cx, oldData.cy));
        }
      }
      this.drawCircles();
    }

  }

  return Circles;

})();
