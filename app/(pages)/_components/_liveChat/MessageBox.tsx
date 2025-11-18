"use client";
import { RealtimeChat } from "@/components/realtime-chat";
import { useSession } from "next-auth/react";

export default function MessageBox() {
  const { data: session } = useSession();
  return (
    <RealtimeChat
      roomName="my-chat-room"
      username={(session && session?.user?.username) || "kullanici"}
    />
  );
}
