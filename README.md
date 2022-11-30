# VOSViewer data update demo

How to run:

1. install dependencies with `npm i`
2. build the frontend with `npm run build` or keep it watching with `npm run watch`
3. run the local server with `npm start`
4. open https://localhost:4445

# Notes

The Viewer freeze seems to happen when a new data object is sent to the react component. In looker this is troublesome because on every UI changes the app sends a new data object back, even if the data itself is not different.
