// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
      // SPRING_SERVER_URL: 'http://192.168.2.101:9095/',
      SPRING_SERVER_URL: 'http://192.168.2.111:9095/',
      // SPRING_SERVER_URL: 'http://192.168.2.106:9095/',
      AWS_COGNITO_URL: 'http://15.207.215.148:3030',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
