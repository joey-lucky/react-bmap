export default class MapUtils {
  static getScriptMap(key:string):any {
    return  global["BMap"] && global["BMap"][key];
  }
}
