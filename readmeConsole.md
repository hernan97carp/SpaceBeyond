
"file": "cypress run --browser chrome --spec",
// "file": "cypress run --browser electron --reporter cypress-multi-reporters --reporter-options configFile=jsconfig.json --record --key b6bde345-a36c-4fab-ad8c-cddc065d2cba --spec"
npx cypress run --browser chrome

$ npx cypress run --browser chrome --spec cypress/e2e/cucumber-test/stepDefinitions/GherkinTutorial.

o

$ npx cypress run --browser chrome --spec */**/BreadTest.cy.js


con el de abajo me funciono!!!

npm run file */**/Breadcrumb.cy.js