import { api } from "@/lib/axios";

interface UpdateProfileBody {
  name: string;
  description: string | null;
}

export async function updateProfile(updateProfileBody: UpdateProfileBody) {
  await api.put("/profile", updateProfileBody);
}