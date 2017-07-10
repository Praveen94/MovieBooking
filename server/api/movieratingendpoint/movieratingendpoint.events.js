/**
 * Movieratingendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Movieratingendpoint from './movieratingendpoint.model';
var MovieratingendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MovieratingendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Movieratingendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MovieratingendpointEvents.emit(event + ':' + doc._id, doc);
    MovieratingendpointEvents.emit(event, doc);
  }
}

export default MovieratingendpointEvents;
