module.exports =
(() => {
  "use strict";
  const Util =  {
                  getCircleRadii(radius, cx, cy) {
                    /*
                     * returns the coordinates of four circles
                     * and their radiuses, which fit inside the
                     * bigger circle outline by coordinates
                     * */
                    let newR = radius/2;
                    const compArr = [[-1, 1], [1,1], [1,-1],[-1,-1]];
                    let newCoords = compArr.map( (comps) => {
                                      return { "r": newR,
                                               "cx": (comps[0]*newR) + cx,
                                               "cy": (comps[1]*newR) + cy };
                                    });
                    return newCoords;
                  }
  };
  return Util;
})()

