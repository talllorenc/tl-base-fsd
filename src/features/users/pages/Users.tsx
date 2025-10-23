import { UsersList } from "../components";

const Users = () => {
  return (
    <>
      <h1>Members of tl-base</h1>
      <p className="text-foregroundSecondary">
        Here you can find all members of tl-base
      </p>

      <div className="mt-8">
        <UsersList />
      </div>
    </>
  );
};

export default Users;
