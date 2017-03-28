import { GamesProfile } from './games-profile';

export class User {
    name: string;
    imageUrl: string;
    gamesProfile?: GamesProfile;
    description: string;
    tagLine: string;
};