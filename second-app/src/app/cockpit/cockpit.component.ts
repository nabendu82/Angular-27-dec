import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter();
  @Output() bluePrintCreated = new EventEmitter();

  //newServerName = '';
  newServerContent = '';

  ngOnInit(): void {
      
  }

  onAddServer(nameInput: any) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint(nameInput: any) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    })
  }

}
