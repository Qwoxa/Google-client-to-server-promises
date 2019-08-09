# Google client-to-server communication (Promises)
This is a wrapping for calling server methods (google.script.run), using Promise-styled code.



## Example
Calling `getRecords` method on a server-side with an argument *drivers*
```javascript
runGoogleScript( 
    'getRecords',
    'drivers'
).then(
    json => {
        const data = JSON.parse( json );
        // handle event..
    },
    err => {
        // handle error..
    }
).catch(
    err => {
        // catch err (if json was invalid)
    }
);
```