//http://copilot.devatics.com:7990/users/smaurel/repos/front-interview-react/browse/src/reportWebVitals.js?at=7c81980
//History

// const reportWebVitals = onPerfEntry => {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       getCLS(onPerfEntry);
//       getFID(onPerfEntry);
//       getFCP(onPerfEntry);
//       getLCP(onPerfEntry);
//       getTTFB(onPerfEntry);
//     });
//   }
// };

export default reportWebVitals;




const reportWebVitals = onPerfEntry =>
 {  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);    getFID(onPerfEntry);
      getFCP(onPerfEntry);      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);    });}};


      //export reportWebVitals
export default reportWebVitals;
