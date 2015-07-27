var React = require('react')
  , Tannen = require('../src/Tannen');

React.render(
  <Tannen
    init_date='2015-07-01'
    events={[
      {
        start_date: '2015-07-22',
        end_date: '2015-07-28',
        title: 'Bully George McFly'
      },
      {
        start_date: '2015-07-24',
        end_date: '2015-07-24',
        title: 'Hang out at Cafe 80\'s'
      },
      {
        start_date: '2015-07-05',
        end_date: '2015-07-10',
        title: 'Recover almanac'
      },
      {
        start_date: '2015-07-24',
        end_date: '2015-07-27',
        title: 'Borrow DeLorean'
      },
      {
        start_date: '2015-07-25',
        end_date: '2015-07-25',
        title: 'Bully Marty McFly'
      }
    ]}/>,
  document.getElementById('tannen-example')
);
