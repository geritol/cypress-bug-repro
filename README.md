# Bug reporduction for cypress error (uncaught exception)undefined: undefined

Reproduction steps:  
- run the app via `npm run dev`
- run the tests viw `npm run cypress:open`
- select `repro.spec.cy.js` to run

Got:
- console displays the error properly
- cypress displays `(uncaught exception)undefined: undefined`

Want:
- cypress displays the rejected string properly