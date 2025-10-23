import { UsersFilter, UsersList, UsersSearch, UsersSort } from "../components";

const Users = () => {
  return (
    <>
      <h1>Members of tl-base</h1>
      <p className="text-foregroundSecondary">
        Here you can find all members of tl-base
      </p>

      <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
        <UsersSearch />

        <div className="flex items-center flex-wrap gap-4">
          <UsersFilter />
          <UsersSort />
        </div>
      </div>

      <div className="mt-8">
        <UsersList />
      </div>
    </>
  );
};

export default Users;
