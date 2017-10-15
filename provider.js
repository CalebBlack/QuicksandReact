import React from 'react';
class Provider extends React.Component {
  constructor(props){
    super(props);
    this.props = {};
  }
  componentDidMount(){
    if (!this.props.hasOwnProperty('store')) {
      throw new Error('Missing Store!');
    } else if (typeof this.props.store !== 'object') {
      throw new Error('Invalid Store Object Type!');
    } else if (this.props.store.constructor.name !== 'Quicksand') {
      throw new Error('Store is not a Quicksand instance!');
    }
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => {
       return giveState(child,this.props.store);
     });
    return childrenWithProps;
  }
}
function giveState(element,store){
  var newProps = {store};
  if (element.hasOwnProperty('props') && element.props.hasOwnProperty('children')) {
    if (Array.isArray(element.props.children)) {
      newProps.children = element.props.children.map(child=>{
        return giveState(child,store);
      });
    } else if (React.isValidElement(element.props.children)) {
      newProps.children = giveState(element.props.children,store);
    }
  }
  return React.cloneElement(element, newProps);
}
export default Provider;
