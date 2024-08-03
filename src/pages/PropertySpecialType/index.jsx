import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';

export default function PropertySpecialType() {
  const translate = useLanguage();
  const entity = 'real-estates/property-special-types';
  const searchConfig = {
    displayLabels: ['name', 'description'],
    searchFields: 'name,description',
  };
  const deleteModalLabels = ['name', 'description'];

  const Labels = {
    PANEL_TITLE: translate('property_special_type'),
    DATATABLE_TITLE: translate('property_special_type_list'),
    ADD_NEW_ENTITY: translate('add_new_property_special_type'),
    ENTITY_NAME: translate('property_special_type'),
  };

  const dataTableColumns = [
    {
      title: translate('Name'),
      dataIndex: 'name',
    },
    {
      title: translate('Description'),
      dataIndex: 'description',
    },
  ];
  const readColumns = [
    {
      title: translate('Name'),
      dataIndex: 'name',
    },
    {
      title: translate('Description'),
      dataIndex: 'description',
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
  };
  return (
    <CrudModule
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} isUpdateForm={true} />}
      config={config}
    />
  );
}
