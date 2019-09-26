import app from 'electron';
import { setupMainHandler } from 'eiphop';
import filmixActions from './actions/filmixActions';

setupMainHandler(app, { ...filmixActions}, true);
