/*
,--------.,--.                ,--.,--.  ,--.    ,--.  ,--.                                                     ,--.   ,--.
'--.  .--'|  ,---.  ,---.     |  |`--',-'  '-.,-'  '-.|  | ,---.     ,--,--,--. ,---. ,--.--.,--,--,--. ,--,--.`--' ,-|  |
   |  |   |  .-.  || .-. :    |  |,--.'-.  .-''-.  .-'|  || .-. :    |        || .-. :|  .--'|        |' ,-.  |,--.' .-. |
   |  |   |  | |  |\   --.    |  ||  |  |  |    |  |  |  |\   --.    |  |  |  |\   --.|  |   |  |  |  |\ '-'  ||  |\ `-' |
   `--'   `--' `--' `----'    `--'`--'  `--'    `--'  `--' `----'    `--`--`--' `----'`--'   `--`--`--' `--`--'`--' `---'
   “Never had she danced so beautifully; the sharp knives cut her feet, but she did not feel it, for the pain in her heart was far greater.”
   ― Hans Christian Andersen, The Little Mermaid
*/
function getSentences(theme) {
  var genSentSea = ['<p>'+ getWord(land[0]) + ' beams of '+ getWord(sky[7]) +'</p>'
  +'<p>'+'breaking through the ' + getWord(sea[0]) +'</p>'
  +'<p>'+'casting playful shadows up the walls'+'</p>'
  +'<p>'+'covered in climbing flowers'+'</p>'
  +'<p>'+'laughter filling the halls'+'</p>'
  +'<p>'+'days filled with wonder'+'</p>'
  +'<p>'+'my five '+ getWord(sea[5]) +'s and I'+'</p>'
  +'<p>'+'in the halls of our father’s castle'+'</p>'
  +'<p>'+'no cares about when we would die'+'</p>',

  '<p>'+'three hundred years'+'</p>'
  +'<p>'+'is a lifetime'+'</p>'
  +'<p>'+'before we turn into '+ getWord(sea[1]) +'</p>'
  +'<p>'+'my '+ getWord(sea[4]) +'\'s visit was shortened'+'</p>'
  +'<p>'+'she perished when I left the womb'+'</p>',

  '<p>'+'I live through my ' + getWord(sea[3]) + '\'s stories'+'</p>'
  +'<p>'+'about the great land '+ getWord(land[1])+'</p>'
  +'<p>'+'stories of '+ getWord(land[3])+'</p>'
  +'<p>'+'their ships and their cities'+'</p>'
  +'<p>'+'and ' + getWord(sea[2]) + ' that could fly through the ' + getWord(sky[0]) +'</p>'
  +'<p>'+'most magnificent of all was the flowers'+'</p>'
  +'<p>'+'and how they were covered in ' + getWord(land[2]) +'</p>'
  +'<p>'+ getWord(land[4]) +' trees making up forest'+'</p>'
  +'<p>'+'the home of the '+ getWord(sea[2]) +' who could '+ getWord(sea[11])+'</p>',

  '<p>'+'oh, I how I longed to be ' + getWord(land[6])+'</p>'
  +'<p>'+'to become ' + getWord(land[5]) + ' years of age'+'</p>'
  +'<p>'+'to swim to the surface'+'</p>'
  +'<p>'+'and see all the beauty'+'</p>'
  +'<p>'+'freeing myself from this cage'+'</p>'
  +'<p>'+'the wait was long being '+ getWord(sea[6]) +'</p>'
  +'<p>'+'and my '+ getWord(sea[5]) +'s could go before me'+'</p>'
  +'<p>'+'five years, all I had was their sightings'+'</p>'
  +'<p>'+'the wonders they all got to see'+'</p>',

  '<p>'+'the '+ getWord(land[7]) +' told about '+ getWord(sky[7]) +'s'+'</p>'
  +'<p>'+'from the cities'+'</p>'
  +'<p>'+'shining like '+ getWord(sky[1]) +'</p>'
  +'<p>'+'the next had witnessed a '+ getWord(sky[8]) +'</p>'
  +'<p>'+'the beauty filling her heart'+'</p>'
  +'<p>'+ getWord(sky[2]) + ' covered in gold'+'</p>'
  +'<p>'+'clouds with a '+ getWord(land[0]) +' – violet hue'+'</p>'
  +'<p>'+'swans flying into the '+ getWord(sky[4]) +'</p>'
  +'<p>'+'she tried to follow '+ getWord(land[13]) +' too'+'</p>'
  +'<p>'+'the third had swam to a river'+'</p>'
  +'<p>'+'and a forest she had seen'+'</p>'
  +'<p>'+'with '+ getWord(land[4]) +' trees, vine-coloured hills'+'</p>'
  +'<p>'+'and '+ getWord(land[14]) +'s placed in-between'+'</p>'
  +'<p>'+'the fourth was less adventurous'+'</p>'
  +'<p>'+'she stayed away from the shore'+'</p>'
  +'<p>'+'among rough waves, a marvellous place'+'</p>'
  +'<p>'+'only '+ getWord(sea[7]) +' for miles, miles and more'+'</p>'
  +'<p>'+'the fifth turned '+ getWord(land[5]) + ' in winter'+'</p>'
  +'<p>'+'she saw things no other had seen'+'</p>'
  +'<p>'+'enormous icebergs like diamonds'+'</p>'
  +'<p>'+'the '+ getWord(sea[8]) +' a deep coloured '+ getWord(land[4])+'</p>',

  '<p>'+'when darkness fell'+'</p>'
  +'<p>'+'painting my mind black'+'</p>'
  +'<p>'+'I would dream out the window'+'</p>'
  +'<p>'+'up through the dark '+ getWord(sea[7]) +' '+ getWord(sea[16]) +'s'+'</p>'
  +'<p>'+'looking'+'</p>'+'<p>'+'longing'+'</p>'+'<p>'+'listening'+'</p>'
  +'<p>'+'if I hold my breath'+'</p>'
  +'<p>'+'listened intensely'+'</p>'
  +'<p>'+'I swear I could hear'+'</p>'
  +'<p>'+'the '+ getWord(land[4]) +' trees calling'+'</p>',

  '<p>'+getWord(land[0]) +' flaming flowers'+'</p>'
  +'<p>'+'colours of the '+ getWord(sky[4]) +'</p>'
  +'<p>'+'rose-'+ getWord(land[0]) +' weeping willow'+'</p>'
  +'<p>'+'kissing its shadow'+'</p>'+'<p>'+'a handsome boy'+'</p>'
  +'<p>'+'carved in marble'+'</p>'
  +'<p>'+'found stranded in the '+ getWord(sea[17]) +'</p>'
  +'<p>'+'my sanctuary'+'</p>',

  '<p>'+'adorned like my '+ getWord(sea[5]) +'s before me'+'</p>'
  +'<p>'+ getWord(land[5]) +'</p>'
  +'<p>'+'a wreath of white lilies in my hair'+'</p>'
  +'<p>'+ getWord(land[5]) +'</p>'
  +'<p>'+'oysters fasten to my tail'+'</p>'
  +'<p>'+ getWord(land[5]) +'</p>'
  +'<p>'+'a sign of high rank'+'</p>'
  +'<p>'+ getWord(land[5]) +'</p>'
  +'<p>'+'to keep up appearances'+'</p>'
  +'<p>'+ getWord(land[5]) +'</p>'
  +'<p>'+'my '+ getWord(sea[3]) + ' told me'+'</p>'
  +'<p>'+ getWord(land[5]) +'</p>'
  +'<p>'+'when I complained about the pain'+'</p>'
  +'<p>'+ getWord(land[5]) +' '+ getWord(land[5]) +'</p>'
  +'<p>'+'I would shake it all off'+'</p>'
  +'<p>'+ getWord(land[5]) + ' ' + getWord(land[5]) + ' '+ getWord(land[5]) +'</p>'
  +'<p>'+'but I did not dare'+'</p>'
  +'<p>'+ getWord(land[5]) + ' ' + getWord(land[5]) + ' ' + getWord(land[5]) + ' ' + getWord(land[5]),

  '<p>'+'light as a bubble'+'</p>'
  +'<p>'+'I swam trough the '+ getWord(sea[16]) +'s'+'</p>'
  +'<p>'+'everything covered in '+ getWord(land[0]) +'</p>'
  +'<p>'+'a ship'+'</p>'+'<p>'+'Filled with '+ getWord(land[15]) +' and singing'+'</p>'
  +'<p>'+'hundreds of lanterns were lit'+'</p>'+'<p>'+'through a window'+'</p>'
  +'<p>'+'I saw '+ getWord(land[9]) +'</p>'
  +'<p>'+'dark eyed'+'</p>'
  +'<p>'+'and handsome'+'</p>'
  +'<p>'+'a '+ getWord(land[11]) +'</p>'
  +'<p>'+'fireworks'+'</p>',

  '<p>'+'A storm built up'+'</p>'
  +'<p>'+'wild and powerful'+'</p>'
  +'<p>'+'but no enemy of mine'+'</p>'
  +'<p>'+'but the ship she clamed'+'</p>'
  +'<p>'+'split it in half'+'</p>'
  +'<p>'+'the young '+ getWord(land[11]) +'</p>'
  +'<p>'+'she fed to the '+ getWord(sea[8])+'</p>',

  '<p>'+'men cannot live'+'</p>'
  +'<p>'+'in the '+ getWord(sea[14]) +'’s realm'+'</p>'
  +'<p>'+'many have died before '+ getWord(land[9]) +'</p>'
  +'<p>'+'I fought the waves'+'</p>'+'<p>'+'reclaimed his life'+'</p>'
  +'<p>'+'his life the '+ getWord(sea[8]) +' would not win'+'</p>',

  '<p>'+'with the '+ getWord(sky[4]) +'</p>'
  +'<p>'+'came life'+'</p>'+'<p>'+ getWord(land[0]) +' and bright'+'</p>'
  +'<p>'+'I kissed '+ getWord(land[9]) +'</p>'
  +'<p>'+'hoped he would live'+'</p>',

  '<p>'+'my mind was clouded'+'</p>'
  +'<p>'+'I would revisit the place'+'</p>'+
  '<p>'+'where I left '+ getWord(land[9]) +'</p>'
  +'<p>'+'each time'+'</p>'
  +'<p>'+'to find only '+ getWord(sea[17])+'</p>',

  '<p>'+'I told no one'+'</p>'
  +'<p>'+'my garden overgrew'+'</p>'
  +'<p>'+'became wilderness'+'</p>'
  +'<p>'+'entangled branches'+'</p>'
  +'<p>'+'casting gloomy shadows'+'</p>'
  +'<p>'+'only the '+ getWord(land[10]) +' stayed the same'+'</p>',

  '<p>'+'the weight got to heavy'+'</p>'
  +'<p>'+'to carry alone'+'</p>'
  +'<p>'+'my '+ getWord(sea[5]) +'s I had to tell'+'</p>'
  +'<p>'+'words they had heard'+'</p>'
  +'<p>'+'about a '+ getWord(land[11]) +'</p>'
  +'<p>'+'and his castle'+'</p>'
  +'<p>'+'pale glistening, golden stone'+'</p>'
  +'<p>'+'lofty windows of '+ getWord(sky[6]) +' glass'+'</p>'
  +'<p>'+ getWord(land[10]) +'s that seemed alive'+'</p>'
  +'<p>'+'he was alive'+'</p>',

  '<p>'+'three hundred years'+'</p>'
  +'<p>'+'is a lifetime'+'</p>'
  +'<p>'+'before we turn into '+ getWord(sea[1]) +'</p>'
  +'<p>'+'men’s lifetime is even shorter'+'</p>'
  +'<p>'+'before they leave their home'+'</p>'
  +'<p>'+'but after their bodies'+'</p>'
  +'<p>'+'has turned into clay'+'</p>'
  +'<p>'+'they rise through the ' + getWord(sky[0]) +'</p>'
  +'<p>'+'for a new place to stay'+'</p>'
  +'<p>'+'they have an '+ getWord(land[12])+'</p>',

  '<p>'+getWord(sea[14]) +'s and '+ getWord(sea[15]) +' where dancing'+'</p>'
  +'<p>'+'singing entrancing '+ getWord(sea[12]) +'s'+'</p>'
  +'<p>'+'for a moment my heart was happy'+'</p>'
  +'<p>'+'I have the loveliest '+ getWord(sea[13]) +' of '+ getWord(land[13]) +' all'+'</p>'
  +'<p>'+'but my thought was always drifting'+'</p>'
  +'<p>'+'to the '+ getWord(land[3]) + ' and the world '+ getWord(land[1]) +'</p>'
  +'<p>'+'there must be a way'+'</p>'
  +'<p>'+'to join them'+'</p>'
  +'<p>'+'the '+ getWord(sea[8]) +' has grown so small'+'</p>'
  +'<p>'+'there is no room for me'+'</p>'+'<p>'+ getWord(sea[9]) +'</p>'
  +'<p>'+'anymore'+'</p>',

  '<p>'+'I was fearless'+'</p>'
  +'<p>'+'still filled with fear'+'</p>'
  +'<p>'+'down amongst everything dead'+'</p>'
  +'<p>'+'the witch gave me an offer'+'</p>'
  +'<p>'+'a choice to get everything I wanted'+'</p>'
  +'<p>'+'to win the '+ getWord(land[11]) +'’s heart'+'</p>'
  +'<p>'+'and with '+ getWord(land[9]) +' an '+ getWord(land[12]) +'</p>'
  +'<p>'+'but the price was high'+'</p>'
  +'<p>'+'my '+ getWord(sea[13]) +' she would take'+'</p>'
  +'<p>'+'and my tail she would split in two'+'</p>'
  +'<p>'+'so I could walk amongst '+ getWord(land[8]) +'s'+'</p>'
  +'<p>'+'always in pain'+'</p>'
  +'<p>'+'never could I return to the '+ getWord(sea[8]) +'</p>'
  +'<p>'+'never to be a '+ getWord(sea[14]) +' again'+'</p>'];

  var genSentLand = ['<p>'+'under the '+ getWord(sky[5]) +'</p>'
  +'<p>'+'my new life began'+'</p>'
  +'<p>'+'poison on my lips'+'</p>'
  +'<p>'+'pain'+'</p>'+'<p>'+'I was now like them'+'</p>'
  +'<p>'+'all I longed to be'+'</p>'+'<p>'+'darkness'+'</p>',

  '<p>'+'the '+ getWord(sky[4]) +' coloured the land '+ getWord(land[0]) +'</p>'
  +'<p>'+'my eyes met his'+'</p>'+'<p>'+'Who are you'+'</p>'
  +'<p>'+'he asked'+'</p>'
  +'<p>'+'I could not reply'+'</p>'
  +'<p>'+'only my eyes spoke'+'</p>',

  '<p>'+'he took my hand and led me into the '+ getWord(land[14]) +'</p>'
  +'<p>'+'dressed me in silk and muslin'+'</p>'
  +'<p>'+'I was the loveliest person in the '+ getWord(land[14]) +'</p>'
  +'<p>'+'but as they '+ getWord(sea[10]) +'</p>'
  +'<p>'+'I could not '+ getWord(sea[11]) +' with them'+'</p>',

  '<p>'+'I knew the price'+'</p>'
  +'<p>'+'my '+ getWord(sea[12]) +' now only existed inside me'+'</p>'
  +'<p>'+'but I moved to the '+ getWord(land[15]) +'</p>'
  +'<p>'+'like seaweed dancing in the '+ getWord(sea[16]) +'</p>'
  +'<p>'+'gracefully'+'</p>'+'<p>'+'painfully'+'</p>',

  '<p>'+'he fell for my charm'+'</p>'
  +'<p>'+'the foundling'+'</p>'
  +'<p>'+'the '+ getWord(land[11]) +' would keep me with '+ getWord(land[9]) +'</p>'
  +'<p>'+'always'+'</p>'
  +'<p>'+'at night I would sleep '+'</p>'
  +'<p>'+'on a velvet pillow'+'</p>'
  +'<p>'+'outside his door'+'</p>'
  +'<p>'+'to be close'+'</p>',

  '<p>'+'climb mountains'+'</p>'
  +'<p>'+'high above the clouds'+'</p>'
  +'<p>'+'ride horses'+'</p>'
  +'<p>'+'through '+ getWord(land[2]) +'ed woods'+'</p>'
  +'<p>'+'bleeding feet'+'</p>'
  +'<p>'+'but always smiles'+'</p>',

  '<p>'+'under the '+ getWord(sky[1]) +'</p>'
  +'<p>'+'I would sit by the '+ getWord(sea[8]) +'</p>'
  +'<p>'+'ease my burning feet in the cold '+ getWord(sea[16]) +'</p>'
  +'<p>'+'remembering my old life'+'</p>'
  +'<p>'+'my '+ getWord(sea[5]) +'s would come'+'</p>'
  +'<p>'+'my father'+'</p>'
  +'<p>'+'and '+ getWord(sea[3]) +'</p>'
  +'<p>'+'with '+ getWord(sea[12]) +'s of agony'+'</p>'
  +'<p>'+'no longer could I be with them'+'</p>',

  '<p>'+'the '+ getWord(land[11]) +'\'s love I won'+'</p>'
  +'<p>'+'but never to be his queen'+'</p>'
  +'<p>'+'he loved me'+'</p>'
  +'<p>'+'like a child'+'</p>'
  +'<p>'+'never could I tell '+ getWord(land[9]) +'</p>'
  +'<p>'+'I was the one who saved '+ getWord(land[9]) +'</p>'
  +'<p>'+'and now I need '+'</p>'
  +'<p>'+ getWord(land[9]) +' to save me'+'</p>',

  '<p>'+'the '+ getWord(land[11]) +' was to wed'+'</p>'
  +'<p>'+'I was not his bride to be'+'</p>'
  +'<p>'+'a princess had been chosen'+'</p>'
  +'<p>'+'and beautiful is she'+'</p>'
  +'<p>'+'skin so soft and '+ getWord(sky[6]) +'</p>'
  +'<p>'+'long, dark lashes'+'</p>'
  +'<p>'+'flaming hair'+'</p>'
  +'<p>'+'he thought she was the one who saved '+ getWord(land[9]) +'</p>'
  +'<p>'+'that faithful day at '+ getWord(sea[0]) +'</p>'
  +'<p>'+'I had no '+ getWord(sea[13]) +' to tell '+ getWord(land[9]) +'</p>'
  +'<p>'+'that the princess that was me',

  '<p>'+'my heart was breaking '+'</p>'
  +'<p>'+'to '+ getWord(sea[1]) +' I would return'+'</p>'
  +'<p>'+'his marriage was my funeral'+'</p>'
  +'<p>'+'my last day upon earth'+'</p>'
  +'<p>'+'all the pain I had suffered'+'</p>'
  +'<p>'+'was paling in compare'+'</p>'
  +'<p>'+'my heart'+'</p>'
  +'<p>'+'beyond repair'+'</p>',

  '<p>'+'my '+ getWord(sea[5]) +'s sold their hair'+'</p>'
  +'<p>'+'to the witch down in the '+ getWord(sea[8]) +'</p>'
  +'<p>'+'the '+ getWord(land[11]) +' I had to kill'+'</p>'
  +'<p>'+'to turn back into me'+'</p>',

  '<p>'+'with the '+ getWord(land[16]) +' in my hand'+'</p>'
  +'<p>'+'a choice to be made'+'</p>'
  +'<p>'+'I kissed his pretty face'+'</p>'
  +'<p>'+'I could not end his life'+'</p>'
  +'<p>'+'the cost of that was mine'+'</p>'];

  var genSentSky = ['<p>'+'the waves embraced me'+'</p>'
  +'<p>'+'my body slowly dissolving into ' + getWord(sea[1]) +'</p>'
  +'<p>'+'in the moments before it all turned dark'+'</p>'
  +'<p>'+'there was '+ getWord(sky[7]) +'</p>'
  +'<p>'+'a beam of warmth and kindness'+'</p>'
  +'<p>'+'upon the cold '+ getWord(sea[8]) +' '+ getWord(sea[1]) +'</p>'
  +'<p>'+'I was not dead'+'</p>'
  +'<p>'+'yet not fully alive'+'</p>',

  '<p>'+'the grasp of death released me'+'</p>'
  +'<p>'+'this was yet not my time'+'</p>'
  +'<p>'+'inside the beam of '+ getWord(sky[7]) +'</p>'
  +'<p>'+'they would rise'+'</p>'
  +'<p>'+'transparent shapes'+'</p>'
  +'<p>'+ getWord(sea[13]) +'s like '+ getWord(land[15]) +'</p>'
  +'<p>'+'unlike anything seen'+'</p>'
  +'<p>'+'at '+ getWord(sea[8]) +' or on land'+'</p>',

  '<p>'+'floating'+'</p>'
  +'<p>'+'I was floating like them'+'</p>'
  +'<p>'+ getWord(sky[7]) +' as ' + getWord(sky[0]) +'</p>'
  +'<p>'+'I left the '+ getWord(sea[1]) +'</p>'
  +'<p>'+'closer and closer to '+ getWord(sky[2])+'</p>',

  '<p>'+'who are you'+'</p>'
  +'<p>'+'I asked'+'</p>'
  +'<p>'+'confused'+'</p>'
  +'<p>'+'surprised'+'</p>'
  +'<p>'+'I had a '+ getWord(sea[13]) +'</p>'
  +'<p>'+'a '+ getWord(sea[13]) +' like them'+'</p>'
  +'<p>'+'daughters of ' + getWord(sky[0]) +'</p>'
  +'<p>'+'they replied'+'</p>',

  '<p>'+'your suffering and loyalty'+'</p>'
  +'<p>'+'have raised you up into the realm of '+ getWord(sky[3]) +' spirits'+'</p>'
  +'<p>'+'as a '+ getWord(sea[14]) +'</p>'
  +'<p>'+'you did not win the love of a '+ getWord(land[8]) +' being'+'</p>'
  +'<p>'+'this was not in your power'+'</p>'
  +'<p>'+'they said'+'</p>'
  +'<p>'+'we do not have an '+ getWord(land[12]) +' either'+'</p>'
  +'<p>'+'but we can earn one'+'</p>'
  +'<p>'+'three hundred year'+'</p>'
  +'<p>'+'of doing good'+'</p>'
  +'<p>'+'and we shall rise to the kingdom of '+ getWord(sky[9])+'</p>',

  '<p>'+'we visit children'+'</p>'
  +'<p>'+'smiles of love shortens our days of trial'+'</p>'
  +'<p>'+'tears of sorrow and each tear adds a day to the time of our trial'+'</p>'
  +'<p>'+'we carry the '+ getWord(land[2]) +' of flowers through the ' + getWord(sky[0]) +'</p>'
  +'<p>'+'bringing freshness and healing balm wherever we go'+'</p>'
  +'<p>'+'we bring cool breezes to places'+'</p>'
  +'<p>'+'where there is to hot for '+ getWord(land[8]) +'s to exist'+'</p>',

  '<p>'+'and for the first time'+'</p>'
  +'<p>'+'eyes '+ getWord(sky[6]) +' and bright'+'</p>'
  +'<p>'+'I cried.'];

  //Contracts all sentenses to one array
  var genSentAll = [].concat(genSentSea, genSentSky, genSentLand);

  //Selects sentences based on theme chosen by cookies
  if (theme == 'land') {
      return genSentLand[getRandomNumber(genSentLand.length)];
  } else if (theme == 'sea') {
      return genSentSea[getRandomNumber(genSentSea.length)];
  } else if (theme == 'sky') {
      return genSentSky[getRandomNumber(genSentSky.length)];
  } else {
      return genSentAll[getRandomNumber(genSentAll.length)];
  }
}
