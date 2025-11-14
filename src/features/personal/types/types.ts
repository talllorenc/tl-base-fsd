export interface IProfileResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "USER" | "ADMIN" | "TESTER";
  isVerified: boolean;
  imagePath?: string;
  registrationDate: Date;
  updateDate: Date;
}
