import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const SetupPage = () => {
  const { userId } = auth();

  if (userId)
    return (
      <div>
        <UserButton />
      </div>
    );
};

export default SetupPage;
