package pages;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.android.AndroidDriver;

public class ProfilePage {

    AndroidDriver driver;

    public ProfilePage(AndroidDriver driver) {
        this.driver = driver;
    }

    public void openProfile() {
        driver.findElement(
                AppiumBy.xpath("//android.widget.ImageView[@content-desc='Profile Tab 5 of 5']")
        ).click();
    }

    public void openTutorials() {
        driver.findElement(AppiumBy.androidUIAutomator(
                "new UiScrollable(new UiSelector().scrollable(true))" +
                        ".scrollIntoView(new UiSelector().description(\"Tutorials\"))"
        )).click();
    }
}