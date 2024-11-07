const Dragon = require('./dragon');

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis) {
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner() {
        this.evilDoings.forEach((evilDoing) => {
            console.log(`${this.name} will ${evilDoing}`);
        });
    }

    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }
}

const enderDragon = new EvilDragon(
    "Ender Dragon",
    "black", [
      "spit a fireball at Steve",
      "rule over all the Endermen",
      "destroy all blocks in its way"
    ],
    "Steve"
  );
  console.log(enderDragon);
  enderDragon.dontInviteThemOverForDinner();
  console.log(enderDragon.breathesFire());
  console.log(enderDragon.burnsNemesis());

// const drogon = new EvilDragon(
//     "Drogon",
//     "black-red",
//     [
//         "eat all your livestock",
//         "burn down your castle in Westeros",
//         "burn the chicks",
//     ],
//     "Night King"
// );

// console.log(drogon.nemesis);
// drogon.dontInviteThemOverForDinner();
// console.log(drogon.breathesFire());
// console.log(drogon.burnsNemesis());


//************************************************************************** */
module.exports = EvilDragon;
// try {
//     module.exports = Dragon;
// } catch {
//     module.exports = null;
// }