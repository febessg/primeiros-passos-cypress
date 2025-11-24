import userData from "../fixtures/users/user-data.json";
import LoginPage from "../pages/loginPage";
import DashbordPage from "../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashbordPage();

describe("Login Orange HRM tests", () => {
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
});
