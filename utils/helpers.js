// module.exports = {
//   // format_date: (date) => {
//   //   return `${new Date(date).getMonth() + 1}/${new Date(
//   //     date
//   //   ).getDate()}/${new Date(date).getFullYear()}`;
//   // },

// };

module.exports = {
  json: function (context) {
    return JSON.stringify(context).replace(/"/g, "&quot;");
  },
};
