import { IColumn, IRow } from '../../src/code/table/tableState'
import { Language } from './languages'

enum ColumnName {
  A = 'a',
  I = 'i',
  U = 'u',
  E = 'e',
  O = 'o',
  Ya = 'ya',
  Yu = 'yu',
  Yo = 'yo'
}

const columns: IColumn[] = [
  { name: ColumnName.A, language: Language.Japanese },
  { name: ColumnName.I, language: Language.Japanese },
  { name: ColumnName.U, language: Language.Japanese },
  { name: ColumnName.E, language: Language.Japanese },
  { name: ColumnName.O, language: Language.Japanese },
  { name: ColumnName.Ya, language: Language.Japanese },
  { name: ColumnName.Yu, language: Language.Japanese },
  { name: ColumnName.Yo, language: Language.Japanese }
]

const rowHeaders = [
  '∅',
  'K',
  'S',
  'T',
  'N',
  'H',
  'M',
  'Y',
  'R',
  'W',
  'G',
  'Z',
  'D',
  'B',
  'P'
]

const rowsKatakana: IRow[] = [
  {
    [ColumnName.A]: ['ア', 'a [a]'],
    [ColumnName.I]: ['イ', 'i [i]'],
    [ColumnName.U]: ['ウ', 'u [ɯ]'],
    [ColumnName.E]: ['エ', 'e [e]'],
    [ColumnName.O]: ['オ', 'o [o]'],
    [ColumnName.Ya]: [],
    [ColumnName.Yu]: [],
    [ColumnName.Yo]: []
  },
  {
    [ColumnName.A]: ['カ', 'ka [ka]'],
    [ColumnName.I]: ['キ', 'ki [ki]'],
    [ColumnName.U]: ['ク', 'ku [kɯ]'],
    [ColumnName.E]: ['ケ', 'ke [ke]'],
    [ColumnName.O]: ['コ', 'ko [ko]'],
    [ColumnName.Ya]: ['キャ', 'kya [kʲa]'],
    [ColumnName.Yu]: ['キュ', 'kyu [kʲɯ]'],
    [ColumnName.Yo]: ['キョ', 'kyo [kʲo]']
  },
  {
    [ColumnName.A]: ['サ', 'sa [sa]'],
    [ColumnName.I]: ['シ', 'shi [ɕi]'],
    [ColumnName.U]: ['ス', 'su [sɯ]'],
    [ColumnName.E]: ['セ', 'se [se]'],
    [ColumnName.O]: ['ソ', 'so [so]'],
    [ColumnName.Ya]: ['シャ', 'sha [ɕa]'],
    [ColumnName.Yu]: ['シュ', 'shu [ɕɯ]'],
    [ColumnName.Yo]: ['ショ', 'sho [ɕo]']
  },
  {
    [ColumnName.A]: ['タ', 'ta [ta]'],
    [ColumnName.I]: ['チ', 'chi [t͡ɕi]'],
    [ColumnName.U]: ['ツ', 'tsu [t͡sɯ]'],
    [ColumnName.E]: ['テ', 'te [te]'],
    [ColumnName.O]: ['ト', 'to [to]'],
    [ColumnName.Ya]: ['チャ', 'cha [t͡ɕa]'],
    [ColumnName.Yu]: ['チュ', 'chu [t͡ɕɯ]'],
    [ColumnName.Yo]: ['チョ', 'cho [t͡ɕo]']
  },
  {
    [ColumnName.A]: ['ナ', 'na [na]'],
    [ColumnName.I]: ['ニ', 'ni [ɲi]'],
    [ColumnName.U]: ['ヌ', 'nu [nɯ]'],
    [ColumnName.E]: ['ネ', 'ne [ne]'],
    [ColumnName.O]: ['ノ', 'no [no]'],
    [ColumnName.Ya]: ['ニャ', 'nya [ɲa]'],
    [ColumnName.Yu]: ['ニュ', 'nyu [ɲɯ]'],
    [ColumnName.Yo]: ['ニョ', 'nyo [ɲo]']
  },
  {
    [ColumnName.A]: ['ハ', 'ha [ha]'],
    [ColumnName.I]: ['ヒ', 'hi [çi]'],
    [ColumnName.U]: ['フ', 'fu [ɸɯ]'],
    [ColumnName.E]: ['ヘ', 'he [he]'],
    [ColumnName.O]: ['ホ', 'ho [ho]'],
    [ColumnName.Ya]: ['ヒャ', 'hya [ça]'],
    [ColumnName.Yu]: ['ヒュ', 'hyu [çɯ]'],
    [ColumnName.Yo]: ['ヒョ', 'hyo [ço]']
  },
  {
    [ColumnName.A]: ['マ', 'ma [ma]'],
    [ColumnName.I]: ['ミ', 'mi [mi]'],
    [ColumnName.U]: ['ム', 'languagemu [mɯ]'],
    [ColumnName.E]: ['メ', 'me [me]'],
    [ColumnName.O]: ['モ', 'mo [mo]'],
    [ColumnName.Ya]: ['ミャ', 'mya [mʲa]'],
    [ColumnName.Yu]: ['ミュ', 'myu [mʲɯ]'],
    [ColumnName.Yo]: ['ミョ', 'myo [mʲo]']
  },
  {
    [ColumnName.A]: ['ヤ', 'ya [ja]'],
    [ColumnName.I]: [],
    [ColumnName.U]: ['ユ', 'yu [jɯ]'],
    [ColumnName.E]: [],
    [ColumnName.O]: ['ヨ', 'yo [jo]'],
    [ColumnName.Ya]: [],
    [ColumnName.Yu]: [],
    [ColumnName.Yo]: []
  },
  {
    [ColumnName.A]: ['ラ', 'ra [ɾa]'],
    [ColumnName.I]: ['リ', 'ri [ɾi]'],
    [ColumnName.U]: ['ル', 'ru [ɾɯ]'],
    [ColumnName.E]: ['レ', 're [ɾe]'],
    [ColumnName.O]: ['ロ', 'ro [ɾo]'],
    [ColumnName.Ya]: ['リャ', 'rya [ɾʲa]'],
    [ColumnName.Yu]: ['リュ', 'ryu [ɾʲɯ]'],
    [ColumnName.Yo]: ['リョ', 'ryo [ɾʲo]']
  },
  {
    [ColumnName.A]: ['ワ', 'wa [ɰa]'],
    [ColumnName.I]: ['ヰ', 'wi [i]'],
    [ColumnName.U]: [],
    [ColumnName.E]: ['ヱ', 'we [e]'],
    [ColumnName.O]: ['ヲ', 'wo [o]'],
    [ColumnName.Ya]: [],
    [ColumnName.Yu]: [],
    [ColumnName.Yo]: []
  },
  {
    [ColumnName.A]: ['ガ', 'ga [ɡa]'],
    [ColumnName.I]: ['ギ', 'gi [ɡi]'],
    [ColumnName.U]: ['グ', 'gu [ɡɯ]'],
    [ColumnName.E]: ['ゲ', 'ge [ɡe]'],
    [ColumnName.O]: ['ゴ', 'go [ɡo]'],
    [ColumnName.Ya]: ['ギャ', 'gya [ɡʲa]'],
    [ColumnName.Yu]: ['ギュ', 'gyu [ɡʲɯ]'],
    [ColumnName.Yo]: ['ギョ', 'gyo [ɡʲo]']
  },
  {
    [ColumnName.A]: ['ザ', 'za [za]'],
    [ColumnName.I]: ['ジ', 'ji [(d)ʑi]'],
    [ColumnName.U]: ['ズ', 'zu [(d)zɯ]'],
    [ColumnName.E]: ['ゼ', 'ze [ze]'],
    [ColumnName.O]: ['ゾ', 'zo [zo]'],
    [ColumnName.Ya]: ['ジャ', 'ja [(d)ʑa]'],
    [ColumnName.Yu]: ['ジュ', 'ju [(d)ʑɯ]'],
    [ColumnName.Yo]: ['ジョ', 'jo [(d)ʑo]']
  },
  {
    [ColumnName.A]: ['ダ', 'da [da]'],
    [ColumnName.I]: ['ヂ', 'ji [(d)ʑi]'],
    [ColumnName.U]: ['ヅ', 'zu [(d)zɯ]'],
    [ColumnName.E]: ['デ', 'de [de]'],
    [ColumnName.O]: ['ド', 'do [do]'],
    [ColumnName.Ya]: ['ヂャ', 'ja [(d)ʑa]'],
    [ColumnName.Yu]: ['ヂュ', 'ju [(d)ʑɯ]'],
    [ColumnName.Yo]: ['ヂョ', 'jo [(d)ʑo]']
  },
  {
    [ColumnName.A]: ['バ', 'ba [ba]'],
    [ColumnName.I]: ['ビ', 'bi [bi]'],
    [ColumnName.U]: ['ブ', 'bu [bɯ]'],
    [ColumnName.E]: ['ベ', 'be [be]'],
    [ColumnName.O]: ['ボ', 'bo [bo]'],
    [ColumnName.Ya]: ['ビャ', 'bya [bʲa]'],
    [ColumnName.Yu]: ['ビュ', 'byu [bʲɯ]'],
    [ColumnName.Yo]: ['ビョ', 'byo [bʲo]']
  },
  {
    [ColumnName.A]: ['パ', 'pa [pa]'],
    [ColumnName.I]: ['ピ', 'pi [pi]'],
    [ColumnName.U]: ['プ', 'pu [pɯ]'],
    [ColumnName.E]: ['ペ', 'pe [pe]'],
    [ColumnName.O]: ['ポ', 'po [po]'],
    [ColumnName.Ya]: ['ピャ', 'pya [pʲa]'],
    [ColumnName.Yu]: ['ピュ', 'pyu [pʲɯ]'],
    [ColumnName.Yo]: ['ピョ', 'pyo [pʲo]']
  }
]

