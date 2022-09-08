/*
Export the following action constants and write the corresponding actions:

1. `RECEIVE_LISTINGS` (corresponding action should have a `reports` payload)
2. `RECEIVE_LISTING` (corresponding action should have a `report` payload)
3. `REMOVE_LISTING` (corresponding action should have a `reportId` payload)
*/

/* 
Export a `getReport` selector that takes in a `reportId` and returns the
specified report from the store.

Export a `getReports` selector that returns an array of all the reports in the
store.
*/
/* 
Export the following functions with the specified parameters:

1. `fetchListings`
2. `fetchListing(listingId)`
3. `createListing(listingData)`
4. `updateListing(listingData)`
5. `deleteListing(listingId)`

Each function should call `fetch` to perform the desired database operation and
dispatch the appropriate action upon a successful response. (You do not need to
do anything if the `fetch` response is unsuccessful.) 
*/

/*
Export a `listingReducer` function as the default export. It should take in the
old state and an action. It should appropriately handle all report actions, as
defined in the test specs.
*/