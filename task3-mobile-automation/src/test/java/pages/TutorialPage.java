package pages;

import org.testng.Assert;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.android.AndroidDriver;

public class TutorialPage {

    AndroidDriver driver;

    public TutorialPage(AndroidDriver driver) {
        this.driver = driver;
    }

    public void verifySections() {
        Assert.assertTrue(isDisplayed("Assigned Route"));
        Assert.assertTrue(isDisplayed("Direct Booking"));
        Assert.assertTrue(isDisplayed("Ticket Booking"));
    }

    public void openAssignedRoute() {
        driver.findElement(AppiumBy.accessibilityId("Assigned Route")).click();
    }

    public void verifyActiveAssignment() {
        Assert.assertTrue(
                driver.findElement(AppiumBy.accessibilityId("Active Assignment")).isDisplayed()
        );
    }

    public void startTutorial() {
        driver.findElement(AppiumBy.accessibilityId("Start Tutorial")).click();
    }

    private boolean isDisplayed(String text) {
        return driver.findElement(
                AppiumBy.xpath("//android.view.View[@content-desc='" + text + "']")
        ).isDisplayed();
    }
}