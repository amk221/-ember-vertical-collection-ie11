import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const items = [];

    for (let i = 1; i < 101; i++) {
      items.push({
        name: `Item ${i}`
      });
    }

    return items;
  },

  setupController(controller, model) {
    controller.set('items', model);
  }
});
