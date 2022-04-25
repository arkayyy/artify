import { combineReducers } from "redux";

import getArtsReducer from "./getArts/getArtsReducer";
import getGalleriesReducer from "./getGalleries/getGalleriesReducer";
import getCustomerDetailsReducer from "./getCustomerDetails/getCustomerDetailsReducer";
import newPostReducer from "./postArt/newPostReducer";
import getExhibitionsReducer from "./getExhibitions/getExhibitionsReducer";
import newPostExhibitionReducer from "./postExhibition/newPostReducer";
import newPostGalleryReducer from "./postGallery/newPostReducer";

const rootReducer = combineReducers({
    artsReducer: getArtsReducer,
    galleriesReducer: getGalleriesReducer,
    customerDetailsReducer: getCustomerDetailsReducer,
    newArtPost: newPostReducer,
    exhibitionsReducer: getExhibitionsReducer,
    postExhibitionReducer: newPostExhibitionReducer,
    postGalleryReducer: newPostGalleryReducer
});
  

export default rootReducer;