const rowsHirigana = [
  {
    [ColumnName.A]: ['あ', 'a [a]'],
    [ColumnName.I]: ['い', 'i [i]'],
    [ColumnName.U]: ['う', 'u [ɯ]'],
    [ColumnName.E]: ['え', 'e [e]'],
    [ColumnName.O]: ['お', 'o [o]'],
    [ColumnName.Ya]: [],
    [ColumnName.Yu]: [],
    [ColumnName.Yo]: []
  },
  {
    [ColumnName.A]: ['か', 'ka [ka]'],
    [ColumnName.I]: ['き', 'ki [ki]'],
    [ColumnName.U]: ['く', 'ku [kɯ]'],
    [ColumnName.E]: ['け', 'ke [ke]'],
    [ColumnName.O]: ['こ', 'ko [ko]'],
    [ColumnName.Ya]: ['きゃ', 'kya [kʲa]'],
    [ColumnName.Yu]: ['きゅ', 'kyu [kʲɯ]'],
    [ColumnName.Yo]: ['きょ', 'kyo [kʲo]']
  },
  {
    [ColumnName.A]: ['さ', 'sa [sa]'],
    [ColumnName.I]: ['し', 'shi [ɕi]'],
    [ColumnName.U]: ['す', 'su [sɯ]'],
    [ColumnName.E]: ['せ', 'se [se]'],
    [ColumnName.O]: ['そ', 'so [so]'],
    [ColumnName.Ya]: ['しゃ', 'sha [ɕa]'],
    [ColumnName.Yu]: ['しゅ', 'shu [ɕɯ]'],
    [ColumnName.Yo]: ['しょ', 'sho [ɕo]']
  },
  {
    [ColumnName.A]: ['た', 'ta [ta]'],
    [ColumnName.I]: ['ち', 'chi [tɕi]'],
    [ColumnName.U]: ['つ', 'tsu [tsɯ]'],
    [ColumnName.E]: ['て', 'te [te]'],
    [ColumnName.O]: ['と', 'to [to]'],
    [ColumnName.Ya]: ['ちゃ', 'cha [tɕa]'],
    [ColumnName.Yu]: ['ちゅ', 'chu [tɕɯ]'],
    [ColumnName.Yo]: ['ちょ', 'cho [tɕo]']
  },
  {
    [ColumnName.A]: ['な', 'na [na]'],
    [ColumnName.I]: ['に', 'ni [ɲi]'],
    [ColumnName.U]: ['ぬ', 'nu [nɯ]'],
    [ColumnName.E]: ['ね', 'ne [ne]'],
    [ColumnName.O]: ['の', 'no [no]'],
    [ColumnName.Ya]: ['にゃ', 'nya [ɲa]'],
    [ColumnName.Yu]: ['にゅ', 'nyu [ɲɯ]'],
    [ColumnName.Yo]: ['にょ', 'nyo [ɲo]']
  },
  {
    [ColumnName.A]: ['は', 'ha [ha]', '([ɰa] as particle)'],
    [ColumnName.I]: ['ひ', 'hi [çi]'],
    [ColumnName.U]: ['ふ', 'fu [ɸɯ]'],
    [ColumnName.E]: ['へ', 'he [he]', '([e] as particle)'],
    [ColumnName.O]: ['ほ', 'ho [ho]'],
    [ColumnName.Ya]: ['ひゃ', 'hya [ça]'],
    [ColumnName.Yu]: ['ひゅ', 'hyu [çɯ]'],
    [ColumnName.Yo]: ['ひょ', 'hyo [ço]']
  },
  {
    [ColumnName.A]: ['ま', 'ma [ma]'],
    [ColumnName.I]: ['み', 'mi [mi]'],
    [ColumnName.U]: ['む', 'mu [mɯ]'],
    [ColumnName.E]: ['め', 'me [me]'],
    [ColumnName.O]: ['も', 'mo [mo]'],
    [ColumnName.Ya]: ['みゃ', 'mya [mʲa]'],
    [ColumnName.Yu]: ['みゅ', 'myu [mʲɯ]'],
    [ColumnName.Yo]: ['みょ', 'myo [mʲo]']
  },
  {
    [ColumnName.A]: ['や', 'ya [ja]'],
    [ColumnName.I]: [],
    [ColumnName.U]: ['ゆ', 'yu [jɯ]'],
    [ColumnName.E]: [],
    [ColumnName.O]: ['よ', 'yo [jo]'],
    [ColumnName.Ya]: [],
    [ColumnName.Yu]: [],
    [ColumnName.Yo]: []
  },
  {
    [ColumnName.A]: ['ら', 'ra [ɾa]'],
    [ColumnName.I]: ['り', 'ri [ɾi]'],
    [ColumnName.U]: ['る', 'ru [ɾɯ]'],
    [ColumnName.E]: ['れ', 're [ɾe]'],
    [ColumnName.O]: ['ろ', 'ro [ɾo]'],
    [ColumnName.Ya]: ['りゃ', 'rya [ɾʲa]'],
    [ColumnName.Yu]: ['りゅ', 'ryu [ɾʲɯ]'],
    [ColumnName.Yo]: ['りょ', 'ryo [ɾʲo]']
  },
  {
    [ColumnName.A]: ['わ', 'wa [ɰa]'],
    [ColumnName.I]: ['( ゐ )', 'wi [i]'],
    [ColumnName.U]: [],
    [ColumnName.E]: ['( ゑ )', 'we [e]'],
    [ColumnName.O]: ['を', 'wo [o]	'],
    [ColumnName.Ya]: [],
    [ColumnName.Yu]: [],
    [ColumnName.Yo]: []
  },
  {
    [ColumnName.A]: ['が', 'ga [ɡa]'],
    [ColumnName.I]: ['ぎ', 'gi [ɡi]'],
    [ColumnName.U]: ['ぐ', 'gu [ɡɯ]'],
    [ColumnName.E]: ['げ', 'ge [ɡe]'],
    [ColumnName.O]: ['ご', 'go [ɡo]'],
    [ColumnName.Ya]: ['ぎゃ', 'gya [ɡʲa]'],
    [ColumnName.Yu]: ['ぎゅ', 'gyu [ɡʲɯ]'],
    [ColumnName.Yo]: ['ぎょ', 'gyo [ɡʲo]']
  },
  {
    [ColumnName.A]: ['ざ', 'za [(d)za]'],
    [ColumnName.I]: ['じ', 'ji [(d)ʑi]'],
    [ColumnName.U]: ['ず', 'zu [(d)zɯ]'],
    [ColumnName.E]: ['ぜ', 'ze [(d)ze]'],
    [ColumnName.O]: ['ぞ', 'zo [(d)zo]'],
    [ColumnName.Ya]: ['じゃ', 'ja [(d)ʑa]'],
    [ColumnName.Yu]: ['じゅ', 'ju [(d)ʑɯ]'],
    [ColumnName.Yo]: ['じょ', 'jo [(d)ʑo]']
  },
  {
    [ColumnName.A]: ['だ', 'da [da]'],
    [ColumnName.I]: ['ぢ', 'ji, dji, jyi [(d)ʑi]'],
    [ColumnName.U]: ['づ', 'dzu, zu [(d)zɯ]'],
    [ColumnName.E]: ['で', 'de [de]'],
    [ColumnName.O]: ['ど', 'do [do]'],
    [ColumnName.Ya]: ['( ぢゃ )', 'ja [(d)ʑa]'],
    [ColumnName.Yu]: ['( ぢゅ )', 'ju [(d)ʑɯ]'],
    [ColumnName.Yo]: ['( ぢょ )', 'jo [(d)ʑo]']
  },
  {
    [ColumnName.A]: ['ば', 'ba [ba]'],
    [ColumnName.I]: ['び', 'bi [bi]'],
    [ColumnName.U]: ['ぶ', 'bu [bɯ]'],
    [ColumnName.E]: ['べ', 'be [be]'],
    [ColumnName.O]: ['ぼ', 'bo [bo]'],
    [ColumnName.Ya]: ['びゃ', 'bya [bʲa]'],
    [ColumnName.Yu]: ['びゅ', 'byu [bʲɯ]'],
    [ColumnName.Yo]: ['びょ', 'byo [bʲo]']
  },
  {
    [ColumnName.A]: ['ぱ', 'pa [pa]'],
    [ColumnName.I]: ['ぴ', 'pi [pi]'],
    [ColumnName.U]: ['ぷ', 'pu [pɯ]'],
    [ColumnName.E]: ['ぺ', 'pe [pe]'],
    [ColumnName.O]: ['ぽ', 'po [po]'],
    [ColumnName.Ya]: ['ぴゃ', 'pya [pʲa]'],
    [ColumnName.Yu]: ['ぴゅ', 'pyu [pʲɯ]'],
    [ColumnName.Yo]: ['ぴょ', 'pyo [pʲo]']
  }
]

export const japaneseKatakanaTable = {
  title: 'Katakana',
  rows: rowsKatakana,
  columns,
  rowHeaders
}

export const japaneseHiriganaTable = {
  title: 'Hirigana',
  rows: rowsHirigana,
  columns,
  rowHeaders
}
