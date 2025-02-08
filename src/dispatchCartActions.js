import store from './store';
import { addItem, updateQuantity, removeItem } from './CartSlice';

export function addPlantToCart(plant) {
    store.dispatch(addItem(plant));
}

export function updateItemQuantity(itemId, quantity) {
    store.dispatch(updateQuantity({ id: itemId, quantity }));
}

export function removePlantFromCart(itemId) {
    store.dispatch(removeItem({ id: itemId }));
}