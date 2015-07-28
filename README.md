# tannen.js
Responsive React.js event calendar

![alt tag](tannen.png)

## Dependencies
- [React.js](https://github.com/facebook/react)
- [moment](https://github.com/moment/moment/)

are both considered external dependencies, so they are not packed/distributed within this component set, but must be included in your setup.

## Installation
- `npm install tannen.js`
- open `example/index.html` in a browser

If you clone the project from Github, make sure you run `npm install` to get all the dependencies.

## Usage
``` javascript
var React = require('react');
var Tannen = require('tannen.js');

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
```

## Settings
A number of settings can be controlled through the props:

Prop name | type | initial Value | Description
--------- | ---- | ------------- | -----------
init_date | string | today | day to initialize the calendar on in string format (ex: 2015-07-31).
events | array | null | list of events that will populate the calendar
|width|string|'100%'|width of the component|
|previous_label|string|'&#9664;'|HTML for the previous month link|
|next_label|string|'&#9654;'|HTML for the next month link|
|event_colors|array|['#1678c2','#16ab39','#fbbd08','#2185d0','#6435c9']|list of colors to cycle through for events|
|weekdays_alignment|string|'center'|header text alignment|
|day_alignment|string|'right'|calendar day text alignment|

The rest can be overridden with CSS.
