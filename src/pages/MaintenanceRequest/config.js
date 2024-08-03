export const fields = {
  tenantId: {
    type: 'string',
    required: true,
    disableForTable: true,
    disableForForm: true,
    disableForUpdate: true,
  },
  propertyId: {
    type: 'string',
    required: true,
    disableForTable: true,
    disableForForm: true,
    disableForUpdate: true,

  },
  description: {
    type: 'string',
    required: true,
    disableForForm: true,
    disableForUpdate: true,

  },
  status: {
    type: 'select',
    options: [
      { value: 'New', label: 'New' },
      { value: 'In Progress', label: 'Progress' },
      { value: 'In Review', label: 'Review' },
      { value: 'Resolved', label: 'Resolved' },
      { value: 'Cancelled', label: 'Cancelled' },
      { value: 'Archived', label: 'Archived' },
    ],
    required: true,
  },
  date: {
    type: 'string',
    required: true,
    disableForTable: true,
    disableForForm: true,
    disableForUpdate: true,

  },
  files: {
    type: 'files',
    required: true,
    disableForTable: true,
    disableForForm: true,
    disableForUpdate: true,

  },
};
