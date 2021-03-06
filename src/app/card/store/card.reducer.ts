import { HashMap } from '../../core/store/hash-map';
import { Card } from '../card';
import { CardAction, loadedCards } from './card.actions';

const initialState: HashMap<Card> = {};

export function CardReducer(
  state = initialState,
  action: CardAction
): HashMap<Card> {
  switch (action.type) {
    case loadedCards:
      return { ...state, ...action.cards.toHashMap((c: Card) => c.id) };

    default:
      return state;
  }
}
