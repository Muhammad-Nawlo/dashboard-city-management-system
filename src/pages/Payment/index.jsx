import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';

export default function Rental() {
  const translate = useLanguage();
  const entity = '/real-estates/payments';
  const searchConfig = {
    displayLabels: [
      'date',
      'amount',
    ],
    searchFields: 'date,amount',
  };
  const deleteModalLabels = [
    'date',
    'amount',
  ];

  const Labels = {
    PANEL_TITLE: translate('payment'),
    DATATABLE_TITLE: translate('payment_list'),
    ADD_NEW_ENTITY: translate('add_new_payment'),
    ENTITY_NAME: translate('payment'),
  };

  const dataTableColumns = [
    {
      title: translate('User'),
      dataIndex: 'tenant',
      render: (tenant) => {
        return tenant?.username
      },
    },
    {
      title: translate('Agent'),
      dataIndex: 'rentalId',
      render: (rentalId) => {
        return rentalId?.agent?.username
      },
    },
    {
      title: translate('Date'),
      dataIndex: 'date',
      render: (date) => {
        return new Date(date).toDateString();
      },
    },
    {
      title: translate('Amount'),
      dataIndex: 'amount',
    },
  ];
  const readColumns = [
    {
      title: translate('Date'),
      dataIndex: 'date',
    },
    {
      title: translate('Amount'),
      dataIndex: 'amount',
    },
  ];
  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    dataTableColumns,
    readColumns,
    searchConfig,
    deleteModalLabels,
    disableAddButton: true,
  };
  return (
    <CrudModule
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} isUpdateForm={true} />}
      config={config}
    />
  );
}
