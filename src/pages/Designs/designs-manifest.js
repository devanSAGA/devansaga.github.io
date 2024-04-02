import GaaraImgSrc from '../../assets/designs/naruto/Gaara.jpg';
import JiraiyaImgSrc from '../../assets/designs/naruto/Jiraiya.jpg';
import NejiImgSrc from '../../assets/designs/naruto/Neji.jpg';
import OrochimaruImgSrc from '../../assets/designs/naruto/Orochimaru.jpg';
import RockLeeImgSrc from '../../assets/designs/naruto/RockLee.jpg';

import MarioImage1Src from '../../assets/designs/mario/mario_1.jpg';
import MarioImage2Src from '../../assets/designs/mario/mario_2.jpg';
import MarioImage3Src from '../../assets/designs/mario/mario_3.jpg';
import MarioImage4Src from '../../assets/designs/mario/mario_4.jpg';
import MarioImage5Src from '../../assets/designs/mario/mario_5.jpg'; 

import CartoonsImage1Src from '../../assets/designs/cartoons/swatkats_1.jpg';
import CartoonsImage2Src from '../../assets/designs/cartoons/swatkats_2.jpg';
import CartoonsImage3Src from '../../assets/designs/cartoons/aku.jpg';
import CartoonsImage4Src from '../../assets/designs/cartoons/jack.jpg';
import CartoonsImage5Src from '../../assets/designs/cartoons/dexter.jpg';
import CartoonsImage6Src from '../../assets/designs/cartoons/deedee.jpg';
import CartoonsImage7Src from '../../assets/designs/cartoons/mandark.jpg';
import CartoonsImage8Src from '../../assets/designs/cartoons/ed_edd_eddy.jpg';

import GOTGImage1Src from '../../assets/designs/gotg/gotg_1.jpg';
import GOTGImage2Src from '../../assets/designs/gotg/gotg_2.jpg';
import GOTGImage3Src from '../../assets/designs/gotg/gotg_3.jpg';
import GOTGImage4Src from '../../assets/designs/gotg/gotg_4.jpg';
import GOTGImage5Src from '../../assets/designs/gotg/gotg_5.jpg';
import GOTGImage6Src from '../../assets/designs/gotg/gotg_6.jpg';
import GOTGImage7Src from '../../assets/designs/gotg/gotg_7.jpg';

import MBPImage1Src from '../../assets/designs/mbp/mbp_1.jpg';
import MBPImage2Src from '../../assets/designs/mbp/mbp_2.jpg';
import MBPImage3Src from '../../assets/designs/mbp/mbp_4.jpg';
import MBPImage4Src from '../../assets/designs/mbp/mbp_5.jpg';
import MBPImage5Src from '../../assets/designs/mbp/mbp_3.jpg';

import RandomImage1Src from '../../assets/designs/random/random_1.jpg';
import RandomImage2Src from '../../assets/designs/random/random_2.jpg';
import RandomImage3Src from '../../assets/designs/random/random_3.jpg';
import RandomImage4Src from '../../assets/designs/random/random_4.jpg';
import RandomImage5Src from '../../assets/designs/random/random_5.jpg';
import RandomImage6Src from '../../assets/designs/random/random_6.jpg';
import RandomImage7Src from '../../assets/designs/random/random_7.jpg';
import RandomImage8Src from '../../assets/designs/random/random_8.jpg';

import TopicalishImage1Src from '../../assets/designs/topicalish/topicalish_1.jpg';
import TopicalishImage2Src from '../../assets/designs/topicalish/topicalish_2.jpg';
import TopicalishImage3Src from '../../assets/designs/topicalish/topicalish_3.jpg';
import TopicalishImage4Src from '../../assets/designs/topicalish/topicalish_4.jpg';
import TopicalishImage5Src from '../../assets/designs/topicalish/topicalish_5.jpg';
import TopicalishImage6Src from '../../assets/designs/topicalish/topicalish_6.jpg';
import TopicalishImage7Src from '../../assets/designs/topicalish/topicalish_7.jpg';

import SpecialDaysImage1Src from '../../assets/designs/special_days/special_days_1.jpg';
import SpecialDaysImage2Src from '../../assets/designs/special_days/special_days_2.jpg';
import SpecialDaysImage3Src from '../../assets/designs/special_days/special_days_3.jpg';
import SpecialDaysImage4Src from '../../assets/designs/special_days/special_days_4.jpg';
import SpecialDaysImage5Src from '../../assets/designs/special_days/special_days_5.jpg';
import SpecialDaysImage6Src from '../../assets/designs/special_days/special_days_6.jpg';

