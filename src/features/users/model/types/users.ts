export interface IUserItem {
  id: string;
  email?: string;
  firstName: string;
  lastName: string;
  role: string;
  isVerified: boolean;
  imagePath?: string;
  registrationDate: Date;
  updateDate: Date;
}
