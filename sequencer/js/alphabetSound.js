var alphabet = {
  a:{
    pos:[
        {x:40, y:530},
        {x:80, y:460},
        {x:120, y:390},
        {x:160, y:320},
        {x:200, y:250},
        {x:200, y:390},//真ん中
        {x:240, y:180},
        {x:280, y:110},
        {x:280, y:390},//真ん中
        {x:320, y:40},//top
        {x:360, y:110},
        {x:360, y:390},//真ん中
        {x:400, y:180},
        {x:440, y:250},
        {x:440, y:390},//真ん中
        {x:480, y:320},
        {x:520, y:390},
        {x:560, y:460},
        {x:600, y:530},




      ],
      sound:'audio/casio/sample.mp3'
  },
  h:{
    pos:[
      {x:40, y:40},
      {x:40, y:110},
      {x:40, y:180},
      {x:40, y:250},
      {x:40, y:320},
      {x:40, y:390},
      {x:40, y:460},
      {x:40, y:530},

      {x:110, y:320},//真ん中
      {x:200, y:320},//真ん中
      {x:280, y:320},//真ん中
      {x:360, y:320},//真ん中

      {x:440, y:40},
      {x:440, y:110},
      {x:440, y:180},
      {x:440, y:250},
      {x:440, y:320},
      {x:440, y:390},
      {x:440, y:460},
      {x:440, y:530}
    ],
    sound:'audio/casio/Fs2.mp3'
  }
}

