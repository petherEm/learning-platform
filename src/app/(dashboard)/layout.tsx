import { SidebarProvider } from "@/components/providers/SidebarProvider";
import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <SidebarProvider>
        <div className="h-full">{children}</div>
      </SidebarProvider>
      <SanityLive />
    </ClerkProvider>
  );
}
