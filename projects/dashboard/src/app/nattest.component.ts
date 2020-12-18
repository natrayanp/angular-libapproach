import { Component } from '@angular/core';

@Component({
  template: `
    <div">
      <h3>Featured Hero Profile</h3>
      <h4>{{data}}</h4>
      <strong>Hire this hero today!</strong>
    </div>
  `
})
export class NatTestComponent  {
  data = "testing my data in hero";
}


