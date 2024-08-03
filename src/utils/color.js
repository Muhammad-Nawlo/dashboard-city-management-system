const color =[
  {
    value: '#000000', // Placeholder for 'default'
    label: 'default',
  },
  {
    value: '#FF00FF', // Hex for 'magenta'
    label: 'magenta',
    color: 'magenta',
  },
  {
    value: '#FF0000', // Hex for 'red'
    label: 'red',
    color: 'red',
  },
  {
    value: '#FF4500', // Hex for 'volcano' (closest match)
    label: 'volcano',
    color: 'volcano',
  },
  {
    value: '#FFA500', // Hex for 'orange'
    label: 'orange',
    color: 'orange',
  },
  {
    value: '#FFD700', // Hex for 'gold'
    label: 'gold',
    color: 'gold',
  },
  {
    value: '#00FF00', // Hex for 'lime'
    label: 'lime',
    color: 'lime',
  },
  {
    value: '#008000', // Hex for 'green'
    label: 'green',
    color: 'green',
  },
  {
    value: '#00FFFF', // Hex for 'cyan'
    label: 'cyan',
    color: 'cyan',
  },
  {
    value: '#0000FF', // Hex for 'blue'
    label: 'blue',
    color: 'blue',
  },
  {
    value: '#3B5998', // Hex for 'geekblue' (common association)
    label: 'geekblue',
    color: 'geekblue',
  },
  {
    value: '#800080', // Hex for 'purple'
    label: 'purple',
    color: 'purple',
  },
  {
    value: '#CD5C5C', // Hex for 'indianred'
    label: 'IndianRed',
    color: '#CD5C5C',
  },
  {
    value: '#F08080', // Hex for 'lightcoral'
    label: 'LightCoral',
    color: '#F08080',
  },
  {
    value: '#FA8072', // Hex for 'salmon'
    label: 'Salmon',
    color: '#FA8072',
  },
  {
    value: '#E9967A', // Hex for 'darksalmon'
    label: 'DarkSalmon',
    color: '#E9967A',
  },
  {
    value: '#FFA07A', // Hex for 'lightsalmon'
    label: 'LightSalmon',
    color: '#FFA07A',
  },
  {
    value: '#DC143C', // Hex for 'crimson'
    label: 'Crimson',
    color: '#DC143C',
  },
  {
    value: '#B22222', // Hex for 'firebrick'
    label: 'FireBrick',
    color: '#B22222',
  },
  {
    value: '#8B0000', // Hex for 'darkred'
    label: 'DarkRed',
    color: '#8B0000',
  },
  {
    value: '#FFC0CB', // Hex for 'pink'
    label: 'Pink',
    color: '#FFC0CB',
  },
  {
    value: '#FFB6C1', // Hex for 'lightpink'
    label: 'LightPink',
    color: '#FFB6C1',
  },
  {
    value: '#FF69B4', // Hex for 'hotpink'
    label: 'HotPink',
    color: '#FF69B4',
  },
  {
    value: '#FF1493', // Hex for 'deeppink'
    label: 'DeepPink',
    color: '#FF1493',
  },
  {
    value: '#C71585', // Hex for 'mediumvioletred'
    label: 'MediumVioletRed',
    color: '#C71585',
  },
  {
    value: '#DB7093', // Hex for 'palevioletred'
    label: 'PaleVioletRed',
    color: '#DB7093',
  },
  {
    value: '#FFA07A', // Hex for 'lightsalmon'
    label: 'LightSalmon',
    color: '#FFA07A',
  },
  {
    value: '#FF7F50', // Hex for 'coral'
    label: 'Coral',
    color: '#FF7F50',
  },
  {
    value: '#FF6347', // Hex for 'tomato'
    label: 'Tomato',
    color: '#FF6347',
  },
  {
    value: '#FF4500', // Hex for 'orangered'
    label: 'OrangeRed',
    color: '#FF4500',
  },
  {
    value: '#FF8C00', // Hex for 'darkorange'
    label: 'DarkOrange',
    color: '#FF8C00',
  },
  {
    value: '#FFA500', // Hex for 'orange'
    label: 'Orange',
    color: '#FFA500',
  },
  {
    value: '#FFFF00', // Hex for 'yellow'
    label: 'yellow',
    color: '#FFD700',
  },
  {
    value: '#FFD700', // Hex for 'gold'
    label: 'Gold',
    color: '#FFC436',
  },
  {
    value: '#CBCC9E', // Hex for 'khaki'
    label: 'Khaki',
    color: '#cbcc9e',
  },
  {
    value: '#BDB76B', // Hex for 'darkkhaki'
    label: 'DarkKhaki',
    color: '#BDB76B',
  },
  {
    value: '#D8BFD8', // Hex for 'thistle'
    label: 'Thistle',
    color: '#D8BFD8',
  },
  {
    value: '#DDA0DD', // Hex for 'plum'
    label: 'Plum',
    color: '#DDA0DD',
  },
  {
    value: '#EE82EE', // Hex for 'violet'
    label: 'Violet',
    color: '#EE82EE',
  },
  {
    value: '#DA70D6', // Hex for 'orchid'
    label: 'Orchid',
    color: '#DA70D6',
  },
  {
    value: '#BA55D3', // Hex for 'mediumorchid'
    label: 'MediumOrchid',
    color: '#BA55D3',
  },
  {
    value: '#9370DB', // Hex for 'mediumpurple'
    label: 'MediumPurple',
    color: '#9370DB',
  },
  {
    value: '#663399', // Hex for 'rebeccapurple'
    label: 'RebeccaPurple',
    color: '#663399',
  },
  {
    value: '#8A2BE2', // Hex for 'blueviolet'
    label: 'BlueViolet',
    color: '#8A2BE2',
  },
  {
    value: '#9400D3', // Hex for 'darkviolet'
    label: 'DarkViolet',
    color: '#9400D3',
  },
  {
    value: '#9932CC', // Hex for 'darkorchid'
    label: 'DarkOrchid',
    color: '#9932CC',
  },
  {
    value: '#8B008B', // Hex for 'darkmagenta'
    label: 'DarkMagenta',
    color: '#8B008B',
  },
  {
    value: '#800080', // Hex for 'purple'
    label: 'Purple',
    color: '#800080',
  },
  {
    value: '#4B0082', // Hex for 'indigo'
    label: 'Indigo',
    color: '#4B0082',
  },
  {
    value: '#6A5ACD', // Hex for 'slateblue'
    label: 'SlateBlue',
    color: '#6A5ACD',
  },
  {
    value: '#483D8B', // Hex for 'darkslateblue'
    label: 'DarkSlateBlue',
    color: '#483D8B',
  },
  {
    value: '#7B68EE', // Hex for 'mediumslateblue'
    label: 'MediumSlateBlue',
    color: '#7B68EE',
  },
  {
    value: '#90EE90', // Hex for 'lightgreen'
    label: 'LightGreen',
    color: '#90EE90',
  },
  {
    value: '#3CB371', // Hex for 'mediumseagreen'
    label: 'MediumSeaGreen',
    color: '#3CB371',
  },
  {
    value: '#2E8B57', // Hex for 'seagreen'
    label: 'SeaGreen',
    color: '#2E8B57',
  },
  {
    value: '#228B22', // Hex for 'forestgreen'
    label: 'ForestGreen',
    color: '#228B22',
  },
  {
    value: '#008000', // Hex for 'green'
    label: 'Green',
    color: '#008000',
  },
  {
    value: '#006400', // Hex for 'darkgreen'
    label: 'DarkGreen',
    color: '#006400',
  },
  {
    value: '#9ACD32', // Hex for 'yellowgreen'
    label: 'YellowGreen',
    color: '#9ACD32',
  },
  {
    value: '#6B8E23', // Hex for 'olivedrab'
    label: 'OliveDrab',
    color: '#6B8E23',
  },
  {
    value: '#808000', // Hex for 'olive'
    label: 'Olive',
    color: '#808000',
  },
  {
    value: '#556B2F', // Hex for 'darkolivegreen'
    label: 'DarkOliveGreen',
    color: '#556B2F',
  },
  {
    value: '#66CDAA', // Hex for 'mediumaquamarine'
    label: 'MediumAquamarine',
    color: '#66CDAA',
  },
  {
    value: '#8FBC8B', // Hex for 'darkseagreen'
    label: 'DarkSeaGreen',
    color: '#8FBC8B',
  },
  {
    value: '#20B2AA', // Hex for 'lightseagreen'
    label: 'LightSeaGreen',
    color: '#20B2AA',
  },
  {
    value: '#008B8B', // Hex for 'darkcyan'
    label: 'DarkCyan',
    color: '#008B8B',
  },
  {
    value: '#008080', // Hex for 'teal'
    label: 'Teal',
    color: '#008080',
  },
  {
    value: '#40E0D0', // Hex for 'turquoise'
    label: 'Turquoise',
    color: '#40E0D0',
  },
  {
    value: '#48D1CC', // Hex for 'mediumturquoise'
    label: 'MediumTurquoise',
    color: '#48D1CC',
  },
  {
    value: '#00CED1', // Hex for 'darkturquoise'
    label: 'DarkTurquoise',
    color: '#00CED1',
  },
  {
    value: '#5F9EA0', // Hex for 'cadetblue'
    label: 'CadetBlue',
    color: '#5F9EA0',
  },
  {
    value: '#4682B4', // Hex for 'steelblue'
    label: 'SteelBlue',
    color: '#4682B4',
  },
  {
    value: '#B0C4DE', // Hex for 'lightsteelblue'
    label: 'LightSteelBlue',
    color: '#B0C4DE',
  },
  {
    value: '#B0E0E6', // Hex for 'powderblue'
    label: 'PowderBlue',
    color: '#B0E0E6',
  },
  {
    value: '#ADD8E6', // Hex for 'lightblue'
    label: 'LightBlue',
    color: '#ADD8E6',
  },
  {
    value: '#87CEEB', // Hex for 'skyblue'
    label: 'SkyBlue',
    color: '#87CEEB',
  },
  {
    value: '#87CEFA', // Hex for 'lightskyblue'
    label: 'LightSkyBlue',
    color: '#87CEFA',
  },
  {
    value: '#00BFFF', // Hex for 'deepskyblue'
    label: 'DeepSkyBlue',
    color: '#00BFFF',
  },
  {
    value: '#1E90FF', // Hex for 'dodgerblue'
    label: 'DodgerBlue',
    color: '#1E90FF',
  },
  {
    value: '#6495ED', // Hex for 'cornflowerblue'
    label: 'CornflowerBlue',
    color: '#6495ED',
  },
  {
    value: '#7B68EE', // Hex for 'mediumslateblue'
    label: 'MediumSlateBlue',
    color: '#7B68EE',
  },
  {
    value: '#4169E1', // Hex for 'royalblue'
    label: 'RoyalBlue',
    color: '#4169E1',
  },
  {
    value: '#0000FF', // Hex for 'blue'
    label: 'Blue',
    color: '#0000FF',
  },
  {
    value: '#0000CD', // Hex for 'mediumblue'
    label: 'MediumBlue',
    color: '#0000CD',
  },
  {
    value: '#00008B', // Hex for 'darkblue'
    label: 'DarkBlue',
    color: '#00008B',
  },
  {
    value: '#000080', // Hex for 'navy'
    label: 'Navy',
    color: '#000080',
  },
  {
    value: '#191970', // Hex for 'midnightblue'
    label: 'MidnightBlue',
    color: '#191970',
  },
  {
    value: '#DEB887', // Hex for 'burlywood'
    label: 'BurlyWood',
    color: '#DEB887',
  },
  {
    value: '#D2B48C', // Hex for 'tan'
    label: 'Tan',
    color: '#D2B48C',
  },
  {
    value: '#BC8F8F', // Hex for 'rosybrown'
    label: 'RosyBrown',
    color: '#BC8F8F',
  },
  {
    value: '#F4A460', // Hex for 'sandybrown'
    label: 'SandyBrown',
    color: '#F4A460',
  },
  {
    value: '#DAA520', // Hex for 'goldenrod'
    label: 'Goldenrod',
    color: '#DAA520',
  },
  {
    value: '#B8860B', // Hex for 'darkgoldenrod'
    label: 'DarkGoldenrod',
    color: '#B8860B',
  },
  {
    value: '#CD853F', // Hex for 'peru'
    label: 'Peru',
    color: '#CD853F',
  },
  {
    value: '#D2691E', // Hex for 'chocolate'
    label: 'Chocolate',
    color: '#D2691E',
  },
  {
    value: '#8B4513', // Hex for 'saddlebrown'
    label: 'SaddleBrown',
    color: '#8B4513',
  },
  {
    value: '#A0522D', // Hex for 'sienna'
    label: 'Sienna',
    color: '#A0522D',
  },
  {
    value: '#A52A2A', // Hex for 'brown'
    label: 'Brown',
    color: '#A52A2A',
  },
  {
    value: '#800000', // Hex for 'maroon'
    label: 'Maroon',
    color: '#800000',
  },
  {
    value: '#D3D3D3', // Hex for 'lightgray'
    label: 'LightGray',
    color: '#D3D3D3',
  },
  {
    value: '#C0C0C0', // Hex for 'silver'
    label: 'Silver',
    color: '#C0C0C0',
  },
  {
    value: '#A9A9A9', // Hex for 'darkgray'
    label: 'DarkGray',
    color: '#A9A9A9',
  },
  {
    value: '#808080', // Hex for 'gray'
    label: 'Gray',
    color: '#808080',
  },
  {
    value: '#696969', // Hex for 'dimgray'
    label: 'DimGray',
    color: '#696969',
  },
  {
    value: '#778899', // Hex for 'lightslategray'
    label: 'LightSlateGray',
    color: '#778899',
  },
  {
    value: '#708090', // Hex for 'slategray'
    label: 'SlateGray',
    color: '#708090',
  },
  {
    value: '#2F4F4F', // Hex for 'darkslategray'
    label: 'DarkSlateGray',
    color: '#2F4F4F',
  },
  {
    value: '#000000', // Hex for 'black'
    label: 'Black',
    color: '#000000',
  },
]


