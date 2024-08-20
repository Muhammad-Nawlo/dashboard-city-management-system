import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';

export default function Rental() {
  const translate = useLanguage();
  const entity = '/real-estates/sales';
  const searchConfig = {
    displayLabels: [
      'propertyId',
      'buyerId',
      'agentId',
      'date',
      'price',
    ],
    searchFields: 'propertyId,tenantId,agentId,startDate,endDate,monthlyRent',
  };
  const deleteModalLabels = [
    'propertyId',
    'buyerId',
    'agentId',
    'date',
    'price',
  ];

  const Labels = {
    PANEL_TITLE: translate('sale'),
    DATATABLE_TITLE: translate('sale_list'),
    ADD_NEW_ENTITY: translate('add_new_sale'),
    ENTITY_NAME: translate('sale'),
  };

  const dataTableColumns = [
    {
      title: translate('Agent'),
      dataIndex: 'agent',
      render: (agent) => {
        return agent?.username;
      },
    },
    {
      title: translate('Buyer'),
      dataIndex: 'buyer',
      render: (buyer) => {
        return buyer?.username;
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
      title: translate('Price'),
      dataIndex: 'price',
    },

  ];
  const readColumns = [
    {
      title: translate('Date'),
      dataIndex: 'date',
    },
    {
      title: translate('Price'),
      dataIndex: 'price',
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
