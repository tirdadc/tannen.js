var TannenWeekdays = React.createClass({
  render: function() {
    var weekdays = [];
    var first_day = moment().startOf('week');

    for (i = 0; i < 7; i++) {
      weekdays.push(
        <div
          key={i}
          className='day'
          style={{'textAlign': this.props.day_alignment}}>
          {first_day.clone().add(i, 'd').format('ddd')}
        </div>
      )
    }
    return (
      <div className='week header'>
        {weekdays}
      </div>
    )
  }
})
