import BaseControl from "./BaseControl";

export type MapTypeControlType =
  /** 按钮水平方式展示，默认采用此类型展示 */
  "BMAP_MAPTYPE_CONTROL_HORIZONTAL"
  /** 按钮呈下拉列表方式展示 */
  | "BMAP_MAPTYPE_CONTROL_DROPDOWN"
  /** 以图片方式展示类型控件，设置该类型后无法指定maptypes属性 */
  | "BMAP_MAPTYPE_CONTROL_MAP";

interface Props {
  type: MapType,
  mapTypes: any[]
}

export default class MapTypeControl extends BaseControl<Props, any> {
  componentDidMount() {
    const {type,mapTypes}= this.props;
    let map = this.getMap();
    let opt:any = {};
    if (type) {
      opt.type = global[type];
    }
    map.addControl({

    });

  }

  componentDidUpdate() {

  }
}
