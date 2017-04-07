import { Recipe } from './shared/recipe.model';
import { User } from './shared/user.model';
import { Item } from './shared/item.model';
import { Widget } from './shared/widget.model';

export interface AppStore {
    items: Item[];
    user: User[];
    widget: Widget[];
    recipe: Recipe[];
}
