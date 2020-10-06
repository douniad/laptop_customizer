import React from 'react';

import Features from '../Features/Features';

export default class Customs extends React.Component {
  render() {
      const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options= this.props.features[feature]
          return <Features
          options = {options}
          name={feature}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
          hash={featureHash}/>
        });
      return (
          <form className="main__form">
                  <h2>Customize your laptop</h2>
                  {features}
          </form>
      )
  }
}