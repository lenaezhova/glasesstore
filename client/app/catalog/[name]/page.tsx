import CatalogPage from '@/modules/catalog/components/CatalogPage/CatalogPage';
import React from 'react';
import OplataBanner from '@/src/components/UI/OplataBanner/OplataBanner';

export default function CatalogIdPage({ params }: { params: { name: string } }) {
  const { name } = params;

  return (
    <>
      <h1 className={'textHeader'}>{name === 'all' ? 'Очки' : name.toUpperCase()}</h1>
      {/*<div style={{marginTop: 25, marginBottom: 50}}>*/}
      {/*  <OplataBanner/>*/}
      {/*</div>*/}
      <div className={'container'}>
        <CatalogPage name={name}/>
      </div>
    </>
  );
}
