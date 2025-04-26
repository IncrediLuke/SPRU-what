// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v1 = {
  name: "Spru-what?",
  version: "V1",
  date: "2025",
  folder: "asset-v1/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 5109,
  bpm: 188,
  totalframe: 244,
  nbpolo: 7,
  bonusloopA: true, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "#002738",
  col0: "#6ab0c9",
  col1: "#53a6dc",
  col2: "#002738",
  col3: "#316f8c",
  col4: "#56cbf2",
  animearray: [
    {
      name: "1_oren",
      color: "FF6F00",
      uniqsnd: !1, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "2_raddy",
      color: "FF0000",
      uniqsnd: !1,
    },
    {
      name: "3_clukr",
      color: "B9BEBF",
      uniqsnd: !1,
    },
    {
      name: "4_fun_bot",
      color: "FFC633",
      uniqsnd: !1,
    },
    {
      name: "5_vineria",
      color: "4DFF5B",
      uniqsnd: !1,
    },
    {
      name: "6_grey",
      color: "808080",
      uniqsnd: !1,
    },
    {
      name: "7_brud",
      color: "804400",
      uniqsnd: !0,
    },
    {
      name: "8_garnold",
      color: "FFC633",
      uniqsnd: !1,
    },
    {
      name: "9_owackx",
      color: "A5FF00",
      uniqsnd: !1,
    },
    {
      name: "10_sky",
      color: "4DF6FF",
      uniqsnd: !1,
    },
    {
      name: "11_mr_sun",
      color: "FFE800",
      uniqsnd: !1,
    },
    {
      name: "12_durple",
      color: "B100FF",
      uniqsnd: !1,
    },
    {
      name: "13_mr_tree",
      color: "00CC11",
      uniqsnd: !1,
    },
    {
      name: "14_simon",
      color: "FFE800",
      uniqsnd: !1,
    },
    {
      name: "15_tunner",
      color: "E6BE8A",
      uniqsnd: !1,
    },
    {
      name: "16_mr_fun_computer",
      color: "BABEBF",
      uniqsnd: !1,
    },
    {
      name: "17_wenda",
      color: "FFFFFF",
      uniqsnd: !1,
    },
    {
      name: "18_pinki",
      color: "FC7FEB",
      uniqsnd: !1,
    },
    {
      name: "19_jevin",
      color: "0000FF",
      uniqsnd: !1,
    },
    {
      name: "20_black",
      color: "000000",
      uniqsnd: !1,
    },
  ],
  bonusarray: [
    {
      name: "Phase 2",
      src: "b1-v1-Phase_2-hb",
      code: "5,6,10,13,19",
      sound: "bonus-Phase_2",
      aspire: "aspire-Phase_2",
      loop: 4, // ← Every bonus have its own loops in this version
    },
  ],
};