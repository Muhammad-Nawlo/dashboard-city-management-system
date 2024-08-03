import color from '@/utils/color.js';

export const fields = {
  make: {
    type: 'string',
    required: true,
  },
  model: {
    type: 'string',
    required: true,
  },
  year: {
    type: 'string',
    required: true,
  },
  registrationNumber: {
    label: 'Registration Number',
    type: 'string',
    required: true,
  },
  status: {
    type: 'select',
    options: [
      { value: 'Available', label: 'Available' },
      { value: 'Unavailable', label: 'Unavailable' },
      { value: 'In Maintain', label: 'In Maintain' },
      { value: 'Rented', label: 'Rented' },
    ],
    required: true,
  },
  price: {
    type: 'number',
    required: true,
    min: 0,
    max: 100000000,
  },
  capacity: {
    type: 'number',
    required: true,
    min: 0,
    max: 50,
  },
  type: {
    type: 'search',
    label: 'Type',
    entity: '/cars/car-types',
    redirectLabel: 'Add New Type',
    withRedirect: true,
    urlToRedirect: '/car-type',
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
  color: {
    type: 'color',
    options: [...color],
    required: true,
  },
};
