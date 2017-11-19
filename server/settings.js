module.exports = {
   private:{
     mongo:{
       db_user: "admin",
       db_password: "Puppidog1",
       db: "buildrite",
       url: "ds259085.mlab.com:59085"
     },
     auth:{
       jwtSecret: process.env.JWT_SECRET || 'sefdtBQbKxpPUp6Ai9ULsIQQGxUg3xmmInWxdkQxbhUwQBjMC9oU3qPIxnwmnRwfHZXi4vkW9BGHXxlDTZRMjT8BLvDwcYoHy6In18feflpBOEmgnBnBIrcVdP7MjGxuRYWK6k546OopOOfdc7QkfHmiD8UCllSqZt6x9TR59YGTF94nbWvv6A4iBNklDtSyOUewprBPX38n8i24y74u7UrRc539jWVqDQnIhRlMuXwClzAqWKxQgi3S75 '
     }
   }
}
