"use client";
import { RealtimeChat } from "@/components/realtime-chat";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSession } from "next-auth/react";

export default function MessageBox() {
  const { data: session } = useSession();
  const { status } = useSession();
  return (
    status === "authenticated" && (
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
        <RealtimeChat
          roomName="my-chat-room"
          username={(session && session?.user?.username) || "kullanici"}
        />
      </ScrollArea>
    )
  );
}
