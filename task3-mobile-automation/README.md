# Project Title

task3-mobile-automation

## Description

Jitsu has a driver-facing mobile application that runs on Android. The app includes a Tutorials
feature that guides new drivers through the delivery workflow.

Write an Appium test that performs the following steps:
1. Log in to the app with the credentials below
2. Navigate to the Profile screen and tap Tutorials
3. Verify the Tutorials screen shows three sections: Assigned Route, Direct Booking, and Ticket
Booking
4. Tap Assigned Route
5. Verify the Active Assignment screen appears with the tutorial for the selected section
6. If an Assigned Route tutorial is already active, dismiss it by tapping Start Tutorial, then verify
the tutorial content loads

Test Credentials
Username: auto_244332
Password: Testing1!

## Prerequisites

```
app is install in emulator or mobile
```

## How to run the tests

```
mvn clean install
mvn test
```

## IMPORTANT NOTE

* The framework supports dynamic external test data stored in the data/ folder.

    - Update test data in data/ as needed

## Project Structure

* base/: config driver setup/teardown
* pages/: Each page is represented by a single class that encapsulates both selectors and user actions, following the Page Object Model (POM) design pattern to improve maintainability and reusability
* data/: Stores external test data
* tests/: Contains all automation test scenarios

## Note

* Please update the emulator configuration in data/TestData.java before execution.
* I do not have any experience in mobile automation. Due to time constraints and lack of a physical device, I built this framework following a POM-based structure similar to standard automation frameworks.
* Test execution may fail due to unstable element handling or dynamic UI behavior in the application.