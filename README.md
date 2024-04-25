# Mubi user validations

A TypeScript + WebdriverIO + Mocha test script that validates that users are able to perform some of their most common operations on https://mubi.com through the UI. This test automation project implements the Page Object Model (POM) design pattern, dividing the project into page objects (test/pages) and test cases (test/specs). Validations include:

- User is able to add a film to their watchlist and then remove it
- User is able to create a list, add a film to it and then delete it

## Dependencies

In order to run the test cases, you must have NodeJS installed:

- NodeJS: https://nodejs.org/en/learn/getting-started/how-to-install-nodejs

- Once you have NodeJS installed in your machine, you can install the rest of the dependencies by opening a terminal, going to the root project's directory and running: `npm i`

## How to Run

1. Clone the repository and navigate to the project directory.
2. Make sure you have all the dependencies installed.
3. Create an .env file (`touch .env`) in the root project's directory and add the `EMAIL` and `PASSWORD` variables to it, then save it.
4. Run the command `npm run frontend`.
5. The test results should be displayed in the terminal after execution.

## Notes

- You can watch a demo of the tests execution [here](https://vimeo.com/898972143?share=copy).

