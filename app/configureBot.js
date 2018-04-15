const configureBot = {
  token: 'MTE0NTUyNTk1NTE4OTgwMDk5.DZcKqg.F_-Ov2V-xAC0Wk1No7J-cr6o1ys',
  spammer: {
    enabled: true,
    channel: '423251103531008011',
    interval: 1500,
    message: ['dgfs', 'asdef', 'htf', 'cvx', 'dsf', 'jhs', 'a', 'gh', 's', 'asdf', 'asd'],
  },
  catcher: {
    enabled: false,
    delay: 0,
    ignoreChannelWhitelist: false,
    channelWhitelist: ['423251103531008011'],
    ignorePokemonWhitelist: false,
    pokemonWhitelist: [
      'Ditto',
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
