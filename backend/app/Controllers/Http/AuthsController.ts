import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthsController {

  public async login({ request, response, auth }: HttpContextContract) {

    try {

      const { cpf, email, password } = request.all();

      if (email) {

        let user = await User.query().where('email', email).first();

        const { token } = await auth.use('api').attempt(email, password, {
          expiresIn: '15mins'
        });

        return response.json({ token, user })
      }

      let user = await User.query().where('cpf', cpf).firstOrFail();

      const { token } = await auth.use('api').attempt(cpf, password, {
        expiresIn: '15mins'
      });

      return response.json({ token, user })

    } catch (err) {

      return response.status(400).send(err);
    }
  }
}