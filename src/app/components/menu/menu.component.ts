import { Component, OnInit } from '@angular/core';

enum Tabs {
  Stats,
  QuestLog,
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public openTab: Tabs = Tabs.Stats;

  constructor() {}

  ngOnInit(): void {}
}
