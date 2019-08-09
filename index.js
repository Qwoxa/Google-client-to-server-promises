/**
 * Calls a function on a server side for google services, giving you a promise.
 * @param {Function} fn Function name you want to call on a server side.
 * @param  {Primitive} args Primitive value(s) to be passed as parameters for the fn.
 * @returns {Object} Promise.
 */
function runGoogleScript(fn, ...args) {
    return new Promise((resolve, reject) => {
         google.script.run
             .withSuccessHandler( (response) => {
                 resolve( response );
              } )
             .withFailureHandler( (err) => {
                 reject( err );
             } )
             [fn]( ...args );
     });
 }