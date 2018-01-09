// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBdtx5f3sEJ7pFoui6sJ0Mj6IDndoW76a4',
    authDomain: 'bloc-clack.firebaseapp.com',
    databaseURL: 'https://bloc-clack.firebaseio.com',
    projectId: 'bloc-clack',
    storageBucket: 'bloc-clack.appspot.com',
    messagingSenderId: '494189285943'
  }
};
