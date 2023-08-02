import { AccountProfileTypeEnum } from '../types'
import {
  OrbeastMovementEffectEnum,
  OrbeastMovementHitsEnum,
  OrbeastMovementKindEnum,
  OrbeastMovementProbabilityEnum,
  OrbeastMovementStatRestoreEnum,
  OrbeastMovementStatUsedForDamageEnum,
  OrbeastMovementStatusEnum,
  OrbeastMovementStatusRestoreEnum,
  OrbeastMovementTriggerEnum,
  OrbeastTypeEnum,
} from '../types'

export enum PvpBattleTypeEnum {
  Practice = 'Practice',
  Ranked = 'Ranked',
  Tournament = 'Tournament',
  Challenge = 'Challenge',
}

export enum PvpBattleResultEnum {
  Lose = 'Lose',
  Tie = 'Tie',
  Win = 'Win',
}

export enum PvpBattleOrbeastStateEnum {
  Battle = 'Battle',
  Backup = 'Backup',
  Faint = 'Faint',
}

export type PvpBattleSetup = {
  profile: {
    a: PvpPlayerProfile
    b: PvpPlayerProfile
  }
  orbeast: {
    [key: string]: PvpOrbeast
  }
  movement: {
    [key: string]: PvpMovement
  }
  item: {
    [key: string]: PvpItem
  }
}

export type PvpBattleRoundPlayerState = {
  usedOrbeasts: number[]
  faintOrbeasts: number[]
  orbeast1: PvpOrbeastState
  orbeast2: PvpOrbeastState
  orbeast3: PvpOrbeastState
  orbeast4: PvpOrbeastState
  orbeast5: PvpOrbeastState | null
  orbeast6: PvpOrbeastState | null
}

export enum PvpPlayerSideEnum {
  A = 'A',
  B = 'B',
}

export enum PvpBattleSlotEnum {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
}

export enum PvpMovementTypeEnum {
  Move = 'Move',
  Item = 'Item',
  Change = 'Change',
  Run = 'Run',
}

export enum PvpOrbeastMovementStatEnum {
  HP = 'HP',
  ATK = 'ATK',
  DEF = 'DEF',
  SA = 'SA',
  SD = 'SD',
  SPE = 'SPE',
}

export type PvpBattleRoundPlayerMove = {
  origin?: PvpBattleSlotEnum
  type: PvpMovementTypeEnum
  orbeast?: number
  move?: number
  target?: PvpBattleSlotEnum
  item?: number
}

export type PvpBattleRoundPlayerMoves = {
  auto: boolean
  moves: PvpBattleRoundPlayerMove[]
}

export type PvpBattleRoundPlayerReplace = {
  orbeast?: number
  slot?: PvpBattleSlotEnum
}

export type PvpBattleRoundPlayerReplaces = {
  auto: boolean
  replaces: PvpBattleRoundPlayerReplace[]
}

export enum PvpBattleActionTypeEnum {
  EnterBattle = 'EnterBattle',
  Move = 'Move',
  Item = 'Item',
  Change = 'Change',
  Run = 'Run',
}

export type PvpBattleAction = {
  origin: PvpBattleSlotEnum
  type: PvpBattleActionTypeEnum
  orbeast?: number | null // only for type=Change
  move?: number | null // only for type=Move
  statChanges?: PvpBattleActionStatChange[]
  // effects?: any
  // status?: any
  // statModifiers?: any
}

export type PvpBattleActionStatChange = {
  target: PvpBattleSlotEnum
  stat: PvpOrbeastMovementStatEnum
  value: number
}

// Container for all the data needed to calculate the round (excluding Battle setup)
export type PvpBattleRoundData = {
  temp: {
    // data that is not saved in the DB
    board: {
      [key: string]: number
    }
    roundMoves: PvpBattleRoundPlayerMove[]
    prevResultA: PvpBattleRoundPlayerState
    prevResultB: PvpBattleRoundPlayerState
    battleResult: null
  }
  // BattleRound fields (full typed)
  battleId: number
  num: number
  hash: string
  startDateTime: Date
  movesA: PvpBattleRoundPlayerMoves
  movesB: PvpBattleRoundPlayerMoves
  replacesA: PvpBattleRoundPlayerReplaces
  replacesB: PvpBattleRoundPlayerReplaces
  actions: PvpBattleAction[]
  resultA: PvpBattleRoundPlayerState
  resultB: PvpBattleRoundPlayerState
}

