export const fields = {
  status: {
    type: 'select',
    options: [
      { value: 'Available', label: 'Available' },
      { value: 'Unavailable', label: 'Unavailable' },
    ],
    required: true,
  },
  link: {
    type: 'string',
  },
  withAuth: {
    label: 'Show In Authentication',
    type: 'select',
    options: [
      { value: 'True', label: 'True' },
      { value: 'False', label: 'False' },
    ],
    required: true,
  },
  files: {
    type: 'files',
    required: true,
    disableForTable: true,
  },
};