import MothersDayImage1Src from '../../assets/designs/mothersday/mothersday_1.jpg';
import MothersDayImage2Src from '../../assets/designs/mothersday/mothersday_2.jpg';
import MothersDayImage3Src from '../../assets/designs/mothersday/mothersday_3.jpg';
import MothersDayImage4Src from '../../assets/designs/mothersday/mothersday_4.jpg';
import MothersDayImage5Src from '../../assets/designs/mothersday/mothersday_5.jpg';
import MothersDayImage6Src from '../../assets/designs/mothersday/mothersday_6.jpg';
import MothersDayImage7Src from '../../assets/designs/mothersday/mothersday_7.jpg';
import MothersDayImage8Src from '../../assets/designs/mothersday/mothersday_8.jpg';
import MothersDayImage9Src from '../../assets/designs/mothersday/mothersday_9.jpg';
import MothersDayImage10Src from '../../assets/designs/mothersday/mothersday_10.jpg';

export const DESIGNS_ENUM = {
  NARUTO: "naruto",
  MARIO: "mario",
  CARTOONS: "cartoons",
  GOTG: "gotg",
  MINIMALIST_BOLLYWOOD_POSTERS: "mbp",
  RANDOM: "random",
  MOTHERS_DAY: "mothersday",
  TOPICALISH: "topicalish",
  SPECIAL_DAYS: "specialdays"
};

export const DESIGNS_OF_PUNS_CATEGORY = ['mothersday', 'topicalish', 'specialdays'];
export const DESIGNS_OF_ILLUSTRATIONS_CATEGORY = ['naruto', 'mario', 'cartoons', 'gotg', 'mbp', 'random'];

