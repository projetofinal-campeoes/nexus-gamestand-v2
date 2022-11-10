export interface IUser {
  id: string;
  username: string;
  avatar_url: string;
  email: string;
  password: string;
  status: boolean;
  steam_user: string;
  gamepass: boolean;
  created_at: string;
  updated_at: string;
  user: IUser
}