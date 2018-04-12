export default {
  token: '',
  spammer: {
    enabled: true,
    channel: '',
    interval: 1500,
    message: 'spam',
  },
  catcher: {
    enabled: true,
    ignoreWhitelist: false, // true = catch all pokemon
    whitelist: [
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
