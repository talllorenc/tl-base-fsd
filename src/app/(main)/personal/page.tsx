import { Personal } from "@/features/personal/pages";

export const metadata = {
  title: "Personal Page",
  description: "Personal Page",
};

export const dynamic = "force-dynamic";

const PersonalPage = () => {
  return <Personal />;
};

export default PersonalPage;
