import app from 'electron';
import { setupMainHandler } from 'eiphop';
import filmActions from './actions/films';

setupMainHandler(app, { ...filmActions}, true);
