import { api } from "@/lib/axios";

export interface SignUpBody {
  restaurantName: string;
  managerName: string;
  phone: string;
  email: string;
}

export async function signUp(restaurantData: SignUpBody) {
  await api.post("/restaurants", restaurantData);
}
