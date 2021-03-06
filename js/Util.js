const d3 = require('d3');
const $ = require('jquery');

module.exports =
(() => {
  "use strict";
  const Util =  {
                  getColor(depth) {
                    const rainbow =
                                  ["#FF0000",
                                  "#FF7F00",
                                  "#FFFF00",
                                  "#00FF00",
                                  "#6600FF"];
                    return rainbow[depth%rainbow.length];
                  },

                  getLittleCircles(depth, radius, cx, cy) {
                    /*
                     * returns the coordinates of four circles
                     * and their radiuses, which fit inside the
                     * bigger circle outline by coordinates
                     * */
                    let newR = radius/2;
                    const compArr = [[-1, 1], [1,1], [1,-1],[-1,-1]];
                    let newCoords = compArr.map( comps => {
                                      return { "depth": depth + 1,
                                               "r": newR,
                                               "cx": (comps[0]*newR) + cx,
                                               "cy": (comps[1]*newR) + cy };
                                    });
                    return newCoords;
                  },

                  initCircles(margins, width, height) {
                    /*
                     * margins {top: ---, left: ---}
                     **/
                    if (width === height) {
                      return [{"depth": -1, "r": width/2, "cx": width/2 + margins.left, "cy": height/2 + margins.top }];
                    }
                  },

                  getCanvas(width, height) {
                    return d3.select("body").append("svg")
                                      .attr("width", width)
                                      .attr("height", height);
                  },

                  objectsEqual(o1, o2) {
                    for (var k in o1) {
                      if (!(k in o2) || o2[k] !== o1[k]) {
                        return false;
                      }
                    }
                    return true;
                  }
  };
  return Util;
})()

