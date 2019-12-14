import * as React from "react";
import {ReactNode} from "react";
import * as PropTypes from "prop-types";
import UUID from "../../../utils/UUID";
import MapUtils from "../../../utils/MapUtils";
import Point from "../../basic/Point";
import {StyleHTMLAttributes} from "react";

interface Props {
  className: string;
  style: StyleHTMLAttributes<HTMLStyleElement>
  enableDragging: boolean;
  enableScrollWheelZoom: boolean;
  enableDoubleClickZoom: boolean;
  enableKeyboard: boolean;
  enableInertialDragging: boolean;
  enableContinuousZoom: boolean;
  enablePinchToZoom: boolean;
  enableAutoResize: boolean;
  defaultCursor: boolean;
  draggingCursor: boolean;
  minZoom: boolean;
  mapStyle: boolean;
  mapStyleV2: boolean;
  panorama: boolean;
  center: Point;
  zoom: boolean;
  mapType: boolean;
  viewport: boolean;
  currentCity: any
}

interface State {
  map: any
}

// const propKeys = [
//   "enableDragging", "enableScrollWheelZoom", "enableDoubleClickZoom",
//   "enableKeyboard", "enableInertialDragging", "enableContinuousZoom",
//   "enablePinchToZoom", "enableAutoResize", "defaultCursor",
//   "draggingCursor", "minZoom", "mapStyle",
//   "mapStyleV2", "panorama", "center",
//   "zoom", "mapType", "viewport", "currentCity"
// ];

export default class Map extends React.Component<Props, State> {
  static childContextTypes = {
    map: PropTypes.any,
  };
  static contextTypes = {
    loaded: PropTypes.bool,
  };

  readonly _mapId = UUID.randomUUID(16);

  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {
      map: null
    }
  }

  getChildContext() {
    return {
      map: this.state.map,
    };
  }

  componentDidMount() {
    if (this.isScriptLoaded(this.context)) {
      this.createMap(this.props);
    }
  }

  componentWillReceiveProps(nextProps:any,nextContext:any){
    if (this.isScriptLoaded(nextContext) && !this.state.map) {
      this.createMap(nextProps);
    }
  }

  createMap = (props:Props) => {
    let {
      center = new Point(114.066564, 22.558069),
      zoom = 10
    } = props;
    let M = MapUtils.getScriptMap("Map");
    const map = new M();
    map.setCurrentCity("深圳市");
    map.centerAndZoom(center.toRealObject(), zoom);
    this.setState({map: map});
  };

  isScriptLoaded(context:any):boolean{
    return context.loaded;
  }

  render():ReactNode{
    const {style = {}, ...restProps} = this.props;
    let mergeStyle = {
      width: "100%",
      height: "100%",
      ...style
    };
    return (
      <div
        id={this._mapId}
        style={mergeStyle}
        {...restProps}
      >
        {this.state.map && this.props.children}
      </div>
    );
  }
}
