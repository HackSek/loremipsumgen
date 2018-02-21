import React, {
  Component
} from 'react';
class Select extends Component {
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
      } > < select > < option value = "text" > Text < /option> < option value = "html" > HTML < /option> < /select> < /div>);
  }
}
export default Select;