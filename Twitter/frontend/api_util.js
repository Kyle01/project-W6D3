const APIUtil = {
  followUser: (id,action) => {
    return $.ajax({
      dataType: 'json',
      url: `/users/${id}/follow`,
      type: action
    });
  }
};    

module.exports = APIUtil;