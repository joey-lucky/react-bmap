import * as React from "react";
import * as PropTypes from "prop-types";

interface Props {
  ak: string,
}

interface State {
  loaded: boolean
}

function downloadBaiDuMapScript(ak: string) {
  if (global["ReactMap"]) {
    return Promise.resolve(global["ReactMap"])
  } else {
    return new Promise((resolve) => {
      let url = document.location.protocol + `//api.map.baidu.com/api?v=3.0&ak=${ak}&callback=_initBMap`;
      const mapJsScript = document.createElement("script");
      mapJsScript.src = url;
      global["_initBMap"] = () => {
        window.document.body.removeChild(mapJsScript);
        delete global["ReactMap"]["_preloader"];
        delete global["_initBMap"];
        resolve(true);
      };
      window.document.body.appendChild(mapJsScript);
    });
  }
}

export default class ReactMapProvider extends React.Component<Props, State> {
  static childContextTypes = {
    loaded: PropTypes.bool,
  };

  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {
      loaded: false
    }
  }

  getChildContext() {
    return {
      loaded: this.state.loaded,
    };
  }

  componentDidMount() {
    downloadBaiDuMapScript(this.props.ak).then(() => {
      this.setState({loaded: true});
    });
  }

  render() {
    return this.props.children || null;
  }
}
