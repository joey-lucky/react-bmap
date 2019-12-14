interface MapTypeOptions {
  /** 该类型地图的最小级别 */
  minZoom: number;
  /** 该类型地图的最大级别 */
  maxZoom: number;
  /** 当没有图块时所显示的错误图片地址。默认为透明图 */
  errorImageUrl: string;
  /** 地图类型对应的前景色 */
  textColor: number;
  /** 提示说明信息，用于在地图类型控件中进行提示 */
  tips: string;
}

type TileLayer = any;

export default class MapType {
  static BMAP_NORMAL_MAP:string = "BMAP_NORMAL_MAP";
  static BMAP_SATELLITE_MAP:string = "BMAP_SATELLITE_MAP";
  static BMAP_HYBRID_MAP:string = "BMAP_HYBRID_MAP";

  name: string;
  layers: TileLayer | Array<TileLayer>;
  options: MapTypeOptions;

  constructor(name: string, layers: TileLayer | Array<TileLayer>, options: MapTypeOptions) {
    this.name = name;
    this.layers = layers;
    this.options = options;
  }
}