export type PvpBattleMoveResult = {
  actions: PvpBattleAction[]
  resultA: PvpBattleRoundPlayerState
  resultB: PvpBattleRoundPlayerState
  battleResult: null
}

export type PvpBattleRoundCreateData = {
  ignoreTime?: boolean
  battleId: number
  movesA: PvpBattleRoundPlayerMove[]
  movesB: PvpBattleRoundPlayerMove[]
}

export type PvpBattleRoundReplaceOrbeastData = {
  ignoreTime?: boolean
  battleId: number
  replacesA: PvpBattleRoundPlayerReplace[]
  replacesB: PvpBattleRoundPlayerReplace[]
}

type PvpOrbeastState = {
  id: number
  slot: PvpBattleSlotEnum | null
  state: PvpBattleOrbeastStateEnum
  hp: number
  hpStage: number
  atk: number
  atkStage: number
  def: number
  defStage: number
  sa: number
  saStage: number
  sd: number
  sdStage: number
  spe: number
  speStage: number
  effects: number[]
  status: number[]
  move1: { id: number; pp: number }
  move2: { id: number; pp: number }
  move3: { id: number; pp: number }
  move4: { id: number; pp: number }
  item1: number
  item2: number
}

export enum PvpSeasonRankEnum {
  Trainer = 'Trainer',
  Rival = 'Rival',
  Challenger = 'Challenger',
  Expert = 'Expert',
  Elite = 'Elite',
  Master = 'Master',
  Grandmaster = 'Grandmaster',
  Legend = 'Legend',
  Myth = 'Myth',
}

export enum PvpSeasonTierEnum {
  IV = 'IV',
  III = 'III',
  II = 'II',
  I = 'I',
}

export type PvpPlayerProfile = {
  id: number
  name: string
  type: AccountProfileTypeEnum
  rank: PvpSeasonRankEnum
  tier: PvpSeasonTierEnum
  bitPoints: number
  sunrocks: number
  profileTotalOrbeastsLevel: number
  avatar: string | null
  avoidOpponent: number | null
}

export type PvpOrbeast = {
  id: number
  tokenId: number
  name: string
  type: OrbeastTypeEnum
  family: number
  evolution: number
  rarity: string
  brilliant: boolean
  image: string
  hpSv: number
  atkSv: number
  defSv: number
  saSv: number
  sdSv: number
  speSv: number
  baseStat: {
    hp: number
    atk: number
    def: number
    sa: number
    sd: number
    spe: number
  }
  move1: {
    id: number
    pp: number
  }
  move2: {
    id: number
    pp: number
  }
  move3: {
    id: number
    pp: number
  }
  move4: {
    id: number
    pp: number
  }
  item1: {
    id: number
  }
  item2: {
    id: number
  }
}

export type PvpMovement = {
  id: number
  name: string
  image?: string
  type: OrbeastTypeEnum
  priority: number
  power: number
  accuracy: number
  pp: number
  hits: OrbeastMovementHitsEnum
  kind: OrbeastMovementKindEnum
  status: OrbeastMovementStatusEnum
  effect: OrbeastMovementEffectEnum
  statusProb: OrbeastMovementProbabilityEnum
  statusTrigger: OrbeastMovementTriggerEnum
  statusRestore: OrbeastMovementStatusRestoreEnum
  hitsDuration: string
  damageDuration: string
  multipleHit: number
  swapOrbeast: boolean
  swapStats: boolean
  statUsedForDamage: OrbeastMovementStatUsedForDamageEnum
  restTurn: boolean
  penetration: number
  protection: number
  visible: boolean
  terrain: boolean
  restoreTerrain: boolean
  criticalHitProb: OrbeastMovementProbabilityEnum
  criticalHitTrigger: OrbeastMovementTriggerEnum
  restoreStats: OrbeastMovementStatRestoreEnum
  statVar1: string
  statVar2: string
  statVar3: string
  statVar4: string
  accuracyVar: string
  priorityVar: string
  damageMultiplier: string
  recoil: string
  blockMovement1: string
  blockMovement2: string
  blockMovement3: string
  blockMovement4: string
  swapOrbeastType: string
  description: string
}

export type PvpItem = {
  id: number
  name: string
  image: string
  description: string
  // TODO: Add missing fields
}
