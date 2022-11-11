export interface IProfile {
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
  user: IProfile;
  custom_games: IGame[];
  promotions: IPromotion[];
  friends: IFriend[];
}

export interface IGame {
  id: string;
  name: string;
  image_url: string;
  platform: string;
  userId: string;
}
export interface IGames {
  games: IGame[];
}

export interface IPromotion {
  id: string;
  name: string;
  price: number;
  promo_url: string;
  description: string;
  shiny_meter: number;
  userId: string;
  rate_log: IRateLog[];
}

export interface IPromotions {
  promotions: IPromotion[];
}

export interface IRateLog {
  id: string;
  user_id: string;
  like: boolean;
  promotionId: string;
}

export interface IFriend {
  id: string;
  userId: string;
  friendId: string;
  friendName: string;
  friendStatus: boolean;
  friendAvatar: string;
}

export interface IFriends{
  friends: IFriend[]
}
