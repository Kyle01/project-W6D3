const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('userid');
    this.followState = this.$el.data('followstate');
    this.render();
    this.handleClick();
  }
  
  render() {
    const $button = this.$el;
    let words = "";
    if(this.followState) words = 'Unfollow!';
    else words = 'Follow!';
    $button.text(words);
  }
  
  handleClick() {
    this.$el.on('click', (event) => {
      this.$el.attr('disabled',true);
      // debugger
      let action = 'DELETE';
      if(!this.followState) action = 'POST';
      event.preventDefault();
      APIUtil.followUser(this.userId,action).then(() => {
        if(action === 'POST') this.followState = true;
        else this.followState = false;
        this.render(); 
        this.$el.attr("disabled", false);
      });
    });
  }
}
  


module.exports = FollowToggle;