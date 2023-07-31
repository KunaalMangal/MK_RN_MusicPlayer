import {Track} from 'react-native-track-player';

export const audioPlayLists: Track[] = [
  {
    id: 1,
    title: 'Rama Ashtakam',
    artist: 'Rama Ashtakam',
    album: 'Rama Ashtakam',
    artwork: require('@app/assets/images/trackArtWork/Hanuman_Chalisa_4x3.jpg'),
    url: require('@app/assets/audio/Rama_Ashtakam.mp3'),
  },
  {
    id: 2,
    title: 'Hanuman Chalisa',
    artist: 'Late. Gulshan Kumar, HariHaran',
    album: 'Hanuman Chalisa',
    artwork: require('@app/assets/images/trackArtWork/Hanuman_Chalisa_4x3.jpg'),
    url: require('@app/assets/audio/shree-hanuman-chalisa.mp3'),
  },
  {
    id: 3,
    title: 'Shreem Ram Rajyaabhishek Stuti',
    artist: 'Devendra Pathak ji maharaj',
    album: 'Shreem Ram Rajyaabhishek Stuti',
    artwork: require('@app/assets/images/trackArtWork/Hanuman_Chalisa_4x3.jpg'),
    url: require('@app/assets/audio/ram_rajyaabhishek_stuti.mp3'),
  },
];
