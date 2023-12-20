// TODO sort by direction
export enum IPC {
  SHUTDOWN_NOW = 'SHUTDOWN_NOW',
  EXIT = 'EXIT',
  RELAUNCH = 'RELAUNCH',

  JIRA_CB_EVENT = 'JIRA_RESPONSE',
  JIRA_MAKE_REQUEST_EVENT = 'JIRA_MAKE_REQUEST_EVENT',
  JIRA_SETUP_IMG_HEADERS = 'JIRA_SETUP_IMG_HEADERS',
  REGISTER_GLOBAL_SHORTCUTS_EVENT = 'REGISTER_GLOBAL_SHORTCUTS',
  IDLE_TIME = 'IDLE_TIME',
  RESUME = 'RESUME',
  SUSPEND = 'SUSPEND',

  SHOW_OR_FOCUS = 'SHOW_OR_FOCUS',
  LOCK_SCREEN = 'LOCK_SCREEN',

  APP_READY = 'APP_READY',
  ERROR = 'ELECTRON_ERROR',
  CURRENT_TASK_UPDATED = 'CURRENT_TASK_UPDATED',
  TASK_MARK_AS_DONE = 'TASK_MARK_AS_DONE',
  TASK_START = 'TASK_START',
  TASK_TOGGLE_START = 'TASK_TOGGLE_START',
  ADD_TASK = 'ADD_TASK',
  ADD_NOTE = 'ADD_NOTE',
  TASK_PAUSE = 'TASK_PAUSE',

  TRIGGER_GOOGLE_AUTH = 'TRIGGER_GOOGLE_AUTH',
  GOOGLE_AUTH_GET_AUTH_URL = 'GOOGLE_AUTH_GET_AUTH_URL',
  GOOGLE_AUTH_TOKEN = 'GOOGLE_AUTH_TOKEN',
  GOOGLE_AUTH_TOKEN_ERROR = 'GOOGLE_AUTH_TOKEN_ERROR',

  TRANSFER_SETTINGS_REQUESTED = 'TRANSFER_SETTINGS_REQUESTED',
  TRANSFER_SETTINGS_TO_ELECTRON = 'TRANSFER_SETTINGS_TO_ELECTRON',

  GIT_LOG_RESPONSE = 'GIT_LOG_RESPONSE',
  EXEC = 'EXEC',

  BACKUP = 'BACKUP',
  BACKUP_IS_AVAILABLE = 'BACKUP_IS_AVAILABLE',
  BACKUP_LOAD_DATA = 'BACKUP_LOAD_DATA',

  SET_PROGRESS_BAR = 'SET_PROGRESS_BAR',
  FLASH_FRAME = 'FLASH_FRAME',

  NOTIFY_ON_CLOSE = 'NOTIFY_ON_CLOSE',
  REGISTER_BEFORE_CLOSE = 'REGISTER_BEFORE_CLOSE',
  UNREGISTER_BEFORE_CLOSE = 'UNREGISTER_BEFORE_CLOSE',
  BEFORE_CLOSE_DONE = 'BEFORE_CLOSE_DONE',

  FILE_SYNC_LOAD = 'FILE_SYNC_LOAD',
  FILE_SYNC_SAVE = 'FILE_SYNC_SAVE',
  FILE_SYNC_GET_REV_AND_CLIENT_UPDATE = 'FILE_SYNC_GET_REV_AND_CLIENT_UPDATE',

  ANY_FILE_DOWNLOADED = 'ANY_FILE_DOWNLOADED',

  FULL_SCREEN_BLOCKER = 'FULL_SCREEN_BLOCKER',

  GET_PATH = 'GET_PATH',
  RELOAD_MAIN_WIN = 'RELOAD_MAIN_WIN',
  OPEN_DEV_TOOLS = 'OPEN_DEV_TOOLS',

  OPEN_PATH = 'OPEN_PATH',
  OPEN_EXTERNAL = 'OPEN_EXTERNAL',

  // maybe_UPDATE_CURRENT_TASK = 'UPDATE_CURRENT_TASK',
  // maybe_IS_IDLE = 'IS_IDLE',
  // maybe_IS_BUSY = 'IS_BUSY',
  // POMODORO_UPDATE = 'POMODORO_UPDATE',
  // maybe_PROJECT_CHANGED = 'PROJECT_CHANGED',
  // maybe_COMPLETE_DATA_RELOAD = 'COMPLETE_DATA_RELOAD',
}

export type IPCEventValue = `${IPC}`;
