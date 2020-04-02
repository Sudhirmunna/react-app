import * as React from 'react';
import PropTypes from 'prop-types';

export class ExampleComponent extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    onClickEvt: PropTypes.func
  }

  static defaultProps = {
    name: "Sudhir"
  }

  render() {
    const { name, onClickEvt } = this.props;
    return (
      <div className="exampleComponent" style={{display: "flex"}}>
        <img style={{height: "5em"}} srcSet="../assets/react.png" alt="React Logo" className="logo" />
        <p style={{padding: ".5em"}}>Hello <strong>{name}</strong> !!!  React Micro App works.</p>
        <button style={{background: "#1976d2", borderRadius: "8px", color: "white", fontWeight: "600"}} type="submit" className="btn btn-secondary" onClick={onClickEvt}>Emit Event to Container</button>
      </div>
    )
  }
}