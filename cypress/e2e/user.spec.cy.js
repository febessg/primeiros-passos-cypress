import userData from "../fixtures/users/user-data.json";
import LoginPage from "../pages/loginPage";
import DashbordPage from "../pages/dashboardPage";
import MenuPage from "../pages/menuPage";
import MyInfoPage from "../pages/myInfoPage";

const loginPage = new LoginPage();
const dashboardPage = new DashbordPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe("Orange HRM tests", () => {
  it("Login - success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithCredentials(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.accessDashboardPage();
  });
  it("Login - failed", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithWrongCredentials(
      userData.userFailed.username,
      userData.userFailed.password
    );
  });
  it("User info update - success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithCredentials(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.accessDashboardPage();
    menuPage.accessMyInfoPage();
    myInfoPage.completeProfile(userData.userPersonalDetails);
  });
});