// 読み込むサウンド用データ
var soundData = [
  // 'audio/casio/sample.mp3',
	// 'audio/casio/Cs2.mp3',
	// 'audio/casio/E2.mp3',
	// 'audio/casio/Fs2.mp3'
  'audio/505/kick.mp3',
  'audio/505/snare.mp3',
  'audio/505/hh.mp3',
  'audio/505/agogoLow.mp3',
]
  // {x:35, y:50},
  // {x:30, y:60},
  // {x:25, y:70},
  // {x:20, y:80},
  // {x:15, y:90},
  // {x:10, y:100},
  // {x:50, y:40},
  // {x:35, y:50},
  // {x:55, y:50},
  // {x:60, y:60},
  // {x:65, y:70},
  // {x:70, y:80},
  // {x:75, y:90},
  // {x:80, y:100},
  // {x:33, y:80},//真ん中線
  // {x:46, y:80},
  // {x:58, y:80},

  // b:[
  // {x:100, y:30},
  // {x:100, y:42},
  // {x:100, y:54},
  // {x:100, y:65},
  // {x:100, y:76},
  // {x:100, y:88},
  // {x:100, y:100},
  // {x:112, y:30},
  // {x:124, y:30},
  // {x:136, y:30},
  // {x:147, y:37},
  // {x:155, y:45},//右揃え
  // {x:155, y:56},//右揃え
  // {x:145, y:60},
  // {x:112, y:65},//真ん中
  // {x:124, y:65},//真ん中
  // {x:136, y:65},//真ん中
  // {x:145, y:72},
  // {x:155, y:80},//右揃え
  // {x:155, y:92},//右揃え
  // {x:147, y:98},
  // {x:112, y:100},
  // {x:124, y:100},
  // {x:136, y:100},
  //
  //
  // // c:[
  // {x:248, y:50},
  // {x:248, y:82},
  // {x:241, y:40},
  // {x:241, y:93},
  // {x:229, y:32},
  // {x:229, y:98},
  // {x:217, y:30},
  // {x:217, y:100},
  // {x:205, y:32},
  // {x:205, y:98},
  // {x:194, y:40},
  // {x:194, y:93},
  // {x:186, y:50},
  // {x:186, y:85},
  // {x:180, y:61},
  // {x:180, y:73},
  //
  // // ],
  // // d:[
  //
  // {x:280, y:30},
  // {x:280, y:42},
  // {x:280, y:54},
  // {x:280, y:66},
  // {x:280, y:78},
  // {x:280, y:89},
  // {x:280, y:100},
  // {x:292, y:30},
  // {x:304, y:30},
  // {x:292, y:100},
  // {x:304, y:100},
  // {x:315, y:33},
  // {x:315, y:95},
  // {x:324, y:40},
  // {x:324, y:90},
  // {x:334, y:48},
  // {x:334, y:82},
  // {x:340, y:59},
  // {x:340, y:71},
  // // // ],
  // // // e:[
  //
  // {x:370, y:30},
  // {x:370, y:42},
  // {x:370, y:54},
  // {x:370, y:65},
  // {x:370, y:76},
  // {x:370, y:88},
  // {x:370, y:100},
  // {x:382, y:30},
  // {x:394, y:30},
  // {x:406, y:30},
  // {x:418, y:30},
  // {x:382, y:65},
  // {x:394, y:65},
  // {x:406, y:65},
  // {x:418, y:65},
  // {x:382, y:100},
  // {x:394, y:100},
  // {x:406, y:100},
  // {x:418, y:100},
  //
  // // // ],
  // // // f:[
  // {x:450, y:30},
  // {x:450, y:42},
  // {x:450, y:54},
  // {x:450, y:66},
  // {x:450, y:78},
  // {x:450, y:89},
  // {x:450, y:100},
  // {x:462, y:30},
  // {x:474, y:30},
  // {x:486, y:30},
  // {x:498, y:30},
  // {x:462, y:66},
  // {x:474, y:66},
  // {x:486, y:66},
  //
  //
  // // // ],
  // // // g:[
  // {x:588, y:50},
  // {x:588, y:82},
  // {x:581, y:40},
  // {x:581, y:93},
  // {x:569, y:32},
  // {x:569, y:98},
  // {x:557, y:30},
  // {x:557, y:100},
  // {x:545, y:32},
  // {x:545, y:98},
  // {x:534, y:40},
  // {x:534, y:93},
  // {x:526, y:50},
  // {x:526, y:85},
  // {x:520, y:61},
  // {x:520, y:73},
  // {x:565, y:70},
  // {x:577, y:70},
  // {x:589, y:70},
  // // // ],
  // // // h:[
  // {x:620, y:30},
  // {x:620, y:42},
  // {x:620, y:54},
  // {x:620, y:65},
  // {x:620, y:76},
  // {x:620, y:88},
  // {x:620, y:100},
  // {x:680, y:30},
  // {x:680, y:42},
  // {x:680, y:54},
  // {x:680, y:65},
  // {x:680, y:76},
  // {x:680, y:88},
  // {x:680, y:100},
  // {x:632, y:65},
  // {x:644, y:65},
  // {x:656, y:65},
  // {x:668, y:65},
  //
  // // // ],
  // // // i:[
  //
  // {x:730, y:30},
  // {x:730, y:42},
  // {x:730, y:54},
  // {x:730, y:65},
  // {x:730, y:76},
  // {x:730, y:88},
  // {x:730, y:100},
  // {x:718, y:30},
  // {x:742, y:30},
  // {x:718, y:100},
  // {x:742, y:100},
  // // // ],
  // // // j:[
  // //       {x:730, y:30},
  //
  // {x:832, y:30},
  // {x:832, y:42},
  // {x:832, y:54},
  // {x:832, y:66},
  // {x:832, y:78},
  // {x:828, y:89},
  // {x:820, y:100},
  // {x:808, y:100},
  // {x:795, y:98},
  // {x:787, y:89},
  // {x:783, y:78},
  //
  // // // k:[
  // // {x:730, y:30},
  // {x:880, y:30},
  // {x:880, y:42},
  // {x:880, y:54},
  // {x:880, y:65},
  // {x:880, y:76},
  // {x:880, y:88},
  // {x:880, y:100},
  // {x:931, y:30},
  // {x:922, y:36},
  // {x:914, y:44},
  // {x:906, y:52},
  // {x:898, y:61},
  // {x:890, y:70},
  // {x:901, y:75},
  // {x:910, y:82},
  // {x:920, y:92},
  // {x:930, y:100},
  // // // ],
  // // // l:[
  // //{x:880, y:30},
  // {x:980, y:30},
  // {x:980, y:42},
  // {x:980, y:54},
  // {x:980, y:65},
  // {x:980, y:76},
  // {x:980, y:88},
  // {x:980, y:100},
  // {x:992, y:100},
  // {x:1004, y:100},
  // {x:1016, y:100},
  // {x:1028, y:100},
  //
  // // // m:[
  // {x:10, y:170},
  // {x:10, y:182},
  // {x:10, y:194},
  // {x:10, y:205},
  // {x:10, y:217},
  // {x:10, y:229},
  // {x:10, y:240},
  // {x:80, y:170},
  // {x:80, y:182},
  // {x:80, y:194},
  // {x:80, y:205},
  // {x:80, y:217},
  // {x:80, y:229},
  // {x:80, y:240},
  // {x:45, y:222},
  // {x:38, y:212},
  // {x:52, y:212},
  // {x:33, y:202},
  // {x:58, y:202},
  // {x:28, y:192},
  // {x:63, y:192},
  // {x:22, y:180},
  // {x:69, y:180},
  // // // ],
  // // // n:[
  // {x:120, y:170},
  // {x:120, y:182},
  // {x:120, y:194},
  // {x:120, y:205},
  // {x:120, y:217},
  // {x:120, y:229},
  // {x:120, y:240},
  // {x:190, y:170},
  // {x:190, y:182},
  // {x:190, y:194},
  // {x:190, y:205},
  // {x:190, y:217},
  // {x:190, y:229},
  // {x:190, y:240},
  // {x:133, y:177},
  // {x:141, y:187},
  // {x:147, y:197},
  // {x:154, y:207},
  // {x:161, y:217},
  // {x:168, y:227},
  // {x:177, y:237},
  // // // ],
  // // // o:[-36
  // {x:278, y:189},
  // {x:278, y:221},
  // {x:271, y:179},
  // {x:271, y:232},
  // {x:259, y:173},
  // {x:259, y:237},
  // {x:247, y:169},
  // {x:247, y:240},
  // {x:235, y:171},
  // {x:235, y:237},
  // {x:224, y:179},
  // {x:224, y:232},
  // {x:216, y:189},
  // {x:216, y:224},
  // {x:210, y:200},
  // {x:210, y:212},
  // {x:283, y:212},
  // {x:283, y:200},
  //
  //
  //
  //
  // // // ],
  // // // p:[
  //   {x:320, y:170},
  //   {x:320, y:182},
  //   {x:320, y:194},
  //   {x:320, y:205},
  //   {x:320, y:217},
  //   {x:320, y:229},
  //   {x:320, y:240},
  //   {x:332, y:170},
  //   {x:344, y:170},
  //   {x:356, y:173},
  //   {x:366, y:178},
  //   {x:376, y:188},
  //   {x:376, y:200},
  //   {x:366, y:210},
  //   {x:356, y:215},
  //   {x:332, y:218},
  //   {x:344, y:218},
  // //   {x:10, y:20},
  // //   {x:20, y:30},
  // //   {x:40, y:50}
  // // // ],
  // // // Q:[
  //  {x:478, y:189},
  //  {x:478, y:221},
  //  {x:471, y:179},
  //  {x:471, y:232},
  //  {x:459, y:173},
  //  {x:459, y:237},
  //  {x:447, y:169},
  //  {x:447, y:240},
  //  {x:435, y:171},
  //  {x:435, y:237},
  //  {x:424, y:179},
  //  {x:424, y:232},
  //  {x:416, y:189},
  //  {x:416, y:224},
  //  {x:410, y:200},
  //  {x:410, y:212},
  //  {x:483, y:212},
  //  {x:483, y:200},
  //  {x:461, y:225},
  //  {x:452, y:218},
  //  {x:481, y:238},
  //
  //  // r:[
  //   {x:520, y:170},
  //   {x:520, y:182},
  //   {x:520, y:194},
  //   {x:520, y:205},
  //   {x:520, y:217},
  //   {x:520, y:229},
  //   {x:520, y:240},
  //   {x:532, y:170},
  //   {x:544, y:170},
  //   {x:556, y:173},
  //   {x:566, y:178},
  //   {x:576, y:188},
  //   {x:576, y:200},
  //   {x:566, y:210},
  //   {x:556, y:215},
  //   {x:532, y:218},
  //   {x:544, y:218},
  //   {x:553, y:226},
  //   {x:563, y:232},
  //   {x:573, y:240},
  //  // ]
  // // // ],
  // // // s:[
  //   {x:656, y:178},
  //   {x:644, y:170},
  //   {x:632, y:170},
  //   {x:623, y:178},
  //   {x:618, y:188},
  //   {x:625, y:198},
  //   {x:635, y:205},
  //   {x:645, y:210},

    //   {x:666, y:178},
    //   {x:670, y:188},
    //   {x:676, y:200},
    //   {x:666, y:210},
    //   {x:656, y:215},
    //   {x:632, y:218},
    // //   {x:644, y:218},

  // // ],
  // // t:[
  // {x:10, y:20},
  // {x:20, y:30},
  // {x:40, y:50}
  // // ],
  // // u:[
  //   {x:10, y:20},
  //   {x:20, y:30},
  //   {x:40, y:50}
  // // ],
  // // v:[
  //   {x:10, y:20},
  //   {x:20, y:30},
  //   {x:40, y:50}
  // // ],
  // // w:[
  //   {x:10, y:20},
  //   {x:20, y:30},
  //   {x:40, y:50}
  // // ],
  // // x:[
  // {x:10, y:20},
  // {x:20, y:30},
  // {x:40, y:50}
  // // ],
  // // y:[
  //   {x:10, y:20},
  //   {x:20, y:30},
  //   {x:40, y:50}
  // // ],
  // // z:[
  // {x:10, y:20},
  // {x:20, y:30},
  // {x:40, y:50}
