var express = require('express');
var router = express.Router();

var teams = [
  {
    city: 'Boston',
    name: 'Celtics',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Bos.png'
  },
    {
    city: 'Brooklyn',
    name: 'Nets',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/BKN.png'
  },
    {
    city: 'New York',
    name: 'Knicks',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/NY.png'
  },
    {
    city: 'Philadelphia',
    name: '76ers',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Phi.png'
  },
    {
    city: 'Toronto',
    name: 'Raptors',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Tor.png'
  },
  {
    city: 'Chicago',
    name: 'Bulls',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Chi.png'
  },
  {
    city: 'Cleveland',
    name: 'Cavaliers',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Cle.png'
  },
  {
    city: 'Detriot',
    name: 'Pistons',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Det.png'
  },
  {
    city: 'Indiana',
    name: 'Pacers',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Ind.png'
  },
  {
    city: 'Milwaukee',
    name: 'Bucks',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Mil.png'
  },
  {
    city: 'Atlanta',
    name: 'Hawks',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Atl.png'
  },
    {
    city: 'Charlotte',
    name: 'Hornets',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Cha.png'
  },
  {
    city: 'Miami',
    name: 'Heat',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Mia.png'
  },
  {
    city: 'Orlando',
    name: 'Magic',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Orl.png'
  },
  {
    city: 'Washington',
    name: 'Wizards',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Was.png'
  },
  {
    city: 'Golden State',
    name: 'Warriors',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/GS.png'
  },
  {
    city: 'Los Angeles',
    name: 'Clippers',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/LAC.png'
  },
  {
    city: 'Los Angeles',
    name: 'Lakers',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/LAL.png'
  },
  {
    city: 'Phoenix',
    name: 'Suns',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Pho.png'
  },
  {
    city: 'Sacramento',
    name: 'Kings',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Sac.png'
  },
  {
    city: 'Dallas',
    name: 'Mavericks',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Dal.png'
  },
  {
    city: 'Houston',
    name: 'Rockets',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Hou.png'
  },
  {
    city: 'Memphis',
    name: 'Grizzlies',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Mem.png'
  },
  {
    city: 'New Orleans',
    name: 'Pelicans',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/NO.png'
  },
  {
    city: 'San Antonio',
    name: 'Spurs',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/SA.png'
  },
  {
    city: 'Denver',
    name: 'Nuggets',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Den.png'
  },
  {
    city: 'Minnesota',
    name: 'Timberwolves',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Min.png'
  },
  {
    city: 'Oklahoma City',
    name: 'Thunder',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Okc.png'
  },
  {
    city: 'Portland',
    name: 'Trailblazers',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/Por.png'
  },
  {
    city: 'Utah',
    name: 'Jazz',
    logo: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/UTAH.png'
  }
];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/teams', function(req, res) {
  console.log("In Teams");
  res.send(teams);
});

module.exports = router;
