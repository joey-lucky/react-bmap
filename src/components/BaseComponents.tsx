import * as React from "react";
import * as PropTypes from "prop-types";
import {ReactNode} from "react";

export class BaseMapComponents<P, S> extends React.Component<P, S> {
  static contextTypes = {
    map:PropTypes.any,
  };

  getMap():any{
    return this.context.map;
  }

  render():ReactNode{
    return null;
  }
}
