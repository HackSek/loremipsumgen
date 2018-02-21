import React, {
  Component
} from 'react';
class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    }, function() {
      this.props.onChange(this.state.value);
    });
  }
  render() {
    return ( < div className = "select"
      onChange = {
        this.onChange
      } > < input className = "form-control"
      type = "number"
      value = {
        this.state.value
      }
      onChange = {
        this.onChange
      }
      /> < /div>);
  }
}
export default Text;