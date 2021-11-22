import { API_URL } from "../js/config.js";
import { getJSON } from "../js/helper.js";

export const state = {
  coffees: [],
  balance: 500,
  takenTotal: 0,
};

const createCoffeesObject = function (data) {
  for (var key in data) {
    state.coffees.push({
      id: key,
      name: data[key].name,
      caffeine: data[key].caffeine,
      serving: data[key].serving,
      available: 0,
      taken: 0,
    });
  }
};

export const updateTaken = function (id, type) {
  if (type === "+") {
    state.coffees.forEach((el) => {
      if (el.id === id && el.available > 0) {
        if (state.takenTotal + el.caffeine * el.serving <= state.balance) {
          el.taken++;
        }
      }
    });
  } else if (type === "-") {
    state.coffees.forEach((el) => {
      if (el.id === id && el.taken > 0) {
        el.taken--;
      }
    });
  }

  var sum = 0;
  state.coffees.forEach((el) => (sum += el.caffeine * el.serving * el.taken));
  state.takenTotal = sum;
  calcAva(state.balance - calcTotal());
};

export const updateBalance = function () {
  state.balance -= state.takenTotal;
  state.takenTotal = 0;

  state.coffees.forEach((el) => (el.taken = 0));
  calcAva(state.balance);
};

export const reset = function () {
  state.balance = 500;
  state.coffees.forEach((el) => {
    el.taken = 0;
  });
  calcAva();
};

const calcTotal = function () {
  var sum = 0;
  state.coffees.forEach((el) => {
    sum += el.caffeine * el.serving * el.taken;
  });
  return sum;
};

const calcAva = function (balance = 500) {
  state.coffees.forEach((el) => {
    el.available = Math.floor(balance / el.caffeine);
  });
};

export const loadCoffees = async function () {
  try {
    //1) loading coffees
    const data = await getJSON(API_URL);
    await createCoffeesObject(data);
    calcAva();
  } catch (err) {
    console.log(err);
  }
};
