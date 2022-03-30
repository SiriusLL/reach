import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const role = "seller";
console.log(`Your role is ${role}.`);

const stdlib = loadStdlib(process.env);
console.log(`The consensus network is ${stdlib.connector}.`);
// console.log(`The standard unit is ${stdlib.standardUnit}`);
// console.log(`The atomic unit is ${stdlib.atomicUnit}`);

// const suStr = stdlib.standardUnit;
// const auStr = stdlib.atomicUnit;
// console.log(`The standardunit is ${suStr}`);
// console.log(`The atomic unit is ${auStr}`);

// const suStr = stdlib.standardUnit;
// const auStr = stdlib.atomicUnit;
// const toAU = (su) => stdlib.parseCurrency(su);
// const toSU = (au) => stdlib.formatCurrency(au, 4);
// const suBal = 1000;
// console.log(`Balance is ${suBal} ${suStr}`);
// const auBal = toAU(suBal);
// console.log(`Balance is ${auBal} ${auStr}`);
// console.log(`Balance is ${toSU(auBal)} ${suStr}`);

const suStr = stdlib.standardUnit;
const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);
const iBalance = toAU(1000);
const showBalance = async (acc) =>
  console.log(`Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}.`);

(async () => {
  const commonInteract = {};

  // SELLER
  if (role === "seller") {
    const sellerInteract = { ...commonInteract };

    // const acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
    const acc = await stdlib.newTestAccount(iBalance);
    await showBalance(acc);
    const ctc = acc.contract(backend);
    await backend.Seller(ctc, sellerInteract);
    await showBalance(acc);
  }

  // BUYER
  else {
    const buyerInteract = { ...commonInteract };
  }
})();
