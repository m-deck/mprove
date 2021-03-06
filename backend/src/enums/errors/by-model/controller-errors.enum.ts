export enum controllerErrorsEnum {
  // CONFIRM

  CONTROLLER_CONFIRM = 'CONTROLLER_CONFIRM',

  // CYPRESS

  CONTROLLER_CYPRESS_DELETE = 'CONTROLLER_CYPRESS_DELETE',
  CONTROLLER_CYPRESS_SEED = 'CONTROLLER_CYPRESS_SEED',

  // PONG

  CONTROLLER_PONG = 'CONTROLLER_PONG',

  // FILES

  CONTROLLER_CREATE_FILE = 'CONTROLLER_CREATE_FILE',
  CONTROLLER_DELETE_FILE = 'CONTROLLER_DELETE_FILE',
  CONTROLLER_SAVE_FILE = 'CONTROLLER_SAVE_FILE',

  // FOLDERS

  CONTROLLER_CREATE_FOLDER = 'CONTROLLER_CREATE_FOLDER',
  CONTROLLER_DELETE_FOLDER = 'CONTROLLER_DELETE_FOLDER',
  // CONTROLLER_SAVE_FOLDER = 'CONTROLLER_SAVE_FOLDER',
  CONTROLLER_RENAME_FOLDER = 'CONTROLLER_RENAME_FOLDER',

  // MCONFIGS

  CONTROLLER_CREATE_MCONFIG = 'CONTROLLER_CREATE_MCONFIG',
  CONTROLLER_GET_MCONFIG = 'CONTROLLER_GET_MCONFIG',

  // MEMBERS

  CONTROLLER_CREATE_MEMBER = 'CONTROLLER_CREATE_MEMBER',
  CONTROLLER_DELETE_MEMBER = 'CONTROLLER_DELETE_MEMBER',
  CONTROLLER_EDIT_MEMBER = 'CONTROLLER_EDIT_MEMBER',

  // MULTI

  CONTROLLER_CREATE_DASHBOARD = 'CONTROLLER_CREATE_DASHBOARD',
  CONTROLLER_CREATE_MCONFIG_AND_QUERY = 'CONTROLLER_CREATE_MCONFIG_AND_QUERY',
  CONTROLLER_DUPLICATE_MCONFIG_AND_QUERY = 'CONTROLLER_DUPLICATE_MCONFIG_AND_QUERY',
  CONTROLLER_GET_DASHBOARD_MCONFIGS_QUERIES = 'CONTROLLER_GET_DASHBOARD_MCONFIGS_QUERIES',
  CONTROLLER_SET_LIVE_QUERIES = 'CONTROLLER_SET_LIVE_QUERIES',

  // PROJECTS

  CONTROLLER_CHECK_PROJECT_ID_UNIQUE = 'CONTROLLER_CHECK_PROJECT_ID_UNIQUE',
  CONTROLLER_CREATE_PROJECT = 'CONTROLLER_CREATE_PROJECT',
  CONTROLLER_DELETE_PROJECT = 'CONTROLLER_DELETE_PROJECT',
  CONTROLLER_DELETE_PROJECT_CREDENTIALS = 'CONTROLLER_DELETE_PROJECT_CREDENTIALS',
  CONTROLLER_SET_PROJECT_CONNECTION = 'CONTROLLER_SET_PROJECT_CONNECTION',
  CONTROLLER_SET_PROJECT_CREDENTIALS_POSTGRES = 'CONTROLLER_SET_PROJECT_CREDENTIALS_POSTGRES',
  CONTROLLER_SET_PROJECT_CREDENTIALS = 'CONTROLLER_SET_PROJECT_CREDENTIALS',
  CONTROLLER_SET_PROJECT_QUERY_SIZE_LIMIT = 'CONTROLLER_SET_PROJECT_QUERY_SIZE_LIMIT',
  CONTROLLER_SET_PROJECT_TIMEZONE = 'CONTROLLER_SET_PROJECT_TIMEZONE',
  CONTROLLER_SET_PROJECT_WEEK_START = 'CONTROLLER_SET_PROJECT_WEEK_START',

  // QUERIES

  CONTROLLER_GET_PDT_QUERIES = 'CONTROLLER_GET_PDT_QUERIES',
  CONTROLLER_GET_QUERY_WITH_DEP_QUERIES = 'CONTROLLER_GET_QUERY_WITH_DEP_QUERIES',
  CONTROLLER_RUN_QUERIES_DRY = 'CONTROLLER_RUN_QUERIES_DRY',
  CONTROLLER_RUN_QUERIES = 'CONTROLLER_RUN_QUERIES',
  CONTROLLER_CANCEL_QUERIES = 'CONTROLLER_CANCEL_QUERIES',

  // REPOS

  CONTROLLER_COMMIT_REPO = 'CONTROLLER_COMMIT_REPO',
  CONTROLLER_PULL_REPO = 'CONTROLLER_PULL_REPO',
  CONTROLLER_PUSH_REPO = 'CONTROLLER_PUSH_REPO',
  CONTROLLER_REVERT_REPO_TO_LAST_COMMIT = 'CONTROLLER_REVERT_REPO_TO_LAST_COMMIT',
  CONTROLLER_REVERT_REPO_TO_PRODUCTION = 'CONTROLLER_REVERT_REPO_TO_PRODUCTION',

  // STATE

  CONTROLLER_GET_STATE = 'CONTROLLER_GET_STATE',

  // USERS

  CONTROLLER_CONFIRM_USER_EMAIL = 'CONTROLLER_CONFIRM_USER_EMAIL',
  CONTROLLER_LOGIN_USER = 'CONTROLLER_LOGIN_USER',
  CONTROLLER_LOGOUT_USER = 'CONTROLLER_LOGOUT_USER',
  CONTROLLER_REGISTER_USER = 'CONTROLLER_REGISTER_USER',
  CONTROLLER_DELETE_USER = 'CONTROLLER_DELETE_USER',
  CONTROLLER_SET_USER_NAME = 'CONTROLLER_SET_USER_NAME',
  CONTROLLER_SET_USER_THEMES = 'CONTROLLER_SET_USER_THEMES',
  CONTROLLER_SET_USER_TIMEZONE = 'CONTROLLER_SET_USER_TIMEZONE',
  CONTROLLER_VERIFY_USER_EMAIL = 'CONTROLLER_VERIFY_USER_EMAIL',
  CONTROLLER_RESET_USER_PASSWORD = 'CONTROLLER_RESET_USER_PASSWORD',
  CONTROLLER_UPDATE_USER_PASSWORD = 'CONTROLLER_UPDATE_USER_PASSWORD'
}
