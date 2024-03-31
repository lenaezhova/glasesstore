'use client'
import React, {useState} from 'react';
import s from './NowBuyPageForm.module.scss'
import {Button, Card, Checkbox, List, message, Spin} from "antd";
import {useAllProduct} from "@/src/http/hooks/useAllProduct";
import PreloaderImage from "@/src/components/PreloaderImage/PreloaderImage";
import {deleteElementFromArrayByIndex} from "@/src/helpers/deleteElementFromArray";
import {useNowBuyBanner} from "@/src/http/hooks/useNowBuyBanner";
import {useMutation} from "@tanstack/react-query";
import {$glassesAdminApi} from "@/src/http/api/api";

const NowBuyPageForm = () => {
  const {data: bannerData} = useNowBuyBanner();
  const [activeProductId, setActiveProductId] = useState<string[]>(bannerData?.productIds || []);
  const {data, isLoading} = useAllProduct();
  const {mutateAsync, isLoading: isLoadingMutate} = useMutation({
    mutationFn: $glassesAdminApi.Product.createEndpoints.addNowBuyBanner
  })

  const productsSource = data?.map((el, index) => ({
    product: el
  }))

  if (isLoading) {
    return <div>
      <Spin/>
    </div>
  }

  const handleSave = async () => {
    if (activeProductId.length !== 3) {
      message.info('Выберите 3 продукта для баннера');
      return
    }
    try {
      await mutateAsync(activeProductId);
      message.success('Баннер обновлен!');
    } catch (e) {
      message.error('Ошибка при обновлении баннера');
    }
  }

  const handleChange = (e: any) => {
    const id: string = e.target.value;
    const indexElement = activeProductId.findIndex(el => el === id);
    if (indexElement >= 0) {
      setActiveProductId(state => deleteElementFromArrayByIndex(state, indexElement))
    } else if (activeProductId.length < 3) {
      setActiveProductId(state => [...state, id])
    } else {
      message.info('Всего можно выбрать 3 товара');
    }
  }

  return (
    <div className={s.wrapper}>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={productsSource}
        renderItem={(el) => (
          <List.Item>
            <Card title={<div className={s.titleWrapper}>
              <p>{el.product.name}</p>
              <Checkbox
                value={el.product._id}
                checked={activeProductId.includes(el.product._id)}
                onChange={handleChange}
              />
            </div>}>
              <PreloaderImage
                className={s.imageWrapper}
                sizes='100vw'
                imgClassName={s.img}
                src={el.product.imagesUrl[0]}
                alt={el.product.name}
                priority={true}
                objectFit='contain'
                preloaderSize='large'
              />
            </Card>
          </List.Item>
        )}
      />
      <Button loading={isLoadingMutate} type={'primary'} style={{height: 40, fontSize: 18}} onClick={handleSave}>Сохранить</Button>
    </div>
  );
};

export default NowBuyPageForm;
