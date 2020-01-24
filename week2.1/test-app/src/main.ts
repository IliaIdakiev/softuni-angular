import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import { of, asyncScheduler } from 'rxjs';
// import { map, delay, count, catchError, shareReplay, mergeMap } from 'rxjs/operators';




// Promise.resolve().then(() => Promise.resolve(Promise.resolve(10))).then(x => )

// const a = Promise.resolve([1, 3, 4, 55])
//   .then(x => x + 1, (err) => console.error(err));

// // setTimeout(() => {
// //   a.then(console.log);
// // }, 6000);

// const b = of(1, 2, 3, 4, 5).pipe(
//   mergeMap(x => {
//     return of(x + 1).pipe(delay(1000 * x));
//   }),
//   shareReplay(1)
//   // map(),
//   // count()
// );

// b.subscribe({
//   next: (val) => console.log(val, 'first'),
//   error: err => console.error(err),
//   complete: () => { console.log('completed'); }
// });

// setTimeout(() => {
//   b.subscribe({
//     next: (val) => console.log(val, 'second'),
//     error: err => console.error(err),
//     complete: () => { console.log('completed'); }
//   });
// }, 4000);


// setTimeout(() => {
//   const subscription = b.subscribe(console.log); // Observable
//   setTimeout(() => {
//     subscription.unsubscribe();
//   }, 5000);
// }, 3000);
