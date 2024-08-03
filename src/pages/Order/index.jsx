import React from 'react';

import CrudModule from '@/modules/CrudModule/CrudModule';
import OrderForm from '@/forms/OrderForm'; // Ensure to create this form
import useLanguage from '@/locale/useLanguage';

export default function Order() {
  const translate = useLanguage();
  const entity = 'restaurants/orders';
  const searchConfig = {
    displayLabels: ['_id', 'status'],
    searchFields: '_id,status',
    outputValue: '_id',
  };

  const deleteModalLabels = ['_id'];

  const readColumns = [
    {
      title: translate('Total Quantity'),
      dataIndex: 'totalAmount',
    },
    {
      title: translate('Total Price'),
      dataIndex: 'totalPrice',
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
    },
    {
      title: translate('Note'),
      dataIndex: 'note',
    },
  ];
  const dataTableColumns = [
    {
      title: translate('Items'),
      dataIndex: 'items',
      render: (items) => {
        let itemsArr = items?.map(item => item?.item?.name);
        return itemsArr?.toString();
      },
    },
    {
      title: translate('Total Quantity'),
      dataIndex: 'totalAmount',
    },
    {
      title: translate('Total Price'),
      dataIndex: 'totalPrice',
    },

    {
      title: translate('Status'),
      dataIndex: 'status',
    },
    {
      title: translate('Note'),
      dataIndex: 'note',
    },
    // {
    //   title: translate('User'),
    //   dataIndex: 'user',
    //   render: async (user, record, index) => {
    //     const data = await request.read({ entity: 'users', id: user });
    //     return data.result?.username;
    //   },
    // },
  ];

  const Labels = {
    PANEL_TITLE: translate('order'),
    DATATABLE_TITLE: translate('order_list'),
    ADD_NEW_ENTITY: translate('add_new_order'),
    ENTITY_NAME: translate('order'),
  };

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
      createForm={<OrderForm />}
      updateForm={<OrderForm isUpdateForm={true} />}
      config={config}
    />
  );
}
