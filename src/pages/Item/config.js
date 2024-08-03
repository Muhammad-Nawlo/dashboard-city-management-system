export const fields = {
  name: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  },
  price: {
    type: 'number',
    required: true,
    min: 0,
    max: 10000000,
  },
  category: {
    type: 'search',
    label: 'Category',
    multiple: true,
    entity: 'restaurants/categories',
    redirectLabel: 'Add New Category',
    withRedirect: true,
    urlToRedirect: '/category',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['name'],
  },
  files: {
    type: 'files',
    required: true,
    disableForTable: true,
  },
};
