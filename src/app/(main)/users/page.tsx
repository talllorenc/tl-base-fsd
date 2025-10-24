import { Users } from '@/features/users/pages'

export const metadata = {
  title: "Users Page",
  description: "Users Page",
};

export const dynamic = "force-dynamic";

const UsersPage = () => {
  return (
    <Users/>
  )
}

export default UsersPage