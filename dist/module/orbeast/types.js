export var AccountProfileTypeEnum;
(function (AccountProfileTypeEnum) {
    AccountProfileTypeEnum["User"] = "User";
    AccountProfileTypeEnum["Scholar"] = "Scholar";
})(AccountProfileTypeEnum || (AccountProfileTypeEnum = {}));
export var AccountProfileStatusEnum;
(function (AccountProfileStatusEnum) {
    AccountProfileStatusEnum["Draft"] = "Draft";
    AccountProfileStatusEnum["Active"] = "Active";
})(AccountProfileStatusEnum || (AccountProfileStatusEnum = {}));
export var OrbeastTypeEnum;
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
})(OrbeastTypeEnum || (OrbeastTypeEnum = {}));
export var OrbeastMovementHitsEnum;
(function (OrbeastMovementHitsEnum) {
    OrbeastMovementHitsEnum[OrbeastMovementHitsEnum["None"] = 0] = "None";
    OrbeastMovementHitsEnum[OrbeastMovementHitsEnum["Self"] = 1] = "Self";
    OrbeastMovementHitsEnum[OrbeastMovementHitsEnum["Target"] = 2] = "Target";
    OrbeastMovementHitsEnum[OrbeastMovementHitsEnum["Enemies"] = 3] = "Enemies";
    OrbeastMovementHitsEnum[OrbeastMovementHitsEnum["Allies"] = 4] = "Allies";
    OrbeastMovementHitsEnum[OrbeastMovementHitsEnum["All"] = 5] = "All";
    OrbeastMovementHitsEnum[OrbeastMovementHitsEnum["Attacker"] = 6] = "Attacker";
})(OrbeastMovementHitsEnum || (OrbeastMovementHitsEnum = {}));
export var OrbeastMovementKindEnum;
(function (OrbeastMovementKindEnum) {
    OrbeastMovementKindEnum[OrbeastMovementKindEnum["Physical"] = 0] = "Physical";
    OrbeastMovementKindEnum[OrbeastMovementKindEnum["Singular"] = 1] = "Singular";
    OrbeastMovementKindEnum[OrbeastMovementKindEnum["Status"] = 2] = "Status";
    OrbeastMovementKindEnum[OrbeastMovementKindEnum["Any"] = 3] = "Any";
})(OrbeastMovementKindEnum || (OrbeastMovementKindEnum = {}));
export var OrbeastMovementStatusEnum;
(function (OrbeastMovementStatusEnum) {
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["None"] = 0] = "None";
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["Burn"] = 1] = "Burn";
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["Frostbite"] = 2] = "Frostbite";
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["Sleepy"] = 3] = "Sleepy";
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["Paralysis"] = 4] = "Paralysis";
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["Corruption"] = 5] = "Corruption";
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["Confusion"] = 6] = "Confusion";
    OrbeastMovementStatusEnum[OrbeastMovementStatusEnum["Any"] = 7] = "Any";
})(OrbeastMovementStatusEnum || (OrbeastMovementStatusEnum = {}));
export var OrbeastMovementEffectEnum;
(function (OrbeastMovementEffectEnum) {
    OrbeastMovementEffectEnum[OrbeastMovementEffectEnum["None"] = 0] = "None";
    OrbeastMovementEffectEnum[OrbeastMovementEffectEnum["Wincing"] = 1] = "Wincing";
})(OrbeastMovementEffectEnum || (OrbeastMovementEffectEnum = {}));
export var OrbeastMovementProbabilityEnum;
(function (OrbeastMovementProbabilityEnum) {
    OrbeastMovementProbabilityEnum[OrbeastMovementProbabilityEnum["Zero"] = 0] = "Zero";
    OrbeastMovementProbabilityEnum[OrbeastMovementProbabilityEnum["OneTwentieth"] = 1] = "OneTwentieth";
    OrbeastMovementProbabilityEnum[OrbeastMovementProbabilityEnum["OneFifth"] = 2] = "OneFifth";
    OrbeastMovementProbabilityEnum[OrbeastMovementProbabilityEnum["OneThird"] = 3] = "OneThird";
    OrbeastMovementProbabilityEnum[OrbeastMovementProbabilityEnum["OneHalf"] = 4] = "OneHalf";
    OrbeastMovementProbabilityEnum[OrbeastMovementProbabilityEnum["One"] = 5] = "One";
})(OrbeastMovementProbabilityEnum || (OrbeastMovementProbabilityEnum = {}));
export var OrbeastMovementTriggerEnum;
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
})(OrbeastMovementTriggerEnum || (OrbeastMovementTriggerEnum = {}));
export var OrbeastMovementStatusRestoreEnum;
(function (OrbeastMovementStatusRestoreEnum) {
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["None"] = 0] = "None";
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["Burn"] = 1] = "Burn";
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["Frostbite"] = 2] = "Frostbite";
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["Sleepy"] = 3] = "Sleepy";
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["Paralysis"] = 4] = "Paralysis";
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["Corruption"] = 5] = "Corruption";
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["Confusion"] = 6] = "Confusion";
    OrbeastMovementStatusRestoreEnum[OrbeastMovementStatusRestoreEnum["Any"] = 7] = "Any";
})(OrbeastMovementStatusRestoreEnum || (OrbeastMovementStatusRestoreEnum = {}));
export var OrbeastMovementStatUsedForDamageEnum;
(function (OrbeastMovementStatUsedForDamageEnum) {
    OrbeastMovementStatUsedForDamageEnum[OrbeastMovementStatUsedForDamageEnum["None"] = 0] = "None";
    OrbeastMovementStatUsedForDamageEnum[OrbeastMovementStatUsedForDamageEnum["HP"] = 1] = "HP";
    OrbeastMovementStatUsedForDamageEnum[OrbeastMovementStatUsedForDamageEnum["ATK"] = 2] = "ATK";
    OrbeastMovementStatUsedForDamageEnum[OrbeastMovementStatUsedForDamageEnum["DEF"] = 3] = "DEF";
    OrbeastMovementStatUsedForDamageEnum[OrbeastMovementStatUsedForDamageEnum["SA"] = 4] = "SA";
    OrbeastMovementStatUsedForDamageEnum[OrbeastMovementStatUsedForDamageEnum["SD"] = 5] = "SD";
    OrbeastMovementStatUsedForDamageEnum[OrbeastMovementStatUsedForDamageEnum["SPE"] = 6] = "SPE";
})(OrbeastMovementStatUsedForDamageEnum || (OrbeastMovementStatUsedForDamageEnum = {}));
export var OrbeastMovementStatRestoreEnum;
(function (OrbeastMovementStatRestoreEnum) {
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["None"] = 0] = "None";
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["HP"] = 1] = "HP";
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["ATK"] = 2] = "ATK";
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["DEF"] = 3] = "DEF";
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["SA"] = 4] = "SA";
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["SD"] = 5] = "SD";
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["SPE"] = 6] = "SPE";
    OrbeastMovementStatRestoreEnum[OrbeastMovementStatRestoreEnum["All"] = 7] = "All";
})(OrbeastMovementStatRestoreEnum || (OrbeastMovementStatRestoreEnum = {}));
export var OrbeastRarityEnum;
(function (OrbeastRarityEnum) {
    OrbeastRarityEnum["Common"] = "Common";
    OrbeastRarityEnum["Rare"] = "Rare";
    OrbeastRarityEnum["Special"] = "Special";
    OrbeastRarityEnum["Legendary"] = "Legendary";
    OrbeastRarityEnum["Mythical"] = "Mythical";
    OrbeastRarityEnum["Arcane"] = "Arcane";
})(OrbeastRarityEnum || (OrbeastRarityEnum = {}));
export var OrbeastCosmicLevelEnum;
(function (OrbeastCosmicLevelEnum) {
    OrbeastCosmicLevelEnum["Alpha"] = "Alpha";
    OrbeastCosmicLevelEnum["Beta"] = "Beta";
    OrbeastCosmicLevelEnum["Gamma"] = "Gamma";
    OrbeastCosmicLevelEnum["Delta"] = "Delta";
    OrbeastCosmicLevelEnum["Omega"] = "Omega";
})(OrbeastCosmicLevelEnum || (OrbeastCosmicLevelEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb3JiZWFzdC90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QkEsTUFBTSxDQUFOLElBQVksc0JBR1g7QUFIRCxXQUFZLHNCQUFzQjtJQUNoQyx1Q0FBYSxDQUFBO0lBQ2IsNkNBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUhXLHNCQUFzQixLQUF0QixzQkFBc0IsUUFHakM7QUFFRCxNQUFNLENBQU4sSUFBWSx3QkFHWDtBQUhELFdBQVksd0JBQXdCO0lBQ2xDLDJDQUFlLENBQUE7SUFDZiw2Q0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSFcsd0JBQXdCLEtBQXhCLHdCQUF3QixRQUduQztBQWlDRCxNQUFNLENBQU4sSUFBWSxlQXFCWDtBQXJCRCxXQUFZLGVBQWU7SUFDekIsb0NBQWlCLENBQUE7SUFDakIsa0NBQWUsQ0FBQTtJQUNmLGdDQUFhLENBQUE7SUFDYixrQ0FBZSxDQUFBO0lBQ2YsMENBQXVCLENBQUE7SUFDdkIsOEJBQVcsQ0FBQTtJQUNYLGtDQUFlLENBQUE7SUFDZix3Q0FBcUIsQ0FBQTtJQUNyQixzQ0FBbUIsQ0FBQTtJQUNuQiw4QkFBVyxDQUFBO0lBQ1gsc0NBQW1CLENBQUE7SUFDbkIsMENBQXVCLENBQUE7SUFDdkIsb0NBQWlCLENBQUE7SUFDakIsc0NBQW1CLENBQUE7SUFDbkIsb0NBQWlCLENBQUE7SUFDakIsa0NBQWUsQ0FBQTtJQUNmLGtDQUFlLENBQUE7SUFDZixnQ0FBYSxDQUFBO0lBQ2Isa0NBQWUsQ0FBQTtJQUNmLGtDQUFlLENBQUE7QUFDakIsQ0FBQyxFQXJCVyxlQUFlLEtBQWYsZUFBZSxRQXFCMUI7QUFFRCxNQUFNLENBQU4sSUFBWSx1QkFRWDtBQVJELFdBQVksdUJBQXVCO0lBQ2pDLHFFQUFJLENBQUE7SUFDSixxRUFBSSxDQUFBO0lBQ0oseUVBQU0sQ0FBQTtJQUNOLDJFQUFPLENBQUE7SUFDUCx5RUFBTSxDQUFBO0lB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