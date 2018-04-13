const configureBot = {
  token: '',
  spammer: {
    enabled: true,
    channel: '',
    interval: 2000,
    message: ['dgfs', 'asdef', 'htf', 'cvx', 'dsf', 'jhs', 'a', 'gh', 's'],
  },
  catcher: {
    enabled: true,
    delay: 3000,
    ignoreChannelWhitelist: false,
    channelWhitelist: [],
    ignorePokemonWhitelist: false,
    pokemonWhitelist: [
      'Dratini', 'Dragonair', 'Dragonite',
      'Articuno', 'Zapdos', 'Moltres',
      'Mewtwo', 'Mew', 'Unown',
      'Raikou', 'Entei', 'Suicune',
      'Lugia', 'Ho-oh', 'Celebi',
      'Regirock', 'Regice', 'Registeel',
      'Latias', 'Latios',
      'Kyogre', 'Groudon', 'Rayquaza',
      'Jirachi', 'Deoxys',
      'Uxie', 'Mesprit', 'Azelf',
      'Dialga', 'Palkia',
      'Heatran', 'Regigigas', 'Giratina',
      'Cresselia', 'Phione', 'Manaphy',
      'Darkrai', 'Shaymin', 'Arceus',
      'Riolu', 'Lucario', 'Snorlax', 'Ditto',
      'Arceus', 'Victini', 'Cobalion', 'Terrakion',
      'Virizion', 'Tornadus', 'Thundurus',
      'Reshiram', 'Zekrom', 'Landorus',
      'Kyurem', 'Keldeo', 'Meloetta', 'Genesect',
    ],
  },
};

export default configureBot;
