import { Component, OnDestroy } from '@angular/core';
import { SubSink } from './sub-sink';

/**
 * A class that automatically unsubscribes all observables when the object gets destroyed
 */
 @Component({
  template: ''
})
export class UnsubscribeOnDestroyAdapter implements OnDestroy {
  /**
   * The subscription sink object that stores all subscriptions
   */
  subs = new SubSink();

  /**
   * The life-cycle hook that unsubscribes all subscriptions when the component / object gets destroyed
   */
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
