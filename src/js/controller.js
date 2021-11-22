import * as model from "./model.js";
import mobileNavView from "./views/mobileNavView.js";
import mainListView from "./views/mainListView.js";
import sideBarListView from "./views/sideBarListView.js";
import submitBtnView from "./views/submitBtnView.js";
import resetBtnView from "./views/resetBtnView.js";
import balanceView from "./views/balanceView.js";
import takenTotalView from "./views/takenTotalView.js";

const controlMainView = async function () {
  try {
    //1) loading coffees

    await model.loadCoffees();

    //2) render view

    mainListView.render(model.state.coffees);
    sideBarListView.render(model.state.coffees);
  } catch (err) {
    console.log(err);
  }
};

const controlBalanceView = function () {
  balanceView.render(model.state.balance);
};

const controlSubmitBtnView = function () {
  submitBtnView.render();
};

const controlResetBtnView = function () {
  resetBtnView.render();
};

const controlTakenTotalView = function () {
  takenTotalView.render(model.state.takenTotal);
};

const controlMobileNavHandler = function (wrapperEl, headerEl) {
  wrapperEl.classList.toggle("nav-open");
  headerEl.classList.toggle("nav-open");
};

const controlAddHandler = function (id) {
  model.updateTaken(id, "+");
  mainListView.render(model.state.coffees);
  sideBarListView.render(model.state.coffees);
  takenTotalView.render(model.state.takenTotal);
};

const controlMinusHandler = function (id) {
  model.updateTaken(id, "-");
  mainListView.render(model.state.coffees);
  sideBarListView.render(model.state.coffees);
};

const controlResetHandler = function () {
  model.reset();
  mainListView.render(model.state.coffees);
  sideBarListView.render(model.state.coffees);
  balanceView.render(model.state.balance);
  takenTotalView.render(model.state.takenTotal);
};

const controlSubmitHandler = function () {
  model.updateBalance();
  mainListView.render(model.state.coffees);
  sideBarListView.render(model.state.coffees);
  balanceView.render(model.state.balance);
  takenTotalView.render(model.state.takenTotal);
};

const init = async function () {
  await controlMainView();
  sideBarListView.addHandler(controlAddHandler);
  sideBarListView.minusHandler(controlMinusHandler);
  mobileNavView.openCloseHandler(controlMobileNavHandler);
  submitBtnView.submitHandler(controlSubmitHandler);
  resetBtnView.resetHandler(controlResetHandler);

  controlBalanceView();
  controlResetBtnView();
  controlSubmitBtnView();
  controlTakenTotalView();
};

init();
