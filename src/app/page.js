import { createClient } from "@/lib/server";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  // if (error || !data?.user) {
  //   redirect("/auth/login");
  // }

  return (
    <>
      <main>
        <p>this is a paragraph</p>
      </main>
    </>
  );
}
