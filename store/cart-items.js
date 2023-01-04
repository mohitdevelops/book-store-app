import { createSlice } from "@reduxjs/toolkit";

// Getting items from localStorage
// const cart__items =
// 	localStorage.getItem("items") !== null
// 		? JSON.parse(localStorage.getItem("items"))
// 		: [];

const cartItemSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalQuantity: 0,
		totalAmount: 0,
	},
	reducers: {
		addProduct(state, action) {
			const { payload } = action; //items from dispatch object
			const existingItem = state.items.find((el) => el.id === payload.id);
			state.totalQuantity++;
			if (!existingItem) {
				state.items.push({
					quantity: 1,
					totalPrice: payload.price,
					...payload,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newCartItems.price;
			}
			state.totalAmount = state.items.reduce(
				(acc, index) => acc + Number(index.price) * Number(index.quantity),
				0
			);

			// Setting items to localStorage
			// localStorage.setItem(
			// 	"items",
			// 	JSON.stringify(state.items.map((el) => el))
			// );
		},
		removeProduct(state, action) {
			const removingItemId = action.payload;
			const alreadyAddedItem = state.items.find(
				(item) => item.id === removingItemId
			);
			// const findProdIndexToCart = state.items.findIndex(prod => prod.id === action.id);
			// state.items[findProdIndexToCart].isAdded = false;
			state.totalQuantity--;
			if (alreadyAddedItem.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== removingItemId);
			} else {
				alreadyAddedItem.quantity--;
				alreadyAddedItem.totalPrice =
					alreadyAddedItem.totalPrice - alreadyAddedItem.price;
			}
			state.totalAmount = state.items.reduce(
				(acc, index) => acc + Number(index.price) * Number(index.quantity),
				0
			);
		},
	},
});

export const cartStoreAction = cartItemSlice.actions;

export default cartItemSlice;
