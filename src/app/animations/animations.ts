import {
  trigger,
  animate,
  transition,
  style,
  query,
  group
} from '@angular/animations';

export const fader = trigger('routeAnimations', [

  transition('* <=> *', [

    query(':enter', [
      style({display: 'none', opacity:0}),
    ], {optional: true}),

    query(':leave', [

      style({display: 'none', opacity: 1}),
      animate('600ms',
        style({ opacity: 0, transform: 'scale(0)'})
      )

    ], {optional: true}),

    query(':enter', [

      style({display: 'unset', opacity:0}),
      animate('600ms',
        style({ opacity: 1, transform: 'scale(1)' })
      ),

    ], {optional: true}),

  ]),

]);


// export const translateTop = trigger('translateTop', [

//   transition('void => *', [
//     style({
//       opacity: 0,
//       transform: 'translateY(-100%)'
//     }),
//     animate('0.8s ease-out')
//   ]),
//   transition('* => void', [
//     animate('0.8s ease-out', style({
//       opacity: 0,
//       transform: 'translateY(100%)'
//     }))
//   ])

// ]);
