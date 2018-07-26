class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.input = this.$el.find('input').value;
    this.ul = this.$el.find('ul');
  }
}


module.exports = UsersSearch;