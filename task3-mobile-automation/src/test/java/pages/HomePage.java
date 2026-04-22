package pages;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.android.AndroidDriver;

public class HomePage {

    AndroidDriver driver;

    public HomePage(AndroidDriver driver) {
        this.driver = driver;
    }

    public void closeOnboardingPopupIfAny() {
        try {
            driver.findElement(AppiumBy.id(
                    "com.axlehire.drive.staging:id/ib_bg_img_onboarding"
            ));

            driver.navigate().back();

        } catch (Exception ignored) {}
    }
}