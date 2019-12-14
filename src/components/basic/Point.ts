import MapUtils from "../../utils/MapUtils";

export default class Point {
  readonly lng: Number;
  readonly lat: Number;

  constructor(lng: Number, lat: Number) {
    this.lng = lng;
    this.lat = lat;
  }

  toRealObject(){
    let Obj = MapUtils.getScriptMap("Point");
    return new Obj(this.lng,this.lat);
  }
}
