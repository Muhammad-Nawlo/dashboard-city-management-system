export const fields = {
  name: {
    type: 'string',
    required: true,
  },
  slug: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  },
  files: {
    type: 'files',
    required: true,
    disableForTable: true,
  },
  status: {
    type: 'select',
    options: [
      { value: 'Available', label: 'Available' },
      { value: 'Unavailable', label: 'Unavailable' },
    ],
    required: true,
  },
};