export const DESIGNS_MANIFEST = {
  "topicalish": {
    path: 'designs/topicalish',
    title: 'Topicalish Posters',
    coverImage: TopicalishImage2Src,
    coverImageAlt: 'Minimal poster around the news of launch of iPhone 13',
    dimensions: {
      height: '500px',
      width: '500px',
    },
    designs: [
      {
        description: 'This is a tribute to AB de Villiers on his retirement from international cricket. Playing on his iconic nickname "Mr. 360", I\'ve transformed it into "Mr. 2(pi)", where the \'pi\' also represents his jersey number, 17.',
        src: TopicalishImage1Src
      },
      {
        description: 'This refers to the launch of iPhone 13, where many felt it is same as the iPhone 12. Thus I have written iPhone 13 equal to iPhone Do-bara? Dobara means repeated in hindi, and bara means 12 in hindi. So there is a bit of wordplay there.',
        src: TopicalishImage2Src
      },
      {
        description: 'Made this during pandemic. If you look closely, the prominent part of the design is trianges. Just aligning and positioning bunch of triangles is forming the human design.',
        src: TopicalishImage3Src
      },
      {
        description: 'This celebrates India\'s growth in FinTech industry, thus the text "Leveled UP!", where the word UPI is hidden as well. It refers to the milestone where UPI transaction valued over 100 billion dollars were recorded in a single month!',
        src: TopicalishImage4Src
      },
      {
        description: 'Made this design real quick on 20 years of Batman!',
        src: TopicalishImage5Src
      },
      {
        description: 'A nod to the viral sensation, where a simple egg captured hearts and became the most liked photo on Instagram.',
        src: TopicalishImage6Src
      },
      {
        description: 'This refers to the removal of audiojack from iPhone 7.',
        src: TopicalishImage7Src
      }
    ]
  },
  "specialdays": {
    path: 'designs/specialdays',
    title: 'Special Days',
    coverImage: SpecialDaysImage1Src,
    coverImageAlt: 'Cover image',
    dimensions: {
      height: '500px',
      width: '500px',
    },
    designs: [
      {
        src: SpecialDaysImage1Src
      },
      {
        src: SpecialDaysImage2Src
      },
      {
        src: SpecialDaysImage3Src
      },
      {
        src: SpecialDaysImage4Src
      },
      {
        src: SpecialDaysImage5Src,
        dimensions: {
          height: '400px',
          width: '750px'
        }
      },
      {
        src: SpecialDaysImage6Src
      }
    ]
  },
  "mothersday": {
    path: 'designs/mothersday',
    title: "Mother's Day Special",
    coverImage: MothersDayImage1Src,
    coverImageAlt: 'Cover image',
    dimensions: {
      height: '500px',
      width: '500px',
    },
    designs: [
      {
        src: MothersDayImage1Src
      },
      {
        src: MothersDayImage2Src
      },
      {
        src: MothersDayImage3Src
      },
      {
        src: MothersDayImage4Src
      },
      {
        src: MothersDayImage5Src,
      },
      {
        src: MothersDayImage6Src
      },
      {
        src: MothersDayImage10Src
      },
      {
        src: MothersDayImage8Src
      },
      {
        src: MothersDayImage9Src,
      },
      {
        src: MothersDayImage7Src
      }
    ]
  },
  "naruto": {
    path: 'designs/naruto',
    title: 'Naruto Series',
    coverImage: JiraiyaImgSrc,
    coverImageAlt: 'Naruto Poster',
    dimensions: {
      height: '500px',
      width: '350px',
    },
    designs: [
      {
        title: 'Gaara',
        src: GaaraImgSrc
      },
      {
        title: 'Neji',
        src: NejiImgSrc
      },
      {
        title: 'Jiraiya',
        src: JiraiyaImgSrc
      },
      {
        title: 'Orochimaru',
        src: OrochimaruImgSrc
      },
      {
        title: 'Rock Lee',
        src: RockLeeImgSrc
      }
    ]
  },
  "mario": {
    path: 'designs/mario',
    title: 'Mario Series',
    coverImage: MarioImage1Src,
    coverImageAlt: 'Mario Poster',
    dimensions: {
      height: '500px',
      width: '500px',
    },
    designs: [
      {
        title: "1 UP",
        src: MarioImage1Src
      },
      {
        title: "Mario",
        src: MarioImage2Src
      },
      {
        title: "Boo",
        src: MarioImage3Src
      },
      {
        title: "Piranha Plant",
        src: MarioImage4Src
      },
      {
        title: "Banzai Bill",
        src: MarioImage5Src
      },
    ]
  },
  "cartoons": {
    path: 'designs/cartoons',
    title: 'Nostalgic Cartoons Series',
    coverImage: CartoonsImage1Src,
    coverImageAlt: 'Swat Kats Poster',
    dimensions: {
      height: '500px',
      width: '500px',
    },
    designs: [
      {
        title: 'Swat Kats',
        src: CartoonsImage1Src
      },
      {
        title: 'Swat Kats',
        src: CartoonsImage2Src
      },
      {
        title: 'Aku',
        src: CartoonsImage3Src
      },
      {
        title: 'Samurai Jack',
        src: CartoonsImage4Src
      },
      {
        title: 'Dexter',
        src: CartoonsImage5Src
      },
      {
        title: 'DeeDee',
        src: CartoonsImage6Src
      },
      {
        title: 'Mandark',
        src: CartoonsImage7Src
      },
      {
        title: 'Ed Edd & Eddy',
        src: CartoonsImage8Src
      }
    ]
  },
  "gotg": {
    path: 'designs/gotg',
    title: 'GOTG Series',
    coverImage: GOTGImage1Src,
    coverImageAlt: 'Poster of starlord from guardians of the galaxy',
    dimensions: {
      height: '500px',
      width: '500px',
    },
    designs: [
      {
        title: 'Baby Groot',
        src: GOTGImage1Src
      },
      {
        title: 'Gamora',
        src: GOTGImage2Src
      },
      {
        title: 'Mantis',
        src: GOTGImage3Src
      },
      {
        title: 'Starlord',
        src: GOTGImage4Src
      },
      {
        title: 'Drax',
        src: GOTGImage5Src
      },
      {
        title: 'Yondu',
        src: GOTGImage6Src
      },
      {
        title: 'Rocket',
        src: GOTGImage7Src
      }
    ]
  },
  "mbp": {
    path: 'designs/mbp',
    title: 'Minimalist Bollywood Posters',
    coverImage: MBPImage3Src,
    coverImageAlt: 'Poster of movie called Munnabhai MBBS',
    dimensions: {
      height: '500px',
      width: '350px',
    },
    designs: [
      {
        title: 'Andaz Apna Apna',
        src: MBPImage1Src
      },
      {
        title: '3 Idiots',
        src: MBPImage2Src
      },
      {
        title: 'Munnabhai MBBS',
        src: MBPImage3Src
      },
      {
        title: 'Welcome',
        src: MBPImage4Src
      },
      {
        title: 'Satte Pe Satta',
        src: MBPImage5Src
      }
    ]
  },
  "random": {
    path: 'designs/misc',
    title: 'Miscellaneous Posters',
    coverImage: RandomImage3Src,
    coverImageAlt: 'Poster of Spiderman',
    dimensions: {
      height: '500px',
      width: '350px',
    },
    designs: [
      {
        title: 'Gohan',
        src: RandomImage1Src
      },
      {
        title: 'Han Solo',
        dimensions: {
          height: "500px",
          width: "500px"
        },
        src: RandomImage2Src
      },
      {
        title: 'Nurture',
        src: RandomImage4Src
      },
      {
        title: 'Joker',
        src: RandomImage8Src
      },
      {
        title: 'Miles Morales',
        dimensions: {
          height: "500px",
          width: "500px"
        },
        src: RandomImage3Src
      },
      {
        title: 'Pokeball vs Dragonball',
        dimensions: {
          height: "500px",
          width: "500px"
        },
        src: RandomImage6Src
      },
      {
        title: 'The Ocean',
        src: RandomImage5Src
      },
      {
        title: 'Spirit of Music',
        dimensions: {
          height: "500px",
          width: "500px"
        },
        src: RandomImage7Src
    }
    ]
  }
};