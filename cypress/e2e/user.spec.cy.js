import userData from "../fixtures/users/user-data.json";
import LoginPage from "../pages/loginPage";
import DashbordPage from "../pages/dashboardPage";
import MenuPage from "../pages/menuPage";
import MyInfoPage from "../pages/myInfoPage";

const Chance = require("chance");

const loginPage = new LoginPage();
const dashboardPage = new DashbordPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

const chance = new Chance();

function randomDate() {
  const date = chance.date({ year: 2025 });
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const formattedDate = `${year}-${day}-${month}`;

  return formattedDate;
}
const userInfo = {
  firstName: chance.first(),
  lastName: chance.last(),
  empId: chance.bb_pin(),
  otherId: chance.ssn(),
  licenseNumber: chance.ssn(),
  licenseExpiryDate: randomDate(),
  nationality: "Brazilian",
  maritalStatus: "Single",
  dob: randomDate(),
};

describe("Orange HRM tests", () => {
  it("User info update - success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithCredentials(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.accessDashboardPage();
    menuPage.accessMyInfoPage();
    myInfoPage.completeProfile(userInfo);
  });
});
