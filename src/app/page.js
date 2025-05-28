import { redirect } from "next/navigation";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { LogoutButton } from "@/components/logout-button";
import { createClient } from "@/lib/server";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-17 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-3 px-4">
              <SidebarTrigger className="-ml-2" />
              <Separator
                orientation="vertical"
                className="mr-3 data-[orientation=vertical]:h-4"
              />
              <p>VendorFlow</p>
            </div>
          </header>
          <div className="flex h-svh w-full items-center justify-center gap-2">
            <p>
              Hello <span>{data.user.email}</span>
            </p>
            <LogoutButton />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
