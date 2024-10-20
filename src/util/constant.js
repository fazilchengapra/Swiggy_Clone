module.exports = {
  API: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  IMG: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/",
  EXPLORE_RESTAURANTS: (id, tags) =>
    `https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&collection=${id}&tags=${tags}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`,
  RESTAURANT_INFO:
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.91850&lng=76.25580&restaurantId=",
  TOP_PICKS:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/",
  ITEM_LIST_IMG:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/",
  CART_RESTAURANT_IMG:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/",
};
