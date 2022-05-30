import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('alltodo', {path: ''});
  this.route('alltodo', {path: '/*wildcard'});
  this.route('alltodo');
  this.route('pending');
  this.route('completed');
});

export default Router;
