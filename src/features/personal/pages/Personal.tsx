import { ProfileDetails } from "../components";

const Personal = () => {
  return (
    <>
      <h1>Account</h1>
      <p className="text-foregroundSecondary">Manage your account info</p>

      <div className="mt-8">
        <ProfileDetails />
      </div>
    </>
  );
};

export default Personal;
