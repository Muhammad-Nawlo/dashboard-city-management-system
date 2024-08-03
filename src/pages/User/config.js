export const fields = {
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
  role: {
    type: 'search',
    label: 'Role',
    entity: 'roles',
    redirectLabel: 'Add New Role',
    withRedirect: true,
    urlToRedirect: '/role',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['name'],
  },
};
