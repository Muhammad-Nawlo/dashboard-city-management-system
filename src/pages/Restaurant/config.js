export const fields = {
  name: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  },
  address: {
    type: 'string',
    required: true,
  },
  phoneNumber: {
    type: 'phone',
    required: true,
  },
  files: {
    type: 'files',
    required: true,
    disableForTable: true,
  },
};
