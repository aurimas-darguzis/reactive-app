import { User } from './shared/user.model';
import { Item } from './shared/item.model';

export interface AppStore {
    items: Item[];
    user: User[];
}
