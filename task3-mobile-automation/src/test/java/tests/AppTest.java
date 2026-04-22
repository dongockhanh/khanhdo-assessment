package tests;

import org.testng.annotations.Test;

import base.BaseTest;
import data.TestData;
import pages.HomePage;
import pages.LoginPage;
import pages.ProfilePage;
import pages.TutorialPage;

public class AppTest extends BaseTest {

    @Test
    public void tutorialFlowTest() {

        LoginPage login = new LoginPage(driver);
        HomePage home = new HomePage(driver);
        ProfilePage profile = new ProfilePage(driver);
        TutorialPage tutorial = new TutorialPage(driver);

        home.closeOnboardingPopupIfAny();

        login.login(TestData.USERNAME, TestData.PASSWORD);

        home.closeOnboardingPopupIfAny();

        profile.openProfile();
        profile.openTutorials();

        tutorial.verifySections();
        tutorial.openAssignedRoute();
        tutorial.verifyActiveAssignment();
        tutorial.startTutorial();
    }
}