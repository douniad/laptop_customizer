import React from 'react';
import slugify from 'slugify';
import Options from '../Options/Options'

export default class Features extends React.Component {

    render() {
    const options = this.props.options.map(option => {
      const itemHash = slugify(JSON.stringify(option));
      return (
        <Options
            itemHash={itemHash}
            feature={this.props.name}
            selected={this.props.selected}
            item={option}
            updateFeature={(e) => this.props.updateFeature(this.props.name, option)}
        />

      );
    });

    
    return (
      <fieldset className="feature" key={this.props.hash}>
        <legend className="feature__name">
          <h3>{this.props.name}</h3>
        </legend>
        {options}
      </fieldset>
    );
}
}


