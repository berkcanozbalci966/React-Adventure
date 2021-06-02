import React from "react";

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + incrementNumber,
      }));
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  NewComponent.displayName = `WrappedCounter ${getDisplayName(
    OriginalComponent
  )}`;
  // Wrap name for DevTools !
  return NewComponent;
};
function getDisplayName(OriginalComponent) {
  return (
    OriginalComponent.displayName || OriginalComponent.name || "Just Component"
  );
}

export default UpdatedComponent;
