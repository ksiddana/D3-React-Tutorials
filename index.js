var Sector = React.createClass({
  render: function () {
    var outerRadius = this.props.width / 2.2;
    var innerRadius = 0;
    var arc = d3.svg.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius);
    var data = this.props.data;
    var center = 'translate(' + arc.centroid(data) + ')';
    var color = this.props.colors;
    return (
      <g>
        <path fill={color[this.props.ikey]} d={arc(this.props.data)}></path>
        <text fill="white" transform={center} textAnchor="middle"
            fontSize="15px">{data.value}
        </text>
      </g>
    );
  },
});

var DataSeries = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    color: React.PropTypes.array,
    data: React.PropTypes.array.isRequired,
  },
  render: function () {
    var color = this.props.colors;
    var data = this.props.data;
    var width = this.props.width;
    var height = this.props.height;
    var pie = d3.layout.pie();
    var result = data.map(function (item) {
      return item.count;
    });

    var names = data.map(function (item) {
      return item.name;
    });

    var sum = result.reduce(function (memo, num) { return memo + num; }, 0);

    var position = 'translate(' + (width) / 2 + ',' + (height) / 2 + ')';
    var bars = (pie(result)).map(function (point, i) {
      return (
        <Sector data={point} ikey={i} key={i} name={names[i]} colors={color} total=
        {sum} width={width} height={height}/>
      );
    });

    return (
        <g transform={position}>{bars}</g>
    );
  },
});

var D3Chart = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    children: React.PropTypes.node,
  },
  render: function () {
    return (
      <svg width={this.props.width} height={this.props.height}>
      {this.props.children}</svg>
    );
  },
});

var D3PieChart = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    title: React.PropTypes.string,
    data: React.PropTypes.array.isRequired,
  },

  getDefaultProps: function () {
    return {
      width: 300,
      height: 350,
      title: '',
      Legend: true,
    };
  },

  render: function () {
    var colors = ['#FD9827', '#DA3B21', '#3669C9', '#1D9524', '#971497'];
    return (
      <div>
        <h4> {this.props.title} </h4>
        <D3Chart width={this.props.width} height={this.props.height}>
              <DataSeries data={this.props.data} colors={colors} width=
                {this.props.width} height={this.props.height}/>
        </D3Chart>
        <p>Finally.</p>
      </div>
    );
  },
});

var data = [
    { name: 'Apples', count: 10 },
    { name: 'Oranges', count: 20 },
    { name: 'Bananas', count: 5 },
    { name: 'Blueberries', count: 42 },
    { name: 'mangoes ', count: 29 },
];

React.render(<D3PieChart data={data} title="Sample Fruits"/>, document.body);
