import { IMeta } from "@/types/api";

export interface IEditProfile {
  firstName: string;
  lastName: string;
}

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export interface IUserItem {
  id: string;
  firstName: string;
  lastName: string;
  role: "USER" | "ADMIN" | "TESTER";
  isVerified: boolean;
  imagePath?: string;
  registrationDate: Date;
  updateDate: Date;
}

export interface IUsersResponse {
  data: IUserItem[];
  meta: IMeta;
}

export interface IUsersChartResponse {
  data: [
    {
      registrationDate: Date;
    }
  ];
}

export interface IGetUsersQueryParams {
  page?: number;
  perPage?: number;
  search?: string;
}

export interface IGetUsersChartQueryParams {
  year?: number;
}

export interface IUserVerifiedBadgeProps {
  isVerified: boolean;
}