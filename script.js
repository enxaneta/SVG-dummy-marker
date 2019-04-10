const SVG_NS = "http://www.w3.org/2000/svg";
const SVG_XLINK = "http://www.w3.org/1999/xlink";


function dummyMarker(marker,markerPos,path,parent){
  /*0 < markerPos <= 1*/
  let l = path.getTotalLength();
  let d1 = l * markerPos;

  let point1 = path.getPointAtLength(d1);
  let point2 = path.getPointAtLength(d1 - .1);
  let angle = Math.atan2( (point1.y - point2.y),(point1.x - point2.x) );
  

  let use = document.createElementNS(SVG_NS, 'use');
  use.setAttributeNS(SVG_XLINK, 'xlink:href', `#${marker}`);
  parent.appendChild(use);

  use.setAttributeNS(null,"transform",`translate(${point1.x},${point1.y})
                                           rotate(${angle*180/Math.PI})`)
}

// use it
dummyMarker("marker",.75,track,svg)
