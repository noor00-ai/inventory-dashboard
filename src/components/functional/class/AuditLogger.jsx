
import { Component } from "react";

class AuditLogger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Audit Logger is running"
    };
  }

  componentDidMount() {
    console.log("AuditLogger mounted");
  }

  componentDidUpdate() {
    console.log("AuditLogger updated");
  }

  componentWillUnmount() {
    console.log("AuditLogger unmounted");
  }

  render() {
    return (
      <div className="products">
        <h2>Audit Logger</h2>
        <p>{this.state.message}</p>

        <button
          onClick={() =>
            this.setState({
              message: "Inventory checked successfully!"
            })
          }
        >
          Check Inventory
        </button>
      </div>
    );
  }
}

export default AuditLogger;
