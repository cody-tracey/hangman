const POKEMON = [
    {
        '#': 1,
        Name: 'Bulbasaur',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'フシギダネ'
    },
    {
        '#': 2,
        Name: 'Ivysaur',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'フシギソウ'
    },
    {
        '#': 3,
        Name: 'Venusaur',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'フシギバナ'
    },
    {
        '#': 4,
        Name: 'Charmander',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ヒトカゲ'
    },
    {
        '#': 5,
        Name: 'Charmeleon',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'リザード'
    },
    {
        '#': 6,
        Name: 'Charizard',
        'Type 1': 'Fire',
        'Type 2': 'Flying',
        Japanese: 'リザードン'
    },
    {
        '#': 7,
        Name: 'Squirtle',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'ゼニガメ'
    },
    {
        '#': 8,
        Name: 'Wartortle',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'カメール'
    },
    {
        '#': 9,
        Name: 'Blastoise',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'カメックス'
    },
    {
        '#': 10,
        Name: 'Caterpie',
        'Type 1': 'Bug',
        'Type 2': 'N/A',
        Japanese: 'キャタピー'
    },
    {
        '#': 11,
        Name: 'Metapod',
        'Type 1': 'Bug',
        'Type 2': 'N/A',
        Japanese: 'トランセル'
    },
    {
        '#': 12,
        Name: 'Butterfree',
        'Type 1': 'Bug',
        'Type 2': 'Flying',
        Japanese: 'バタフリー'
    },
    {
        '#': 13,
        Name: 'Weedle',
        'Type 1': 'Bug',
        'Type 2': 'Poison',
        Japanese: 'ビードル'
    },
    {
        '#': 14,
        Name: 'Kakuna',
        'Type 1': 'Bug',
        'Type 2': 'Poison',
        Japanese: 'コクーン'
    },
    {
        '#': 15,
        Name: 'Beedrill',
        'Type 1': 'Bug',
        'Type 2': 'Poison',
        Japanese: 'スピアー'
    },
    {
        '#': 16,
        Name: 'Pidgey',
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'ポッポ'
    },
    {
        '#': 17,
        Name: 'Pidgeotto',
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'ピジョン'
    },
    {
        '#': 18,
        Name: 'Pidgeot',
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'ピジョット'
    },
    {
        '#': 19,
        Name: 'Rattata',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'コラッタ'
    },
    {
        '#': 20,
        Name: 'Raticate',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ラッタ'
    },
    {
        '#': 21,
        Name: 'Spearow',
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'オニスズメ'
    },
    {
        '#': 22,
        Name: 'Fearow',
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'オニドリル'
    },
    {
        '#': 23,
        Name: 'Ekans',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'アーボ'
    },
    {
        '#': 24,
        Name: 'Arbok',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'アーボック'
    },
    {
        '#': 25,
        Name: 'Pikachu',
        'Type 1': 'Electric',
        'Type 2': 'N/A',
        Japanese: 'ピカチュウ'
    },
    {
        '#': 26,
        Name: 'Raichu',
        'Type 1': 'Electric',
        'Type 2': 'N/A',
        Japanese: 'ライチュウ'
    },
    {
        '#': 27,
        Name: 'Sandshrew',
        'Type 1': 'Ground',
        'Type 2': 'N/A',
        Japanese: 'サンド'
    },
    {
        '#': 28,
        Name: 'Sandslash',
        'Type 1': 'Ground',
        'Type 2': 'N/A',
        Japanese: 'サンドパン'
    },
    {
        '#': 29,
        Name: 'Nidoran♀',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'ニドラン♀'
    },
    {
        '#': 30,
        Name: 'Nidorina',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'ニドリーナ'
    },
    {
        '#': 31,
        Name: 'Nidoqueen',
        'Type 1': 'Poison',
        'Type 2': 'Ground',
        Japanese: 'ニドクイン'
    },
    {
        '#': 32,
        Name: 'Nidoran♂',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'ニドラン♂'
    },
    {
        '#': 33,
        Name: 'Nidorino',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'ニドリーノ'
    },
    {
        '#': 34,
        Name: 'Nidoking',
        'Type 1': 'Poison',
        'Type 2': 'Ground',
        Japanese: 'ニドキング'
    },
    {
        '#': 35,
        Name: 'Clefairy',
        'Type 1': 'Fairy[1]',
        'Type 2': 'N/A',
        Japanese: 'ピッピ'
    },
    {
        '#': 36,
        Name: 'Clefable',
        'Type 1': 'Fairy[2]',
        'Type 2': 'N/A',
        Japanese: 'ピクシー'
    },
    {
        '#': 37,
        Name: 'Vulpix',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ロコン'
    },
    {
        '#': 38,
        Name: 'Ninetales',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'キュウコン'
    },
    {
        '#': 39,
        Name: 'Jigglypuff',
        'Type 1': 'Normal',
        'Type 2': 'Fairy',
        Japanese: 'プリン'
    },
    {
        '#': 40,
        Name: 'Wigglytuff',
        'Type 1': 'Normal',
        'Type 2': 'Fairy',
        Japanese: 'プクリン'
    },
    {
        '#': 41,
        Name: 'Zubat',
        'Type 1': 'Poison',
        'Type 2': 'Flying',
        Japanese: 'ズバット'
    },
    {
        '#': 42,
        Name: 'Golbat',
        'Type 1': 'Poison',
        'Type 2': 'Flying',
        Japanese: 'ゴルバット'
    },
    {
        '#': 43,
        Name: 'Oddish',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'ナゾノクサ'
    },
    {
        '#': 44,
        Name: 'Gloom',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'クサイハナ'
    },
    {
        '#': 45,
        Name: 'Vileplume',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'ラフレシア'
    },
    {
        '#': 46,
        Name: 'Paras',
        'Type 1': 'Bug',
        'Type 2': 'Grass',
        Japanese: 'パラス'
    },
    {
        '#': 47,
        Name: 'Parasect',
        'Type 1': 'Bug',
        'Type 2': 'Grass',
        Japanese: 'パラセクト'
    },
    {
        '#': 48,
        Name: 'Venonat',
        'Type 1': 'Bug',
        'Type 2': 'Poison',
        Japanese: 'コンパン'
    },
    {
        '#': 49,
        Name: 'Venomoth',
        'Type 1': 'Bug',
        'Type 2': 'Poison',
        Japanese: 'モルフォン'
    },
    {
        '#': 50,
        Name: 'Diglett',
        'Type 1': 'Ground',
        'Type 2': 'N/A',
        Japanese: 'ディグダ'
    },
    {
        '#': 51,
        Name: 'Dugtrio',
        'Type 1': 'Ground',
        'Type 2': 'N/A',
        Japanese: 'ダグトリオ'
    },
    {
        '#': 52,
        Name: 'Meowth',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ニャース'
    },
    {
        '#': 53,
        Name: 'Persian',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ペルシアン'
    },
    {
        '#': 54,
        Name: 'Psyduck',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'コダック'
    },
    {
        '#': 55,
        Name: 'Golduck',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'ゴルダック'
    },
    {
        '#': 56,
        Name: 'Mankey',
        'Type 1': 'Fighting',
        'Type 2': 'N/A',
        Japanese: 'マンキー'
    },
    {
        '#': 57,
        Name: 'Primeape',
        'Type 1': 'Fighting',
        'Type 2': 'N/A',
        Japanese: 'オコリザル'
    },
    {
        '#': 58,
        Name: 'Growlithe',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ガーディ'
    },
    {
        '#': 59,
        Name: 'Arcanine',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ウインディ'
    },
    {
        '#': 60,
        Name: 'Poliwag',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'ニョロモ'
    },
    {
        '#': 61,
        Name: 'Poliwhirl',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'ニョロゾ'
    },
    {
        '#': 62,
        Name: 'Poliwrath',
        'Type 1': 'Water',
        'Type 2': 'Fighting',
        Japanese: 'ニョロボ'
    },
    {
        '#': 63,
        Name: 'Abra',
        'Type 1': 'Psychic',
        'Type 2': 'N/A',
        Japanese: 'ケーシィ'
    },
    {
        '#': 64,
        Name: 'Kadabra',
        'Type 1': 'Psychic',
        'Type 2': 'N/A',
        Japanese: 'ユンゲラー'
    },
    {
        '#': 65,
        Name: 'Alakazam',
        'Type 1': 'Psychic',
        'Type 2': 'N/A',
        Japanese: 'フーディン'
    },
    {
        '#': 66,
        Name: 'Machop',
        'Type 1': 'Fighting',
        'Type 2': 'N/A',
        Japanese: 'ワンリキー'
    },
    {
        '#': 67,
        Name: 'Machoke',
        'Type 1': 'Fighting',
        'Type 2': 'N/A',
        Japanese: 'ゴーリキー'
    },
    {
        '#': 68,
        Name: 'Machamp',
        'Type 1': 'Fighting',
        'Type 2': 'N/A',
        Japanese: 'カイリキー'
    },
    {
        '#': 69,
        Name: 'Bellsprout',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'マダツボミ'
    },
    {
        '#': 70,
        Name: 'Weepinbell',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'ウツドン'
    },
    {
        '#': 71,
        Name: 'Victreebel',
        'Type 1': 'Grass',
        'Type 2': 'Poison',
        Japanese: 'ウツボット'
    },
    {
        '#': 72,
        Name: 'Tentacool',
        'Type 1': 'Water',
        'Type 2': 'Poison',
        Japanese: 'メノクラゲ'
    },
    {
        '#': 73,
        Name: 'Tentacruel',
        'Type 1': 'Water',
        'Type 2': 'Poison',
        Japanese: 'ドククラゲ'
    },
    {
        '#': 74,
        Name: 'Geodude',
        'Type 1': 'Rock',
        'Type 2': 'Ground',
        Japanese: 'イシツブテ'
    },
    {
        '#': 75,
        Name: 'Graveler',
        'Type 1': 'Rock',
        'Type 2': 'Ground',
        Japanese: 'ゴローン'
    },
    {
        '#': 76,
        Name: 'Golem',
        'Type 1': 'Rock',
        'Type 2': 'Ground',
        Japanese: 'ゴローニャ'
    },
    {
        '#': 77,
        Name: 'Ponyta',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ポニータ'
    },
    {
        '#': 78,
        Name: 'Rapidash',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ギャロップ'
    },
    {
        '#': 79,
        Name: 'Slowpoke',
        'Type 1': 'Water',
        'Type 2': 'Psychic',
        Japanese: 'ヤドン'
    },
    {
        '#': 80,
        Name: 'Slowbro',
        'Type 1': 'Water',
        'Type 2': 'Psychic',
        Japanese: 'ヤドラン'
    },
    {
        '#': 81,
        Name: 'Magnemite',
        'Type 1': 'Electric',
        'Type 2': 'Steel[5]',
        Japanese: 'コイル'
    },
    {
        '#': 82,
        Name: 'Magneton',
        'Type 1': 'Electric',
        'Type 2': 'Steel[6]',
        Japanese: 'レアコイル'
    },
    {
        '#': 83,
        Name: "Farfetch'd",
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'カモネギ'
    },
    {
        '#': 84,
        Name: 'Doduo',
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'ドードー'
    },
    {
        '#': 85,
        Name: 'Dodrio',
        'Type 1': 'Normal',
        'Type 2': 'Flying',
        Japanese: 'ドードリオ'
    },
    {
        '#': 86,
        Name: 'Seel',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'パウワウ'
    },
    {
        '#': 87,
        Name: 'Dewgong',
        'Type 1': 'Water',
        'Type 2': 'Ice',
        Japanese: 'ジュゴン'
    },
    {
        '#': 88,
        Name: 'Grimer',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'ベトベター'
    },
    {
        '#': 89,
        Name: 'Muk',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'ベトベトン'
    },
    {
        '#': 90,
        Name: 'Shellder',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'シェルダー'
    },
    {
        '#': 91,
        Name: 'Cloyster',
        'Type 1': 'Water',
        'Type 2': 'Ice',
        Japanese: 'パルシェン'
    },
    {
        '#': 92,
        Name: 'Gastly',
        'Type 1': 'Ghost',
        'Type 2': 'Poison',
        Japanese: 'ゴース'
    },
    {
        '#': 93,
        Name: 'Haunter',
        'Type 1': 'Ghost',
        'Type 2': 'Poison',
        Japanese: 'ゴースト'
    },
    {
        '#': 94,
        Name: 'Gengar',
        'Type 1': 'Ghost',
        'Type 2': 'Poison',
        Japanese: 'ゲンガー'
    },
    {
        '#': 95,
        Name: 'Onix',
        'Type 1': 'Rock',
        'Type 2': 'Ground',
        Japanese: 'イワーク'
    },
    {
        '#': 96,
        Name: 'Drowzee',
        'Type 1': 'Psychic',
        'Type 2': 'N/A',
        Japanese: 'スリープ'
    },
    {
        '#': 97,
        Name: 'Hypno',
        'Type 1': 'Psychic',
        'Type 2': 'N/A',
        Japanese: 'スリーパー'
    },
    {
        '#': 98,
        Name: 'Krabby',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'クラブ'
    },
    {
        '#': 99,
        Name: 'Kingler',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'キングラー'
    },
    {
        '#': 100,
        Name: 'Voltorb',
        'Type 1': 'Electric',
        'Type 2': 'N/A',
        Japanese: 'ビリリダマ'
    },
    {
        '#': 100,
        Name: 'Voltorb',
        'Type 1': 'Electric',
        'Type 2': 'N/A',
        Japanese: 'ビリリダマ'
    },
    {
        '#': 101,
        Name: 'Electrode',
        'Type 1': 'Electric',
        'Type 2': 'N/A',
        Japanese: 'マルマイン'
    },
    {
        '#': 102,
        Name: 'Exeggcute',
        'Type 1': 'Grass',
        'Type 2': 'Psychic',
        Japanese: 'タマタマ'
    },
    {
        '#': 103,
        Name: 'Exeggutor',
        'Type 1': 'Grass',
        'Type 2': 'Psychic',
        Japanese: 'ナッシー'
    },
    {
        '#': 104,
        Name: 'Cubone',
        'Type 1': 'Ground',
        'Type 2': 'N/A',
        Japanese: 'カラカラ'
    },
    {
        '#': 105,
        Name: 'Marowak',
        'Type 1': 'Ground',
        'Type 2': 'N/A',
        Japanese: 'ガラガラ'
    },
    {
        '#': 106,
        Name: 'Hitmonlee',
        'Type 1': 'Fighting',
        'Type 2': 'N/A',
        Japanese: 'サワムラー'
    },
    {
        '#': 107,
        Name: 'Hitmonchan',
        'Type 1': 'Fighting',
        'Type 2': 'N/A',
        Japanese: 'エビワラー'
    },
    {
        '#': 108,
        Name: 'Lickitung',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ベロリンガ'
    },
    {
        '#': 109,
        Name: 'Koffing',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'ドガース'
    },
    {
        '#': 110,
        Name: 'Weezing',
        'Type 1': 'Poison',
        'Type 2': 'N/A',
        Japanese: 'マタドガス'
    },
    {
        '#': 111,
        Name: 'Rhyhorn',
        'Type 1': 'Ground',
        'Type 2': 'Rock',
        Japanese: 'サイホーン'
    },
    {
        '#': 112,
        Name: 'Rhydon',
        'Type 1': 'Ground',
        'Type 2': 'Rock',
        Japanese: 'サイドン'
    },
    {
        '#': 113,
        Name: 'Chansey',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ラッキー'
    },
    {
        '#': 114,
        Name: 'Tangela',
        'Type 1': 'Grass',
        'Type 2': 'N/A',
        Japanese: 'モンジャラ'
    },
    {
        '#': 115,
        Name: 'Kangaskhan',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ガルーラ'
    },
    {
        '#': 116,
        Name: 'Horsea',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'タッツー'
    },
    {
        '#': 117,
        Name: 'Seadra',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'シードラ'
    },
    {
        '#': 118,
        Name: 'Goldeen',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'トサキント'
    },
    {
        '#': 119,
        Name: 'Seaking',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'アズマオウ'
    },
    {
        '#': 120,
        Name: 'Staryu',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'ヒトデマン'
    },
    {
        '#': 121,
        Name: 'Starmie',
        'Type 1': 'Water',
        'Type 2': 'Psychic',
        Japanese: 'スターミー'
    },
    {
        '#': 122,
        Name: 'Mr. Mime',
        'Type 1': 'Psychic',
        'Type 2': 'Fairy[7]',
        Japanese: 'バリヤード'
    },
    {
        '#': 123,
        Name: 'Scyther',
        'Type 1': 'Bug',
        'Type 2': 'Flying',
        Japanese: 'ストライク'
    },
    {
        '#': 124,
        Name: 'Jynx',
        'Type 1': 'Ice',
        'Type 2': 'Psychic',
        Japanese: 'ルージュラ'
    },
    {
        '#': 125,
        Name: 'Electabuzz',
        'Type 1': 'Electric',
        'Type 2': 'N/A',
        Japanese: 'エレブー'
    },
    {
        '#': 126,
        Name: 'Magmar',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ブーバー'
    },
    {
        '#': 127,
        Name: 'Pinsir',
        'Type 1': 'Bug',
        'Type 2': 'N/A',
        Japanese: 'カイロス'
    },
    {
        '#': 128,
        Name: 'Tauros',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ケンタロス'
    },
    {
        '#': 129,
        Name: 'Magikarp',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'コイキング'
    },
    {
        '#': 130,
        Name: 'Gyarados',
        'Type 1': 'Water',
        'Type 2': 'Flying',
        Japanese: 'ギャラドス'
    },
    {
        '#': 131,
        Name: 'Lapras',
        'Type 1': 'Water',
        'Type 2': 'Ice',
        Japanese: 'ラプラス'
    },
    {
        '#': 132,
        Name: 'Ditto',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'メタモン'
    },
    {
        '#': 133,
        Name: 'Eevee',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'イーブイ'
    },
    {
        '#': 134,
        Name: 'Vaporeon',
        'Type 1': 'Water',
        'Type 2': 'N/A',
        Japanese: 'シャワーズ'
    },
    {
        '#': 135,
        Name: 'Jolteon',
        'Type 1': 'Electric',
        'Type 2': 'N/A',
        Japanese: 'サンダース'
    },
    {
        '#': 136,
        Name: 'Flareon',
        'Type 1': 'Fire',
        'Type 2': 'N/A',
        Japanese: 'ブースター'
    },
    {
        '#': 137,
        Name: 'Porygon',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'ポリゴン'
    },
    {
        '#': 138,
        Name: 'Omanyte',
        'Type 1': 'Rock',
        'Type 2': 'Water',
        Japanese: 'オムナイト'
    },
    {
        '#': 139,
        Name: 'Omastar',
        'Type 1': 'Rock',
        'Type 2': 'Water',
        Japanese: 'オムスター'
    },
    {
        '#': 140,
        Name: 'Kabuto',
        'Type 1': 'Rock',
        'Type 2': 'Water',
        Japanese: 'カブト'
    },
    {
        '#': 141,
        Name: 'Kabutops',
        'Type 1': 'Rock',
        'Type 2': 'Water',
        Japanese: 'カブトプス'
    },
    {
        '#': 142,
        Name: 'Aerodactyl',
        'Type 1': 'Rock',
        'Type 2': 'Flying',
        Japanese: 'プテラ'
    },
    {
        '#': 143,
        Name: 'Snorlax',
        'Type 1': 'Normal',
        'Type 2': 'N/A',
        Japanese: 'カビゴン'
    },
    {
        '#': 144,
        Name: 'Articuno',
        'Type 1': 'Ice',
        'Type 2': 'Flying',
        Japanese: 'フリーザー'
    },
    {
        '#': 145,
        Name: 'Zapdos',
        'Type 1': 'Electric',
        'Type 2': 'Flying',
        Japanese: 'サンダー'
    },
    {
        '#': 146,
        Name: 'Moltres',
        'Type 1': 'Fire',
        'Type 2': 'Flying',
        Japanese: 'ファイヤー'
    },
    {
        '#': 147,
        Name: 'Dratini',
        'Type 1': 'Dragon',
        'Type 2': 'N/A',
        Japanese: 'ミニリュウ'
    },
    {
        '#': 148,
        Name: 'Dragonair',
        'Type 1': 'Dragon',
        'Type 2': 'N/A',
        Japanese: 'ハクリュー'
    },
    {
        '#': 149,
        Name: 'Dragonite',
        'Type 1': 'Dragon',
        'Type 2': 'Flying',
        Japanese: 'カイリュー'
    },
    {
        '#': 150,
        Name: 'Mewtwo',
        'Type 1': 'Psychic',
        'Type 2': 'N/A',
        Japanese: 'ミュウツー'
    },
    {
        '#': 151,
        Name: 'Mew',
        'Type 1': 'Psychic',
        'Type 2': 'N/A',
        Japanese: 'ミュウ'
    }
]

export default POKEMON;