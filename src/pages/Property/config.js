export const fields = {
  address: {
    type: 'string',
    required: true,
  },
  city: {
    type: 'string',
    required: true,
  },
  state: {
    type: 'string',
    required: true,
  },
  zipcode: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  },
  status: {
    type: 'select',
    options: [
      { value: 'Available', label: 'Available' },
      { value: 'Rented', label: 'Rented' },
      { value: 'Sold', label: 'Sold' },
    ],
    required: true,
  },
  price: {
    type: 'number',
    required: true,
    min: 0,
    max: 100000000,
  },
  bathrooms: {
    type: 'number',
    required: true,
    min: 0,
    max: 10,
  },
  bedrooms: {
    type: 'number',
    required: true,
    min: 0,
    max: 10,
  },
  buildingArea: {
    type: 'number',
    required: true,
    min: 0,
    max: 5000,
  },
  surfaceArea: {
    type: 'number',
    required: true,
    min: 0,
    max: 5000,
  },
  specialType: {
    type: 'search',
    label: 'Special Type',
    entity: 'real-estates/property-special-types',
    redirectLabel: 'Add New Special Type',
    withRedirect: true,
    urlToRedirect: '/special-type',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['name'],
  },
  type: {
    type: 'search',
    label: 'Type',
    entity: 'real-estates/property-types',
    redirectLabel: 'Add New Type',
    withRedirect: true,
    urlToRedirect: '/property-type',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['name'],
  },
  files: {
    type: 'files',
    required: true,
    disableForTable: true,
    multiple: true,
  },
};
