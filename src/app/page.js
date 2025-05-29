import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <>
      <main>
        <p>
          this is a paragraph that is only visible to authenticated users.
          <br />
          You can add more content here, such as user-specific information or
          features that require authentication.
          <br />
          <br />
          You can also use this space to display user data, such as their name,
          email, or any other relevant information that you want to show to
          authenticated users.
        </p>
      </main>
    </>
  );
}
