import {createSelector} from 'reselect';


const selectShop = state => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  shop=> shop.shopItems
)


export const selectCollection = collectionUrlParam =>
createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam]
);


export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);
