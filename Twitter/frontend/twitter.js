const FollowToggle = require('./follow_toggle.js');

$(() => {
  const $el = $('.follow-toggle');
  
  $el.each((idx,el) => new FollowToggle(el));
  // followToggle.render();
});