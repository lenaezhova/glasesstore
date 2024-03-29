'use client'
import s from './CreatePageForm.module.scss'
import {Button, Collapse, Form, Input, message, type UploadFile} from 'antd';
import {useForm} from 'antd/lib/form/Form';
import {rules} from '@/src/helpers/rules/rules';
import ProductSelect from '@/modules/admin/components/CreatePage/components/ProductSelect/ProductSelect';
import TextArea from 'antd/es/input/TextArea';
import ProductUploadImage from '@/modules/admin/components/CreatePage/components/ProductUploadImage/ProductUploadImage';
import {useMutation} from '@tanstack/react-query';
import {$glassesAdminApi} from '@/src/http/api/api';
import $glassesApi from '@/src/http';
import {useState} from 'react';


interface IDataForm {
  name: string;
  price: number;
  count: number;
  description?: string;
  images: {
    file: UploadFile,
    fileList: UploadFile[]
  };
  opticsId?: string;
  statusId?: string;
  brandId?: string;
  targetGroupId?: string;
  colorId?: string;
  materialId?: string;
  typeId?: string;
  typeLensId?: string;
  designId?: string;
}

const CreatePageForm = () => {
  const [form] = useForm()
  const [isImagesLoading, setIsImagesLoading] = useState(false);
  const {mutateAsync, isLoading} = useMutation({
    mutationFn: $glassesAdminApi.Product.createEndpoints.createProduct
  })

  const submitForm = async (e: IDataForm) => {
    try {
      setIsImagesLoading(true);
      try {
        const imgIds: string[] = await Promise.all(e.images.fileList.map(async (file: UploadFile) => {
          const formData = new FormData();
          formData.append('file', file.originFileObj as any);

          const response = await $glassesApi.post('/image/create', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
          })

          if (response.data.success === 1) {
            return response.data.fileId
          } else {
            return ''
          }
        }))
        setIsImagesLoading(false);
        await mutateAsync({
          ...e,
          imgIds
        })
      } catch (e) {
        setIsImagesLoading(false);
      }
    } catch (e) {
      message.error('Ошибка при создании товара')
    }
  }

  return (
    <Form
      className={s.form}
      form={form}
      labelCol={{span: 6}}
      onFinish={submitForm}
    >
      <Form.Item
        label={'Название'}
        name={'name'}
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={'Цена'}
        name={'price'}
        rules={[
          rules.required()
        ]}
      >
        <Input type={'number'} />
      </Form.Item>
      <Form.Item
        label={'Колличество'}
        name={'count'}
        rules={[rules.required()]}
      >
        <Input type={'number'} />
      </Form.Item>
      <Form.Item
        label={'Описание'}
        name={'description'}
      >
        <TextArea />
      </Form.Item>
      <Form.Item>
        <h3>Картинки</h3>
      </Form.Item>
      <ProductUploadImage/>
      <Form.Item>
        <h3>Характеристики</h3>
      </Form.Item>
      <ProductSelect nameQuery={'optics'} label={'Оптика'} formItemName={'opticsId'} />
      <ProductSelect nameQuery={'status'} label={'Статус'} formItemName={'statusId'} />
      <ProductSelect nameQuery={'brand'} label={' Брэнд'} formItemName={'brandId'} />
      <ProductSelect nameQuery={'targetGroup'} label={'Целевая группа'} formItemName={'targetGroupId'} />
      <ProductSelect nameQuery={'color'} label={'Цвет'} formItemName={'colorId'} />
      <ProductSelect nameQuery={'material'} label={'Материал'} formItemName={'materialId'} />
      <ProductSelect nameQuery={'type'} label={'Тип'} formItemName={'typeId'} />
      <ProductSelect nameQuery={'typeLens'} label={'Тип линз'} formItemName={'typeLensId'} />
      <ProductSelect nameQuery={'design'} label={'Дизайн'} formItemName={'designId'} />
      <Button loading={isImagesLoading || isLoading} type={'primary'} onClick={() => form.submit()}>Создать товар</Button>
    </Form>
  );
};

export default CreatePageForm;
