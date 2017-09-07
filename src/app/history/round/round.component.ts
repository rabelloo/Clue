import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { HistoryService } from '../history.service';
import { Player } from '../../player/player';
import { Round } from './round';
import { Turn } from '../turn/turn';

@Component({
  selector: 'clue-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent implements OnInit {

  @Input() private round: Round;
  @Input() private players: Player[] = [];
  @Output() private remove = new EventEmitter<Round>()

  private get canAdd() {
    return this.round.turns.length < this.players.length;
  }

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
  }
  
  private addTurn(): void {
    this.historyService.addTurn(this.round, this.players)
        .subscribe(turn => this.round.turns.push(turn));
  }

  private onRemove(turn: Turn): void {
    this.round.turns = this.round.turns.filter(t => t.id !== turn.id);
    
    if (!this.round.turns.length)
      this.remove.emit(this.round);
  }

}
