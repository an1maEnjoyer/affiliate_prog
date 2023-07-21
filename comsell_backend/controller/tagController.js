const { Chanels } = require('../models/models'); // Предполагая, что это путь к вашей модели User

class TagController {
  async getAll(req, res) {
    try {
      console.log('kix');

      console.log(Chanels);
      const categoriesArray = await Chanels.findAll({
        attributes: ['targeting_categories'], // указываем только нужные поля
      });
      const categories = categoriesArray.map((item) => item.targeting_categories);

      const merged = [].concat.apply([], categories);

      const unique = [...new Set(merged)];

      res.json(unique);
    } catch (e) {
      res.status(500).json({ message: 'Ошибка при получении данных', error: e });
    }
  }
}

module.exports = new TagController();
