import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalQuantity: 0,
		totalAmount: 0,
	},
	reducers: {
		addProduct(state, action) {
			const newCartItems = action.payload; //items from dispatch object
			const existingItem = state.items.find((el) => el.id === newCartItems.id);
			state.totalQuantity++;
			if (!existingItem) {
				state.items.push({
					id: newCartItems.id,
					quantity: 1,
					title: newCartItems.title,
					price: newCartItems.price,
					image: newCartItems.imageUrl,
					totalPrice: newCartItems.price,
					isAdded: true,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newCartItems.price;
				existingItem.isAdded = true;
			}
			state.totalAmount = state.items.reduce(
				(acc, index) => acc + Number(index.price) * Number(index.quantity),
				0
			);
		},
		removeProduct(state, action) {
			const removingItemId = action.payload;
			const alreadyAddedItem = state.items.find(
				(item) => item.id === removingItemId
			);
			state.totalQuantity--;
			if (alreadyAddedItem.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== removingItemId);
			} else {
				alreadyAddedItem.quantity--;
				alreadyAddedItem.totalPrice =
					alreadyAddedItem.totalPrice - alreadyAddedItem.price;
			}
			state.totalAmount = state.items.reduce(
				(acc, index) => acc - Number(index.price) * Number(index.quantity),
				0
			);
		},
	},
});

export const cartStoreAction = cartItemSlice.actions;

export default cartItemSlice;