// const rendercolor = () => {
//   const colorList = [];
//   color.map((x) => {
//     colorList.push({ ...x, value: x.value.toLowerCase() });
//   });
//   return colorList;
// };

// console.log('🚀 ~ rendercolor();:', rendercolor());

export const selectColor = {
  default: null,
  magenta: 'magenta',
  red: 'red',
  volcano: 'volcano',
  orange: '#ffa500',
  gold: '#ffc436',
  lime: 'lime',
  green: '#008000',
  cyan: 'cyan',
  blue: '#0000ff',
  geekblue: 'geekblue',
  purple: '#800080',
  indianred: '#cd5c5c',
  lightcoral: '#f08080',
  salmon: '#fa8072',
  darksalmon: '#e9967a',
  lightsalmon: '#ffa07a',
  crimson: '#dc143c',
  firebrick: '#b22222',
  darkred: '#8b0000',
  pink: '#ffc0cb',
  lightpink: '#ffb6c1',
  hotpink: '#ff69b4',
  deeppink: '#ff1493',
  mediumvioletred: '#c71585',
  palevioletred: '#db7093',
  coral: '#ff7f50',
  tomato: '#ff6347',
  orangered: '#ff4500',
  darkorange: '#ff8c00',
  yellow: '#ffd700',
  khaki: '#cbcc9e',
  darkkhaki: '#bdb76b',
  thistle: '#d8bfd8',
  plum: '#dda0dd',
  violet: '#ee82ee',
  orchid: '#da70d6',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  rebeccapurple: '#663399',
  blueviolet: '#8a2be2',
  darkviolet: '#9400d3',
  darkorchid: '#9932cc',
  darkmagenta: '#8b008b',
  indigo: '#4b0082',
  slateblue: '#6a5acd',
  darkslateblue: '#483d8b',
  mediumslateblue: '#7b68ee',
  lightgreen: '#90ee90',
  mediumseagreen: '#3cb371',
  seagreen: '#2e8b57',
  forestgreen: '#228b22',
  darkgreen: '#006400',
  yellowgreen: '#9acd32',
  olivedrab: '#6b8e23',
  olive: '#808000',
  darkolivegreen: '#556b2f',
  mediumaquamarine: '#66cdaa',
  darkseagreen: '#8fbc8b',
  lightseagreen: '#20b2aa',
  darkcyan: '#008b8b',
  teal: '#008080',
  turquoise: '#40e0d0',
  mediumturquoise: '#48d1cc',
  darkturquoise: '#00ced1',
  cadetblue: '#5f9ea0',
  steelblue: '#4682b4',
  lightsteelblue: '#b0c4de',
  powderblue: '#b0e0e6',
  lightblue: '#add8e6',
  skyblue: '#87ceeb',
  lightskyblue: '#87cefa',
  deepskyblue: '#00bfff',
  dodgerblue: '#1e90ff',
  cornflowerblue: '#6495ed',
  royalblue: '#4169e1',
  mediumblue: '#0000cd',
  darkblue: '#00008b',
  navy: '#000080',
  midnightblue: '#191970',
  burlywood: '#deb887',
  tan: '#d2b48c',
  rosybrown: '#bc8f8f',
  sandybrown: '#f4a460',
  goldenrod: '#daa520',
  darkgoldenrod: '#b8860b',
  peru: '#cd853f',
  chocolate: '#d2691e',
  saddlebrown: '#8b4513',
  sienna: '#a0522d',
  brown: '#a52a2a',
  maroon: '#800000',
  lightgray: '#d3d3d3',
  silver: '#c0c0c0',
  darkgray: '#a9a9a9',
  gray: '#808080',
  dimgray: '#696969',
  lightslategray: '#778899',
  slategray: '#708090',
  darkslategray: '#2f4f4f',
  black: '#000000',
};

export default color;
