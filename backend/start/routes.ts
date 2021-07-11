import Route from '@ioc:Adonis/Core/Route'

Route.post('login', 'AuthsController.login')
Route.post('signup', 'UsersController.store')

Route.group(() => {
  Route.resource('users', 'UsersController').except(['create', 'edit'])
})