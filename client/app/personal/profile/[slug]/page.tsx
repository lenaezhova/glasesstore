import ProfilePage from '@/modules/personal/components/profile/ProfilePage/ProfilePage';

export default function ProfileSlugPage({params}: {params: {slug: string}}) {
  // eslint-disable-next-line no-unused-vars
  const {slug} = params;

  return <ProfilePage />;
}
