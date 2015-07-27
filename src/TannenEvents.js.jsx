var React = require('react');

var TannenEvents = React.createClass({
  propTypes: {
    events:                    React.PropTypes.array,
    colors:                    React.PropTypes.array
  },

  render: function() {
    if (!this.props.events.length) {
      return null;
    }
    var events = [];
    for (i = 0; i < this.props.events.length; i++) {
      var caption = this.props.events[i].url ?
        <a href={this.props.events[i].url}>
          {this.props.events[i].title}
        </a> :
        this.props.events[i].title;

      events.push(
        <div
          style={{'backgroundColor': this.props.colors[this.props.titles.indexOf(this.props.events[i].title)%this.props.colors.length]}}
          key={i}
          className='event'
          data-content={this.props.events[i].content}>
            {caption}
        </div>
      )
    }
    return (
      <div className='events'>
        {events}
      </div>
    )
  }
})
