"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PvpSeasonTierEnum = exports.PvpSeasonRankEnum = exports.PvpBattleActionTypeEnum = exports.PvpOrbeastMovementStatEnum = exports.PvpMovementTypeEnum = exports.PvpBattleSlotEnum = exports.PvpPlayerSideEnum = exports.PvpBattleOrbeastStateEnum = exports.PvpBattleResultEnum = exports.PvpBattleTypeEnum = void 0;
var PvpBattleTypeEnum;
(function (PvpBattleTypeEnum) {
    PvpBattleTypeEnum["Practice"] = "Practice";
    PvpBattleTypeEnum["Ranked"] = "Ranked";
    PvpBattleTypeEnum["Tournament"] = "Tournament";
    PvpBattleTypeEnum["Challenge"] = "Challenge";
})(PvpBattleTypeEnum || (exports.PvpBattleTypeEnum = PvpBattleTypeEnum = {}));
var PvpBattleResultEnum;
(function (PvpBattleResultEnum) {
    PvpBattleResultEnum["Lose"] = "Lose";
    PvpBattleResultEnum["Tie"] = "Tie";
    PvpBattleResultEnum["Win"] = "Win";
})(PvpBattleResultEnum || (exports.PvpBattleResultEnum = PvpBattleResultEnum = {}));
var PvpBattleOrbeastStateEnum;
(function (PvpBattleOrbeastStateEnum) {
    PvpBattleOrbeastStateEnum["Battle"] = "Battle";
    PvpBattleOrbeastStateEnum["Backup"] = "Backup";
    PvpBattleOrbeastStateEnum["Faint"] = "Faint";
})(PvpBattleOrbeastStateEnum || (exports.PvpBattleOrbeastStateEnum = PvpBattleOrbeastStateEnum = {}));
var PvpPlayerSideEnum;
(function (PvpPlayerSideEnum) {
    PvpPlayerSideEnum["A"] = "A";
    PvpPlayerSideEnum["B"] = "B";
})(PvpPlayerSideEnum || (exports.PvpPlayerSideEnum = PvpPlayerSideEnum = {}));
var PvpBattleSlotEnum;
(function (PvpBattleSlotEnum) {
    PvpBattleSlotEnum["A1"] = "A1";
    PvpBattleSlotEnum["A2"] = "A2";
    PvpBattleSlotEnum["B1"] = "B1";
    PvpBattleSlotEnum["B2"] = "B2";
})(PvpBattleSlotEnum || (exports.PvpBattleSlotEnum = PvpBattleSlotEnum = {}));
var PvpMovementTypeEnum;
(function (PvpMovementTypeEnum) {
    PvpMovementTypeEnum["Move"] = "Move";
    PvpMovementTypeEnum["Item"] = "Item";
    PvpMovementTypeEnum["Change"] = "Change";
    PvpMovementTypeEnum["Run"] = "Run";
})(PvpMovementTypeEnum || (exports.PvpMovementTypeEnum = PvpMovementTypeEnum = {}));
var PvpOrbeastMovementStatEnum;
(function (PvpOrbeastMovementStatEnum) {
    PvpOrbeastMovementStatEnum["HP"] = "HP";
    PvpOrbeastMovementStatEnum["ATK"] = "ATK";
    PvpOrbeastMovementStatEnum["DEF"] = "DEF";
    PvpOrbeastMovementStatEnum["SA"] = "SA";
    PvpOrbeastMovementStatEnum["SD"] = "SD";
    PvpOrbeastMovementStatEnum["SPE"] = "SPE";
})(PvpOrbeastMovementStatEnum || (exports.PvpOrbeastMovementStatEnum = PvpOrbeastMovementStatEnum = {}));
var PvpBattleActionTypeEnum;
(function (PvpBattleActionTypeEnum) {
    PvpBattleActionTypeEnum["EnterBattle"] = "EnterBattle";
    PvpBattleActionTypeEnum["Move"] = "Move";
    PvpBattleActionTypeEnum["Item"] = "Item";
    PvpBattleActionTypeEnum["Change"] = "Change";
    PvpBattleActionTypeEnum["Run"] = "Run";
})(PvpBattleActionTypeEnum || (exports.PvpBattleActionTypeEnum = PvpBattleActionTypeEnum = {}));
var PvpSeasonRankEnum;
(function (PvpSeasonRankEnum) {
    PvpSeasonRankEnum["Trainer"] = "Trainer";
    PvpSeasonRankEnum["Rival"] = "Rival";
    PvpSeasonRankEnum["Challenger"] = "Challenger";
    PvpSeasonRankEnum["Expert"] = "Expert";
    PvpSeasonRankEnum["Elite"] = "Elite";
    PvpSeasonRankEnum["Master"] = "Master";
    PvpSeasonRankEnum["Grandmaster"] = "Grandmaster";
    PvpSeasonRankEnum["Legend"] = "Legend";
    PvpSeasonRankEnum["Myth"] = "Myth";
})(PvpSeasonRankEnum || (exports.PvpSeasonRankEnum = PvpSeasonRankEnum = {}));
var PvpSeasonTierEnum;
(function (PvpSeasonTierEnum) {
    PvpSeasonTierEnum["IV"] = "IV";
    PvpSeasonTierEnum["III"] = "III";
    PvpSeasonTierEnum["II"] = "II";
    PvpSeasonTierEnum["I"] = "I";
})(PvpSeasonTierEnum || (exports.PvpSeasonTierEnum = PvpSeasonTierEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvb3JiZWFzdC9wdnAvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBZUEsSUFBWSxpQkFLWDtBQUxELFdBQVksaUJBQWlCO0lBQzNCLDBDQUFxQixDQUFBO0lBQ3JCLHNDQUFpQixDQUFBO0lBQ2pCLDhDQUF5QixDQUFBO0lBQ3pCLDRDQUF1QixDQUFBO0FBQ3pCLENBQUMsRUFMVyxpQkFBaUIsaUNBQWpCLGlCQUFpQixRQUs1QjtBQUVELElBQVksbUJBSVg7QUFKRCxXQUFZLG1CQUFtQjtJQUM3QixvQ0FBYSxDQUFBO0lBQ2Isa0NBQVcsQ0FBQTtJQUNYLGtDQUFXLENBQUE7QUFDYixDQUFDLEVBSlcsbUJBQW1CLG1DQUFuQixtQkFBbUIsUUFJOUI7QUFFRCxJQUFZLHlCQUlYO0FBSkQsV0FBWSx5QkFBeUI7SUFDbkMsOENBQWlCLENBQUE7SUFDakIsOENBQWlCLENBQUE7SUFDakIsNENBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSlcseUJBQXlCLHlDQUF6Qix5QkFBeUIsUUFJcEM7QUE2QkQsSUFBWSxpQkFHWDtBQUhELFdBQVksaUJBQWlCO0lBQzNCLDRCQUFPLENBQUE7SUFDUCw0QkFBTyxDQUFBO0FBQ1QsQ0FBQyxFQUhXLGlCQUFpQixpQ0FBakIsaUJBQWlCLFFBRzVCO0FBRUQsSUFBWSxpQkFLWDtBQUxELFdBQVksaUJBQWlCO0lBQzNCLDhCQUFTLENBQUE7SUFDVCw4QkFBUyxDQUFBO0lBQ1QsOEJBQVMsQ0FBQTtJQUNULDhCQUFTLENBQUE7QUFDWCxDQUFDLEVBTFcsaUJBQWlCLGlDQUFqQixpQkFBaUIsUUFLNUI7QUFFRCxJQUFZLG1CQUtYO0FBTEQsV0FBWSxtQkFBbUI7SUFDN0Isb0NBQWEsQ0FBQTtJQUNiLG9DQUFhLENBQUE7SUFDYix3Q0FBaUIsQ0FBQTtJQUNqQixrQ0FBVyxDQUFBO0FBQ2IsQ0FBQyxFQUxXLG1CQUFtQixtQ0FBbkIsbUJBQW1CLFFBSzlCO0FBRUQsSUFBWSwwQkFPWDtBQVBELFdBQVksMEJBQTBCO0lBQ3BDLHVDQUFTLENBQUE7SUFDVCx5Q0FBVyxDQUFBO0lBQ1gseUNBQVcsQ0FBQTtJQUNYLHVDQUFTLENBQUE7SUFDVCx1Q0FBUyxDQUFBO0lBQ1QseUNBQVcsQ0FBQTtBQUNiLENBQUMsRUFQVywwQkFBMEIsMENBQTFCLDBCQUEwQixRQU9yQztBQTBCRCxJQUFZLHVCQU1YO0FBTkQsV0FBWSx1QkFBdUI7SUFDakMsc0RBQTJCLENBQUE7SUFDM0Isd0NBQWEsQ0FBQTtJQUNiLHdDQUFhLENBQUE7SUFDYiw0Q0FBaUIsQ0FBQTtJQUNqQixzQ0FBVyxDQUFBO0FBQ2IsQ0FBQyxFQU5XLHVCQUF1Qix1Q0FBdkIsdUJBQXVCLFFBTWxDO0FBNEZELElBQVksaUJBVVg7QUFWRCxXQUFZLGlCQUFpQjtJQUMzQix3Q0FBbUIsQ0FBQTtJQUNuQixvQ0FBZSxDQUFBO0lBQ2YsOENBQXlCLENBQUE7SUFDekIsc0NBQWlCLENBQUE7SUFDakIsb0NBQWUsQ0FBQTtJQUNmLHNDQUFpQixDQUFBO0lBQ2pCLGdEQUEyQixDQUFBO0lBQzNCLHNDQUFpQixDQUFBO0lBQ2pCLGtDQUFhLENBQUE7QUFDZixDQUFDLEVBVlcsaUJBQWlCLGlDQUFqQixpQkFBaUIsUUFVNUI7QUFFRCxJQUFZLGlCQUtYO0FBTEQsV0FBWSxpQkFBaUI7SUFDM0IsOEJBQVMsQ0FBQTtJQUNULGdDQUFXLENBQUE7SUFDWCw4QkFBUyxDQUFBO0lBQ1QsNEJBQU8sQ0FBQTtBQUNULENBQUMsRUFMVyxpQkFBaUIsaUNBQWpCLGlCQUFpQixRQUs1QiJ9