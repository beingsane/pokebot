const configureBot = {
  token: '',
  spammer: {
    enabled: false,
    channel: '',
    interval: 2000,
    message: ['dgfs', 'asdef', 'htf', 'cvx', 'dsf', 'jhs', 'a', 'gh', 's'],
  },
  catcher: {
    enabled: false,
    delay: 3000,
    ignoreChannelWhitelist: false,
    channelWhitelist: [],
    ignorePokemonWhitelist: false,
    pokemonWhitelist: [
      'Snorlax', 'Ditto',
      // Legendaries
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
      'Arceus', 'Victini', 'Cobalion', 'Terrakion',
      'Virizion', 'Tornadus', 'Thundurus',
      'Reshiram', 'Zekrom', 'Landorus',
      'Kyurem', 'Keldeo', 'Meloetta', 'Genesect',
    ],
  },
};

export default configureBot;
