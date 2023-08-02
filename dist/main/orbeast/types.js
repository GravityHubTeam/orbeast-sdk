"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrbeastCosmicLevelEnum = exports.OrbeastRarityEnum = exports.OrbeastMovementStatRestoreEnum = exports.OrbeastMovementStatUsedForDamageEnum = exports.OrbeastMovementStatusRestoreEnum = exports.OrbeastMovementTriggerEnum = exports.OrbeastMovementProbabilityEnum = exports.OrbeastMovementEffectEnum = exports.OrbeastMovementStatusEnum = exports.OrbeastMovementKindEnum = exports.OrbeastMovementHitsEnum = exports.OrbeastTypeEnum = exports.AccountProfileStatusEnum = exports.AccountProfileTypeEnum = void 0;
var AccountProfileTypeEnum;
(function (AccountProfileTypeEnum) {
    AccountProfileTypeEnum["User"] = "User";
    AccountProfileTypeEnum["Scholar"] = "Scholar";
})(AccountProfileTypeEnum || (exports.AccountProfileTypeEnum = AccountProfileTypeEnum = {}));
var AccountProfileStatusEnum;
(function (AccountProfileStatusEnum) {
    AccountProfileStatusEnum["Draft"] = "Draft";
    AccountProfileStatusEnum["Active"] = "Active";
})(AccountProfileStatusEnum || (exports.AccountProfileStatusEnum = AccountProfileStatusEnum = {}));
var OrbeastTypeEnum;
(function (OrbeastTypeEnum) {
    OrbeastTypeEnum["Normal"] = "Normal";
    OrbeastTypeEnum["Water"] = "Water";
    OrbeastTypeEnum["Fire"] = "Fire";
    OrbeastTypeEnum["Earth"] = "Earth";
    OrbeastTypeEnum["Lightning"] = "Lightning";
    OrbeastTypeEnum["Air"] = "Air";
    OrbeastTypeEnum["Light"] = "Light";
    OrbeastTypeEnum["Darkness"] = "Darkness";
    OrbeastTypeEnum["Fighter"] = "Fighter";
    OrbeastTypeEnum["Ice"] = "Ice";
    OrbeastTypeEnum["Burning"] = "Burning";
    OrbeastTypeEnum["Explosion"] = "Explosion";
    OrbeastTypeEnum["Atomic"] = "Atomic";
    OrbeastTypeEnum["Twister"] = "Twister";
    OrbeastTypeEnum["Magnet"] = "Magnet";
    OrbeastTypeEnum["Storm"] = "Storm";
    OrbeastTypeEnum["Plant"] = "Plant";
    OrbeastTypeEnum["Lava"] = "Lava";
    OrbeastTypeEnum["Vapor"] = "Vapor";
    OrbeastTypeEnum["Chaos"] = "Chaos";
})(OrbeastTypeEnum || (exports.OrbeastTypeEnum = OrbeastTypeEnum = {}));
var OrbeastMovementHitsEnum;
(function (OrbeastMovementHitsEnum) {
    OrbeastMovementHitsEnum[OrbeastMovementHitsEnum["None"] = 0] = "None";
    OrbeastMovementHitsEnum[OrbeastMovementHitsEnum["Self"] = 1] = "Self";
    OrbeastMovementHitsEnum[OrbeastMovementHitsEnum["Target"] = 2] = "Target";
    OrbeastMovementHitsEnum[OrbeastMovementHitsEnum["Enemies"] = 3] = "Enemies";
    OrbeastMovementHitsEnum[OrbeastMovementHitsEnum["Allies"] = 4] = "Allies";
    OrbeastMovementHitsEnum[OrbeastMovementHitsEnum["All"] = 5] = "All";
    OrbeastMovementHitsEnum[OrbeastMovementHitsEnum["Attacker"] = 6] = "Attacker";
})(OrbeastMovementHitsEnum || (exports.OrbeastMovementHitsEnum = OrbeastMovementHitsEnum = {}));
var OrbeastMovementKindEnum;
(function (OrbeastMovementKindEnum) {
    OrbeastMovementKindEnum[OrbeastMovementKindEnum["Physical"] = 0] = "Physical";
    OrbeastMovementKindEnum[OrbeastMovementKindEnum["Singular"] = 1] = "Singular";
    OrbeastMovementKindEnum[OrbeastMovementKindEnum["Status"] = 2] = "Status";
    OrbeastMovementKindEnum[OrbeastMovementKindEnum["Any"] = 3] = "Any";
})(OrbeastMovementKindEnum || (exports.OrbeastMovementKindEnum = OrbeastMovementKindEnum = {}));
var OrbeastMovementStatusEnum;
(function (OrbeastMovementStatusEnum) {
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["None"] = 0] = "None";
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["Burn"] = 1] = "Burn";
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["Frostbite"] = 2] = "Frostbite";
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["Sleepy"] = 3] = "Sleepy";
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["Paralysis"] = 4] = "Paralysis";
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["Corruption"] = 5] = "Corruption";
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["Confusion"] = 6] = "Confusion";
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["Any"] = 7] = "Any";
})(OrbeastMovementStatusEnum || (exports.OrbeastMovementStatusEnum = OrbeastMovementStatusEnum = {}));
var OrbeastMovementEffectEnum;
(function (OrbeastMovementEffectEnum) {
    OrbeastMovementEffectEnum[OrbeastMovementEffectEnum["None"] = 0] = "None";
    OrbeastMovementEffectEnum[OrbeastMovementEffectEnum["Wincing"] = 1] = "Wincing";
})(OrbeastMovementEffectEnum || (exports.OrbeastMovementEffectEnum = OrbeastMovementEffectEnum = {}));
var OrbeastMovementProbabilityEnum;
(function (OrbeastMovementProbabilityEnum) {
    OrbeastMovementProbabilityEnum[OrbeastMovementProbabilityEnum["Zero"] = 0] = "Zero";
    OrbeastMovementProbabilityEnum[OrbeastMovementProbabilityEnum["OneTwentieth"] = 1] = "OneTwentieth";
    OrbeastMovementProbabilityEnum[OrbeastMovementProbabilityEnum["OneFifth"] = 2] = "OneFifth";
    OrbeastMovementProbabilityEnum[OrbeastMovementProbabilityEnum["OneThird"] = 3] = "OneThird";
    OrbeastMovementProbabilityEnum[OrbeastMovementProbabilityEnum["OneHalf"] = 4] = "OneHalf";
    OrbeastMovementProbabilityEnum[OrbeastMovementProbabilityEnum["One"] = 5] = "One";
})(OrbeastMovementProbabilityEnum || (exports.OrbeastMovementProbabilityEnum = OrbeastMovementProbabilityEnum = {}));
var OrbeastMovementTriggerEnum;
(function (OrbeastMovementTriggerEnum) {
    OrbeastMovementTriggerEnum[OrbeastMovementTriggerEnum["ForUsingTheMove"] = 0] = "ForUsingTheMove";
    OrbeastMovementTriggerEnum[OrbeastMovementTriggerEnum["OrbeastOfTheSameType"] = 1] = "OrbeastOfTheSameType";
    OrbeastMovementTriggerEnum[OrbeastMovementTriggerEnum["OrbeastOfAnotherType"] = 2] = "OrbeastOfAnotherType";
    OrbeastMovementTriggerEnum[OrbeastMovementTriggerEnum["FusionDerivativeTypeOrbeast"] = 3] = "FusionDerivativeTypeOrbeast";
    OrbeastMovementTriggerEnum[OrbeastMovementTriggerEnum["UponEnteringTheBattlefield"] = 4] = "UponEnteringTheBattlefield";
    OrbeastMovementTriggerEnum[OrbeastMovementTriggerEnum["IfTheTargetHasStatBoost"] = 5] = "IfTheTargetHasStatBoost";
    OrbeastMovementTriggerEnum[OrbeastMovementTriggerEnum["UsedContinuously"] = 6] = "UsedContinuously";
    OrbeastMovementTriggerEnum[OrbeastMovementTriggerEnum["IfTheAttackMisses"] = 7] = "IfTheAttackMisses";
    OrbeastMovementTriggerEnum[OrbeastMovementTriggerEnum["NextTurn"] = 8] = "NextTurn";
    OrbeastMovementTriggerEnum[OrbeastMovementTriggerEnum["IfItIsFusion"] = 9] = "IfItIsFusion";
})(OrbeastMovementTriggerEnum || (exports.OrbeastMovementTriggerEnum = OrbeastMovementTriggerEnum = {}));
var OrbeastMovementStatusRestoreEnum;
(function (OrbeastMovementStatusRestoreEnum) {
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["None"] = 0] = "None";
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["Burn"] = 1] = "Burn";
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["Frostbite"] = 2] = "Frostbite";
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["Sleepy"] = 3] = "Sleepy";
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["Paralysis"] = 4] = "Paralysis";
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["Corruption"] = 5] = "Corruption";
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["Confusion"] = 6] = "Confusion";
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["Any"] = 7] = "Any";
})(OrbeastMovementStatusRestoreEnum || (exports.OrbeastMovementStatusRestoreEnum = OrbeastMovementStatusRestoreEnum = {}));
var OrbeastMovementStatUsedForDamageEnum;
(function (OrbeastMovementStatUsedForDamageEnum) {
    OrbeastMovementStatUsedForDamageEnum[OrbeastMovementStatUsedForDamageEnum["None"] = 0] = "None";
    OrbeastMovementStatUsedForDamageEnum[OrbeastMovementStatUsedForDamageEnum["HP"] = 1] = "HP";
    OrbeastMovementStatUsedForDamageEnum[OrbeastMovementStatUsedForDamageEnum["ATK"] = 2] = "ATK";
    OrbeastMovementStatUsedForDamageEnum[OrbeastMovementStatUsedForDamageEnum["DEF"] = 3] = "DEF";
    OrbeastMovementStatUsedForDamageEnum[OrbeastMovementStatUsedForDamageEnum["SA"] = 4] = "SA";
    OrbeastMovementStatUsedForDamageEnum[OrbeastMovementStatUsedForDamageEnum["SD"] = 5] = "SD";
    OrbeastMovementStatUsedForDamageEnum[OrbeastMovementStatUsedForDamageEnum["SPE"] = 6] = "SPE";
})(OrbeastMovementStatUsedForDamageEnum || (exports.OrbeastMovementStatUsedForDamageEnum = OrbeastMovementStatUsedForDamageEnum = {}));
var OrbeastMovementStatRestoreEnum;
(function (OrbeastMovementStatRestoreEnum) {
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["None"] = 0] = "None";
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["HP"] = 1] = "HP";
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["ATK"] = 2] = "ATK";
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["DEF"] = 3] = "DEF";
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["SA"] = 4] = "SA";
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["SD"] = 5] = "SD";
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["SPE"] = 6] = "SPE";
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["All"] = 7] = "All";
})(OrbeastMovementStatRestoreEnum || (exports.OrbeastMovementStatRestoreEnum = OrbeastMovementStatRestoreEnum = {}));
var OrbeastRarityEnum;
(function (OrbeastRarityEnum) {
    OrbeastRarityEnum["Common"] = "Common";
    OrbeastRarityEnum["Rare"] = "Rare";
    OrbeastRarityEnum["Special"] = "Special";
    OrbeastRarityEnum["Legendary"] = "Legendary";
    OrbeastRarityEnum["Mythical"] = "Mythical";
    OrbeastRarityEnum["Arcane"] = "Arcane";
})(OrbeastRarityEnum || (exports.OrbeastRarityEnum = OrbeastRarityEnum = {}));
var OrbeastCosmicLevelEnum;
(function (OrbeastCosmicLevelEnum) {
    OrbeastCosmicLevelEnum["Alpha"] = "Alpha";
    OrbeastCosmicLevelEnum["Beta"] = "Beta";
    OrbeastCosmicLevelEnum["Gamma"] = "Gamma";
    OrbeastCosmicLevelEnum["Delta"] = "Delta";
    OrbeastCosmicLevelEnum["Omega"] = "Omega";
})(OrbeastCosmicLevelEnum || (exports.OrbeastCosmicLevelEnum = OrbeastCosmicLevelEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb3JiZWFzdC90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUF5QkEsSUFBWSxzQkFHWDtBQUhELFdBQVksc0JBQXNCO0lBQ2hDLHVDQUFhLENBQUE7SUFDYiw2Q0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsc0JBQXNCLHNDQUF0QixzQkFBc0IsUUFHakM7QUFFRCxJQUFZLHdCQUdYO0FBSEQsV0FBWSx3QkFBd0I7SUFDbEMsMkNBQWUsQ0FBQTtJQUNmLDZDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyx3QkFBd0Isd0NBQXhCLHdCQUF3QixRQUduQztBQWlDRCxJQUFZLGVBcUJYO0FBckJELFdBQVksZUFBZTtJQUN6QixvQ0FBaUIsQ0FBQTtJQUNqQixrQ0FBZSxDQUFBO0lBQ2YsZ0NBQWEsQ0FBQTtJQUNiLGtDQUFlLENBQUE7SUFDZiwwQ0FBdUIsQ0FBQTtJQUN2Qiw4QkFBVyxDQUFBO0lBQ1gsa0NBQWUsQ0FBQTtJQUNmLHdDQUFxQixDQUFBO0lBQ3JCLHNDQUFtQixDQUFBO0lBQ25CLDhCQUFXLENBQUE7SUFDWCxzQ0FBbUIsQ0FBQTtJQUNuQiwwQ0FBdUIsQ0FBQTtJQUN2QixvQ0FBaUIsQ0FBQTtJQUNqQixzQ0FBbUIsQ0FBQTtJQUNuQixvQ0FBaUIsQ0FBQTtJQUNqQixrQ0FBZSxDQUFBO0lBQ2Ysa0NBQWUsQ0FBQTtJQUNmLGdDQUFhLENBQUE7SUFDYixrQ0FBZSxDQUFBO0lBQ2Ysa0NBQWUsQ0FBQTtBQUNqQixDQUFDLEVBckJXLGVBQWUsK0JBQWYsZUFBZSxRQXFCMUI7QUFFRCxJQUFZLHVCQVFYO0FBUkQsV0FBWSx1QkFBdUI7SUFDakMscUVBQUksQ0FBQTtJQUNKLHFFQUFJLENBQUE7SUFDSix5RUFBTSxDQUFBO0lBQ04sMkVBQU8sQ0FBQTtJQUNQLHlFQUFNLENBQUE7SUFDTixtRUFBRyxDQUFBO0lBQ0gsNkVBQVEsQ0FBQTtBQUNW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