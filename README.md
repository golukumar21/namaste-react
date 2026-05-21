# Namaste React

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement - If we change anything in the file & save parcel builds it again & app refreshes & has new changes
- Parcel uses a File Watching Algorithm which is Writter in C++
- Caching - Parcel is Cahing things for us - Faster Builds - creates .parcel-cache
- Image Optimization
- Minification of files
- Bundling of files
- Compressing files
- Consistent Hashing
- Code Splitting
- Differential Bundlig - Support Older Browsers
- Diagnostic
- Error Handling
- Hosting apps on HTTPs
- Tree Shaking - remove unused code
- Different dev & prod bundles

# Namaste Food
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *  - RestaurantCard
 *    - Img
 *    - Name of Restaurant, Star Rating, Cuisine, Delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

 # Two Types of Export/Import

- Default Export/Import

 export default Component;
 import Component from "path";

 - Named Export/Import

 export const Component;
 import {Component} from "path";

 # React Hooks
 (Normal JS Utility Functions)
 - useState() - Superpowerful State Variables in react (Whenever a state variable changes, React will re-render our Component)
 - useEffect()

