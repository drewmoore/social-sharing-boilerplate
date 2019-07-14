class Configurator {
  constructor() {
    this.configuration = {};
  }

  initialize(initialConfig) {
    Object.freeze(Object.assign(this.configuration, initialConfig));
  }

  get config() {
    return this.configuration;
  }
}

const configurator = new Configurator();

export const initialize = (initialConfig) => {
  configurator.initialize(initialConfig);
};

export const { config } = configurator;
