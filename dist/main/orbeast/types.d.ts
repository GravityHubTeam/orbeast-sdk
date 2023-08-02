interface ConfigSettingsOrbeast {
    network: string;
    chainId: number;
    orbeastContractAddress: string;
    superchargerContractAddress: string;
    gvtContractAddress: string;
    lastBlockchainImportedOrbeast: number;
}
interface ConfigSettingsPvp {
    allowIgnoreTime: boolean;
    battleTime: number;
    battleRoundTime: number;
    orbeastReplaceTime: number;
    dualOrbeastReplaceTime: number;
    dailyCapsules: number[];
    maxConsecutiveBattles: number;
}
export interface AppConfig {
    id: number;
    orbeast: ConfigSettingsOrbeast | null;
    pvp: ConfigSettingsPvp | null;
}
export declare enum AccountProfileTypeEnum {
    User = "User",
    Scholar = "Scholar"
}
export declare enum AccountProfileStatusEnum {
    Draft = "Draft",
    Active = "Active"
}
export type AccountProfile = {
    id: number;
    type: AccountProfileTypeEnum;
    status: AccountProfileStatusEnum;
    userAccount: string;
    profileName: string;
    scholarAccount?: string;
    scholarName?: string;
    selectedTeam?: number;
    orbeasts?: number[];
    teams?: number[];
    capsules: number;
    earnedQts: number;
    freeQts: number;
    lockedQts: number;
    sunrocks: number;
    avatar?: string;
};
export type AccountTeam = {
    id: number;
    name: string;
    profile?: number;
    orbeast1?: number;
    orbeast2?: number;
    orbeast3?: number;
    orbeast4?: number;
    orbeast5?: number;
    orbeast6?: number;
};
export declare enum OrbeastTypeEnum {
    Normal = "Normal",
    Water = "Water",
    Fire = "Fire",
    Earth = "Earth",
    Lightning = "Lightning",
    Air = "Air",
    Light = "Light",
    Darkness = "Darkness",
    Fighter = "Fighter",
    Ice = "Ice",
    Burning = "Burning",
    Explosion = "Explosion",
    Atomic = "Atomic",
    Twister = "Twister",
    Magnet = "Magnet",
    Storm = "Storm",
    Plant = "Plant",
    Lava = "Lava",
    Vapor = "Vapor",
    Chaos = "Chaos"
}
export declare enum OrbeastMovementHitsEnum {
    None = 0,
    Self = 1,
    Target = 2,
    Enemies = 3,
    Allies = 4,
    All = 5,
    Attacker = 6
}
export declare enum OrbeastMovementKindEnum {
    Physical = 0,
    Singular = 1,
    Status = 2,
    Any = 3
}
export declare enum OrbeastMovementStatusEnum {
    None = 0,
    Burn = 1,
    Frostbite = 2,
    Sleepy = 3,
    Paralysis = 4,
    Corruption = 5,
    Confusion = 6,
    Any = 7
}
export declare enum OrbeastMovementEffectEnum {
    None = 0,
    Wincing = 1
}
export declare enum OrbeastMovementProbabilityEnum {
    Zero = 0,
    OneTwentieth = 1,
    OneFifth = 2,
    OneThird = 3,
    OneHalf = 4,
    One = 5
}
export declare enum OrbeastMovementTriggerEnum {
    ForUsingTheMove = 0,
    OrbeastOfTheSameType = 1,
    OrbeastOfAnotherType = 2,
    FusionDerivativeTypeOrbeast = 3,
    UponEnteringTheBattlefield = 4,
    IfTheTargetHasStatBoost = 5,
    UsedContinuously = 6,
    IfTheAttackMisses = 7,
    NextTurn = 8,
    IfItIsFusion = 9
}
export declare enum OrbeastMovementStatusRestoreEnum {
    None = 0,
    Burn = 1,
    Frostbite = 2,
    Sleepy = 3,
    Paralysis = 4,
    Corruption = 5,
    Confusion = 6,
    Any = 7
}
export declare enum OrbeastMovementStatUsedForDamageEnum {
    None = 0,
    HP = 1,
    ATK = 2,
    DEF = 3,
    SA = 4,
    SD = 5,
    SPE = 6
}
export declare enum OrbeastMovementStatRestoreEnum {
    None = 0,
    HP = 1,
    ATK = 2,
    DEF = 3,
    SA = 4,
    SD = 5,
    SPE = 6,
    All = 7
}
export declare enum OrbeastRarityEnum {
    Common = "Common",
    Rare = "Rare",
    Special = "Special",
    Legendary = "Legendary",
    Mythical = "Mythical",
    Arcane = "Arcane"
}
export declare enum OrbeastCosmicLevelEnum {
    Alpha = "Alpha",
    Beta = "Beta",
    Gamma = "Gamma",
    Delta = "Delta",
    Omega = "Omega"
}
export {};
