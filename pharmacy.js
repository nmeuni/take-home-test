import { updateDrugs } from "./lib/drugsUpdater";

const MIN_BENEFIT = 0;
const MAX_BENEFIT = 50;

export const ERROR_DRUG_INSTANTIATION = "Error while creating a new drug: Bad params"
export class Drug {

  
  constructor(name, expiresIn, benefit) {
    if (typeof name !== "string" ||
    typeof expiresIn !== "number" ||
    typeof benefit !== "number") {
      throw new Error(ERROR_DRUG_INSTANTIATION)
    }
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

    dicreaseExpiresInByOne() {
      this.expiresIn -= 1;
    }

    dicreaseBenefitBy(n) {
      this.benefit = Math.max(this.benefit - n, MIN_BENEFIT);
    }

    increaseBenefitBy(n) {
      this.benefit = Math.min(this.benefit + n, MAX_BENEFIT)
    }



}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach(updateDrugs)

    // for (var i = 0; i < this.drugs.length; i++) {
    //   if (
    //     this.drugs[i].name != "Herbal Tea" &&
    //     this.drugs[i].name != "Fervex"
    //   ) {
    //     if (this.drugs[i].benefit > 0) {
    //       if (this.drugs[i].name != "Magic Pill") {
    //         this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //       }
    //     }
    //   } else {
    //     if (this.drugs[i].benefit < 50) {
    //       this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //       if (this.drugs[i].name == "Fervex") {
    //         if (this.drugs[i].expiresIn < 11) {
    //           if (this.drugs[i].benefit < 50) {
    //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //           }
    //         }
    //         if (this.drugs[i].expiresIn < 6) {
    //           if (this.drugs[i].benefit < 50) {
    //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.drugs[i].name != "Magic Pill") {
    //     this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
    //   }
    //   if (this.drugs[i].expiresIn < 0) {
    //     if (this.drugs[i].name != "Herbal Tea") {
    //       if (this.drugs[i].name != "Fervex") {
    //         if (this.drugs[i].benefit > 0) {
    //           if (this.drugs[i].name != "Magic Pill") {
    //             this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //           }
    //         }
    //       } else {
    //         this.drugs[i].benefit =
    //           this.drugs[i].benefit - this.drugs[i].benefit;
    //       }
    //     } else {
    //       if (this.drugs[i].benefit < 50) {
    //         this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //       }
    //     }
    //   }
    // }

    return this.drugs;
  }
}
