import React from 'react';
import { Form, Input, Select, InputNumber } from 'antd';

import useLanguage from '@/locale/useLanguage';

export default function OrderForm({ isUpdateForm = false }) {
  const translate = useLanguage();
  const validateEmptyString = (_, value) => {
    if (value && value.trim() === '') {
      return Promise.reject(new Error('Field cannot be empty'));
    }

    return Promise.resolve();
  };

  return (
    <>
      <Form.Item
        label={translate('status')}
        name="status"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="Pending">{translate('Pending')}</Select.Option>
          <Select.Option value="Confirmed">{translate('Confirmed')}</Select.Option>
          <Select.Option value="Completed">{translate('Completed')}</Select.Option>
          <Select.Option value="Cancelled">{translate('Cancelled')}</Select.Option>
        </Select>
      </Form.Item>
    </>
  );
}
