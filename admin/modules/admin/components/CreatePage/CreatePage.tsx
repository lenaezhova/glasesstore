import CustomTitle from '@/src/components/UI/Title/Title';
import CreatePageForm from '@/modules/admin/components/CreatePage/components/CreatePageForm';

const CreatePage = () => {
  return (
    <div>
      <CustomTitle title={'Создание товара'} />
      <CreatePageForm/>
    </div>
  );
};

export default CreatePage;
