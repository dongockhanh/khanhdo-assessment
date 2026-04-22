package base;

import java.net.URL;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

import data.TestData;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;

public class BaseTest {

    protected AndroidDriver driver;

    @BeforeClass
    public void setUp() throws Exception {

        UiAutomator2Options options = new UiAutomator2Options()
            .setPlatformName("Android")
            .setDeviceName(TestData.EMULATOR)
            .setAutomationName("UiAutomator2")
            .setAppPackage("com.axlehire.drive.staging")
            .setAppActivity("com.axlehire.drive.MainActivity")
            .setAppWaitActivity("*")
            .setDisableWindowAnimation(true)
            .setAutoGrantPermissions(true);

        driver = new AndroidDriver(
                new URL("http://127.0.0.1:4723/"),
                options
        );
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}