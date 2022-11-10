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

export interface IGame { 
    id: string;
    name: string;
    image_url: string;
    platform: string;
    userId: string;
}
export interface IGames {
  games: IGame[]
}