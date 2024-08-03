import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';

export default function Rental() {
  const translate = useLanguage();
  const entity = '/cars/rentals';
  const searchConfig = {
    displayLabels: [
      'carId',
      'startDate',
      'endDate',
      'location',
      'totalPrice',
    ],
    searchFields: 'location,totalPrice',
  };
  const deleteModalLabels = [
    'carId',
    'startDate',
    'endDate',
    'location',
    'totalPrice',
  ];

  const Labels = {
    PANEL_TITLE: translate('car_rental'),
    DATATABLE_TITLE: translate('car_rental_list'),
    ADD_NEW_ENTITY: translate('add_new_car_rental'),
    ENTITY_NAME: translate('car_rental'),
  };

  const dataTableColumns = [
    {
      title: translate('Location'),
      dataIndex: 'location',
    },
    {
      title: translate('Total Price'),
      dataIndex: 'totalPrice',
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
  ];
  const readColumns = [
    {
      title: translate('Location'),
      dataIndex: 'location',
    },
    {
      title: translate('Total Price'),
      dataIndex: 'totalPrice',
    },
    {
      title: translate('Start Date'),
      dataIndex: 'startDate',
    },
    {
      title: translate('End Date'),
      dataIndex: 'endDate',
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
