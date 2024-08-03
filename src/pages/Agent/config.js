export const fields = {
  fullName: {
    label: 'Full name',
    type: 'string',
    required: true,
  },
  email: {
    type: 'email',
    required: true,
  },
  username: {
    label: 'User name',
    type: 'string',
    required: true,
  },
  phoneNumber: {
    label: 'Phone Number',
    type: 'phone',
    required: true,
  },
  password: {
    type: 'password',
    required: true,
    disableForTable: true,
  },
  files: {
    type: 'files',
    required: true,
    disableForTable: true,
  },
  licenseNumber: {
    type: 'string',
    label: 'License number',
    required: true,
  },

};
