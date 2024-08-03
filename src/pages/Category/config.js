export const fields = {
  name: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  },
  // restaurant: {
  //   type: 'search',
  //   label: 'Restaurant',
  //   entity: 'restaurants',
  //   redirectLabel: 'Add New Restaurant',
  //   withRedirect: true,
  //   urlToRedirect: '/restaurant',
  //   displayLabels: ['name'],
  //   searchFields: 'name',
  //   dataIndex: ['name'],
  // },
  files: {
    type: 'files',
    required: true,
    disableForTable: true,
  },
};
