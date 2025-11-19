"use client";
import { RealtimeChat } from "@/components/realtime-chat";

import { useSession } from "next-auth/react";

export default function MessageBox() {
  const { data: session } = useSession();
  const { status } = useSession();
  return (
    status === "authenticated" && (
      <div className="h-77">
        <RealtimeChat
          roomName="my-chat-room"
          username={(session && session?.user?.username) || "kullanici"}
        />
      </div>
    )
  );
}
