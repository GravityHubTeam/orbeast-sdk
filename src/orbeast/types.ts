interface ConfigSettingsOrbeast {
  network: string
  chainId: number
  orbeastContractAddress: string
  superchargerContractAddress: string
  gvtContractAddress: string
  lastBlockchainImportedOrbeast: number
}

interface ConfigSettingsPvp {
  allowIgnoreTime: boolean
  battleTime: number
  battleRoundTime: number
  orbeastReplaceTime: number
  dualOrbeastReplaceTime: number
  dailyCapsules: number[]
  maxConsecutiveBattles: number
}

export interface AppConfig {
  id: number
  orbeast: ConfigSettingsOrbeast | null
  pvp: ConfigSettingsPvp | null
}

export enum AccountProfileTypeEnum {
  User = 'User',
  Scholar = 'Scholar',
}

export enum AccountProfileStatusEnum {
  Draft = 'Draft',
  Active = 'Active',
}

export type AccountProfile = {
  id: number
  type: AccountProfileTypeEnum
  status: AccountProfileStatusEnum
  userAccount: string
  profileName: string
  scholarAccount?: string
  scholarName?: string
  selectedTeam?: number
  orbeasts?: number[]
  teams?: number[]
  capsules: number
  earnedQts: number
  freeQts: number
  lockedQts: number
  sunrocks: number
  avatar?: string
}

export type AccountTeam = {
  id: number
  name: string
  profile?: number
  orbeast1?: number
  orbeast2?: number
  orbeast3?: number
  orbeast4?: number
  orbeast5?: number
  orbeast6?: number
}

export enum OrbeastTypeEnum {
  Normal = 'Normal',
  Water = 'Water',
  Fire = 'Fire',
  Earth = 'Earth',
  Lightning = 'Lightning',
  Air = 'Air',
  Light = 'Light',
  Darkness = 'Darkness',
  Fighter = 'Fighter',
  Ice = 'Ice',
  Burning = 'Burning',
  Explosion = 'Explosion',
  Atomic = 'Atomic',
  Twister = 'Twister',
  Magnet = 'Magnet',
  Storm = 'Storm',
  Plant = 'Plant',
  Lava = 'Lava',
  Vapor = 'Vapor',
  Chaos = 'Chaos',
}

export enum OrbeastMovementHitsEnum {
  None,
  Self,
  Target,
  Enemies,
  Allies,
  All,
  Attacker,
}

export enum OrbeastMovementKindEnum {
  Physical,
  Singular,
  Status,
  Any,
}

export enum OrbeastMovementStatusEnum {
  None,
  Burn,
  Frostbite,
  Sleepy,
  Paralysis,
  Corruption,
  Confusion,
  Any,
}

export enum OrbeastMovementEffectEnum {
  None,
  Wincing,
}

export enum OrbeastMovementProbabilityEnum {
  Zero,
  OneTwentieth,
  OneFifth,
  OneThird,
  OneHalf,
  One,
}

export enum OrbeastMovementTriggerEnum {
  ForUsingTheMove,
  OrbeastOfTheSameType,
  OrbeastOfAnotherType,
  FusionDerivativeTypeOrbeast,
  UponEnteringTheBattlefield,
  IfTheTargetHasStatBoost,
  UsedContinuously,
  IfTheAttackMisses,
  NextTurn,
  IfItIsFusion,
}

export enum OrbeastMovementStatusRestoreEnum {
  None,
  Burn,
  Frostbite,
  Sleepy,
  Paralysis,
  Corruption,
  Confusion,
  Any,
}

export enum OrbeastMovementStatUsedForDamageEnum {
  None,
  HP,
  ATK,
  DEF,
  SA,
  SD,
  SPE,
}

export enum OrbeastMovementStatRestoreEnum {
  None,
  HP,
  ATK,
  DEF,
  SA,
  SD,
  SPE,
  All,
}

export enum OrbeastRarityEnum {
  Common = 'Common',
  Rare = 'Rare',
  Special = 'Special',
  Legendary = 'Legendary',
  Mythical = 'Mythical',
  Arcane = 'Arcane',
}

export enum OrbeastCosmicLevelEnum {
  Alpha = 'Alpha',
  Beta = 'Beta',
  Gamma = 'Gamma',
  Delta = 'Delta',
  Omega = 'Omega',
}
