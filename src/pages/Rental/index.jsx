import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';

export default function Rental() {
  const translate = useLanguage();
  const entity = '/real-estates/rentals';
  const searchConfig = {
    displayLabels: ['propertyId', 'tenantId', 'agentId', 'startDate', 'endDate', 'monthlyRent'],
    searchFields: 'propertyId,tenantId,agentId,startDate,endDate,monthlyRent',
  };
  const deleteModalLabels = [
    'propertyId',
    'tenantId',
    'agentId',
    'startDate',
    'endDate',
    'monthlyRent',
  ];

  const Labels = {
    PANEL_TITLE: translate('rental'),
    DATATABLE_TITLE: translate('rental_list'),
    ADD_NEW_ENTITY: translate('add_new_rental'),
    ENTITY_NAME: translate('rental'),
  };

  const dataTableColumns = [
    {
      title: translate('User'),
      dataIndex: 'tenant',
      render: (tenant) => {
        return tenant?.username;
      },
    },
    {
      title: translate('Agent'),
      dataIndex: 'agent',
      render: (agent) => {
        return agent?.username;
      },
    },
    {
      title: translate('Start Date'),
      dataIndex: 'startDate',
      render: (startDate) => {
        return new Date(startDate).toDateString();
      },
    },
    {
      title: translate('End Date'),
      dataIndex: 'endDate',
      render: (endDate) => {
        return new Date(endDate).toDateString();
      },
    },
    {
      title: translate('Monthly Rent'),
      dataIndex: 'monthlyRent',
    },
  ];
  const readColumns = [
    {
      title: translate('Start Date'),
      dataIndex: 'startDate',
    },
    {
      title: translate('End Date'),
      dataIndex: 'endDate',
    },
    {
      title: translate('Monthly Rent'),
      dataIndex: 'monthlyRent',
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
