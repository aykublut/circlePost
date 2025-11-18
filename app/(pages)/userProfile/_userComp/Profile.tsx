import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useState } from "react";

const Profile = () => {
  const [preview, setPreview] = useState<any>(null);

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "avatar_uploads"); // Cloudinary preset
    data.append("folder", "profile_photos");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body: data }
    );

    const json = await res.json();

    console.log("Uploaded URL:", json.secure_url);

    // burada kullanıcıya kaydedebilirsin:
    // await updateUser({ avatar: json.secure_url })
  };

  return (
    <div className="p-20 flex justify-center relative items-center ">
      <Image
        className="border-white/50 border-b "
        src="/userBg.png"
        fill
        alt="photo"
      />

      <label className="cursor-pointer absolute top-20">
        <Avatar className="w-30 h-30 ">
          <AvatarImage src={preview} alt="@shadcn" />
          <AvatarFallback className="bg-black/20"></AvatarFallback>
        </Avatar>
        <input type="file" onChange={handleUpload} className="hidden" />
      </label>
    </div>
  );
};

export default Profile;
