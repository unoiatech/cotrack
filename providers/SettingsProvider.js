const { ServiceProvider } = require('@adonisjs/fold')

class SettingsProvider extends ServiceProvider {
  async boot () {
    const View = use('View')
    const Setting = use('App/Models/Setting')
    const settings = await Setting.query().first()

    View.global('settings', function () {
      return settings.toJSON()
    })
  }
}

module.exports = SettingsProvider