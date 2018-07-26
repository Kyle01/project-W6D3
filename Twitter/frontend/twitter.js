const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$(() => {
  let $el = $('.follow-toggle');
  $el.each((idx,el) => new FollowToggle(el));
  $el = $('.users-search');
  $el.each((idx,el) => new UsersSearch(el));
  // followToggle.render();
});