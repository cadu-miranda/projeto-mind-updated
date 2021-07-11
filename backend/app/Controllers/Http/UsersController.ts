import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Event from '@ioc:Adonis/Core/Event'

export default class UsersController {

  public async index({ response }: HttpContextContract) { // GET

    const users = await User.all();

    return response.status(200).json(users);
  }

  public async store({ request, response, auth }: HttpContextContract) { // POST

    try {

      const { name, email, password, cpf, acess_level, avatar } = request.all();

      const user = await User.create({
        name,
        email,
        password,
        cpf,
        acess_level,
        avatar
      })

      const { token } = await auth.use('api').generate(user, {
        expiresIn: '10mins'
      })

      Event.emit('new:user', user);
      await user.save()
        .catch(err => response.status(400).json(err));

      return response.status(201).send({ user, token });
    }

    catch (error) {

      console.log(error)
    }
  }

  public async show({ response, params }: HttpContextContract) { // getById

    const { id } = params
    const user = await User
      .find(id)
      .catch(err => response.json(err))

    return response.json({ user })
  }

  public async update({ request, response, params }: HttpContextContract) { // UPDATE

    const { id } = params
    const { name, email, password, cpf, avatar } = request.all()
    const user = await User.findOrFail(id)

    user.merge({
      name,
      email,
      password,
      cpf,
      avatar
    })

    user.save()

    return response.json({ user })
  }

  public async destroy({ response, params }: HttpContextContract) { // DELETE

    const { id } = params;
    const user = await User.findOrFail(id)

    await user
      .delete()
      .catch(err => response.status(400).json(err))

    return response.status(200).send('Usuário excluído com sucesso!')
  }
}