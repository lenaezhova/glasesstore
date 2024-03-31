import CustomTitle from '@/src/components/UI/Title/Title';
import NowBuyPageForm from "@/modules/admin/components/NowBuyPage/components/NowBuyPageForm";
const NowBuyPage = () => {
  return (
    <div>
      <CustomTitle title={'Сейчас покупают'} />
      <NowBuyPageForm/>
    </div>
  );
};

export default NowBuyPage;
