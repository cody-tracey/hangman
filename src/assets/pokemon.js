const POKEMON = [
    {
        '#': 1,
        name: 'Bulbasaur',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'フシギダネ'
    },
    {
        '#': 2,
        name: 'Ivysaur',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'フシギソウ'
    },
    {
        '#': 3,
        name: 'Venusaur',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'フシギバナ'
    },
    {
        '#': 4,
        name: 'Charmander',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ヒトカゲ'
    },
    {
        '#': 5,
        name: 'Charmeleon',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'リザード'
    },
    {
        '#': 6,
        name: 'Charizard',
        'Type 1': 'Fire',
        'Type 2': 'Flying',
        Japanese: 'リザードン'
    },
    {
        '#': 7,
        name: 'Squirtle',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'ゼニガメ'
    },
    {
        '#': 8,
        name: 'Wartortle',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'カメール'
    },
    {
        '#': 9,
        name: 'Blastoise',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'カメックス'
    },
    {
        '#': 10,
        name: 'Caterpie',
        'Type 1': 'Bug',
        'Type 2': 'N/A',
        Japanese: 'キャタピー'
    },
    {
        '#': 11,
        name: 'Metapod',
        'Type 1': 'Bug',
        'Type 2': 'N/A',
        Japanese: 'トランセル'
    },
    {
        '#': 12,
        name: 'Butterfree',
        'Type 1': 'Bug',
        'Type 2': 'Flying',
        Japanese: 'バタフリー'
    },
    {
        '#': 13,
        name: 'Weedle',
        'Type 1': 'Bug',
        'Type 2': 'Poison',
        Japanese: 'ビードル'
    },
    {
        '#': 14,
        name: 'Kakuna',
        'Type 1': 'Bug',
        'Type 2': 'Poison',
        Japanese: 'コクーン'
    },
    {
        '#': 15,
        name: 'Beedrill',
        'Type 1': 'Bug',
        'Type 2': 'Poison',
        Japanese: 'スピアー'
    },
    {
        '#': 16,
        name: 'Pidgey',
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'ポッポ'
    },
    {
        '#': 17,
        name: 'Pidgeotto',
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'ピジョン'
    },
    {
        '#': 18,
        name: 'Pidgeot',
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'ピジョット'
    },
    {
        '#': 19,
        name: 'Rattata',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'コラッタ'
    },
    {
        '#': 20,
        name: 'Raticate',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ラッタ'
    },
    {
        '#': 21,
        name: 'Spearow',
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'オニスズメ'
    },
    {
        '#': 22,
        name: 'Fearow',
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'オニドリル'
    },
    {
        '#': 23,
        name: 'Ekans',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'アーボ'
    },
    {
        '#': 24,
        name: 'Arbok',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'アーボック'
    },
    {
        '#': 25,
        name: 'Pikachu',
        'Type 1': 'Electric',
        'Type 2': 'N/A',
        Japanese: 'ピカチュウ'
    },
    {
        '#': 26,
        name: 'Raichu',
        'Type 1': 'Electric',
        'Type 2': 'N/A',
        Japanese: 'ライチュウ'
    },
    {
        '#': 27,
        name: 'Sandshrew',
        'Type 1': 'Ground',
        'Type 2': 'N/A',
        Japanese: 'サンド'
    },
    {
        '#': 28,
        name: 'Sandslash',
        'Type 1': 'Ground',
        'Type 2': 'N/A',
        Japanese: 'サンドパン'
    },
    {
        '#': 29,
        name: 'Nidoran♀',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'ニドラン♀'
    },
    {
        '#': 30,
        name: 'Nidorina',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'ニドリーナ'
    },
    {
        '#': 31,
        name: 'Nidoqueen',
        'Type 1': 'Poison',
        'Type 2': 'Ground',
        Japanese: 'ニドクイン'
    },
    {
        '#': 32,
        name: 'Nidoran♂',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'ニドラン♂'
    },
    {
        '#': 33,
        name: 'Nidorino',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'ニドリーノ'
    },
    {
        '#': 34,
        name: 'Nidoking',
        'Type 1': 'Poison',
        'Type 2': 'Ground',
        Japanese: 'ニドキング'
    },
    {
        '#': 35,
        name: 'Clefairy',
        'Type 1': 'Fairy[1]',
        'Type 2': 'N/A',
        Japanese: 'ピッピ'
    },
    {
        '#': 36,
        name: 'Clefable',
        'Type 1': 'Fairy[2]',
        'Type 2': 'N/A',
        Japanese: 'ピクシー'
    },
    {
        '#': 37,
        name: 'Vulpix',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ロコン'
    },
    {
        '#': 38,
        name: 'Ninetales',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'キュウコン'
    },
    {
        '#': 39,
        name: 'Jigglypuff',
        'Type 1': 'Normal',
        'Type 2': 'Fairy',
        Japanese: 'プリン'
    },
    {
        '#': 40,
        name: 'Wigglytuff',
        'Type 1': 'Normal',
        'Type 2': 'Fairy',
        Japanese: 'プクリン'
    },
    {
        '#': 41,
        name: 'Zubat',
        'Type 1': 'Poison',
        'Type 2': 'Flying',
        Japanese: 'ズバット'
    },
    {
        '#': 42,
        name: 'Golbat',
        'Type 1': 'Poison',
        'Type 2': 'Flying',
        Japanese: 'ゴルバット'
    },
    {
        '#': 43,
        name: 'Oddish',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'ナゾノクサ'
    },
    {
        '#': 44,
        name: 'Gloom',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'クサイハナ'
    },
    {
        '#': 45,
        name: 'Vileplume',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'ラフレシア'
    },
    {
        '#': 46,
        name: 'Paras',
        'Type 1': 'Bug',
        'Type 2': 'Grass',
        Japanese: 'パラス'
    },
    {
        '#': 47,
        name: 'Parasect',
        'Type 1': 'Bug',
        'Type 2': 'Grass',
        Japanese: 'パラセクト'
    },
    {
        '#': 48,
        name: 'Venonat',
        'Type 1': 'Bug',
        'Type 2': 'Poison',
        Japanese: 'コンパン'
    },
    {
        '#': 49,
        name: 'Venomoth',
        'Type 1': 'Bug',
        'Type 2': 'Poison',
        Japanese: 'モルフォン'
    },
    {
        '#': 50,
        name: 'Diglett',
        'Type 1': 'Ground',
        'Type 2': 'N/A',
        Japanese: 'ディグダ'
    },
    {
        '#': 51,
        name: 'Dugtrio',
        'Type 1': 'Ground',
        'Type 2': 'N/A',
        Japanese: 'ダグトリオ'
    },
    {
        '#': 52,
        name: 'Meowth',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ニャース'
    },
    {
        '#': 53,
        name: 'Persian',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ペルシアン'
    },
    {
        '#': 54,
        name: 'Psyduck',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'コダック'
    },
    {
        '#': 55,
        name: 'Golduck',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'ゴルダック'
    },
    {
        '#': 56,
        name: 'Mankey',
        'Type 1': 'Fighting',
        'Type 2': 'N/A',
        Japanese: 'マンキー'
    },
    {
        '#': 57,
        name: 'Primeape',
        'Type 1': 'Fighting',
        'Type 2': 'N/A',
        Japanese: 'オコリザル'
    },
    {
        '#': 58,
        name: 'Growlithe',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ガーディ'
    },
    {
        '#': 59,
        name: 'Arcanine',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ウインディ'
    },
    {
        '#': 60,
        name: 'Poliwag',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'ニョロモ'
    },
    {
        '#': 61,
        name: 'Poliwhirl',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'ニョロゾ'
    },
    {
        '#': 62,
        name: 'Poliwrath',
        'Type 1': 'Water',
        'Type 2': 'Fighting',
        Japanese: 'ニョロボ'
    },
    {
        '#': 63,
        name: 'Abra',
        'Type 1': 'Psychic',
        'Type 2': 'N/A',
        Japanese: 'ケーシィ'
    },
    {
        '#': 64,
        name: 'Kadabra',
        'Type 1': 'Psychic',
        'Type 2': 'N/A',
        Japanese: 'ユンゲラー'
    },
    {
        '#': 65,
        name: 'Alakazam',
        'Type 1': 'Psychic',
        'Type 2': 'N/A',
        Japanese: 'フーディン'
    },
    {
        '#': 66,
        name: 'Machop',
        'Type 1': 'Fighting',
        'Type 2': 'N/A',
        Japanese: 'ワンリキー'
    },
    {
        '#': 67,
        name: 'Machoke',
        'Type 1': 'Fighting',
        'Type 2': 'N/A',
        Japanese: 'ゴーリキー'
    },
    {
        '#': 68,
        name: 'Machamp',
        'Type 1': 'Fighting',
        'Type 2': 'N/A',
        Japanese: 'カイリキー'
    },
    {
        '#': 69,
        name: 'Bellsprout',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'マダツボミ'
    },
    {
        '#': 70,
        name: 'Weepinbell',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'ウツドン'
    },
    {
        '#': 71,
        name: 'Victreebel',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'ウツボット'
    },
    {
        '#': 72,
        name: 'Tentacool',
        'Type 1': 'Water',
        'Type 2': 'Poison',
        Japanese: 'メノクラゲ'
    },
    {
        '#': 73,
        name: 'Tentacruel',
        'Type 1': 'Water',
        'Type 2': 'Poison',
        Japanese: 'ドククラゲ'
    },
    {
        '#': 74,
        name: 'Geodude',
        'Type 1': 'Rock',
        'Type 2': 'Ground',
        Japanese: 'イシツブテ'
    },
    {
        '#': 75,
        name: 'Graveler',
        'Type 1': 'Rock',
        'Type 2': 'Ground',
        Japanese: 'ゴローン'
    },
    {
        '#': 76,
        name: 'Golem',
        'Type 1': 'Rock',
        'Type 2': 'Ground',
        Japanese: 'ゴローニャ'
    },
    {
        '#': 77,
        name: 'Ponyta',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ポニータ'
    },
    {
        '#': 78,
        name: 'Rapidash',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ギャロップ'
    },
    {
        '#': 79,
        name: 'Slowpoke',
        'Type 1': 'Water',
        'Type 2': 'Psychic',
        Japanese: 'ヤドン'
    },
    {
        '#': 80,
        name: 'Slowbro',
        'Type 1': 'Water',
        'Type 2': 'Psychic',
        Japanese: 'ヤドラン'
    },
    {
        '#': 81,
        name: 'Magnemite',
        'Type 1': 'Electric',
        'Type 2': 'Steel[5]',
        Japanese: 'コイル'
    },
    {
        '#': 82,
        name: 'Magneton',
        'Type 1': 'Electric',
        'Type 2': 'Steel[6]',
        Japanese: 'レアコイル'
    },
    {
        '#': 83,
        name: "Farfetchd",
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'カモネギ'
    },
    {
        '#': 84,
        name: 'Doduo',
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'ドードー'
    },
    {
        '#': 85,
        name: 'Dodrio',
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'ドードリオ'
    },
    {
        '#': 86,
        name: 'Seel',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'パウワウ'
    },
    {
        '#': 87,
        name: 'Dewgong',
        'Type 1': 'Water',
        'Type 2': 'Ice',
        Japanese: 'ジュゴン'
    },
    {
        '#': 88,
        name: 'Grimer',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'ベトベター'
    },
    {
        '#': 89,
        name: 'Muk',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'ベトベトン'
    },
    {
        '#': 90,
        name: 'Shellder',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'シェルダー'
    },
    {
        '#': 91,
        name: 'Cloyster',
        'Type 1': 'Water',
        'Type 2': 'Ice',
        Japanese: 'パルシェン'
    },
    {
        '#': 92,
        name: 'Gastly',
        'Type 1': 'Ghost',
        'Type 2': 'Poison',
        Japanese: 'ゴース'
    },
    {
        '#': 93,
        name: 'Haunter',
        'Type 1': 'Ghost',
        'Type 2': 'Poison',
        Japanese: 'ゴースト'
    },
    {
        '#': 94,
        name: 'Gengar',
        'Type 1': 'Ghost',
        'Type 2': 'Poison',
        Japanese: 'ゲンガー'
    },
    {
        '#': 95,
        name: 'Onix',
        'Type 1': 'Rock',
        'Type 2': 'Ground',
        Japanese: 'イワーク'
    },
    {
        '#': 96,
        name: 'Drowzee',
        'Type 1': 'Psychic',
        'Type 2': 'N/A',
        Japanese: 'スリープ'
    },
    {
        '#': 97,
        name: 'Hypno',
        'Type 1': 'Psychic',
        'Type 2': 'N/A',
        Japanese: 'スリーパー'
    },
    {
        '#': 98,
        name: 'Krabby',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'クラブ'
    },
    {
        '#': 99,
        name: 'Kingler',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'キングラー'
    },
    {
        '#': 100,
        name: 'Voltorb',
        'Type 1': 'Electric',
        'Type 2': 'N/A',
        Japanese: 'ビリリダマ'
    },
    {
        '#': 100,
        name: 'Voltorb',
        'Type 1': 'Electric',
        'Type 2': 'N/A',
        Japanese: 'ビリリダマ'
    },
    {
        '#': 101,
        name: 'Electrode',
        'Type 1': 'Electric',
        'Type 2': 'N/A',
        Japanese: 'マルマイン'
    },
    {
        '#': 102,
        name: 'Exeggcute',
        'Type 1': 'Grass',
        'Type 2': 'Psychic',
        Japanese: 'タマタマ'
    },
    {
        '#': 103,
        name: 'Exeggutor',
        'Type 1': 'Grass',
        'Type 2': 'Psychic',
        Japanese: 'ナッシー'
    },
    {
        '#': 104,
        name: 'Cubone',
        'Type 1': 'Ground',
        'Type 2': 'N/A',
        Japanese: 'カラカラ'
    },
    {
        '#': 105,
        name: 'Marowak',
        'Type 1': 'Ground',
        'Type 2': 'N/A',
        Japanese: 'ガラガラ'
    },
    {
        '#': 106,
        name: 'Hitmonlee',
        'Type 1': 'Fighting',
        'Type 2': 'N/A',
        Japanese: 'サワムラー'
    },
    {
        '#': 107,
        name: 'Hitmonchan',
        'Type 1': 'Fighting',
        'Type 2': 'N/A',
        Japanese: 'エビワラー'
    },
    {
        '#': 108,
        name: 'Lickitung',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ベロリンガ'
    },
    {
        '#': 109,
        name: 'Koffing',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'ドガース'
    },
    {
        '#': 110,
        name: 'Weezing',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'マタドガス'
    },
    {
        '#': 111,
        name: 'Rhyhorn',
        'Type 1': 'Ground',
        'Type 2': 'Rock',
        Japanese: 'サイホーン'
    },
    {
        '#': 112,
        name: 'Rhydon',
        'Type 1': 'Ground',
        'Type 2': 'Rock',
        Japanese: 'サイドン'
    },
    {
        '#': 113,
        name: 'Chansey',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ラッキー'
    },
    {
        '#': 114,
        name: 'Tangela',
        'Type 1': 'Grass',
        'Type 2': 'N/A',
        Japanese: 'モンジャラ'
    },
    {
        '#': 115,
        name: 'Kangaskhan',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ガルーラ'
    },
    {
        '#': 116,
        name: 'Horsea',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'タッツー'
    },
    {
        '#': 117,
        name: 'Seadra',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'シードラ'
    },
    {
        '#': 118,
        name: 'Goldeen',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'トサキント'
    },
    {
        '#': 119,
        name: 'Seaking',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'アズマオウ'
    },
    {
        '#': 120,
        name: 'Staryu',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'ヒトデマン'
    },
    {
        '#': 121,
        name: 'Starmie',
        'Type 1': 'Water',
        'Type 2': 'Psychic',
        Japanese: 'スターミー'
    },
    {
        '#': 122,
        name: 'Mr. Mime',
        'Type 1': 'Psychic',
        'Type 2': 'Fairy[7]',
        Japanese: 'バリヤード'
    },
    {
        '#': 123,
        name: 'Scyther',
        'Type 1': 'Bug',
        'Type 2': 'Flying',
        Japanese: 'ストライク'
    },
    {
        '#': 124,
        name: 'Jynx',
        'Type 1': 'Ice',
        'Type 2': 'Psychic',
        Japanese: 'ルージュラ'
    },
    {
        '#': 125,
        name: 'Electabuzz',
        'Type 1': 'Electric',
        'Type 2': 'N/A',
        Japanese: 'エレブー'
    },
    {
        '#': 126,
        name: 'Magmar',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ブーバー'
    },
    {
        '#': 127,
        name: 'Pinsir',
        'Type 1': 'Bug',
        'Type 2': 'N/A',
        Japanese: 'カイロス'
    },
    {
        '#': 128,
        name: 'Tauros',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ケンタロス'
    },
    {
        '#': 129,
        name: 'Magikarp',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'コイキング'
    },
    {
        '#': 130,
        name: 'Gyarados',
        'Type 1': 'Water',
        'Type 2': 'Flying',
        Japanese: 'ギャラドス'
    },
    {
        '#': 131,
        name: 'Lapras',
        'Type 1': 'Water',
        'Type 2': 'Ice',
        Japanese: 'ラプラス'
    },
    {
        '#': 132,
        name: 'Ditto',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'メタモン'
    },
    {
        '#': 133,
        name: 'Eevee',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'イーブイ'
    },
    {
        '#': 134,
        name: 'Vaporeon',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'シャワーズ'
    },
    {
        '#': 135,
        name: 'Jolteon',
        'Type 1': 'Electric',
        'Type 2': 'N/A',
        Japanese: 'サンダース'
    },
    {
        '#': 136,
        name: 'Flareon',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ブースター'
    },
    {
        '#': 137,
        name: 'Porygon',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ポリゴン'
    },
    {
        '#': 138,
        name: 'Omanyte',
        'Type 1': 'Rock',
        'Type 2': 'Water',
        Japanese: 'オムナイト'
    },
    {
        '#': 139,
        name: 'Omastar',
        'Type 1': 'Rock',
        'Type 2': 'Water',
        Japanese: 'オムスター'
    },
    {
        '#': 140,
        name: 'Kabuto',
        'Type 1': 'Rock',
        'Type 2': 'Water',
        Japanese: 'カブト'
    },
    {
        '#': 141,
        name: 'Kabutops',
        'Type 1': 'Rock',
        'Type 2': 'Water',
        Japanese: 'カブトプス'
    },
    {
        '#': 142,
        name: 'Aerodactyl',
        'Type 1': 'Rock',
        'Type 2': 'Flying',
        Japanese: 'プテラ'
    },
    {
        '#': 143,
        name: 'Snorlax',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'カビゴン'
    },
    {
        '#': 144,
        name: 'Articuno',
        'Type 1': 'Ice',
        'Type 2': 'Flying',
        Japanese: 'フリーザー'
    },
    {
        '#': 145,
        name: 'Zapdos',
        'Type 1': 'Electric',
        'Type 2': 'Flying',
        Japanese: 'サンダー'
    },
    {
        '#': 146,
        name: 'Moltres',
        'Type 1': 'Fire',
        'Type 2': 'Flying',
        Japanese: 'ファイヤー'
    },
    {
        '#': 147,
        name: 'Dratini',
        'Type 1': 'Dragon',
        'Type 2': 'N/A',
        Japanese: 'ミニリュウ'
    },
    {
        '#': 148,
        name: 'Dragonair',
        'Type 1': 'Dragon',
        'Type 2': 'N/A',
        Japanese: 'ハクリュー'
    },
    {
        '#': 149,
        name: 'Dragonite',
        'Type 1': 'Dragon',
        'Type 2': 'Flying',
        Japanese: 'カイリュー'
    },
    {
        '#': 150,
        name: 'Mewtwo',
        'Type 1': 'Psychic',
        'Type 2': 'N/A',
        Japanese: 'ミュウツー'
    },
    {
        '#': 151,
        name: 'Mew',
        'Type 1': 'Psychic',
        'Type 2': 'N/A',
        Japanese: 'ミュウ'
    }
]

export default POKEMON;